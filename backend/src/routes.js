import { Router } from 'express';

const routes = new Router();
// const userController = require('../controllers/userController.js');

// routes.get('/', userController.read); // getALL
// routes.get('/:id', userController.show); // findByID
// routes.post('/', userController.create); // create
// routes.put('/:id', userController.update); // update
// routes.delete('/:id', userController.destroy); // delete
routes.get('/', (req, res) => res.json({ message: 'Hello my friend!' }));
export default routes;
