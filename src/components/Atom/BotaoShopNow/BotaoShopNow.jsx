import React from "react";
import "./index.scss";

function BotaoShopNow({ classe }) {
  return (
    <>
      <button type="text" className={classe}>
        Shop Now
      </button>
    </>
  );
}

export default BotaoShopNow;
