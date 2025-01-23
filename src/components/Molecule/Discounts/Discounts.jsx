import React from "react";
import "./index.scss";
import BotaoBuyNow from "@/components/Atom/BotaoBuyNow/BotaoBuyNow";

function Discounts() {
  return (
    <>
      <section className="container discounts">
        <h4>Discounts up to -50%</h4>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="info-produtos">
              <div className="icon-heart text-end w-100 m-3">
                <img src="./heart.svg" />
              </div>

              <img src="./iphone14Pro.svg" alt="Image Product" />
              <p className="product-name">
                Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
              </p>
              <p className="price">$900</p>
              <BotaoBuyNow className="btn-buy-now" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="info-produtos">
              <div className="icon-heart text-end w-100 m-3">
                <img src="./heart.svg" />
              </div>

              <img src="./iphone14Pro.svg" alt="Image Product" />
              <p className="product-name">
                Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
              </p>
              <p className="price">$900</p>
              <BotaoBuyNow className="btn-buy-now" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="info-produtos">
              <div className="icon-heart text-end w-100 m-3">
                <img src="./heart.svg" />
              </div>

              <img src="./iphone14Pro.svg" alt="Image Product" />
              <p className="product-name">
                Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
              </p>
              <p className="price">$900</p>
              <BotaoBuyNow className="btn-buy-now" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="info-produtos">
              <div className="icon-heart text-end w-100 m-3">
                <img src="./heart.svg" />
              </div>

              <img src="./iphone14Pro.svg" alt="Image Product" />
              <p className="product-name">
                Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
              </p>
              <p className="price">$900</p>
              <BotaoBuyNow className="btn-buy-now" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Discounts;
