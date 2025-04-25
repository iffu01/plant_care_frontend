import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import BannerCard from "../components/home/BannerCard";
import Banner from "../components/home/Banner";
import PetCare from "../components/home/PetCare";
import OurServices from "../components/home/OurServices";
import PetSickBanner from "../components/home/PetSickBanner";
import Doctors from "../components/home/Doctors";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <BannerCard />
      <PetCare />
      <OurServices />
      <PetSickBanner />
      <Doctors />
      <Footer />
    </div>
  );
};

export default HomePage;
