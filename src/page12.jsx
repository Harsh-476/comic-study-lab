import React from "react";
import "./Creatives.css";

import curl from "./curl.png";
import leaf from "./leaf.png";
import star from "./star.png";

const Creatives = () => {
  return (
    <div>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Give+You+Glory&display=swap"
        rel="stylesheet"
      />

      <div className="title">Creatives: Comics</div>
      <div className="logout">LOG OUT</div>

      {/* DOODLES */}
      <img src={curl} className="img curl-top-left" alt="" />
      <img src={curl} className="img curl-right" alt="" />

      {/* LEAVES */}
      <img src={leaf} className="img leaf-left" alt="" />
      <img src={leaf} className="img leaf-right-top" alt="" />
      <img src={leaf} className="img leaf-right-mid" alt="" />

      {/* STARS */}
      <img src={star} className="img star-left" alt="" />
      <img src={star} className="img star-bottom" alt="" />
      <img src={star} className="img star-top1" alt="" />
      <img src={star} className="img star-top2" alt="" />
    </div>
  );
};

export default Creatives;