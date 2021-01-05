import Sequelize, { Model } from 'sequelize';

class UserTeam extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        team_id: Sequelize.INTEGER,
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
    this.belongsTo(models.Team, {
      foreignKey: 'team_id',
    });
  }
}

export default UserTeam;
