import Sequelize, { Model } from 'sequelize';

class Team extends Model {
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
      through: 'UserTeam',
      foreignKey: 'team_id',
      as: 'members',
    });
    this.belongsTo(models.User, {
      foreignKey: 'admin_id',
      as: 'admin',
    });
  }
}

export default Team;
