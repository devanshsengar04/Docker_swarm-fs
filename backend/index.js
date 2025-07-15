const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://mongo:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB error:", err));

app.get("/", (req, res) => res.send("Hello from Backend"));

app.listen(5000, () => console.log("Backend server running on port 5000"));
