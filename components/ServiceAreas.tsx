import "./ServiceAreas.css";

export default function ServiceAreas() {
  return (
    <section className="service-section">
      <div className="service-container">
        <h2>Our Service Areas</h2>

        <div className="service-grid">
          <div className="service-item">
            <h3>Kolkata</h3>
            <p>
              Complete coverage across metropolitan Kolkata and surrounding
              areas with rapid response times.
            </p>
          </div>

          <div className="service-item">
            <h3>Agartala</h3>
            <p>
              Serving Tripura's capital with full installation and support
              services for all kitchen types.
            </p>
          </div>

          <div className="service-item">
            <h3>Bihar</h3>
            <p>
              Comprehensive service across major cities including Patna, Gaya,
              and Bhagalpur.
            </p>
          </div>

          <div className="service-item">
            <h3>Jharkhand</h3>
            <p>
              Equipment supply and installation throughout Jharkhand including
              Ranchi and Jamshedpur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
