import React from "react";
import { useState } from "react";
import { capitalizeFirstLetter } from "./Functions";
import "./Category.css";

const Category = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    onCategorySelect(selectedValue);
  };

  return (
    <>
      <select
        className="form-select action-category"
        onChange={handleCategoryChange}
        value={selectedCategory}
      >
        <option value="">Categories</option>
        <option value="electronics">
          {capitalizeFirstLetter("electronics")}
        </option>
        <option value="men's clothing">
          {capitalizeFirstLetter("men's clothing")}
        </option>
        <option value="women's clothing">
          {capitalizeFirstLetter("women's clothing")}
        </option>
      </select>
    </>
  );
};

export default Category;
