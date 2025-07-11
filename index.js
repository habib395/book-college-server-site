const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDb Connected"))
.catch((err) =>{
    console.log("Mongodb connection error", err)
})

app.use("/api/colleges", require("./routes/collegeRoutes"))
app.use("/api/admissions", require("./routes/admissionRoutes"))
app.use("/api/reviews", require("./routes/reviewRoutes"))

app.get("/", (req, res) =>{
    res.send("College Booking Api is Running")
})

const PORT = process.env.PORT || 8800
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))