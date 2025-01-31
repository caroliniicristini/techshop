import CardCategoria from "@/components/Atom/CardCategoria/CardCategoria";
import React from "react";

function CarrosselCategorias() {
  return (
    <>
      <div className="container">
        <h2>Browse By Category</h2>
        <div className="row gap-4 flex-nowrap wrapperCardCategorias">
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
