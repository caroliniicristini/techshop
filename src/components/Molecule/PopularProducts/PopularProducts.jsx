import React from "react";
import "./index.scss";
import BotaoShopNow from "@/components/Atom/BotaoShopNow/BotaoShopNow";

function PopularProducts() {
  return (
    <>
      <section className="container-fluid popular-products">
        <div className="row">
          <div className="col-md-3">
            <img src="./popularProducts.svg" />
            <div className="info-popular-products">
              <h2>Popular Products</h2>
              <p>
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
              <BotaoShopNow classe="btn-shopNow-white" />
            </div>
          </div>
          <div className="col-md-3">
            <img src="./popularProducts.svg" />
            <div className="info-popular-products">
              <h2>Popular Products</h2>
              <p>
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
              <BotaoShopNow classe="btn-shopNow-white" />
            </div>
          </div>
          <div className="col-md-3">
            <img src="./popularProducts.svg" />
            <div className="info-popular-products">
              <h2>Popular Products</h2>
              <p>
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
              <BotaoShopNow classe="btn-shopNow-white" />
            </div>
          </div>
          <div className="col-md-3">
            <img src="./popularProducts.svg" />
            <div className="info-popular-products">
              <h2>Popular Products</h2>
              <p>
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
              <BotaoShopNow classe="btn-shopNow-white" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopularProducts;
