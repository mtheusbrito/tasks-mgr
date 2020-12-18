const db = require('../models/index.js')

exports.create = async function(req, res){ 
    try {
      const user = await db.user.create(req.body);
      return res.json(user)
    } 
    catch (error) {
      console.error(error)
    }
  }
  exports.read = async function (req, res){
    
    try {
      const users = await db.user.findAll();
      return res.json(users)
    } 
    catch (error) {
      console.error(error)
    }
  }
  exports.update = async function(req, res) {
    try {
      let user = await db.user.findByPk(req.params.id)
      user = await user.update(req.body)
      return res.json(user)
    } 
    catch (error) {
      console.error(error)
    }
  }
  exports.destroy = async function(req, res) {
    try {
      let user = await db.user.findByPk(req.params.id)
      user = await user.destroy(req.body)
      return res.json(user)
    } 
    catch (error) {
      console.error(error)
    }
  }
  exports.show = async function(req, res) {
    try {
      let user = await db.user.findByPk(req.params.id)
      
      return res.json(user)
    } 
    catch (error) {
      console.error(error)
    }
  }