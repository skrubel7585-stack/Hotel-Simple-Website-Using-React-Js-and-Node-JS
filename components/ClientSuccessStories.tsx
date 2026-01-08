import React from "react";
import "./ClientSuccessStories.css";

const stories = [
  {
    text: `Metrotel transformed our hotel kitchen with exceptional design and quality equipment. Their team understood our high-volume needs and delivered solutions that improved our operational efficiency by 40%.`,
    author: "Rajesh Kumar",
    role: "Hotel Director",
    location: "Kolkata",
  },
  {
    text: `As a cloud kitchen operator, space optimization was critical. Metrotel's innovative layout design allowed us to triple our production capacity in the same footprint. Outstanding service from start to finish.`,
    author: "Priya Sharma",
    role: "Cloud Kitchen Owner",
    location: "Agartala",
  },
  {
    text: `The 24/7 support makes all the difference. When equipment needs attention, their response time is impressive. They're true partners in our restaurant's success.`,
    author: "Amit Patel",
    role: "Restaurant Owner",
    location: "Ranchi",
  },
];

export default function ClientSuccessStories() {
  return (
    <section className="client-section">
      <h2 className="client-title">Client Success Stories</h2>

      <div className="client-grid">
        {stories.map((story, index) => (
          <div className="client-card" key={index}>
            <span className="quote-mark top">“</span>

            <div className="quote-content">
              <p>{story.text}</p>
              <div className="author">
                — <strong>{story.author}</strong>, {story.role}, {story.location}
              </div>
            </div>

            <span className="quote-mark bottom">”</span>
          </div>
        ))}
      </div>
    </section>
  );
}
