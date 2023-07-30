import React from "react";
import './Card.css';
import { capitalizeFirstLetter } from "../ActionSection/Functions";

const Card = ({ products }) => {

  return (
    <>
      <div className="row g-0 gap-5 justify-content-center">
        {products.map((product, id) => (
          <div className="card mt-3" style={{ width: "20rem" }} key={id}>
            <div className="card-body">
              <div className="card-top-title">
                <p><b>{capitalizeFirstLetter(product.category)}</b></p>
                <p><b>$ {product.price}</b></p>
              </div>
              <div className="card-image-container mb-1">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                height='280px'
              />
            </div>
              </div>
              <div className="card-top-title mt-1">
            <p><b>⭐ {product.rating.rate}</b></p>
            <p><b>Available {product.rating.count} Units</b></p>
            </div>
            <button className="btn btn-primary mb-2 mx-2">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
