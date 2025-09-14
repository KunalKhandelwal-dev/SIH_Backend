// API server

// Import required dependencies
import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import mongoose from "mongoose";
import Train from "./models/Train.js";  // Import trainData from the model
 
// Loading env variables from .env file
dotenv.config();

const app = express();

// API server port
const port = process.env.PORT_API;

// enabling cors so frintend can call backend
app.use(cors());

// connecting to mongodb atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to Atlas"))
    .catch((err) => console.log("Connection error:", err));

// API Routes

// Get all trains
app.get("/api/trainData", async (req, res) => {
    try {
        const trains = await Train.find()
        res.json(trains);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch trains" });
    }
});

// Get single train by ID (train_id)
app.get("/api/trainData/:train_id", async (req, res) => {
    const id = req.params.train_id;
    try {
        const train = await Train.findOne({ train_id: id });
        if (!train) return res.status(404).json({ error: "Train not found" });
        res.json(train);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch train" });
    }

});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
