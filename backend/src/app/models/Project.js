import Sequelize, { Model } from 'sequelize';

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      through: 'UserProject',
      foreignKey: 'project_id',
      as: 'involveds',
    });
    this.belongsTo(models.Team, {
      foreignKey: 'team_id',
      as: 'team',
    });
    this.belongsTo(models.User, {
      foreignKey: 'admin_id',
      as: 'admin',
    });
  }
}

export default Project;
