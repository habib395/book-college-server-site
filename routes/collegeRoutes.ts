import express, { Request, Response } from "express";
import { College } from "../models/College";

const router = express.Router();

// GET all colleges
router.get("/", async (req: Request, res: Response) => {
  try {
    const colleges = await College.find();
    res.status(200).json(colleges);
  } catch (error) {
    console.error("Error fetching colleges:", error);
    res.status(500).json({ message: "Failed to fetch colleges" });
  }
});

// GET college by ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const college = await College.findById(req.params.id);
    if (!college) {
      return res.status(404).json({ message: "College not found" });
    }
    res.status(200).json(college);
  } catch (error) {
    console.error("Error retrieving college:", error);
    res.status(500).json({ message: "Error retrieving college", error });
  }
});

export default router;