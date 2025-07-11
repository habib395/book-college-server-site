const express = require("express")
const router = express.Router()
const Admission = require("../models/Admission")

router.post("/", async(req, res) =>{
    try{
        const newAdmission = new Admission(req.body)
        await newAdmission.save()
        res.status(201).json(newAdmission)
    }catch(err){
        res.status(500).json({ message: "Admission failed", err})
    }
})

router.get("/:email", async(req, res) =>{
       try{
        const admission = await Admission.find({ email: req.params.email})
        if(!admission){
            return res.status(404).json({ message: "No admission found"})
        }
        res.json(admission)
       }catch(error){
        res.status(500).json({ message: "Error retriving admission", error})
       }
})

module.exports = router