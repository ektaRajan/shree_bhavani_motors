const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors");
const makersRoutes = require("./routes/makers");
const modelRoutes = require("./routes/model");
const vehicleRoutes = require("./routes/vehicle");
const customerRoutes = require("./routes/costomer");
const authRoutes = require("./routes/auth");
const { verifyToken, isAdmin } = require("./middleware/auth.middleware");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("server running");
});
app.use("/makers", verifyToken, isAdmin, makersRoutes);
app.use("/model",verifyToken, isAdmin, modelRoutes);
app.use("/vehicle",verifyToken,isAdmin, vehicleRoutes);
app.use("/customer",verifyToken, customerRoutes);
app.use("/auth", authRoutes);

async function connectDb() {
    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "bhavani-motors"
    });
    console.log("mongodb connected");
}
connectDb().catch((err) => {
    console.error(err);
})

app.listen(port, () => {
    console.log("server running on port", port);
})