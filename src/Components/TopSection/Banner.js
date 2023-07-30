import React from "react";
import Carousel from "./Carousel";
import ActionBar from "../ActionSection/ActionBar";
import "./Banner.css";
import Nav from "./Nav";

const Banner = ({ onCategorySelect, searchQuery, handleSearch }) => {
  return (
    <>
      <div className="main-container justify-content: center">
        <Nav />
        <ActionBar
          onCategorySelect={onCategorySelect}
          searchQuery={searchQuery}
          handleSearch={handleSearch}
        />
        <Carousel />
      </div>
    </>
  );
};

export default Banner;
