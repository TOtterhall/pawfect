import React, { useEffect } from "react";
import { useCategoryContext } from "../../../Context/categoryContext/categoryContext";
const Categories = () => {
  const { categories, getAllCategories } = useCategoryContext();
  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="modal-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            {categories.map((category) => (
              <div key={category._id}>
                <h2>{category.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
