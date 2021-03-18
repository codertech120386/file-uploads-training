const Product = require("../models/product.model");

const post = async (req, res) => {
  const product = await Product.create({
    name: req.body.name,
    price: req.body.price,
    image_url: req.file.path,
  });
  res.status(201).json({ data: product });
};

const postMany = async (req, res) => {
  const files = req.files.map((file) => file.path);
  const product = await Product.create({
    name: req.body.name,
    price: req.body.price,
    image_url: files,
  });
  res.status(201).json({ data: product });
};

module.exports = {
  post,
  postMany,
};
