import * as Yup from 'yup';
import Project from '../models/Project';
import User from '../models/User';
import UserProject from '../models/UserProject';

class ProjectController {
  async index(req, res) {
    const projects = await Project.findAll();
    return res.json(projects);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      team_id: Yup.integer(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na validação de campos!' });
    }
    // const { admin_id } = req.userId;
    const { name, team_id } = req.body;
    const project = await Project.create({
      name,
      team_id,
      admin_id: req.userId,
    });

    if (project) {
      await UserProject.create({
        user_id: req.userId,
        project_id: project.id,
      });
    }
    return res.json(project);
  }

  async show(req, res) {
    const { id } = req.params.projectId;

    const project = await Project.findOne({
      where: { id },
      attributes: ['id', 'name'],
      include: [
        { model: User, attributes: ['id', 'name', 'email'], as: 'admin' },
        {
          model: User,
          attributes: ['id', 'name', 'email'],
          through: { attributes: [] },
          as: 'involveds',
        },
      ],
    });
    if (!project) {
      return res.status(400).json({ error: 'Nehum projeto foi encontrado!' });
    }
    return res.json({ project });
  }
}

export default new ProjectController();
