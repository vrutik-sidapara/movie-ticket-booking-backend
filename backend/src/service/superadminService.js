const superadminDao = require("../dao/superadminDao");

exports.city = async (data) => {
    return await superadminDao.city(data);
};

exports.getAllCities = async () => {
    return await superadminDao.getAllCities();
};

exports.createTheater = async (data) => {
    return await superadminDao.createTheater(data);
};

exports.getAllTheater = async () => {
    return await superadminDao.getAllTheater();
};

exports.getTheaterById = async (theaterId) => {
    return await superadminDao.getTheaterById(theaterId);
};

exports.updateTheater = async (theaterId, data) => {
    return await superadminDao.updateTheater(theaterId, data);
};

exports.deleteTheater = async (theaterId) => {
    return await superadminDao.deleteTheater(theaterId);
};