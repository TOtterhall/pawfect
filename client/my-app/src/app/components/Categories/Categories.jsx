import React, { useEffect, useState } from "react";
import { useCategoryContext } from "../../../Context/categoryContext/categoryContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Categories = () => {
  const { categories, getAllCategories } = useCategoryContext();

  const router = useRouter();

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleClick = (categoryTitle) => {
    router.push(`/products/${encodeURIComponent(categoryTitle)}`);
    console.log(categoryTitle);
  };

  return (
    <div className="modal-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            {categories.map((category) => (
              <div key={category._id}>
                <Link
                  className="nav-link"
                  href="/products/[categoryTitle]"
                  as={`/products/${encodeURIComponent(category.title)}`}
                >
                  <h2 onClick={() => handleClick(category.titel)}>
                    {category.title}
                  </h2>
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
