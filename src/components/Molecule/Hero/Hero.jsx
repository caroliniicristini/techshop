import React from "react";
import "./index.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-7 text-white text-banner">
            <h2>Pro.Beyout</h2>
            <h6>
              Iphone 14 <span style={{ fontWeight: "bold" }}>Pro</span>
            </h6>
            <p>Created to change everything for the better. For everyone</p>
            <button type="text" className="shop-now">
              Shop Now
            </button>
          </div>
          <div className="col-md-4">
            <img src="./banner-principal.svg" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
