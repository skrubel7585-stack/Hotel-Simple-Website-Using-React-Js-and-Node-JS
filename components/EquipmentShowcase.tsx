import "./EquipmentShowcase.css";

export default function EquipmentShowcase() {
  return (
    <section className="showcase-section">
      <div className="showcase-container">
        <h2>Equipment Showcase</h2>

        <p className="showcase-subtitle">
          Explore our range of commercial-grade kitchen equipment designed for
          durability and performance in demanding professional environments.
        </p>

        <div className="showcase-grid">
          <img src="/bg.webp" alt="Cooking Range" />
          <img src="/bg.webp" alt="Refrigerator" />
          <img src="/bg.webp" alt="Exhaust Hood" />
          <img src="/bg.webp" alt="Cooking Station" />
          <img src="/bg.webp" alt="Dishwasher" />
          <img src="/bg.webp" alt="Oven" />
        </div>
      </div>
    </section>
  );
}
