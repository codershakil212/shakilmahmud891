import React, { useEffect, useState, useCallback } from "react";
import "./Testimonial.css";
import Footer from "./Footer";

const initialReviews = [
  { name: "Rahim Ahmed", comment: "Amazing service and very fast delivery.", rating: 5 },
  { name: "Sadia Islam", comment: "Quality was really good.", rating: 4 },
  { name: "Karim Uddin", comment: "Highly recommended seller.", rating: 5 },
  { name: "Nusrat Jahan", comment: "Support team was very helpful.", rating: 4 },
];

const Testimonial = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [index, setIndex] = useState(0);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  // ---------------- Manual slide functions ----------------
  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  // ---------------- Auto sliding ----------------
  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(slider);
  }, [nextSlide]); // dependency safe

  // ---------------- Add review ----------------
  const addReview = () => {
    if (!name || !comment) return;
    const newReview = { name, comment, rating };
    setReviews([...reviews, newReview]);
    setName("");
    setComment("");
    setRating(5);
  };

  // ---------------- Determine visible cards ----------------
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleReviews = isMobile
    ? [reviews[index % reviews.length]]
    : [
        reviews[index % reviews.length],
        reviews[(index + 1) % reviews.length],
      ];

  return (
    <>
    <div className="testimonial-section">

      <div className="slider-container">
        <button className="prev-btn" onClick={prevSlide}>‹</button>

        <div className="slider">
          {visibleReviews.map((review, i) => (
            <div className="card" key={i}>
              <div className="stars">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <p className="comment">"{review.comment}"</p>
              <h4 className="buyer-name">— {review.name}</h4>
            </div>
          ))}
        </div>

        <button className="next-btn" onClick={nextSlide}>›</button>
      </div>

      <div className="review-form">
        <h3>Leave a Review</h3>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>
        <button onClick={addReview}>Submit Review</button>
      </div>

    </div>
  <Footer/>
    </>
  );
};

export default Testimonial;