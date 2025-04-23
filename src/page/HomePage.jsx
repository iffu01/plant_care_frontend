import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import BannerCard from "../components/home/BannerCard";
import Banner from "../components/home/Banner";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="-mt-12">
        <BannerCard />
      </div>
    </div>
  );
};

export default HomePage;
