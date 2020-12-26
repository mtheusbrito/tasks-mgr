const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController.js');

router.get('/', userController.read); // getALL
router.get('/:id', userController.show); // findByID
router.post('/', userController.create); // create
router.put('/:id', userController.update); // update
router.delete('/:id', userController.destroy); // delete

module.exports = router;
