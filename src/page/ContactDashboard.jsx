import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Swal from "sweetalert2";

const ContactDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [change, setChange] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/api/contact")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, [change]);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/contact/${id}`, {
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
      <div className=" w-full grid grid-cols-2 gap-2">
        {contacts.map((contact) => (
          <div key={contact._id} className="border p-4">
            <h2 className="font-bold">{contact.name}</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.message}</p>
            <button
              onClick={() => handleDelete(contact._id)}
              className="btn-primary"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDashboard;
