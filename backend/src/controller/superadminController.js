const superadminService = require("../service/superadminService");

exports.city = async (req, res) => {
    try {
        const  { name, state }  = req.body;
        const result = await superadminService.city({ 
            Name: name, 
            State: state 
        });
        res.status(201).json({  
            success: true,
            message: "City Added Successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
},

exports.getAllCities = async (req, res) => {
    try {
        const result = await superadminService.getAllCities();
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
}

exports.createTheater = async (req, res) => {
    try {
        const  {  city_id, name, address, phone }  = req.body;
        const result = await superadminService.createTheater({  city_id, name, address, phone });
        res.status(201).json({
            success: true,
            message: "Theater Address Conform",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.getAllTheater = async (req, res) => {
    try {
        const result = await superadminService.getAllTheater();
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
}

exports.getTheaterById = async (req, res) => {
    try {
        const { theaterId } = req.params;
        const result = await superadminService.getTheaterById(theaterId);
        res.status(200).json({
            success: true,
            message: "Get Theater By Id",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.updateTheater = async (req, res) => {
    try {
        const { theaterId } = req.params;
        const { name, address, phone } = req.body;
        const result = await superadminService.updateTheater(theaterId, { name, address, phone });
        res.status(200).json({
            success: true,
            message: "Theater Updated Successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.deleteTheater = async (req, res) => {
    try {
        const { theaterId } = req.params;
        const result = await superadminService.deleteTheater(theaterId);
        res.status(200).json({
            success: true,
            message: "Theater Deleted Successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}