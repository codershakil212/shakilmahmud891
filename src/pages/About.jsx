import React, { useState } from "react";
import "./About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import myCV from "../assets/images/My CV.docx";

const About = () => {

const [tab,setTab] = useState("education")

return (
    <>
    <Navbar/>
<div className="about-page">

{/* HERO SECTION */}

<div className="about-hero">

<h1>About Us</h1>

<div className="breadcrumb">
<span>Home</span>
<span className="divider">||</span>
<span className="active">About</span>
</div>

</div>


{/* ABOUT CONTENT */}

<div className="about-content">

<div className="about-left">

<div className="video-box">

<div className="play-btn">▶</div>

<a href={myCV} download>
  <button className="resume-btn">
    Get Resume ⬇
  </button>
</a>

</div>

</div>


<div className="about-right">

<h2>I’m Shakil Mahmud</h2>

<h3>
UI/UX designer specializing in
Wordpress Elementor.
</h3>

<p>
Lorem Ipsum is simply dummy text of the printing
and typesetting industry has been the industry's
standard dummy text ever since the 1500s.
</p>

</div>

</div>


{/* TOGGLE SECTION */}

<div className="timeline-section">

<div className="tabs">

<button
className={tab === "education" ? "active" : ""}
onClick={()=>setTab("education")}
>
Education
</button>

<button
className={tab === "experience" ? "active" : ""}
onClick={()=>setTab("experience")}
>
Experience
</button>

</div>


<div className="timeline">

{tab === "education" && (

<div className="timeline-item">

<div className="year">2022  - 2026</div>

<div className="details">
<h3>Diploma In Engineering </h3>
<p>Bailybridge Agriculture & Polytechnic Institute</p>
</div>

</div>

)}


{tab === "experience" && (

<div className="timeline-item">

<div className="year">2025 - 2026</div>

<div className="details">
<h3>Frontend Web Developer</h3>
<p>Inspired IT</p>
</div>

</div>

)}

</div>

</div>

</div>
<Footer/>
</>
)
}

export default About