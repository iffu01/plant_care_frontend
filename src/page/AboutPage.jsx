import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutBanner from "../components/aboutUs/AboutBanner";
import Doctors from "../components/home/Doctors";
import AboutPawMart from "../components/aboutUs/AboutPawMart";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <AboutBanner />
      <AboutPawMart />
      <Doctors />
      <Footer />
    </div>
  );
};

export default AboutPage;
