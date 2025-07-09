const express = require('express');
const router = express.Router();
const { addMakers, getMakers, getMakersById, updateMakers, deleteMakers } = require('../handlers/makers');

router.post("", async (req, res) => {
    console.log("here");
    let model = req.body;
    let result = await addMakers(model);
    res.send(result);
});

router.get("", async (req, res) => {
    console.log("here");
    let result = await getMakers();
    res.send(result);
});

router.get("/:id", async (req, res) => {
    console.log("here");
    let id = req.params["id"];
    let result = await getMakersById(id);
    res.send(result);
});

router.put("/:id", async (req, res) => {
    console.log("here");
    let model = req.body;
    let id = req.params["id"];
    await updateMakers(id, model);
    res.send({ message: "updated" });
});

router.delete("/:id", async (req, res) => {
    let id = req.params['id'];
    await deleteMakers(id);
    res.send({ message: "deleted" });

})

module.exports = router;