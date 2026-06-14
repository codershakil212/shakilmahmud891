import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="newsletter">

        <p className="sub-title">|| Get Latest Updates</p>

        <h2>Subscribe For Newsletter</h2>

        <div className="newsletter-box">
          <input
            type="email"
            placeholder="demo@example.com"
          />

          <button>Subscribe Now</button>
        </div>

      </div>


      <div className="footer-bottom">

        <div className="footer-item">
          <div className="icon">📞</div>
          <p>01774046891</p>
        </div>

        <div className="footer-item">
          <div className="icon">✉</div>
          <p>shakilrana000msr@gmail.com</p>
        </div>

        <div className="socials">
          <a href="https://facebook.com/shakilmahmud891" target="_blank">
<span>f</span></a>
          <span>o</span>
          <span>▶</span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;