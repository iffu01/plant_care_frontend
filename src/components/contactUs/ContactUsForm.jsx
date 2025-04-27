import React from "react";
import img from "../../assets/doctorImg.png";
const ContactUsForm = () => {
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
        <form>
          <div className="flex flex-col mb-4">
            <label className="text-xl font-semibold text-gray-600 mb-2">
              Your Name
            </label>
            <input
              type="text"
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
              placeholder="your email"
              className="border rounded border-gray-600 p-4 w-full bg-gray-100"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-xl font-semibold text-gray-600 mb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="border rounded border-gray-600 p-4 w-full bg-gray-100"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-xl font-semibold text-gray-600 mb-2">
              Message
            </label>
            <textarea
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
