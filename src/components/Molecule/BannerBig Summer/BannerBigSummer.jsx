import React from "react";
import "./index.scss";
import BotaoShopNow from "@/components/Atom/BotaoShopNow/BotaoShopNow";

function BannerBigSummer() {
  return (
    <section className="container-fluid bg-bigSummer p-0">
      <div className="banner-bigSummer">
        <div className="info-bannerBigSummer">
          <h2>
            Big Summer
            <strong> Sale</strong>
          </h2>
          <br />
          <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>

          <BotaoShopNow classe="btn-shopNow-white" />
        </div>
      </div>
      {/* <img
        src="./banner-big-summer.svg"
        className="w-100"
        style={{ height: "100vh" }}
      /> */}
    </section>
  );
}

export default BannerBigSummer;
