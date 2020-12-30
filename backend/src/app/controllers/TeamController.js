import * as Yup from 'yup';

import Team from '../models/Team';
import User from '../models/User';
import UserTeam from '../models/UserTeam';

class TeamController {
  async index(req, res) {
    const teams = await Team.findAll({
      attributes: ['id', 'name'],
      include: [
        { model: User, attributes: ['id', 'name', 'email'], as: 'admin' },
        {
          model: User,
          attributes: ['id', 'name', 'email'],
          through: { attributes: [] },
          as: 'members',
        },
      ],
    });
    return res.json({ teams });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na validação de campos!' });
    }
    const { name } = req.body;
    const team = await Team.create({
      name,
      admin_id: req.userId,
    });
    if (team) {
      await UserTeam.create({
        user_id: team.admin_id,
        team_id: team.id,
      });
    }
    return res.json(team);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na validação de campos!' });
    }

    const team = await Team.findOne({ where: { id: req.params.id } });
    if (!team) {
      return res.status(400).json('Equipe não encontrada!');
    }
    if (team.admin_id !== req.userId) {
      return res.status(401).json('Operação não permitida!');
    }
    const { id, name } = await team.update(req.body);
    return res.json({ id, name });
  }
}
export default new TeamController();
