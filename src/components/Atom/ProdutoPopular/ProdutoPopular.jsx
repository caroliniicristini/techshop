import React from "react";

import BotaoShopNow from "../BotaoShopNow/BotaoShopNow";

function ProdutoPopular({ imgSrc, titulo, descricao, classeBotao, corFundo }) {
  return (
    <div
      className={`col-md-3 col-sm-12 ${corFundo} wrapper-card-popular-products`}
    >
      <img src={imgSrc} alt={titulo} />
      <div className="info-popular-products">
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <BotaoShopNow classe={classeBotao} />
      </div>
    </div>
  );
}

export default ProdutoPopular;
