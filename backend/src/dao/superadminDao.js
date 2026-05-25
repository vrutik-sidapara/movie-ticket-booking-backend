const e = require("express");
const { City, Theater } = require("../models");

exports.city = async (data) => {
  return await City.create(data);
};

exports.getAllCities = async () => {
  return await City.findAll();
};

exports.createTheater = async (data) => {
  return await Theater.create(data);
};

exports.getAllTheater = async () => {
  return await Theater.findAll();
};

exports.getTheaterById = async (theaterId) => {
  return await Theater.findByPk(theaterId);
};

// exports.updateTheater = async (theaterId, data) => {
//     return await Theater.update(data, { where: { id: theaterId } });
// };
exports.updateTheater = async (theaterId, data) => {
  const [updated] = await Theater.update(data, {
    where: { id: theaterId },
  });

  if (!updated) {
    throw new Error("Theater not found or not updated");
  }

  return updated;
};

// exports.deleteTheater = async (theaterId) => {
//     return await Theater.destroy({ where: { id: theaterId } });
// };
exports.deleteTheater = async (theaterId) => {
  const deleted = await Theater.destroy({
    where: { id: theaterId },
  });

  if (!deleted) {
    throw new Error("Theater not found or already deleted");
  }

  return deleted;
};
