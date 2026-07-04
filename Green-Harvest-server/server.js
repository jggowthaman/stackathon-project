const express = require("express");
const myDB = require("./Schema/Db");
const cors = require("cors");

const app = express();
const PORT = 4040;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Green Harvest Server");
});

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

  myDB.query(
    sql,
    [uname, uemail, umobile, umessage],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database Error",
        });
      }

      res.status(201).json({
        success: true,
        message: "Data inserted successfully",
      });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});