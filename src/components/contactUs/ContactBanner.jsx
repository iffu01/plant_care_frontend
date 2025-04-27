import React from "react";

import bgImg from "../../assets/doctors.jpg";
const ContactBanner = () => {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="h-[500px] flex  justify-center items-center ">
        <div className="bg-white opacity-70 px-12 py-4">
          <h1 className="font-bold text-5xl">Contact Us</h1>
          <p>
            Have questions or need assistance? We’re here to help! Reach out to
            us for any inquiries about our services, appointments, or pet care
            advice. Your pet's health and well-being are just a message away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
