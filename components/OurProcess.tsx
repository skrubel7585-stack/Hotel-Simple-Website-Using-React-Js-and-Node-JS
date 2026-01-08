import "./OurProcess.css";

export default function OurProcess() {
  return (
    <section className="process-section">
      <div className="process-container">
        <h2>Our Process: From Consultation to Completion</h2>

        <p className="process-subtitle">
          We've refined our approach over hundreds of successful projects to
          ensure seamless execution and outstanding results. Each phase is
          carefully managed by experienced professionals.
        </p>

        <div className="process-grid">
          <div className="process-item">
            <span className="step">01</span>
            <h3>Initial Consultation</h3>
            <p>
              We begin with understanding your specific needs, business type,
              space constraints, and operational requirements. Our experts visit
              your location for detailed assessment.
            </p>
          </div>

          <div className="process-item">
            <span className="step">02</span>
            <h3>Custom Design</h3>
            <p>
              Our team creates optimized kitchen layouts maximizing workflow
              efficiency. We consider traffic patterns, safety requirements, and
              future expansion needs.
            </p>
          </div>

          <div className="process-item">
            <span className="step">03</span>
            <h3>Equipment Selection</h3>
            <p>
              We recommend specific equipment based on your menu, volume
              expectations, and budget. Every piece is chosen for reliability
              and performance.
            </p>
          </div>

          <div className="process-item">
            <span className="step">04</span>
            <h3>Professional Installation</h3>
            <p>
              Certified technicians handle complete installation including
              electrical, plumbing, and ventilation connections. We ensure all
              equipment meets safety standards.
            </p>
          </div>

          <div className="process-item">
            <span className="step">05</span>
            <h3>Training & Support</h3>
            <p>
              Staff training on equipment operation and maintenance. Ongoing
              24/7 support ensures your kitchen operates smoothly without
              unexpected downtime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
