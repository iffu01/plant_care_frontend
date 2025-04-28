import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import ContactInfo from "../components/contactUs/ContactInfo";
import Banner from "../components/home/Banner";
import ContactUsForm from "../components/contactUs/ContactUsForm";
import Footer from "../components/Footer";
import ContactBanner from "../components/contactUs/ContactBanner";
const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <ContactBanner />

      <div className="container my-20">
        <ContactInfo />
      </div>
      <div className="container my-20">
        <ContactUsForm />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
