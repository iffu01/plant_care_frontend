import React, { useState } from "react";
import { FaPaw } from "react-icons/fa";

const adminUsername = "admin";
const adminPassword = "admin";

const Login = ({ setIsAdmin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName === adminUsername && password === adminPassword) {
      setIsAdmin(true);
    }
  };

  return (
    <div className="h-screen flex items-center">
      <div className="grid grid-cols-2 w-3xl mx-auto border border-gray-300 rounded-xl">
        <div className="bg-amber-500 h-[550px] rounded-l-xl flex flex-col justify-center p-4 gap-2">
          <h2 className="font-bold text-black text-4xl flex gap-2 items-center mb-8">
            <FaPaw className="-rotate-45" />
            <span>
              Paw<span className="text-white">Mart</span>
            </span>
          </h2>
          <h1 className="text-xl font-bold">Hello Admin</h1>
          <p className="">Welcome back! Please enter your details</p>
        </div>
        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center p-4 gap-4"
        >
          <h1 className="text-3xl font-bold">Login to Admin Panel</h1>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="User Name"
            className="input input-bordered w-full "
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input input-bordered w-full "
          />
          <button className=" btn-primary" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
