import React from "react";
import Banner_1 from "../../Resources/1080p/Banner_1.jpg";
import Banner_2 from "../../Resources/1080p/Banner_2.jpg";
import Banner_3 from "../../Resources/1080p/Banner_3.jpg";
import Banner_4 from "../../Resources/1080p/Banner_4.jpg";
import Banner_5 from "../../Resources/1080p/Banner_5.jpg";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <h1 className="carousel-caption hero-banner-title">Eflyer</h1>
        <div className="carousel-inner banner">
          <div className="carousel-item active">
            <img src={Banner_1} className="d-block w-100" alt="Banner_1" />
            <div className="carousel-caption d-none d-md-block banner-message">
              <h1>
                <strong>GET STARTED WITH YOUR FAVOURITE SHOPPING</strong>
              </h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner_2} className="d-block w-100" alt="Banner_2" />
            <div className="carousel-caption d-none d-md-block banner-message">
              <h1>
                <strong>YOUR ONE STOP SHOP FOR ALL FAVOURITE BRANDS</strong>
              </h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner_3} className="d-block w-100" alt="Banner_3" />
            <div className="carousel-caption d-none d-md-block banner-message">
              <h1>
                <strong>GET UPTO 50% OFF ON YOUR FAVOURITE BRANDS</strong>
              </h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner_4} className="d-block w-100" alt="Banner_4" />
            <div className="carousel-caption d-none d-md-block banner-message">
              <h1>
                <strong>ENJOY HASSLE FREE PAYMENT EXPERIENCE</strong>
              </h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner_5} className="d-block w-100" alt="Banner_5" />
            <div className="carousel-caption d-none d-md-block banner-message">
              <h1>
                <strong>SPECIAL DISCOUNT ON WINTER APPARELS</strong>
              </h1>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
