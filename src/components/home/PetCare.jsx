import React from "react";
import img from "../../assets/dog_with_person_img.jpg";
import { IoPawOutline } from "react-icons/io5";
const PetCare = () => {
  return (
    <div className="container mt-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <img src={img} alt="img" className="col-span-1" />
      <div className="lg:col-span-2">
        <h2 className="text-orange-500 font-bold text-5xl mb-4">
          Welcome to Pets Care
        </h2>
        <p className="mb-8 text-2xl text-gray-700 font-semibold">
          Your pet's health and well-being are our top priority.
        </p>
        <p className="text-gray-600">
          Welcome to Pets Care — where your pet’s health and happiness come
          first. Our team of trusted veterinarians and pet care experts are
          dedicated to providing the highest quality care, helping your furry
          companions live healthier, happier lives.
        </p>

        <div className="grid grid-cols-2 gap-5 pt-8">
          <div className="flex gap-2">
            <div>
              <IoPawOutline className="bg-orange-400 w-18 h-18 rounded-full p-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Pet Grooming</h2>
              <p>
                Keep your pets looking and feeling their best with our
                professional grooming services. From baths and haircuts to nail
                trims and styling, we make sure your furry friends are clean,
                comfortable, and happy!
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <IoPawOutline className="bg-orange-400 w-18 h-18 rounded-full p-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Pet Hotel</h2>
              <p>
                Give your pets a home away from home at our Pet Hotel! With cozy
                spaces, loving care, and 24/7 attention, we make sure your furry
                friends feel safe, happy, and relaxed while you're away.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <IoPawOutline className="bg-orange-400 w-18 h-18 rounded-full p-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Vaccination</h2>
              <p>
                Protect your pet with essential vaccinations! At Pawmart, we
                offer safe and effective vaccines to shield your furry friends
                from common diseases, keeping them healthy, active, and full of
                life. Book your pet’s vaccination appointment today!
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <IoPawOutline className="bg-orange-400 w-18 h-18 rounded-full p-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Pet Care</h2>
              <p>
                At Pawmart, we believe every pet deserves expert care and
                endless love. From regular checkups to specialized treatments,
                our trusted veterinarians are here to keep your pets healthy,
                happy, and thriving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCare;
