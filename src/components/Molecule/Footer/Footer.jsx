import React from "react";
import "./index.scss";

function Footer() {
  return (
    <section className="container-fluid p-0">
      <div className="footer">
        <div className="row p-5">
          <div className="col-md-6">
            <img src="./logo-branca.svg" />
            <p className="mt-4">
              We are a residential interior design firm located in Portland. Our
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
  );
}

export default Footer;
