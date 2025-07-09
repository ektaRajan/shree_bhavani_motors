const Vehicle = require("./../db/vehicle");

async function addVehicle(model) {
    let vehicle = new Vehicle({
        ...model
    })
    await vehicle.save();
    return vehicle.toObject();
}

async function getVehicle() {
    let vehicle = await Vehicle.find();
    return vehicle.map((c) => c.toObject());
}

async function getVehicleById(id) {
    let vehicle = await Vehicle.findById(id);
    return vehicle.toObject();
}

async function updateVehicle(id,model) {
    await Vehicle.findOneAndUpdate({ _id :id }, model);
    return;
}

async function deleteVehicle(id) {
    await Vehicle.deleteOne({ _id :id });
    return;
}

async function getNewVehicle(){
    let newVehicle = await Vehicle.find({
        isNewVehicle:true
    });
    return newVehicle.map((x) => x.toObject());
}

async function getFeaturedVehicle(){
    let newFeaturedVehicle = await Vehicle.find({
        isFeatured:true
    });
    return newFeaturedVehicle.map((x) => x.toObject());
}

async function getAvailableVehicle(){
    let availableVehicle = await Vehicle.find({
        isAvailable:true
    });
    return availableVehicle.map((x) => x.toObject());
}
module.exports = { addVehicle, getVehicle, getVehicleById,
     updateVehicle, deleteVehicle,
     getNewVehicle ,getFeaturedVehicle, getAvailableVehicle};

