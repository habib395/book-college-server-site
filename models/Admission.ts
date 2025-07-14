import mongoose, { Document, Schema, model } from "mongoose";

// TypeScript interface
export interface IAdmission extends Document {
  collegeId: string;
  name: string;
  subject: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  image: string;
}

// Schema definition
const admissionSchema: Schema<IAdmission> = new Schema({
  collegeId: { type: String, required: true },
  name: { type: String, required: true },
  subject: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  dob: { type: String, required: true },
  image: { type: String, required: true },
});

export const Admission = model<IAdmission>("Admission", admissionSchema);