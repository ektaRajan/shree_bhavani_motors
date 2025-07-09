const express = require('express');
const router = express.Router();
const { addModel, getModel, getModelById, updateModel, deleteModel } = require('../handlers/model');


router.post("", async (req, res) => {
    console.log("here");
    let model = req.body;
    let result = await addModel(model);
    res.send(result);
});

router.get("", async (req, res) => {
    console.log("here");
    let result = await getModel();
    res.send(result);
});

router.get("/:id", async (req, res) => {
    console.log("here");
    let id = req.params["id"];
    let result = await getModelById(id);
    res.send(result);
});

router.put("/:id", async (req, res) => {
    console.log("here");
    let model = req.body;
    let id = req.params["id"];
    await updateModel(id, model);
    res.send({ message: "updated" });
});

router.delete("/:id", async (req, res) => {
    let id = req.params['id'];
    await deleteModel(id);
    res.send({ message: "deleted" });

})

module.exports = router;