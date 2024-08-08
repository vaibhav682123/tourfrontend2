import React from "react";
import supp1 from "../../assets/supp1.jpeg"; // Adjust the path as needed

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message(Genuine messages only)</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-image-container">
        <img src={supp1} alt="Contact" />
      </div>
    </section>
  );
};

export default Contact;
