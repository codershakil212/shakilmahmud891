import React from "react";
import "./Contact.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
function Contact() {
  return (
    <>

    <Navbar/>
   
    <section className="contact-page">

      {/* HERO SECTION */}
      <div className="contact-hero">
        <h1>Contact Me</h1>

        <div className="breadcrumb">
          <span>Home</span>
          <span className="dot">•</span>
          <span>Contact</span>
        </div>
      </div>


      {/* CONTACT SECTION */}
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <div className="info-box">
            <h4>Phone:</h4>
            <p>0123456789</p>
          </div>

          <div className="info-box">
            <h4>Email:</h4>
            <p>demo@example.com</p>
          </div>

          <div className="info-box">
            <h4>Website:</h4>
            <p>www.example.com</p>
          </div>

          <div className="info-box">
            <h4>Address:</h4>
            <p>Your address goes here.</p>
          </div>


          <div className="follow">
            <h3>Follow Me</h3>

            <div className="socials">
              <span>f</span>
              <span>o</span>
              <span>in</span>
            </div>
          </div>

        </div>



        {/* RIGHT SIDE */}
        <div className="contact-right">

          {/* MAP */}
          <div className="map">
            <iframe
              src="https://maps.google.com/maps?q=melbourne&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="map"
            ></iframe>
          </div>

          {/* FORM TEXT */}
          <div className="contact-text">

            <p className="small-title">|| Get In Touch</p>

            <h2>
              If you have any project or need help. Contact me
            </h2>

            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

          </div>


          {/* FORM */}
          <form className="contact-form">

            <div className="form-grid">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />

              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
            </div>

            <textarea placeholder="Comment"></textarea>

            <button type="submit">Send Message</button>

          </form>

        </div>

      </div>

    </section>

    <Footer/>
    </>
  );
}

export default Contact;