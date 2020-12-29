import Sequelize, { Model } from 'sequelize';

class Team extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        admin_id: Sequelize.INTEGER,
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
  }
}

export default Team;
