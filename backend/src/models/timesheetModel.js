"use strict";

module.exports = (sequelize, DataTypes) => {
  const Timesheet = sequelize.define(
    "Timesheet",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      startTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },

      endTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      tableName: "timesheets",
      timestamps: true,
    },
  );

  Timesheet.associate = (models) => {
    // ✅ Timesheet has many Schedules (one time slot used in many shows)
    Timesheet.hasMany(models.Schedule, {
      foreignKey: "timesheetId", // column in schedules table
      as: "schedules",
    });
  };

  return Timesheet;
};
