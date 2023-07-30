import React from "react";
import Category from "./Category";
import Search from "./Search";
import Language from "./Language";
import Cart from "./Cart";
import "./ActionBar.css";

function ActionBar({ onCategorySelect, searchQuery, handleSearch }) {
  return (
    <div className="action-bar-container">
      <div className="container text-center action-bar">
        <div className="row g-1">
          <div className="col">
            <Category onCategorySelect={onCategorySelect} />
          </div>
          <div className="col-6">
            <Search searchQuery={searchQuery} handleSearch={handleSearch} />
          </div>
          <div className="col action-language">
            <Language />
          </div>
          <div className="col">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionBar;
