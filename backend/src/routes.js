import { Router } from 'express';
import UserController from './app/controllers/UserController';
import TeamController from './app/controllers/TeamController';
import SessionController from './app/controllers/SessionController';

import TeamUserController from './app/controllers/TeamUserController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello my friend!' }));
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/teams', TeamController.index);
routes.post('/teams', TeamController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.get('/teams', TeamController.index);
routes.put('/teams/:teamId', TeamController.update);
routes.delete('/teams/:teamId', TeamController.destroy);

routes.post('/teams/:teamId/users/:userId', TeamUserController.store);
routes.delete('/teams/:teamId/users/:userId', TeamUserController.destroy);
export default routes;
