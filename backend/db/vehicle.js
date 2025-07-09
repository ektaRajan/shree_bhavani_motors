const mongoose = require("mongoose");
const { Schema } = mongoose;
const vehicleSchema = new mongoose.Schema({
    regno:String,
    chassisno: String,
    ownername: String,
    engineno: String,
    owneroflastname: String,
    address:String,
    price: Number,
    dateofreg:Date,
    regofvalidity:Date,
    ownersrno:Number,
    colour:String,
    monthandyrofmfg: Date,
    images: Array(String),
    modelId: { type: Schema.Types.ObjectId, ref: 'model' },
    makersId: { type: Schema.Types.ObjectId, ref: 'makers' },
    isFeatured:Boolean,
    isNewVehicle:Boolean,
    isAvailable:Boolean


});

const Vehicle = mongoose.model("vehicle", vehicleSchema);
module.exports = Vehicle;