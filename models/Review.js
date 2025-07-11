const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    collegeId: String,
    collegeName: String,
    candidateName: String,
    rating: String,
    comment: String,
    date: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Review", reviewSchema)