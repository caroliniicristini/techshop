import React from "react";
import "./index.scss";
import BotaoShopNow from "@/components/Atom/BotaoShopNow/BotaoShopNow";

function BannerBigSummer() {
  return (
    <section className="container-fluid banner-bigSummer p-0">
      <img src="./banner-big-summer.svg" className="w-100" />
      <div className="info-bannerBigSummer">
        <h2>
          Big Summer
          <strong> Sale</strong>
        </h2>
        <br />
        <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>

        <BotaoShopNow className="shop-now" />
      </div>
    </section>
  );
}

export default BannerBigSummer;
