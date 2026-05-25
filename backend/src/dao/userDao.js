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

exports.getPublicSchedule = async () => {
  return await Schedule.findAll({
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
        attributes: ["id", "name", "capacity", "city_id"],
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
