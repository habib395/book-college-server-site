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
const College_1 = require("../models/College");
const router = express_1.default.Router();
// GET all colleges
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const colleges = yield College_1.College.find();
        res.status(200).json(colleges);
    }
    catch (error) {
        console.error("Error fetching colleges:", error);
        res.status(500).json({ message: "Failed to fetch colleges" });
    }
}));
// GET college by ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const college = yield College_1.College.findById(req.params.id);
        if (!college) {
            return res.status(404).json({ message: "College not found" });
        }
        res.status(200).json(college);
    }
    catch (error) {
        console.error("Error retrieving college:", error);
        res.status(500).json({ message: "Error retrieving college", error });
    }
}));
exports.default = router;
