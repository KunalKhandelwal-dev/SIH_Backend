import mongoose from "mongoose";

// defining the train schema

const trainSchema = new mongoose.Schema({
  train_id: { type: String, required: true, unique: true },  // string, unique and also required
  train_route: { type: String, required: true },  // route of the train
  fault_locations: [String],  // faulty locations
  crack_descriptions: [String], // description of the crack
  media_links: {
    images: [String],
    videos: [String]
  },
  priority: { type: String, enum: ["High", "Medium", "Low"], required: true },  // Restrict to allowed values
  status: { type: String, enum: ["Solved", "Under Process", "Not Started"], required: true }  // Restrict to allowed values
}, { timestamps: true } // Automatically adds createdAt & updatedAt fields
);

// creating model for train
const Train = mongoose.model("Train", trainSchema);
export default Train;
