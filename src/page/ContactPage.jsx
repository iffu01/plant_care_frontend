import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import ContactInfo from "../components/contactUs/ContactInfo";
import Banner from "../components/home/Banner";
import ContactUsForm from "../components/contactUs/ContactUsForm";
import Footer from "../components/Footer";
const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
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
