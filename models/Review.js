"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const mongoose_1 = require("mongoose");
// Define Mongoose schema with type enforcement
const reviewSchema = new mongoose_1.Schema({
    collegeId: { type: String, required: true },
    collegeName: { type: String, required: true },
    candidateName: { type: String, required: true },
    rating: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now },
});
// Export the model
exports.Review = (0, mongoose_1.model)("Review", reviewSchema);
