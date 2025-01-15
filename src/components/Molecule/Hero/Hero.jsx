import React from "react";
import "./index.scss";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-7 m-auto text-white text-banner">
              <h2>Pro.Beyout</h2>
              <h6>
                Iphone 14 <strong>Pro</strong>
              </h6>
              <p>Created to change everything for the better. For everyone</p>
              <button type="text" className="shop-now">
                Shop Now
              </button>
            </div>
            <div className="col-md-4">
              <img src="./banner-principal.svg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
