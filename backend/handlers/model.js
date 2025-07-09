const Model = require("./../db/model");

async function addModel(model) {
    let model1 = new Model({
        ...model
    })
    await model1.save();
    return model1.toObject();
}

async function getModel() {
    let model = await Model.find();
    return model.map((c) => c.toObject());
}

async function getModelById(id) {
    let model = await Model.findById(id);
    return model.toObject();
}

async function updateModel(id,model) {
    await Model.findOneAndUpdate({ _id :id }, model);
    return;
}

async function deleteModel(id) {
    await Model.deleteOne({ _id :id });
    return;
}

module.exports = { addModel, getModel, getModelById, updateModel, deleteModel};