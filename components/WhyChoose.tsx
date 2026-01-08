"use client";

import { useEffect, useState } from "react";
import "./WhyChoose.css";

function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <h3>{count}+</h3>;
}

export default function WhyChoose() {
  return (
    <section className="why-section">
      <div className="why-container">
        {/* LEFT */}
        <div className="why-text">
          <h2>Why Leading Businesses Choose Metrotel</h2>

          <p>
            With over 15 years of experience serving the commercial kitchen
            industry, Metrotel Kitchen Equipments has become the trusted partner
            for businesses across Eastern India. We combine deep industry
            knowledge with commitment to quality and customer satisfaction.
          </p>

          <p>
            Our team of experts understands the unique challenges of commercial
            kitchen operations. From initial consultation through installation
            and ongoing support, we're with you every step of the way.
          </p>
        </div>

        {/* RIGHT */}
        <div className="why-image">
          <img src="/bg.webp" alt="Kitchen Planning" />
        </div>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat">
          <Counter end={500} />
          <span>Projects Completed</span>
          <p>Successfully delivered across hotels, restaurants, and cloud kitchens</p>
        </div>

        <div className="stat">
          <Counter end={15} />
          <span>Years Experience</span>
          <p>Industry expertise serving commercial kitchen needs</p>
        </div>

        <div className="stat">
          <h3>4</h3>
          <span>States Covered</span>
          <p>Comprehensive service across Eastern India</p>
        </div>

        <div className="stat">
          <h3>24/7</h3>
          <span>Support Available</span>
          <p>Round-the-clock assistance for your operations</p>
        </div>
      </div>
    </section>
  );
}
