"use strict";

module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define(
    "Schedule",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      screenId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      timesheetId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "schedules",
      timestamps: true,
    },
  );

  // 🔥 Associations
  Schedule.associate = (models) => {
    Schedule.belongsTo(models.Movie, {
      foreignKey: "movieId",
      as: "movie",
    });

    Schedule.belongsTo(models.Timesheet, {
      foreignKey: "timesheetId",
      as: "timesheet",
    });

    Schedule.belongsTo(models.Screen, {
      foreignKey: "screenId",
      as: "screen",
    });

    Schedule.hasMany(models.Booking, {
      foreignKey: "schedule_id",
      as: "bookings",
    });
  };

  return Schedule;
};
