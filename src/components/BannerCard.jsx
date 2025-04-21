import React from "react";
import Img1 from "../assets/snakeplant.jpg";
import Img2 from "../assets/outdoor.jpg";
import Img3 from "../assets/cactus cuver.jpg";
const BannerCard = () => {
  return (
    <div className="max-w-7xl mx-auto -mt-40 p-4">
      <div className="grid grid-cols-3 gap-4">
        <div
          className="banner-card"
          style={{ backgroundImage: `url(${Img1})` }}
        >
          <h1 className="banner-card-title">Indoor Plants</h1>
          <button className="btn-secondary">Visit Now</button>
        </div>
        <div
          className="banner-card"
          style={{ backgroundImage: `url(${Img2})` }}
        >
          <h1 className="banner-card-title">Outdoor Plants</h1>
          <button className="btn-secondary">Visit Now</button>
        </div>
        <div
          className="banner-card"
          style={{ backgroundImage: `url(${Img3})` }}
        >
          <h1 className="banner-card-title">Desert Plants</h1>
          <button className="btn-secondary">Visit Now</button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
