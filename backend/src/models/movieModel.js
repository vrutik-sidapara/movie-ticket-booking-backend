"use strict";

module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "movies",
      timestamps: true,
    },
  );

  Movie.associate = (models) => {
    // ✅ movieId is the column name in schedules table
    Movie.hasMany(models.Schedule, {
      foreignKey: "movieId", // was "movie_id" — wrong
      as: "schedules",
    });

    // ✅ Add ratings association
    Movie.hasMany(models.Rating, {
      foreignKey: "movie_id",
      as: "ratings",
    });
  };

  return Movie;
};
