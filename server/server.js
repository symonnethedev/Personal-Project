const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require | "body-parser";

const UserRoute = require("./routes/user");
const AuthRoute = require("./routes/auth");

mongoose.connect("mongodb://localhost:27017/black-codher-personal-project", {
  useNewurlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database Connection Established!");
});

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.use("/api/User", UserRoute);
app.use("/api", AuthRoute);
