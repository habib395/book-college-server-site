const mongoose = require("mongoose")

const admissionSchema = new mongoose.Schema({
    userEmail: String,
    collegeId: String,
    candidateName: String,
    subject: String,
    email: String,
    phone: String,
    address: String,
    dob: String,
    image: String 
})

module.exports = mongoose.model("Admission" ,admissionSchema)