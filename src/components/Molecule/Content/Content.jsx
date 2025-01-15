import React from "react";
import "./index.scss";

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
      <section className="sugestoes-produtos">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-6 p-0">
              <div className="col-md-12 d-flex align-items-center">
                <img src="./playstation.svg" alt="Image Playstation" />
                <div className="wrapper-playstation">
                  <h2>Playstation 5</h2>
                  <p>
                    Incredibly powerful CPUs, GPUs, and an SSD with
                    <br /> integrated I/O will redefine your PlayStation
                    experience.
                  </p>
                </div>
              </div>
              <div className="col-md-12 d-flex align-items-center">
                <div className="col-md-6 d-flex align-items-center wrapper-airPods">
                  <img src="./AirPods.svg" alt="Image Air Pods" />
                  <div className="info-airPods">
                    <h2>
                      Apple<br></br>
                      AirPods <strong>Max</strong>
                    </h2>
                    <p>
                      Computational audio.<br></br>Listen, it's powerful
                    </p>
                  </div>
                </div>
                <div className="wrapper-appleVision"></div>
                <div className="col-md-6 d-flex align-items-center wrapper-appleVision">
                  <img
                    src="./appleVision.svg"
                    style={{ height: "272px" }}
                    alt="Image Apple Vision"
                  />
                  <div className="info-appleVision">
                    <h2>
                      Apple <br></br>
                      Vision <strong>Pro</strong>
                    </h2>
                    <p>
                      An immersive way to
                      <br />
                      experience entertainment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center wrapper-macbook">
              <div className="info-macbook">
                <h2>
                  Macbook <strong>Air</strong>
                </h2>
                <p>
                  The new 15‑inch MacBook Air makes room for more of what you
                  love with
                  <br />a spacious Liquid Retina display.
                </p>
                <button type="text" className="shop-now">
                  Shop Now
                </button>
              </div>
              <img src="./macbook.svg" alt="Image Macbook Air" />
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
}

export default Content;
