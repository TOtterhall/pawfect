const { CategoryModel } = require("./category.model");

// //FUNCTION- ADD CATEGORY
// async function addCategory(req, res, next) {
//   try {
//     const category = new CategoryModel(req.body);
//     await category.save();
//     res.status(201).json();
//   } catch (err) {
//     next(err);
//   }
// }

//FUNCTION- GET ALL CATEGORIES
async function getAllCategories(req, res, next) {
  try {
    const categories = await CategoryModel.find({ deleted: false });
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
}

//FUNCTION- GET SPECIFIK category(ID)
async function getSpecificCategory(req, res, next) {
  try {
    const CategoryId = req.params._id;
    const category = await CategoryModel.findById(CategoryId);
    if (!category) {
      return res.status(404).json({
        message: "Kategorien kunde inte hittas... du får nosa vidare",
      });
    }
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  //   addCategory,
  getAllCategories,
  getSpecificCategory,
};
