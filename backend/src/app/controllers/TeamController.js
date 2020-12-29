import * as Yup from 'yup';
import Team from '../models/Team';

class TeamController {
  async index(req, res) {
    const teams = await Team.findAll();
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
    return res.json(team);
  }
}
export default new TeamController();
