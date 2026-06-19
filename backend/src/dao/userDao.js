const {
  Timesheet,
  Screen,
  Theater,
  Schedule,
  Movie,
  Booking,
  Rating,
  City,
} = require("../models");

exports.getMovies = async () => {
  return await Movie.findAll();
};

const { Op } = require("sequelize");

exports.getPublicSchedule = async () => {
  const today = new Date().toISOString().split("T")[0];

  const next7Days = new Date();
  next7Days.setDate(next7Days.getDate() + 7);

  return await Schedule.findAll({
    where: {
      date: {
        [Op.between]: [today, next7Days.toISOString().split("T")[0]],
      },
    },
    include: [
      {
        model: Movie,
        as: "movie",
        attributes: ["id", "Name", "Duration", "language", "genre"],
      },
      {
        model: Timesheet,
        as: "timesheet",
        attributes: ["id", "startTime", "endTime"],
      },
      {
        model: Screen,
        as: "screen",
        attributes: ["id", "name", "capacity"],
        include: [
          {
            model: Theater,
            as: "theater",
            attributes: ["id", "name", "address"],
            include: [
              {
                model: City,
                as: "city",
                attributes: ["id", "Name"],
              },
            ],
          },
        ],
      },
    ],
    order: [["date", "ASC"]],
  });
};

exports.booking = async (data) => {
  return await Booking.create(data);
};

exports.rating = async (data) => {
  return await Rating.create(data);
};

exports.getAllCities = async () => {
  return await City.findAll();
};

exports.getAllTheater = async () => {
  return await Theater.findAll({
    attributes: ["id", "name", "address", "city_id"],
    include: [
      {
        model: City,
        as: "city",
        attributes: ["id", "Name"],
      },
    ],
  });
};
