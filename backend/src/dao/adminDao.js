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
  const today = new Date().toISOString().split("T")[0];
  
  const next7Days = new Date();
  next7Days.setDate(next7Days.getDate() + 6);
  const next7DaysStr = next7Days.toISOString().split("T")[0];

  return await Schedule.findAll({
    where: {
      date: {
        [Op.between]: [today, next7DaysStr],
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
          },
        ],
      },
    ],
    order: [["date", "ASC"]],
  });
};

exports.createTimesheet = async (data) => {
  return await Timesheet.create(data);
};

exports.getTimesheet = async () => {
  return await Timesheet.findAll();
};

exports.getDashboardStats = async () => {
  const totalMovies = await Movie.count();
  const totalScreens = await Screen.count();
  const totalSchedules = await Schedule.count();

  return { totalMovies, totalScreens, totalSchedules, bookingsToday: 0 };
};
