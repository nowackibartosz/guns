import React, { useState } from "react";
import "./ContactMe.css";
import axios from "axios";
import { toast } from "react-toastify";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="central-form">
      <h2 className="titl">Podziel się opinią o grze</h2>
      <form onSubmit={submitForm}>
        <p>{banner}</p>
        <label htmlFor="name">Imię</label>
        <input type="text" onChange={handleName} value={name} />

        <label htmlFor="email">Email</label>
        <input type="email" onChange={handleEmail} value={email} />

        <label htmlFor="message">Wiadomość</label>
        <textarea type="text" onChange={handleMessage} value={message} />

        <div className="send-btn">
          <button type="submit">WYŚLIJ</button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
