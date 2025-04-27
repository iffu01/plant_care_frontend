import React from "react";
import img from "../../assets/doctorImg.png";
import { IoPawOutline } from "react-icons/io5";
const AboutPawMart = () => {
  return (
    <div className="container mt-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <img src={img} alt="img" className="col-span-1 bg-sky-100" />
      <div className="lg:col-span-2">
        <h2 className="text-orange-500 font-bold text-5xl mb-4">
          About Paw Mart
        </h2>
        <p className="mb-8 text-2xl text-gray-700 font-semibold">
          Your pet's health and well-being are our top priority.
        </p>
        <p className="text-gray-600">
          At Paw Mart, we believe that pets are family. Our mission is to
          provide exceptional veterinary care and health services to ensure your
          pets live their best, happiest lives. From routine checkups to
          treatment for illness, we are here to support your pet’s health every
          step of the way.
        </p>

        <div className="grid grid-cols-2 gap-5 pt-8">
          <div className="flex gap-2">
            <div>
              <IoPawOutline className="bg-orange-400 w-18 h-18 rounded-full p-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Caring & Trustworthy</h2>
              <p>
                At Pawmart, we understand how much your pets mean to you. That's
                why we’ve created a one-stop shop for all your pet health needs.
                From expert veterinary care to high-quality pet products, we’re
                committed to providing the best for your furry family members.
                Our trusted professionals ensure that your pets receive the
                love, attention, and care they deserve.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <IoPawOutline className="bg-orange-400 w-18 h-18 rounded-full p-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Community-Focused & Friendly
              </h2>
              <p>
                Pawmart was built on a simple idea — pets are family. We’re a
                passionate community of pet lovers dedicated to offering
                affordable and accessible healthcare for your pets. With online
                booking for veterinary appointments and a wide range of pet
                accessories, we make it easier than ever to give your pets the
                best care. We’re here to support your pets' health and
                happiness, every step of the way.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <IoPawOutline className="bg-orange-400 w-18 h-18 rounded-full p-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Professional & Experienced</h2>
              <p>
                At Pawmart, we’re more than just a pet health platform — we’re
                your partner in ensuring your pet lives a long, healthy life.
                With a network of experienced veterinarians and premium pet
                products, we make sure your pet receives the highest standard of
                care. Whether it’s an emergency or a routine check-up, we’re
                here for your pet, every day.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <IoPawOutline className="bg-orange-400 w-18 h-18 rounded-full p-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Fun & Light-Hearted</h2>
              <p>
                Pawmart is your pet's new best friend! From playful accessories
                to expert veterinary care, we’re all about making sure your pets
                live their best lives. We’re dedicated to providing affordable
                services and quality products to help your pets stay healthy,
                happy, and full of energy. So, whether it’s a check-up or a
                treat, Pawmart has got your pet covered!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPawMart;
