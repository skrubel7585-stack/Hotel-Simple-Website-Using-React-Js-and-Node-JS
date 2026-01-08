import React from "react";
import "./KitchenQuote.css";


export default function KitchenQuote() {
  return (
    <section className="quote-section">
      <div className="quote-container">
        
        {/* LEFT CONTENT */}
        <div className="quote-left">
          <h2>Get Your Custom Kitchen Quote Today</h2>

          <h4>Ready to Transform Your Commercial Kitchen?</h4>

          <p>
            Contact our expert team for a free consultation and customized
            quote. We'll assess your needs, design an optimal solution, and
            provide transparent pricing for your complete kitchen setup.
          </p>

          <div className="contact-info">
            <h5>Contact Information:</h5>
            <ul>
              <li><strong>Phone:</strong> +91 98765 43210</li>
              <li><strong>Email:</strong> sales@metrotelkitchen.com</li>
              <li><strong>Support:</strong> support@metrotelkitchen.com</li>
            </ul>
          </div>

          <div className="highlight-box">
            Our kitchen specialist will contact you within{" "}
            <strong>2 hours</strong> to discuss your project requirements and
            schedule a site visit.
          </div>

          <div className="secure-box">
            <span className="checkbox"></span>
            <p>
              <strong>Secure & Confidential:</strong> Your information is
              protected. We never share client data with third parties.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="quote-right">
          <img src="/bg.webp" alt="Kitchen Consultation Illustration" />

          <div className="service-info">
            <p>
              <strong>Service Areas:</strong> Kolkata | Agartala | Bihar |
              Jharkhand
            </p>
            <p>
              <strong>Specializations:</strong> Hotels | Restaurants | Cafes |
              Cloud Kitchens | Takeaway Operations
            </p>
          </div>
        </div>
      </div>

      <div className="quote-footer">
        Metrotel Kitchen Equipments — Professional Commercial Kitchen Solutions
        Since 2008 || Design & Developed By Sk Rubel
      </div>
    </section>
  );
}
