import React from "react";
import "./index.scss";

function Categorias() {
  return (
    <div className="categorias d-none d-md-block">
      <div className="container h-100">
        <ul className="list-unstyled d-flex justify-content-between h-100 align-items-center">
          <li>
            <img src="./icon-phones.svg" alt="Icon Phone" />
            <a href="#">
              <p>Phones</p>
            </a>
          </li>
          <li>
            <img src="./icon-computers.svg" alt="Icon Phone" />
            <a href="#">
              <p>Computers</p>
            </a>
          </li>
          <li>
            <img src="./icon-smart-watches.svg" alt="Icon Phone" />
            <a href="#">
              <p>Smart Watches</p>
            </a>
          </li>
          <li>
            <img src="./icon-cameras.svg" alt="Icon Phone" />
            <a href="#">
              <p>Cameras</p>
            </a>
          </li>
          <li>
            <img src="./icon-headphones.svg" alt="Icon Phone" />
            <a href="#">
              <p>Headphones</p>
            </a>
          </li>
          <li>
            <img src="./icon-gaming.svg" alt="Icon Phone" />
            <a href="#">
              <p>Gaming</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Categorias;
