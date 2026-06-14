import React, { useEffect, useRef, useState } from "react";
import "./Progressbar.css";

const statsData = [
  { id: 1, value: 258, suffix: "+", label: "Happy Clients" },
  { id: 2, value: 590, suffix: "K", label: "Project Complete" },
  { id: 3, value: 28, suffix: "+", label: "Years of Experience" },
];

export default function Progressbar() {
  return (
    <section className="progress-section">
      <div className="progress-container">
        {statsData.map((item) => (
          <CounterCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

function CounterCard({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef(null);

  // Start animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Counter logic
  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [startAnimation, value]);

  return (
    <div className="progress-card" ref={ref}>
      <h2 className="counter">
        {count}
        {suffix}
      </h2>
      <p className="label">{label}</p>
    </div>
  );
}