import Yup from 'yup';
import Team from '../models/Team';

class TeamController {
  async index(req, res) {
    const teams = await Team.findAll();
    return res.json({ teams });
  }
}
export default new TeamController();
