const { ProductModel } = require("./product.model");

//FUNCTION- ADD PRODUCT
async function addProduct(req, res, next) {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
}

//FUNCTION- GET ALL PRODUCTS
async function getAllProducts(req, res) {
  try {
    const products = await ProductModel.find({ deleted: false });
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
}

//FUNCTION- GET SPECIFIK PRODUCT(ID)
async function getSpecificProduct(req, res) {
  try {
    const productId = req.params._id;
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Produkten kunde inte hittas... du får nosa vidare" });
    }
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addProduct,
  getAllProducts,
  getSpecificProduct,
};
