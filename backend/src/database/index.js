import Sequelize from 'sequelize';
import User from '../app/models/User';
import Team from '../app/models/Team';
import UserTeam from '../app/models/UserTeam';
import Project from '../app/models/Project';
import UserProject from '../app/models/UserProject';
import databaseConfig from '../config/database';

const models = [User, Team, UserTeam, Project, UserProject];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
