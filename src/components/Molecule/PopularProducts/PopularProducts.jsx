import React from "react";
import "./index.scss";
import ProdutoPopular from "@/components/Atom/ProdutoPopular/ProdutoPopular";

function PopularProducts() {
  const produtos = [
    {
      imgSrc: "./popularProducts.svg",
      titulo: "Popular Products",
      descricao:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      classeBotao: "btn-shopNow-black",
      corFundo: "bg-white",
    },
    {
      imgSrc: "./popularProducts.svg",
      titulo: "Samsung Galaxy ",
      descricao:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      classeBotao: "btn-shopNow-black",
      corFundo: "bg-light-gray",
    },
    {
      imgSrc: "./popularProducts.svg",
      titulo: "Ipad Pro",
      descricao:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      classeBotao: "btn-shopNow-black",
      corFundo: "bg-dark-gray",
    },
    {
      imgSrc: "./popularProducts.svg",
      titulo: "Macbook Pro",
      descricao:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      classeBotao: "btn-shopNow-white",
      corFundo: "bg-dark",
    },
  ];

  return (
    <>
      <section className="container-fluid popular-products">
        <div className="row">
          {produtos.map((produtos, index) => (
            <ProdutoPopular
              key={index}
              imgSrc={produtos.imgSrc}
              titulo={produtos.titulo}
              descricao={produtos.descricao}
              classeBotao={produtos.classeBotao}
              corFundo={produtos.corFundo}
            />
          ))}
        </div>
      </section>

      {/* VERSAO MOBILE - Carrossel */}
    </>
  );
}

export default PopularProducts;
