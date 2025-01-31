import BotaoShopNow from "@/components/Atom/BotaoShopNow/BotaoShopNow";
import React from "react";
import "./index.scss";

function ProductSuggestions() {
  return (
    <div>
      <section className="sugestoes-produtos">
        <div className="container-fluid p-0">
          <div className="row d-none d-md-flex">
            <div className="col-md-6 p-0">
              <div className="product-card">
                <img src="./playstation.svg" alt="Image Playstation" />
                <div className="product-text m-0">
                  <h2>Playstation 5</h2>
                  <p>
                    Incredibly powerful CPUs, GPUs, and an SSD with
                    <br /> integrated I/O will redefine your PlayStation
                    experience.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                  <div className="product-card">
                    <img src="./AirPods.svg" alt="Image Air Pods" />
                    <div className="product-text">
                      <h2>
                        Apple<br></br>
                        AirPods <strong>Max</strong>
                      </h2>
                      <p>
                        Computational audio.<br></br>Listen, it's powerful
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center bg-dark p-0">
                  <div className="product-card appleVision">
                    <img src="./appleVision.svg" alt="Image Apple Vision" />
                    <div className="product-text">
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
            </div>

            <div className="col-md-6 wrapper-macbook">
              <div className="product-card">
                <div className="product-text">
                  <h2>
                    Macbook <strong>Air</strong>
                  </h2>
                  <p>
                    The new 15‑inch MacBook Air makes room for more of what you
                    love with
                    <br />a spacious Liquid Retina display.
                  </p>
                  <BotaoShopNow classe="btn-shopNow-black" />
                </div>

                <img src="./macbook.svg" alt="Image Macbook Air" />
              </div>
            </div>
          </div>

          <div className="row d-md-none sugestoes-produtos-mobile">
            <div className="col-12 text-center airpods">
              <img src="./mobile/airPods-mobile.svg" alt="Image Air Pods" />
              <div>
                <h2>
                  Apple AirPods <strong>Max</strong>
                </h2>
                <p>Computational audio. Listen, it's powerful.</p>
              </div>
            </div>
            <div className="col-12 text-center appleVision">
              <div>
                <img
                  src="./mobile/appleVision-mobile.svg"
                  alt="Image Air Pods"
                />
                <h2>
                  Apple Vision <strong>Pro</strong>
                </h2>
                <p>An immersive way to experience entertainment.</p>
              </div>
            </div>
            <div className="col-12 text-center playstation">
              <img src="./mobile/playstation-mobile.svg" alt="Image Air Pods" />
              <div>
                <h2>Playstation 5</h2>
                <p>
                  Incredibly powerful CPUs, GPUs, and an SSD with
                  <br />
                  integrated I/O...
                </p>
              </div>
            </div>
            <div className="col-12 text-center macbook">
              <img src="./mobile/macbook-mobile.svg" alt="Image Playstation" />
              <div>
                <h2>Playstation 5</h2>
                <p>
                  Incredibly powerful CPUs, GPUs, and an SSD with
                  <br /> integrated I/O...
                </p>
                <BotaoShopNow classe="btn-shopNow-black w-50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductSuggestions;
