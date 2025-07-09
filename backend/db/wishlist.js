const mongoose = require("mongoose");
const wishlistSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    vehicleId : Array(String)
    
});

const Wishlist = mongoose.model("wishlists", wishlistSchema);
module.exports = Wishlist;