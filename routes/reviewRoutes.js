const express = require("express")
const router = express.Router()
const Review = require("../models/Review")

router.post("/", async(req, res) =>{
    try{
        const newReview = new Review(req.body)
        await newReview.save()
        res.status(201).json(newReview)
    }catch{
        res.status(500).json({ message: "Review failed", err})
    }
})

router.get("/", async(req, res) =>{
    const reviews = await Review.find().sort({ date: -1}).limit(5)
    res.json(reviews)
})

module.exports = router