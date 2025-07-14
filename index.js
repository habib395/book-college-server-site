"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const collegeRoutes_1 = __importDefault(require("./routes/collegeRoutes"));
const admissionRoutes_1 = __importDefault(require("./routes/admissionRoutes"));
const reviewRoutes_1 = __importDefault(require("./routes/reviewRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const allowedOrigins = [
    "http://localhost:3000",
    "https://book-collegessurgesh.vercel.app"
];
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));
app.use(express_1.default.json());
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
});
// Routes
app.use("/api/colleges", collegeRoutes_1.default);
app.use("/api/admissions", admissionRoutes_1.default);
app.use("/api/reviews", reviewRoutes_1.default);
// Health check
app.get("/", (req, res) => {
    res.send("🎓 College Booking API is Running");
});
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
