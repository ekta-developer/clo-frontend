import React from "react";
import { MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <h1>We are here to help with your order, fit, and styling.</h1>

        <p className="contact-intro">
          Send your details and message. Our team will get back to you soon.
        </p>
      </div>

      <div className="contact-layout">
        <form className="contact-form-card" onSubmit={handleSubmit}>
          <div className="contact-form-heading">
            <div>
              <h2>How can we help?</h2>
            </div>
          </div>

          <div className="contact-form-grid">
            <div className="contact-field">
              <label htmlFor="name">Full name</label>

              <input id="name" type="text" placeholder="Enter your name" />
            </div>

            <div className="contact-field">
              <label htmlFor="contactEmail">Email address</label>

              <input
                id="contactEmail"
                type="email"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="contactPhone">Mobile number</label>

            <input
              id="contactPhone"
              type="tel"
              placeholder="Enter mobile number"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              rows={6}
              placeholder="Tell us what you need help with"
            />
          </div>

          <button type="submit" className="contact-primary-btn">
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-help">
        <h2>Need help?</h2>

        <p>
          Have a question about your order, delivery, return, exchange, size, or
          product details? Please reach out to our customer support team.
        </p>

        <div className="contact-help-details">
          <div>
            <h3>Address</h3>
            <p>CLO Fashion</p>
            <p>2nd Floor, XYZ Building, Delhi</p>
          </div>

          <div>
            <h3>Timings</h3>
            <p>10:00 AM - 7:00 PM</p>
            <p>Monday - Saturday</p>
          </div>

          <div>
            <h3>Call us at</h3>
            <p>+91 7042727387</p>
          </div>

          <div>
            <h3>Write to us at</h3>
            <p>info@clo.co.in</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
