"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.College = void 0;
const mongoose_1 = require("mongoose");
// Define the schema with types
const collegeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    admissionDates: { type: String, required: true },
    events: { type: [String], required: true },
    research: { type: String, required: true },
    sports: { type: [String], required: true },
    rating: { type: Number, required: true },
});
// Export the model
exports.College = (0, mongoose_1.model)("College", collegeSchema);
