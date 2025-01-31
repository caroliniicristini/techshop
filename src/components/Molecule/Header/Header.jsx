import React from "react";
import "./index.scss";
import Categorias from "@/components/Molecule/Categorias/Categorias";

function Header() {
  return (
    <>
      <section className="header">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
            {/* Logo */}
            <a className="navbar-brand" href="#">
              <img className="logo" src="./logo.svg" alt="Logo da Empresa" />
            </a>

            {/* Botão para menu em dispositivos móveis */}
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Formulário de busca - Alinhado à direita */}
            <div className="d-flex ms-auto d-none d-md-flex">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  id="search"
                />
                <button
                  className="btn icon-search"
                  type="submit"
                  aria-label="Search"
                >
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>

            {/* Menu de navegação principal */}
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

              <ul className="navbar-nav justify-content-evenly w-50">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img src="./icon-heart.svg" alt="Ícone de favoritos" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img src="./shopping-cart.svg" alt="Carrinho de compras" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img src="./icon-profile.svg" alt="Perfil de usuário" />
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
