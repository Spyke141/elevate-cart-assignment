import React from "react";
import "./Search.css";

const Search = ({ searchQuery, handleSearch }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control text-center"
        placeholder="Type here to search for a Product"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
