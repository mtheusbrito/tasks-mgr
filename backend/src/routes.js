import { Router } from 'express';
import avatarsMiddleware from 'adorable-avatars';
import UserController from './app/controllers/UserController';
import TeamController from './app/controllers/TeamController';
import SessionController from './app/controllers/SessionController';

import TeamUserController from './app/controllers/TeamUserController';
import ProjectController from './app/controllers/ProjectController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello my friend!' }));
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.use('/myAvatar', avatarsMiddleware);
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/teams', TeamController.index);
routes.post('/teams', TeamController.store);
routes.put('/teams/:teamId', TeamController.update);
routes.delete('/teams/:teamId', TeamController.destroy);

routes.post('/teams/:teamId/users/:userId', TeamUserController.store);
routes.delete('/teams/:teamId/users/:userId', TeamUserController.destroy);

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.get('/projects/:projectId', ProjectController.show);

export default routes;
