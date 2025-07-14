import express, { Request, Response } from "express";
import { Admission, IAdmission } from "../models/Admission";

const router = express.Router();

// POST: Create a new admission
router.post("/", async (req: Request, res: Response) => {
  try {
    const newAdmission = new Admission(req.body as IAdmission);
    await newAdmission.save();
    res.status(201).json(newAdmission);
  } catch (err) {
    res.status(500).json({ message: "Admission failed", err });
  }
});

// GET: Get admissions by email
router.get("/:email", async (req: Request, res: Response) => {
  try {
    const admission = await Admission.find({ email: req.params.email });
    if (!admission || admission.length === 0) {
      return res.status(404).json({ message: "No admission found" });
    }
    res.json(admission);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving admission", error });
  }
});

export default router;