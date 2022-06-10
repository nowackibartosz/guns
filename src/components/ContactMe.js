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
    <div className="main-container fade-in">
      <div className="central-form">
        <div className="col">
          <h2 className="title">h</h2>{" "}
          <a href="https://web.facebook.com/">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="https://web.facebook.com/">
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://www.youtube.com/">
            <i className="fa fa-youtube-square" />
          </a>
          <a href="https://twitter.com/Ehiedu_baba">
            <i className="fa fa-twitter" />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? <b className="load"></b> : ""}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
