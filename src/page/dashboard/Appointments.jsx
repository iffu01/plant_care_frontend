import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router";
import Swal from "sweetalert2";
import { MdOutlineDelete } from "react-icons/md";

const Appointments = () => {
  const [contacts, setContacts] = useState([]);
  const [change, setChange] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/api/appointment")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, [change]);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/appointment/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Deleted") {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Deleted successfully!",
          });
          setChange(!change);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl text-center font-bold border-b border-gray-300 p-4 mb-5">
        Submited Appointments
      </h1>
      <div className=" w-full grid grid-cols-3 gap-4 p-4">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="border border-gray-600 border-dashed rounded-lg p-4 bg-amber-50"
          >
            <h2 className="font-bold text-center border-b border-gray-300 pb-2 mb-2">
              {contact.subject}
            </h2>
            <p className="font-bold">{contact.name}</p>
            <p className="font-semibold text-gray-500  text-sm">
              {contact.email}
            </p>
            <p className="text-gray-500">{contact.phone}</p>
            <p className="text-gray-500 mt-4">{contact.message}</p>
            <p className="mt-4 text-sm text-gray-700 border-t border-gray-300 pt-2">
              {new Date(contact.createdAt).toLocaleString()}
            </p>
            <button
              onClick={() => handleDelete(contact._id)}
              className=" cursor-pointer flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600 duration-300"
            >
              <MdOutlineDelete /> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
