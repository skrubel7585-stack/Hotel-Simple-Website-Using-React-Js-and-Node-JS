import "./EquipmentRange.css";

export default function EquipmentRange() {
  return (
    <section className="equipment-section">
      <div className="equipment-container">
        <h2>Comprehensive Equipment Range</h2>

        <p className="equipment-subtitle">
          We supply and install a complete range of commercial kitchen equipment
          from trusted manufacturers. Every piece is selected for durability,
          efficiency, and performance in high-demand environments.
        </p>

        <div className="equipment-grid">
          <div className="equipment-item">
            <span className="icon">🍳</span>
            <h3>Cooking Ranges & Ovens</h3>
            <p>
              High-capacity gas and electric ranges, commercial ovens, and
              specialized cooking equipment designed for professional kitchens
              handling high volumes.
            </p>
          </div>

          <div className="equipment-item">
            <span className="icon">🧊</span>
            <h3>Refrigeration Systems</h3>
            <p>
              Walk-in coolers, reach-in refrigerators, freezers, and blast
              chillers that maintain precise temperature control for food safety
              and quality.
            </p>
          </div>

          <div className="equipment-item">
            <span className="icon">🌀</span>
            <h3>Exhaust & Ventilation</h3>
            <p>
              Complete hood systems, exhaust fans, and ventilation solutions
              ensuring proper air quality and compliance with safety regulations.
            </p>
          </div>

          <div className="equipment-item">
            <span className="icon">🧰</span>
            <h3>Prep Tables & Workstations</h3>
            <p>
              Stainless steel preparation tables, cutting boards, and
              specialized workstations designed for efficient food preparation
              workflows.
            </p>
          </div>

          <div className="equipment-item">
            <span className="icon">🧼</span>
            <h3>Dishwashing Systems</h3>
            <p>
              Commercial dishwashers, glasswashers, and utensil cleaning systems
              that ensure hygiene standards while maximizing efficiency.
            </p>
          </div>

          <div className="equipment-item">
            <span className="icon">📦</span>
            <h3>Storage Solutions</h3>
            <p>
              Shelving systems, dry storage units, and organizational equipment
              optimizing space while maintaining easy access to supplies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
