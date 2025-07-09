const mongoose = require("mongoose");
const makersSchema = new mongoose.Schema({
    name: String,
    image: String
});

const Makers = mongoose.model("makers", makersSchema);
module.exports = Makers;