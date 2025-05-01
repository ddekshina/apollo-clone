
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  qualification: { type: String, required: true },
  experience: { type: Number, required: true },
  languages: [{ type: String }],
  consultationFee: { type: Number, required: true },
  availableSlots: { type: Number, default: 0 },
  location: { type: String, required: true },
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  imageUrl: { type: String },
  about: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Doctor', doctorSchema);