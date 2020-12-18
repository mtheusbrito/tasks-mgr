'use strict';
const {  Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: DataTypes.STRING,
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    token_pwd_reset: DataTypes.STRING,
    token_timeout: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};

//QUERIES SEQUELIZE MYSQL
//
//CREATE DB: npx sequelize-cli db:create
//CREATE MODEL/MIGRATION: npx sequelize-cli model:generate --name user --attributes first_name:string,last_name:string,password:string,nickname:string,email:string,token_pwd_reset:string,token_timeout:string
//SYNC USER MODEL:  npx sequelize-cli db:migrate