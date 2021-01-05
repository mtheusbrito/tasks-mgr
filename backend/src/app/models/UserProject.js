import Sequelize, { Model } from 'sequelize';

class UserProject extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        project_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
    this.belongsTo(models.Project, {
      foreignKey: 'project_id',
    });
  }
}

export default UserProject;
