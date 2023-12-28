const { ProductModel } = require("./product.model");

async function getAllProducts(req, res) {
  try {
    const products = await ProductModel.find({ deleted: false });
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
}

async function addProduct(req, res, next) {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllProducts,
  addProduct,
};
