const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow frontend to access backend
app.use(express.json());

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from Node.js Backend!", timestamp: new Date() });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
