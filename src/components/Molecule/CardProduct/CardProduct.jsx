import React from "react";
import BotaoBuyNow from "@/components/Atom/BotaoBuyNow/BotaoBuyNow";
import "./index.scss";

function CardProduct() {
  return (
    <>
      <section className="produtos">
        <div className="container">
          <ul className="nav nav-tabs nav-products">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                New Arrival
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Bestseller
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Featured Products
              </a>
            </li>
          </ul>
        </div>

        <div className="container">
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
        </div>
      </section>
    </>
  );
}

export default CardProduct;
