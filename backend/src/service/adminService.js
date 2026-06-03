const adminDao = require("../dao/adminDao");

exports.movieAdd = async (data) => {
  return await adminDao.movieAdd(data);
};

exports.getMovies = async () => {
  return await adminDao.getMovies();
};

exports.updateMovie = async (id, data) => {
  return await adminDao.updateMovie(id, data);
};

exports.deleteMovie = async (id) => {
  return await adminDao.deleteMovie(id);
};

exports.getTheaterById = async (id) => {
  return await adminDao.getTheaterById(id);
};

exports.getTheater = async () => {
  return await adminDao.getTheater();
};

exports.getAllTheaters = async () => {
  return await adminDao.getAllTheaters();
};

exports.updateTheater = async (id, data) => {
  return await adminDao.updateTheater(id, data);
};

exports.createScreen = async (data) => {
  return await adminDao.createScreen(data);
};

exports.getScreen = async () => {
  return await adminDao.getScreen();
};

exports.createSchedule = async (data) => {
  return await adminDao.createSchedule(data);
};

exports.getSchedule = async (data) => {
  return await adminDao.getSchedule(data);
};

exports.createTimesheet = async (data) => {
  return await adminDao.createTimesheet(data);
};

exports.getTimesheet = async () => {
  return await adminDao.getTimesheet();
};