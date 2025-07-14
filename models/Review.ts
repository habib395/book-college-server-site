import mongoose, { Document, Schema, model } from "mongoose";

// Define TypeScript interface for a Review document
export interface IReview extends Document {
  collegeId: string;
  collegeName: string;
  candidateName: string;
  rating: string;
  comment: string;
  date: Date;
}

// Define Mongoose schema with type enforcement
const reviewSchema: Schema<IReview> = new Schema({
  collegeId: { type: String, required: true },
  collegeName: { type: String, required: true },
  candidateName: { type: String, required: true },
  rating: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Export the model
export const Review = model<IReview>("Review", reviewSchema);