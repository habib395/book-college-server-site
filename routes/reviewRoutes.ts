import express, { Request, Response } from "express";
import { Review } from "../models/Review";

const router = express.Router();

// POST a new review
router.post("/", async (req: Request, res: Response) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    console.error("Error saving review:", err);
    res.status(500).json({ message: "Review failed", error: err });
  }
});

// GET latest 5 reviews
router.get("/", async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find().sort({ date: -1 }).limit(5);
    res.json(reviews);
  } catch (err) {
    console.error("Error fetching reviews:", err);
    res.status(500).json({ message: "Failed to fetch reviews", error: err });
  }
});

export default router;