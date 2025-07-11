const mongoose = require("mongoose")

const collegeSchema = new mongoose.Schema({
    name: String,
    image: String,
    admissionDates: String,
    events: [String],
    research: String,
    sports: [String],
    rating: Number,
})

module.exports = mongoose.model("College", collegeSchema)