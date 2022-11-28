import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/sanity";

const CategoryCard = ({ categories }) => {
  return (
    <>
      <div className="section-title">
        <h3>Catégories</h3>
      </div>
      <div className="category-container">
        {categories.map((category) => (
          <Link key={category._id} href={"/"} className="category">
            <img
              src={urlFor(category.Logo)}
              alt={"Logo de " + category.title}
              key={category.id}
              className="logo-category"
            />
            <div> {category.title} </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoryCard;
