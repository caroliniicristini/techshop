import React from "react";
import BotaoShopNow from "../BotaoShopNow/BotaoShopNow";

function ProdutosSugestao({
  titulo,
  descricao,
  classeBotao,
  imgSrc,
  className,
}) {
  return (
    <div className={`col-md-6 p-0 w-100 h-100 d-flex ${className || ""}`}>
      <img src={imgSrc} alt={titulo} />
      <div className="product-text m-auto">
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <BotaoShopNow classe={classeBotao} />
      </div>
    </div>
  );
}

export default ProdutosSugestao;
