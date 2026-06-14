import React from "react";
import "./Service.css";
import { FaLayerGroup, FaCode, FaPenNib } from "react-icons/fa";

function Service() {
  return (
    <section className="service-section">
      <div className="service-header">
        <p className="service-subtitle">|| My Services</p>
        <h2>Service Provide For My Clients.</h2>
      </div>

      <div className="service-container">
        
        {/* Card 1 */}
        <div className="service-card">
          <FaLayerGroup className="service-icon" />
          <h3>UI/UX Design</h3>
          <ul>
            <li>Landing Pages</li>
            <li>User Flow</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Mobile App Design</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="service-card">
          <FaCode className="service-icon" />
          <h3>Development</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Animation</li>
            <li>WordPress</li>
            <li>React</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="service-card">
          <FaPenNib className="service-icon" />
          <h3>Illustration</h3>
          <ul>
            <li>Character Design</li>
            <li>Icon Set</li>
            <li>Illustration Guide</li>
            <li>Illustration Set</li>
            <li>Motion Graphic</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Service;