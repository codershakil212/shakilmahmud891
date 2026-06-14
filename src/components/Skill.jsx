import React, { useEffect, useRef, useState } from "react";
import "./Skill.css";

const skillsData = [
  { name: "Communication", percentage: 75 },
  { name: "Leadership", percentage: 70 },
  { name: "Teamwork", percentage: 90 },
  { name: "Flexibility", percentage: 80 },
];

const Skill = () => {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [counts, setCounts] = useState(
    skillsData.map(() => 0)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Count Up Animation
  useEffect(() => {
    if (startAnimation) {
      skillsData.forEach((skill, index) => {
        let start = 0;
        const end = skill.percentage;
        const duration = 1000;
        const incrementTime = 20;
        const step = end / (duration / incrementTime);

        const counter = setInterval(() => {
          start += step;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }

          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(start);
            return newCounts;
          });
        }, incrementTime);
      });
    }
  }, [startAnimation]);

  return (
    <section className="skill-section" ref={sectionRef}>
      <div className="skill-container">
        
        {/* Left Side */}
        <div className="skill-left">
          <p className="skill-subtitle">|| Special Skills</p>
          <h2 className="skill-title">
            My Special Skill <br /> Field Here.
          </h2>

          <button className="resume-btn">
            Get Resume <span className="download-icon">⬇</span>
          </button>
        </div>

        {/* Right Side */}
        <div className="skill-right">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{counts[index]}%</span>
              </div>

              <div className="progress-bar">
                <div
                  className={`progress-fill ${
                    startAnimation ? "animate" : ""
                  }`}
                  style={{
                    width: startAnimation
                      ? `${skill.percentage}%`
                      : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skill;