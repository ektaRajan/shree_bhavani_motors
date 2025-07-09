const Makers = require("./../db/makers");

async function addMakers(model) {
    let makers = new Makers({
        name: model.name,
        image: model.image
    });
    await makers.save();
    return makers.toObject();
}

async function getMakers() {
    let makers = await Makers.find();
    return makers.map((c) => c.toObject());
}

async function getMakersById(id) {
    let makers = await Makers.findById(id);
    return makers.toObject();
}

async function updateMakers(id,model) {
    await Makers.findOneAndUpdate({ _id :id }, model);
    return;
}

async function deleteMakers(id) {
    await Makers.deleteOne({ _id :id });
    return;
}
module.exports = {addMakers, getMakers, getMakersById, updateMakers, deleteMakers};