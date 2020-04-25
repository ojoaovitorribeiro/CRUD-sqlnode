const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.Tech, {
      foreignKey: "user_id",
      through: "user_tech",
      as: "techs",
    });
  }
  static associate(models) {
    this.hasMany(models.Address, {
      foreignKey: "user_id",
      as: "addresses",
    });
  }
}
module.exports = User;
