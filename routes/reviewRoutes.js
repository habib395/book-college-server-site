"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Review_1 = require("../models/Review");
const router = express_1.default.Router();
// POST a new review
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newReview = new Review_1.Review(req.body);
        yield newReview.save();
        res.status(201).json(newReview);
    }
    catch (err) {
        console.error("Error saving review:", err);
        res.status(500).json({ message: "Review failed", error: err });
    }
}));
// GET latest 5 reviews
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield Review_1.Review.find().sort({ date: -1 }).limit(5);
        res.json(reviews);
    }
    catch (err) {
        console.error("Error fetching reviews:", err);
        res.status(500).json({ message: "Failed to fetch reviews", error: err });
    }
}));
exports.default = router;
