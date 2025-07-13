const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// ✅ Correct CORS setup with multiple allowed origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://book-collegessurgesh.vercel.app" 
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g., mobile apps, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Middleware to parse JSON requests
app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// ✅ API Routes
app.use("/api/colleges", require("./routes/collegeRoutes"));
app.use("/api/admissions", require("./routes/admissionRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));

// ✅ Health Check
app.get("/", (req, res) => {
  res.send("🎓 College Booking API is Running");
});

// ✅ Start the server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});