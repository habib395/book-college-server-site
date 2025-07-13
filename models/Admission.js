const mongoose = require("mongoose")

const admissionSchema = new mongoose.Schema({
    collegeId: String,
    name: String,
    subject: String,
    email: String,
    phone: String,
    address: String,
    dob: String,
    image: String
})

module.exports= mongoose.model("Admission", admissionSchema)