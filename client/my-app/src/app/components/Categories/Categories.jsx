import React, { useEffect } from "react";
import { useCategoryContext } from "../../../Context/categoryContext/categoryContext";
import Link from "next/link";
const Categories = () => {
  const { categories, getAllCategories } = useCategoryContext();
  useEffect(() => {
    getAllCategories();
  }, []);

  // const handleClick =(categoryId) => {
  //   console.log
  // }
  return (
    <div className="modal-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            {categories.map((category) => (
              <div key={category._id}>
                <Link
                  className="nav-link"
                  href={`/category/${encodeURIComponent(category.title)}`}
                >
                  <h2>{category.title}</h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
