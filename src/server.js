const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/file-uploads", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });
};

const productRouter = require("./routes/product.router");

app.use("/products", productRouter);

const start = async () => {
  await connect();

  app.listen(2244, () => {
    console.log("Listening on port 2244...");
  });
};

module.exports = start;
