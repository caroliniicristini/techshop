import React from "react";
import ProdutosSugestao from "@/components/Atom/ProdutosSugestao/ProdutosSugestao";
import "./index.scss";
import BotaoShopNow from "@/components/Atom/BotaoShopNow/BotaoShopNow";

function ProductSuggestions() {
  const produtosSugestao = [
    {
      titulo: "Playstation 5",
      descricao:
        "Incredibly powerful CPUs, GPUs, and an SSD with integrated IO will redefine your PlayStation experience.",
      classeBotao: null,
      imgSrc: "./playstation.svg",
    },
    {
      className: "bg-light-gray",
      titulo: "Apple AirPods Max",
      descricao: "Computational audio. Listen, it's powerful",
      classeBotao: null,
      imgSrc: "./airPods.svg",
    },
    {
      className: "bg-dark text-light",
      titulo: "Apple Vision Pro",
      descricao: "An immersive way to experience entertainment",
      classeBotao: null,
      imgSrc: "./appleVision.svg",
    },
    {
      className: "bg-light-gray",
      titulo: "Macbook Air",
      descricao:
        "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.",
      classeBotao: "btn-shopNow-black",
      imgSrc: "./macbook.svg",
    },
  ];

  const produtosSugestaoMobile = [
    {
      className: "bg-light-gray",
      titulo: "Apple AirPods Max",
      descricao: "Computational audio. Listen, it's powerful",
      classeBotao: null,
      imgSrc: "./mobile/airPods-mobile.svg",
    },
    {
      className: "bg-dark text-light",
      titulo: "Apple Vision Pro",
      descricao: "An immersive way to experience entertainment",
      classeBotao: null,
      imgSrc: "./mobile/appleVision-mobile.svg",
    },
    {
      titulo: "Playstation 5",
      descricao:
        "Incredibly powerful CPUs, GPUs, and an SSD with integrated IO will redefine your PlayStation experience.",
      classeBotao: null,
      imgSrc: "./mobile/playstation-mobile.svg",
    },

    {
      className: "bg-light-gray",
      titulo: "Macbook Air",
      descricao:
        "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.",
      classeBotao: "btn-shopNow-black",
      imgSrc: "./mobile/macbook-mobile.svg",
    },
  ];

  return (
    <section className="sugestoes-produtos">
      <div className="container-fluid p-0">
        {/* DESKTOP */}
        <div className="row d-none d-md-flex">
          <div className="col-md-6 d-flex flex-column p-0">
            <div className="mb-2">
              <ProdutosSugestao
                titulo={produtosSugestao[0].titulo}
                descricao={produtosSugestao[0].descricao}
                imgSrc={produtosSugestao[0].imgSrc}
              />
            </div>
            <div className="d-flex">
              <div className="w-50">
                <ProdutosSugestao
                  className={produtosSugestao[1].className}
                  titulo={produtosSugestao[1].titulo}
                  descricao={produtosSugestao[1].descricao}
                  imgSrc={produtosSugestao[1].imgSrc}
                />
              </div>
              <div className="w-50">
                <ProdutosSugestao
                  titulo={produtosSugestao[2].titulo}
                  descricao={produtosSugestao[2].descricao}
                  imgSrc={produtosSugestao[2].imgSrc}
                  className={produtosSugestao[2].className}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 product-macbook">
            <ProdutosSugestao
              imgSrc={produtosSugestao[3].imgSrc}
              titulo={produtosSugestao[3].titulo}
              descricao={produtosSugestao[3].descricao}
              classeBotao={produtosSugestao[3].classeBotao}
              className={produtosSugestao[3].className}
            />
          </div>
        </div>

        {/* MOBILE */}
        <div className="row d-md-none sugestoes-produtos-mobile">
          <div className="col-12 text-center wrapper-product">
            <ProdutosSugestao
              titulo={produtosSugestaoMobile[0].titulo}
              descricao={produtosSugestaoMobile[0].descricao}
              imgSrc={produtosSugestaoMobile[0].imgSrc}
            />
          </div>
          <div className="col-12 text-center wrapper-product">
            <ProdutosSugestao
              className={produtosSugestaoMobile[1].className}
              titulo={produtosSugestaoMobile[1].titulo}
              descricao={produtosSugestaoMobile[1].descricao}
              imgSrc={produtosSugestaoMobile[1].imgSrc}
            />
          </div>
          <div className="col-12 text-center wrapper-product">
            <ProdutosSugestao
              className={produtosSugestaoMobile[2].className}
              titulo={produtosSugestaoMobile[2].titulo}
              descricao={produtosSugestaoMobile[2].descricao}
              imgSrc={produtosSugestaoMobile[2].imgSrc}
            />
          </div>
          <div className="col-12 text-center wrapper-product">
            <ProdutosSugestao
              imgSrc={produtosSugestaoMobile[3].imgSrc}
              titulo={produtosSugestaoMobile[3].titulo}
              descricao={produtosSugestaoMobile[3].descricao}
              classeBotao={produtosSugestaoMobile[3].classeBotao}
              className={produtosSugestaoMobile[3].className}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSuggestions;
