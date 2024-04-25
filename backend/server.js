const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const userRouter = require("./routes/userRoute")

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((err) => {
    console.log("Error connecting");
  });


// app.get("/", (req, res) => {
//   res.send("Server is running");
// });

const port = process.env.PORT || 4000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Hey buddy i am your server and i am Listening on ${port}`);
});
app.use(userRouter);
