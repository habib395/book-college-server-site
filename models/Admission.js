const mongoose = require("mongoose")

const admissionSchema = new mongoose.Schema({
    collegeId: String,
    candidateName: String,
    subject: String,
    email: String,
    phone: String,
    address: String,
    dateOfBirth: String,
    image: String
})

module.exports= mongoose.model("Admission", admissionSchema)