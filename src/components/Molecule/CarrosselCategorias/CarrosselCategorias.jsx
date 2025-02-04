import CardCategoria from "@/components/Atom/CardCategoria/CardCategoria";
import React from "react";
import "./index.scss";

function CarrosselCategorias() {
  return (
    <>
      <div className="container mt-5">
        <h2>Browse By Category</h2>
        <div className="arrows-carrossel">
          <img src="./arrowLeft.svg" alt="Arrow Left" className="left" />
          &nbsp;&nbsp;
          <img src="./arrowRight.svg" alt="Arrow Right" />
        </div>

        <div className="row gap-4 flex-nowrap wrapperCardCategorias mt-5 mb-5">
          <CardCategoria />
          <CardCategoria />
          <CardCategoria />
          <CardCategoria />
          <CardCategoria />
          <CardCategoria />
          <CardCategoria />
        </div>
      </div>
    </>
  );
}

export default CarrosselCategorias;
