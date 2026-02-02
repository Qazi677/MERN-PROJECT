const express = require("express");
const app = express();
const PORT = 5000;
const userRoutes = require("./routes/user.route");
const { connection } = require("./config/conn");
const cors = require("cors");
connection();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log("app is runnig on port 5000");
});
