import mongoose, { Document, Schema, model } from "mongoose";

// Define an interface for the College document
export interface ICollege extends Document {
  name: string;
  image: string;
  admissionDates: string;
  events: string[];
  research: string;
  sports: string[];
  rating: number;
}

// Define the schema with types
const collegeSchema: Schema<ICollege> = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  admissionDates: { type: String, required: true },
  events: { type: [String], required: true },
  research: { type: String, required: true },
  sports: { type: [String], required: true },
  rating: { type: Number, required: true },
});

// Export the model
export const College = model<ICollege>("College", collegeSchema);