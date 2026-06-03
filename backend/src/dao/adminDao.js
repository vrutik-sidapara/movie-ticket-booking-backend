const { Movie, Theater, Schedule, Timesheet, Screen } = require("../models");

exports.movieAdd = async (data) => {
  return await Movie.create(data);
};

exports.getMovies = async () => {
  const movies = await Movie.findAll();
  return movies.map((m) => m.toJSON());
};

exports.updateMovie = async (id, data) => {
  const [updated] = await Movie.update(data, { where: { id } });
  if (!updated) throw new Error("Movie not found");
  return await Movie.findByPk(id);
};

exports.deleteMovie = async (id) => {
  const deleted = await Movie.destroy({ where: { id } });
  if (!deleted) throw new Error("Movie not found");
  return deleted;
};

exports.getTheaterById = async (id) => {
  const theater = await Theater.findByPk(id);
  return theater ? theater.toJSON() : null;
};

exports.getTheater = async () => {
  const theater = await Theater.findOne();
  return theater ? theater.toJSON() : null;
};

exports.getAllTheaters = async () => {
  const theaters = await Theater.findAll();
  return theaters.map((t) => t.toJSON());
};

exports.updateTheater = async (id, data) => {
  const [updated] = await Theater.update(data, {
    where: { id },
  });

  if (!updated) throw new Error("Theater not found");

  return updated;
};

exports.createScreen = async (data) => {
  return await Screen.create(data);
};

exports.getScreen = async () => {
  return await Screen.findAll({
    include: [
      {
        model: Theater, // ✅ Theater via Screen (correct path)
        as: "theater",
        attributes: ["id", "name", "address"],
      },
    ],
  });
};

exports.createSchedule = async (data) => {
  return await Schedule.create(data);
};

exports.getSchedule = async () => {
  return await Schedule.findAll({
    include: [
      {
        model: Movie,
        as: "movie",
        attributes: ["id", "Name", "Duration", "language", "genre"], // ✅ match your Movie model fields
      },
      {
        model: Timesheet,
        as: "timesheet",
        attributes: ["id", "startTime", "endTime"], // ✅ match your Timesheet model fields
      },
      {
        model: Screen,
        as: "screen",
        attributes: ["id", "name", "capacity"],
        include: [
          {
            model: Theater, // ✅ Theater via Screen (correct path)
            as: "theater",
            attributes: ["id", "name", "address"],
          },
        ],
      },
    ],
  });
};

exports.createTimesheet = async (data) => {
  return await Timesheet.create(data);
};

exports.getTimesheet = async () => {
  return await Timesheet.findAll();
};