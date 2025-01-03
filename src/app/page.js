function App() {
  return (
    <>
      <section className="header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img src="./logo.svg" alt="Logo" />
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

              <ul className="navbar-nav w-100 justify-content-around align-items-center">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sobre
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contato
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
              </ul>
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
      <div className="categorias">
        <ul class="list-unstyled d-flex justify-content-evenly h-100 align-items-center">
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
      <img src="./hero.svg" class="w-100" />
      <img src="./playstation.svg" class="w-100" />
    </>
  );
}

export default App;
