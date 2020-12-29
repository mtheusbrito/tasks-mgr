import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();
// const userController = require('../controllers/userController.js');

// routes.get('/', userController.read); // getALL
// routes.get('/:id', userController.show); // findByID
// routes.post('/', userController.create); // create
// routes.put('/:id', userController.update); // update
// routes.delete('/:id', userController.destroy); // delete
routes.get('/', (req, res) => res.json({ message: 'Hello my friend!' }));
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
export default routes;
