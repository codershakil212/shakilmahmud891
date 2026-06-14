import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";
import image from "../assets/images/image.png";
function Hero() {
  return (
    <section className="hero">

      {/* Left Side */}
      <div className="hero-left">
        <h4>Hello, I'm</h4>

        <h1>Shakil Mahmud</h1>

        <h3>
          I'm a{" "}
          <span className="typing-skill">
            <Typewriter
              words={[
                "WordPress Expert",
                "Frontend Developer",
                "Video Editor",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h3>

        <p>
          I build modern, responsive and high-performance websites
          that help businesses grow online.
        </p>

        <div className="hero-btns">
          <a href="#contact" className="btn primary">Hire Me</a>
          <a href="#projects" className="btn secondary">View Work</a>
        </div>
      </div>

      {/* Right Side */}
      <div className="hero-right">
        <img src={image} alt="Hero" />
      </div>

    </section>
  );
}

export default Hero;