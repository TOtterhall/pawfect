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

  return (
    <div className="modal-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            {categories.map((categoryTitle) => (
              <div className="my-2" key={categoryTitle._id}>
                <Link
                  href="/products/[categoryTitle]"
                  as={`/products/${encodeURIComponent(categoryTitle.title)}`}
                >
                  <button className=" btn btn-outline-dark my-2 my-sm-0 btn-lg ">
                    {categoryTitle.title}
                  </button>
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
