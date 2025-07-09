const mongoose = require("mongoose");
const modelSchema = new mongoose.Schema({
    name: String,
    vehicleclass:String,
    fuelused:String,
    seatingcapacity:String,
    bodytype:String,
    wheelbase:String,
    cubiccapacity:String
});

const Model = mongoose.model("model", modelSchema);
module.exports = Model;