const express = require('express');
const {addVehicle, deleteVehicle, updateVehicle, getVehicleById, getVehicle } = require('../handlers/vehicle');
const router = express.Router();


router.post("", async (req, res) => {
    console.log("here");
    let model = req.body;
    let result = await addVehicle(model);
    res.send(result);
});

router.get("", async (req, res) => {
    console.log("here");
    let result = await getVehicle();
    res.send(result);
});

router.get("/:id", async (req, res) => {
    console.log("here");
    let id = req.params["id"];
    let result = await getVehicleById(id);
    res.send(result);
});

router.put("/:id", async (req, res) => {
    console.log("here");
    let model = req.body;
    let id = req.params["id"];
    await updateVehicle(id, model);
    res.send({ message: "updated" });
});

router.delete("/:id", async (req, res) => {
    let id = req.params['id'];
    await deleteVehicle(id);
    res.send({ message: "deleted" });

})

module.exports = router;