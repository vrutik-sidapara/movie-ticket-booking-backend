const adminService = require("../service/adminService");

exports.movieAdd = async (req, res) => {
  try {
    const { Name, Description, Duration, language, genre } = req.body;

    // Add this debug line temporarily to see what's coming in:
    console.log("req.body:", req.body);
    console.log("req.file:", req.file);

    const image = req.file ? req.file.path : null;
    const Movie = await adminService.movieAdd({
      Name,
      Description: Description || "No description", // ✅ FIX,
      Duration,
      language,
      genre,
      image,
    });
    res.status(201).json({
      success: true,
      message: "Movie Added Successfully",
      data: Movie,
    });
  } catch (error) {
    console.error("movieAdd error:", error); // ← see exact DB error
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getMovies = async (req, res) => {
  try {
    const result = await adminService.getMovies();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { Name, Description, Duration, language, genre } = req.body;
    const image = req.file ? req.file.path : null;
    const data = { Name, Description, Duration, language, genre };
    if (image) data.image = image;
    const result = await adminService.updateMovie(id, data);
    res
      .status(200)
      .json({ success: true, message: "Movie updated", data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    await adminService.deleteMovie(id);
    res.status(200).json({ success: true, message: "Movie deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.linkTheater = async (req, res) => {
  try {
    const { theaterId } = req.body;

    if (!theaterId) {
      return res
        .status(400)
        .json({ success: false, message: "Theater ID is required" });
    }

    const theater = await adminService.getTheaterById(theaterId);

    if (!theater) {
      return res
        .status(404)
        .json({ success: false, message: "Theater not found" });
    }

    res.status(200).json({
      success: true,
      message: "Theater linked successfully",
      data: theater,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getTheater = async (req, res) => {
  try {
    const theater = await adminService.getTheater();

    res.json({
      success: true,
      data: theater,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllTheaters = async (req, res) => {
  try {
    const theaters = await adminService.getAllTheaters();
    res.status(200).json({
      success: true,
      theaters: theaters,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateTheater = async (req, res) => {
  try {
    const { theaterId } = req.params;
    const { name, address, phone } = req.body;

    const result = await adminService.updateTheater(theaterId, {
      name,
      address,
      phone,
    });

    res.json({
      success: true,
      message: "Theater updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createSchedule = async (req, res) => {
  try {
    const { movieId, screenId, timesheetId, date, price } = req.body;
    const Schedule = await adminService.createSchedule({
      movieId,
      screenId,
      timesheetId,
      date,
      price,
    });
    res.status(201).json({
      success: true,
      message: "Schedule Fixed Complete",
      data: Schedule,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getSchedule = async (req, res) => {
  try {
    const data = await adminService.getSchedule();
    res.status(200).json({
      success: true,
      message: "Get All ScheduleData",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createScreen = async (req, res) => {
  try {
    const { theaterId, name, capacity } = req.body;
    const Screen = await adminService.createScreen({
      theaterId,
      name,
      capacity,
    });
    res.status(201).json({
      success: true,
      message: "Screen Added Successfully",
      data: Screen,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getScreen = async (req, res) => {
  try {
    const data = await adminService.getScreen();
    res.status(200).json({
      success: true,
      message: "Get All ScreenData",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createTimesheet = async (req, res) => {
  try {
    const { startTime, endTime } = req.body;
    const Timesheet = await adminService.createTimesheet({
      startTime,
      endTime,
    });
    res.status(201).json({
      success: true,
      message: "Timesheet Fixed Complete",
      data: Timesheet,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getTimesheet = async (req, res) => {
  try {
    const data = await adminService.getTimesheet();
    res.status(200).json({
      success: true,
      message: "Get All TimesheetData",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getDashboardStats = async (req, res) => {
  try {
    const stats = await adminService.getDashboardStats();
    res.status(200).json({ success: true, data: stats });
  } catch (error) {
    console.error("getDashboardStats error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
