import { useEffect, useState } from "react";
import "./App.css";
import FetchData from "./Components/FetchData";
import Banner from "./Components/TopSection/Banner";
import Card from "./Components/MidSection/Card";
import No_products from "./Resources/no-product-found.png";

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    FetchData({ setData });
  }, []);

  const handleCategorySelect = (selectedCategory) => {
    if (selectedCategory) {
      const filteredProducts = data.filter(
        (product) => product.category === selectedCategory
      );
      setCategory(filteredProducts);
      setSearchResults([]);
    } else {
      setCategory([]);
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredProducts = data.filter((product) =>
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredProducts);
    setCategory([]);
  };

  const showProducts =
    searchResults.length > 0 || category.length > 0
      ? searchResults.length > 0
        ? searchResults
        : category
      : data;

  return (
    <>
      <div>
        <Banner
          onCategorySelect={handleCategorySelect}
          searchQuery={searchQuery}
          handleSearch={handleSearch}
        ></Banner>
        <h1 className="card-section-title my-2">
          <b>Man & Women Fashion</b>
        </h1>

        {showProducts.length > 0 ? (
          <Card products={showProducts} />
        ) : (
          <div className="card-section-title my-2">
            <img
              src={No_products}
              alt="No products found"
              className="img-no-product"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
