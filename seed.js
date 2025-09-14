// This seed clears existing data, and inserts fresh traindata into MongoDB Atlas
// run {node seed.js} 

import mongoose from "mongoose";
import dotenv from "dotenv";
import Train from "./models/Train.js";
import trainData from "./trainData.js"; 

dotenv.config();

// Connecting to mongoDB Atlas

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB Atlas");
    
    // Clears existing data
    await Train.deleteMany({});

    //Insert the seed data
    await Train.insertMany(trainData);
    console.log("Seeded trainData into MongoDB Atlas");

    // Close connection
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
