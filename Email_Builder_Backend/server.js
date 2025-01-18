import express from "express";
import mongoose from "mongoose";

const app = new express();

// Middleware to parse incoming JSON requests
// Ensures the server can handle JSON data in request bodies
app.use(express.json());

// Middleware to log request method, URL, and status code after the response is sent
// Logs information about each incoming request and its response status
app.use((req, res, next) => {
  res.on("finish", () => {
    console.log(`Method:${req.method} Url:${req.url} Status:${res.statusCode}`);
  });
  next(); // Proceed to the next middleware or route handler
});

// Start the server on port 5100
// The server listens for incoming connections on port 5100
app.listen(5100, () => {
  console.log("Server is running on port 5100");
});


// Connect to MongoDB database
// Establishes a connection to the MongoDB database named "youtubeCloneDB"
mongoose.connect("mongodb://localhost:27017/emailBuilderDB");

// Event listener for successful database connection
// Logs a success message when the database connection is established
const db = mongoose.connection;
db.on("open", () => {
  console.log("Database connection successful");
});

// Event listener for database connection errors
// Logs an error message if the database connection fails
db.on("error", () => {
  console.log("Database connection not successful");
});