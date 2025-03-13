const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User"); // Import the User model

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5001;
const MONGO_URI = "mongodb://127.0.0.1:27017/mydatabase"; // Replace 'mydatabase' with your database name

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create new user
    const newUser = new User({ email, password });
    await newUser.save();
    res.json({ message: "Signup successful!" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    res.json({ message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Sample Route
app.get("/", (req, res) => {
  res.send("Server is running and connected to MongoDB!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
