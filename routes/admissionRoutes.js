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
const Admission_1 = require("../models/Admission");
const router = express_1.default.Router();
// POST: Create a new admission
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAdmission = new Admission_1.Admission(req.body);
        yield newAdmission.save();
        res.status(201).json(newAdmission);
    }
    catch (err) {
        res.status(500).json({ message: "Admission failed", err });
    }
}));
// GET: Get admissions by email
router.get("/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admission = yield Admission_1.Admission.find({ email: req.params.email });
        if (!admission || admission.length === 0) {
            return res.status(404).json({ message: "No admission found" });
        }
        res.json(admission);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving admission", error });
    }
}));
exports.default = router;
