const express = require("express");
const authRoutes = require("./routes/auth.routes");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("API is running");
});

app.post("/test", (req, res) => {
  res.json({
    message: "POST route working",
    body : req.body,
  })
});

app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
