import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import collegeRoutes from "./routes/collegeRoutes"
import admissionRoutes from "./routes/admissionRoutes"
import reviewRoutes from "./routes/reviewRoutes"

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://book-collegessurgesh.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// Routes
app.use("/api/colleges", collegeRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/reviews", reviewRoutes);

// Health check
app.get("/", (req: Request, res: Response) => {
  res.send("🎓 College Booking API is Running");
});

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});