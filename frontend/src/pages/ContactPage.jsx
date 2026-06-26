import { useState } from "react";
import Footer from "../components/layout/Footer";
import "./ContactPage.css";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      alert("Please fill all fields");
      return;
    }

    setSuccess("✅ Message sent successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <section className="contact">

        <div className="contact-box">

          <h1>Contact Us</h1>

          <p>
             Fill out the form below.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

          {success && <p className="success">{success}</p>}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ContactPage;