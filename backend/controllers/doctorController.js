// backend/controllers/doctorController.js
const Doctor = require('../models/doctor');

// Add a new doctor
exports.addDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ success: true, data: doctor });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// List doctors with filters and pagination
exports.listDoctors = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    // Build filter query
    const filterQuery = {};
    
    if (req.query.specialty) {
      filterQuery.specialty = req.query.specialty;
    }
    
    if (req.query.location) {
      filterQuery.location = req.query.location;
    }
    
    if (req.query.minExperience) {
      filterQuery.experience = { $gte: parseInt(req.query.minExperience) };
    }
    
    if (req.query.languages) {
      filterQuery.languages = { $in: req.query.languages.split(',') };
    }
    
    const doctors = await Doctor.find(filterQuery)
      .limit(limit)
      .skip(skip)
      .sort({ rating: -1 });
      
    const total = await Doctor.countDocuments(filterQuery);
    
    res.status(200).json({
      success: true,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: doctors
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};