const mongoose = require('mongoose');

const UniversitySchema = new mongoose.Schema({
    name: String,
    country: String,
    course: String,
    score: Number,
});

module.exports = mongoose.model('University', UniversitySchema);