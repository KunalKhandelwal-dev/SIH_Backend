Train Maintenance Backend
This repository contains the backend service for the Train Maintenance Monitoring System.
It provides REST APIs to fetch and manage train fault/crack data stored in MongoDB Atlas.

Getting Started

Step 1: Clone the repository using the project’s Git URL
git clone <YOUR_BACKEND_GIT_URL>

Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

Step 3: Install the necessary dependencies
npm i

Step 4: Set up environment variables
Create a .env file in the root directory based on .env.example:

PORT_API=4000
MONGO_URI=mongodb+srv://<username>:<password>@cluster1.gjkssjp.mongodb.net

Step 5: Start the development server with auto-reloading
npm run dev

Server runs at:
http://localhost:4000/api/trains

Built With
Node.js + Express.js → API framework
MongoDB Atlas → Cloud database
Mongoose → Schema modeling
dotenv → Environment variables
CORS

Data Source
For testing and seeding, the backend uses a mock dataset provided as trainData.js.
You can find it here:
backend/seed.js

This file was created from the mockup database JSON (used in frontend at shih-train-fault-insights/src/data/data.js), ensuring consistency between frontend and backend.

API Endpoints

Get all trains
GET /api/trains

Get single train by ID
GET /api/trains/:train_id

Backend Done by :
Kunal Khandelwal

Related Repository
Frontend Repo: [Train Maintenance Frontend](https://github.com/KunalKhandelwal-dev/SIH_Frontend.git)
