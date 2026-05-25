// const { City } = require(".");

module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define("City", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    State: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "cities",
    timestamps: true
  }
);
  return City;
};
