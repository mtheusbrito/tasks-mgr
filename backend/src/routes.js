import { Router } from 'express';
import UserController from './app/controllers/UserController';
import TeamController from './app/controllers/TeamController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello my friend!' }));
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.get('/teams', TeamController.index);
export default routes;
