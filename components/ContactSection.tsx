"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactSection.css";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_92vfc4e",
        "template_ih2dl7g",
        formRef.current!,
        "gwjvAvGjgGburMLG-"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.error(error);
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-text">
          <h2>Contact Us</h2>
          <p>
            Have questions or need a custom kitchen solution?
            Fill out the form and our team will get back to you shortly.
          </p>

          <div className="contact-info">
            <p>Email: support@yourcompany.com</p>
            <p>Phone: +91 9XXXXXXXXX</p>
            <p>24/7 Support Available</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Phone Number" />
          <textarea name="message" placeholder="Your Message" required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
