"use strict";

module.exports = (sequelize, DataTypes) => {
  const Theater = sequelize.define(
    "Theater",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "cities",
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "theaters",
      timestamps: true,
    },
  );

  Theater.associate = (models) => {
    // ✅ screens.theaterId references theaters.id
    Theater.hasMany(models.Screen, {
      foreignKey: "theaterId",
      as: "screens",
    });

    // ✅ theaters.city_id references cities.id
    Theater.belongsTo(models.City, {
      foreignKey: "city_id",
      as: "city",
    });
  };

  return Theater;
};
