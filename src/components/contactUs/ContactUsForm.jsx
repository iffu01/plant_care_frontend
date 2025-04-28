import React, { useEffect, useState } from "react";
import img from "../../assets/doctorImg.png";
import Swal from "sweetalert2";
const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, subject, message }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong!");
      })
      .then((data) => {
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your message has been sent successfully!",
        });
      })
      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        })
      );
  };

  return (
    <div>
      <h2 className="text-orange-500 font-bold text-5xl text-center mb-4">
        Send Us message
      </h2>
      <p className="text-center text-lg text-gray-600">
        Have questions or need assistance? We’re here to help! Send us a
        message, and our friendly team will get back to you as soon as possible
        to provide the support your pet deserves.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col mb-4">
            <label className="text-xl font-semibold text-gray-600 mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="your name"
              className="border rounded border-gray-600 p-4 w-full bg-gray-100"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-xl font-semibold text-gray-600 mb-2">
              Your Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your email"
              className="border rounded border-gray-600 p-4 w-full bg-gray-100"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-xl font-semibold text-gray-600 mb-2">
              Phone
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="your number"
              className="border rounded border-gray-600 p-4 w-full bg-gray-100"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-xl font-semibold text-gray-600 mb-2">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="border rounded border-gray-600 p-4 w-full bg-gray-100"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-xl font-semibold text-gray-600 mb-2">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="border rounded border-gray-600 p-4 w-full bg-gray-100"
            />
          </div>

          <div>
            <button className="btn-primary">Contact Us</button>
          </div>
        </form>
        <div className="flex justify-center bg-sky-50 rounded-lg">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
