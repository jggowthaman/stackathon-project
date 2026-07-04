const express = require("express");
const cors = require("cors");
const myDB = require("./Schema/Db");

const app = express();
const PORT = 4040;

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Green Harvest Server");
});

// =======================
// Contact API
// =======================
app.post("/connect", (req, res) => {
  const { uname, uemail, umobile, umessage } = req.body;

  if (!uname || !uemail || !umobile || !umessage) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const sql =
    "INSERT INTO green_harvest_contact (uname, uemail, umobile, umessage) VALUES (?, ?, ?, ?)";

  myDB.query(sql, [uname, uemail, umobile, umessage], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    res.status(201).json({
      success: true,
      message: "Contact submitted successfully",
    });
  });
});

// =======================
// Signup API
// =======================
app.post("/signup", (req, res) => {
  const { uname, uemail, umobile, uepassword } = req.body;

  if (!uname || !uemail || !umobile || !uepassword) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const sql =
    "INSERT INTO green_harvest_signup (uname, uemail, umobile, uepassword) VALUES (?, ?, ?, ?)";

  myDB.query(sql, [uname, uemail, umobile, uepassword], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    res.status(201).json({
      success: true,
      message: "Signup Successful",
    });
  });
});

// =======================
// Login API
// =======================
app.post("/login", (req, res) => {
  const { uemail, uepassword } = req.body;

  if (!uemail || !uepassword) {
    return res.status(400).json({
      success: false,
      message: "Email and Password are required",
    });
  }

  const sql =
    "SELECT * FROM green_harvest_signup WHERE uemail = ?";

  myDB.query(sql, [uemail], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    // Email not found
    if (result.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Email not found",
      });
    }

    // Password does not match
    if (result[0].uepassword !== uepassword) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    // Login successful
    res.status(200).json({
      success: true,
      message: "Login Successful",
    });
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});