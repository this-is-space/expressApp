const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const uri =
  "mongodb+srv://mongo1:Space%40123@cluster0.soys0tl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// TODO: ADD URI IN ENV FILE

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/items", itemRoutes);
