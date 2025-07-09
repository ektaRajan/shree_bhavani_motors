const express = require("express");
const { getNewVehicle, getAvailableVehicle, getFeaturedVehicle } = require("../handlers/vehicle");
const router = express.Router();

router.get("/new-vehicle", async (req,res) => {
    const newVehicle = await getNewVehicle();
    res.send(newVehicle);
});

router.get("/featured-vehicle", async (req,res) => {
    const featuresVehicle = await getFeaturedVehicle();
    res.send(featuresVehicle);
});

router.get("/available-vehicle", async (req,res) => {
    const availableVehicle = await getAvailableVehicle();
    res.send(availableVehicle);
});

module.exports=router;