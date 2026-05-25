"use strict";

module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define(
    "Rating",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1, max: 5 },
      },
      review: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: "ratings",
      timestamps: true,
      //   underscored: true,
    },
  );
  Rating.associate = (models) => {
    Rating.belongsTo(models.Movie, {
      foreignKey: "movie_id",
      as: "movie",
    });
    Rating.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  };
  return Rating;
};
