import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faMobileScreenButton,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

function CardCategoria() {
  return (
    <>
      {/* VERSÃO DESKTOP - CARROSSEL */}

      <div className="col-md-2 cardCategorias">
        <FontAwesomeIcon
          icon={faMobileScreenButton}
          className="iconsCategorias"
        />
        <p>Phones</p>
      </div>
    </>
  );
}

export default CardCategoria;
