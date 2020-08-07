const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, userCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MONGO DB is connected");
});

const usersRouter = require("./routes/users");
const heroesRouter = require("./routes/heroes");

app.use("/users", usersRouter);
app.use("/heroes", heroesRouter);

app.listen(port, () => {
  console.log(`Server is runnung on port: ${port}`);
});
