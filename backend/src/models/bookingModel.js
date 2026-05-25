"use strict";

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      schedule_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seats_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("confirmed", "cancelled"),
        defaultValue: "confirmed",
      },
    },
    {
      tableName: "bookings",
      timestamps: true,
      //   underscored: true,
    },
  );
  Booking.associate = (models) => {
    Booking.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
    Booking.belongsTo(models.Schedule, {
      foreignKey: "schedule_id",
      as: "schedule",
    });
  };
  return Booking;
};
