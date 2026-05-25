const userDao = require("../dao/userDao");

exports.getMovies = async () => {
  return await userDao.getMovies();
};

exports.getPublicSchedule = async () => {
  return await userDao.getPublicSchedule();
}

exports.booking = async (data) => {
  return await userDao.booking(data);
};

exports.rating = async (data) => {
  return await userDao.rating(data);
};

exports.getAllCities = async () => {
  return await userDao.getAllCities();
}

exports.getAllTheater = async () => {
  return await userDao.getAllTheater();
}