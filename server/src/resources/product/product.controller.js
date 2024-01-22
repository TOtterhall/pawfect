const { ProductModel } = require("./product.model");
const { CategoryModel } = require("../category/category.model");
//FUNCTION- ADD PRODUCT
async function addProduct(req, res, next) {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    if (req.body.categories) {
      const categoryId = [];

      for (const categoryTitle of req.body.categories) {
        let category = await CategoryModel.findOne({ title: categoryTitle });
        if (!category) {
          category = new CategoryModel({ title: categoryTitle });
          await category.save();
        }
        categoryId.push(category._id);
      }
      product.categories = categoryId;
    }
    // const category = await CategoryModel.findOne({ title: nameOfTheCategory });
    // if (!category) {
    //   return res.status(404).json({
    //     message:
    //       "Kategorien kunde inte hittas i produkten.controller ... du får nosa vidare",
    //   });
    // }
    // product.categories.push(category._id);
    await product.save();

    res.status(201).json({ product });
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
async function getSpecificProduct(req, res, next) {
  try {
    const productId = req.params._id;
    console.log(productId);
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
//FUNCTION- GET SPECIFIK PRODUCT(CATEGORY)
async function getProductsByCategory(req, res) {
  try {
    const products = await ProductModel.find({
      categories: { $in: [req.params.categoryTitle] },
    });
    if (!products) {
      return res
        .status(404)
        .json({ message: "Produkten kunde inte hittas... du får nosa vidare" });
    }
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
}

//TODO
//FUNCTION- UPDATE PRODUCT
//FUNCTION- DELETE PRODUCT
//FUNCTION- PRODUCT BY CATEGORY

module.exports = {
  addProduct,
  getAllProducts,
  getSpecificProduct,
  getProductsByCategory,
};
