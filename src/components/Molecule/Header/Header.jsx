import React from "react";
import "./index.scss";
import Categorias from "@/components/Molecule/Categorias/Categorias";

function Header() {
  return (
    <>
      <section className="header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="./logo.svg" alt="Logo" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  id="search"
                />
                <button className="btn icon-search" type="submit"></button>
              </form>

              <ul className="navbar-nav">
                <li className="nav-item d-flex">
                  <a className="nav-link" href="#">
                    <img src="./icon-heart.svg" alt="Coração" />
                  </a>
                  <a className="nav-link" href="#">
                    <img src="./shopping-cart.svg" alt="Carrinho de compras" />
                  </a>
                  <a className="nav-link" href="#">
                    <img src="./icon-profile.svg" alt="Perfil" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <Categorias />
    </>
  );
}

export default Header;
