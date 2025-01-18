import React from "react";
import "./index.scss";
import BotaoShopNow from "@/components/Atom/BotaoShopNow/BotaoShopNow";

function Content() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
            <div className="col-md-3">
              <div className="info-produtos">
                <div className="icon-heart text-end w-100 m-3">
                  <img src="./heart.svg" />
                </div>

                <img src="./iphone14Pro.svg" alt="Image Product" />
                <p className="product-name">
                  Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
                </p>
                <p className="price">$900</p>
                <button>Buy Now</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-produtos">
                <div className="icon-heart text-end w-100 m-3">
                  <img src="./heart.svg" />
                </div>

                <img src="./iphone14Pro.svg" alt="Image Product" />
                <p className="product-name">
                  Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
                </p>
                <p className="price">$900</p>
                <button>Buy Now</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-produtos">
                <div className="icon-heart text-end w-100 m-3">
                  <img src="./heart.svg" />
                </div>

                <img src="./iphone14Pro.svg" alt="Image Product" />
                <p className="product-name">
                  Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
                </p>
                <p className="price">$900</p>
                <button>Buy Now</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-produtos">
                <div className="icon-heart text-end w-100 m-3">
                  <img src="./heart.svg" />
                </div>

                <img src="./iphone14Pro.svg" alt="Image Product" />
                <p className="product-name">
                  Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
                </p>
                <p className="price">$900</p>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="info-produtos">
                <div className="icon-heart text-end w-100 m-3">
                  <img src="./heart.svg" />
                </div>

                <img src="./iphone14Pro.svg" alt="Image Product" />
                <p className="product-name">
                  Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
                </p>
                <p className="price">$900</p>
                <button>Buy Now</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-produtos">
                <div className="icon-heart text-end w-100 m-3">
                  <img src="./heart.svg" />
                </div>

                <img src="./iphone14Pro.svg" alt="Image Product" />
                <p className="product-name">
                  Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
                </p>
                <p className="price">$900</p>
                <button>Buy Now</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-produtos">
                <div className="icon-heart text-end w-100 m-3">
                  <img src="./heart.svg" />
                </div>

                <img src="./iphone14Pro.svg" alt="Image Product" />
                <p className="product-name">
                  Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
                </p>
                <p className="price">$900</p>
                <button>Buy Now</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-produtos">
                <div className="icon-heart text-end w-100 m-3">
                  <img src="./heart.svg" />
                </div>

                <img src="./iphone14Pro.svg" alt="Image Product" />
                <p className="product-name">
                  Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
                </p>
                <p className="price">$900</p>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              <button className="btn-shopNow-white">Shop Now</button>
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
              <button className="btn-shopNow-white">Shop Now</button>
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
              <button className="btn-shopNow-white">Shop Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="container discounts">
        <h4>Discounts up to -50%</h4>
        <div className="row">
          <div className="col-md-3">
            <div className="info-produtos">
              <div className="icon-heart text-end w-100 m-3">
                <img src="./heart.svg" />
              </div>

              <img src="./iphone14Pro.svg" alt="Image Product" />
              <p className="product-name">
                Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
              </p>
              <p className="price">$900</p>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info-produtos">
              <div className="icon-heart text-end w-100 m-3">
                <img src="./heart.svg" />
              </div>

              <img src="./iphone14Pro.svg" alt="Image Product" />
              <p className="product-name">
                Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
              </p>
              <p className="price">$900</p>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info-produtos">
              <div className="icon-heart text-end w-100 m-3">
                <img src="./heart.svg" />
              </div>

              <img src="./iphone14Pro.svg" alt="Image Product" />
              <p className="product-name">
                Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
              </p>
              <p className="price">$900</p>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info-produtos">
              <div className="icon-heart text-end w-100 m-3">
                <img src="./heart.svg" />
              </div>

              <img src="./iphone14Pro.svg" alt="Image Product" />
              <p className="product-name">
                Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
              </p>
              <p className="price">$900</p>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid banner-bigSummer p-0">
        <img src="./banner-big-summer.svg" className="w-100" />
        <div className="info-bannerBigSummer">
          <h2>
            Big Summer
            <strong> Sale</strong>
          </h2>
          <br />
          <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>

          <button className="btn-shopNow-white">Shop Now</button>
        </div>
      </section>
      <section className="container-fluid p-0">
        <div className="footer">
          <div className="row p-5">
            <div className="col-md-6">
              <img src="./logo-branca.svg" />
              <p className="mt-4">
                We are a residential interior design firm located in Portland.
                Our
                <br />
                boutique-studio offers more than
              </p>
            </div>
            <div className="col-md-3">
              <ul>
                <li className="text-white">Services</li>
                <li>Bonus program</li>
                <li>Gift cards</li>
                <li>Credit and payment</li>
                <li>Service contracts</li>
                <li>Non-cash account</li>
                <li>Payment</li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul>
                <li className="text-white">Assistance to the buyer</li>
                <li>Find an order</li>
                <li>Terms of delivery</li>
                <li>Exchange and return of goods</li>
                <li>Guarantee</li>
                <li>Frequently asked questions</li>
                <li>Terms of use of the site</li>
              </ul>
            </div>
          </div>
          <div className="container-fluid midias-sociais">
            <ul className="d-flex m-0">
              <li>
                <a href="">
                  <img src="./twitter.svg" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./facebook.svg" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./tiktok.svg" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./instagram.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
