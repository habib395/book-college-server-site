const express = require("express")
const router = express.Router()
const College = require("../models/College")

router.get("/", async(req, res) => {
    try{
        const colleges = await College.find()
        res.status(200).json(colleges)
    }
    catch(error){
        console.log("Error fetching colleges", error)
        res.status(500).json({ message: "Failed to fetch colleges"})
    }
})

router.get("/:id", async(req, res) =>{
    try{
        const college = await College.findById(req.params.id)
        if(!college) return res.status(404).json({ message: "College not found"})
            res.status(200).json(college)
        }catch{
            res.status(500).json({ message: " Error retrieving college", error})
        }
})

module.exports = router