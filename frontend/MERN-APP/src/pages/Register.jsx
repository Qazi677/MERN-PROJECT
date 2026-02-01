import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    eamil: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/register", formData);
    navigate("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your name here"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />{" "}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email here"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="email"
            onChange={() => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
        </div>
        <button>register</button>
      </form>
    </>
  );
}
