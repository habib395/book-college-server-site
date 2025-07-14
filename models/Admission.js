"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admission = void 0;
const mongoose_1 = require("mongoose");
// Schema definition
const admissionSchema = new mongoose_1.Schema({
    collegeId: { type: String, required: true },
    name: { type: String, required: true },
    subject: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    dob: { type: String, required: true },
    image: { type: String, required: true },
});
exports.Admission = (0, mongoose_1.model)("Admission", admissionSchema);
