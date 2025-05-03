import React from "react";
import "./ContactChurch.css";
import Hero from "../Components/Hero";

const ContactChurch = () => {
  return (
    <>
      <Hero title="Contact Us" />
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-details">
            <h2>Church Address</h2>
            <p>Zone 3, Nieves, San Leonardo, Nueva Ecija Philippines</p>
            <h2>Email</h2>
            <p>lwbc.nuevaecija@gmail.com</p>
            <h2>Phone</h2>
            <p>0998 219 2200</p>
          </div>
          <form className="contact-form">
            <h2>Send Us a Message</h2>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactChurch;
