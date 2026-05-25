"use strict";

module.exports = (sequelize, DataTypes) => {
  const Screen = sequelize.define(
    "Screen",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      theaterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "screens",
      timestamps: true,
    },
  );

  // Association
  Screen.associate = (models) => {
    Screen.belongsTo(models.Theater, {
      foreignKey: "theaterId",
      as: "theater",
    });
    // ✅ Add this
    Screen.hasMany(models.Schedule, {
      foreignKey: "screenId",
      as: "schedules",
    });
  };

  return Screen;
};
