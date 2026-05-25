const e = require("express");
const userService = require("../service/userService");

exports.getMovies = async (req, res) => {
  try {
    const result = await userService.getMovies();
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

exports.getPublicSchedule = async (req, res) => {
  try {
    const data = await userService.getPublicSchedule();
    res.status(200).json({
      success: true,
      message: "Get All ScheduleData",
      data: data,
    });
  } catch (error) {
    console.error("getPublicSchedule ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.booking = async (req, res) => {
  try {
    const { user_id, schedule_id, seats_no } = req.body;
    const Booking = await userService.booking({
      user_id,
      schedule_id,
      seats_no,
    });
    res.status(200).json({
      success: true,
      message: "Ticket Booking Conform",
      data: Booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.rating = async (req, res) => {
  try {
    const { user_id, movie_id, rating, review } = req.body;
    // then pass:
    const result = await userService.rating({
      user_id,
      movie_id,
      rating,
      review,
    });
    res.status(200).json({
      success: true,
      message: "Thank you for Review",
      data: result,
    });
  } catch (error) {
    console.error("Rating ERROR:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllCities = async (req, res) => {
  try {
    const result = await userService.getAllCities();
    res.status(200).json({
      success: true,
      message: "Get All City",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllTheater = async (req, res) => {
  try {
    const result = await userService.getAllTheater();
    res.status(200).json({
      success: true,
      message: "Get All Theater",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};