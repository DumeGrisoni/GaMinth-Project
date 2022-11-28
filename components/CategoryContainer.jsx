import Link from "next/link";
import React from "react";

const CategoryCard = ({ categories }) => {
  return (
    <div className="category-container">
      {categories.map((category) => (
        <Link key={category._id} href={"/"}>
          <div> {category.title} </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCard;
