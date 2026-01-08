import "./KitchenSolutions.css";

export default function KitchenSolutions() {
  return (
    <section className="kitchen-section">
      <div className="container">
        <h2 className="title">
          Specialized Commercial Kitchen Setup Solutions
        </h2>

        <p className="subtitle">
          From concept to completion, we deliver turnkey commercial kitchen
          solutions tailored to your business needs. Whether you're launching
          a new venture or upgrading existing facilities, our expertise ensures
          optimal workflow and efficiency.
        </p>

        <div className="card-grid">
          <div className="card">
            <div className="icon">🏨</div>
            <h3>Hotel Kitchen Setup</h3>
            <p>
              Complete kitchen solutions for new hotel projects or comprehensive
              renovations. We design layouts that maximize efficiency and meet
              high-volume demands.
            </p>
          </div>

          <div className="card">
            <div className="icon">🍽️</div>
            <h3>Restaurant Setup</h3>
            <p>
              Full-service restaurant kitchen design and equipment supply. Our
              solutions balance functionality with space optimization for peak
              service periods.
            </p>
          </div>

          <div className="card">
            <div className="icon">☕</div>
            <h3>Cafe & Coffee Shop</h3>
            <p>
              Specialized equipment for cafes and coffee shops. We focus on
              creating efficient workflows for beverage preparation and light
              food service.
            </p>
          </div>

          <div className="card">
            <div className="icon">☁️</div>
            <h3>Cloud Kitchen Solutions</h3>
            <p>
              Efficient, space-optimized solutions for delivery-only kitchens.
              Maximize output while minimizing footprint with our streamlined
              designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
