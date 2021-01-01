import Team from '../models/Team';
import User from '../models/User';
import UserTeam from '../models/UserTeam';

class TeamUserController {
  async store(res, req) {
    const { teamId, userId } = req.params;
    const team = await Team.findOne({ where: { id: teamId } });
    if (!team) {
      return res.status(400).json({ error: 'Nenhuma equipe foi encontrada!' });
    }
    if (team.admin_id !== req.userId) {
      return res.status(401).json('Operação não permitida!');
    }
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(400).json({ error: 'Nenhum usuario foi encontrado!' });
    }
    const userTeamExist = await UserTeam.findOne({
      where: { user_id: userId, team_id: teamId },
    });
    if (userTeamExist) {
      return res
        .status(400)
        .json({ error: 'Usuário ja foi adicionado na equipe!' });
    }
    const userTeam = await UserTeam.create({
      user_id: userId,
      team_id: teamId,
    });
    return res.json({ userTeam });
  }

  async destroy(res, req) {
    const { teamId, userId } = req.params;
    const team = await Team.findOne({ where: { id: teamId } });
    if (!team) {
      return res.status(400).json({ error: 'Nenhuma equipe foi encontrada!' });
    }
    if (team.admin_id !== req.userId) {
      return res.status(401).json('Operação não permitida!');
    }
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(400).json({ error: 'Nenhum usuario foi encontrado!' });
    }
    const userTeamExist = await UserTeam.findOne({
      where: { user_id: userId, team_id: teamId },
    });
    if (!userTeamExist) {
      return res
        .status(400)
        .json({ error: 'Usuario não faz parte desta  equipe!' });
    }
    await userTeamExist.destroy();

    return res.status(204).send();
  }
}
export default new TeamUserController();
