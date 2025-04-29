import React, { useState } from "react";
import { FaPaw } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Swal from "sweetalert2";

const BookAppointment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState(null);
  const bookAppointmentFunction = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, time }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong!");
      })
      .then((data) => {
        document.getElementById("my_modal_1").close();
        setEmail("");
        setPhone("");
        setName("");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your appointment has been booked successfully!",
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
      <h2 className="font-bold text-black text-center mb-8 text-2xl flex gap-2 items-center">
        <FaPaw className="-rotate-45" />
        Book An<span className="text-orange-500"> Appointment</span>
      </h2>
      <form className="flex flex-col gap-3" onSubmit={bookAppointmentFunction}>
        <input
          type="text"
          placeholder="Name"
          className="input w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="input w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          className="input w-full"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          placeholder="Date"
          className="input w-full"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <button className="btn-primary flex gap-2 items-center justify-center">
          <IoMdCall />
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
