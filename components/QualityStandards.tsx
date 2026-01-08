import "./QualityStandards.css";

export default function QualityStandards() {
  return (
    <section className="quality-section">
      <div className="quality-container">
        {/* LEFT CONTENT */}
        <div className="quality-content">
          <h2>Quality Standards & Certifications</h2>

          <h3>Commitment to Excellence</h3>

          <p>
            All equipment we supply meets stringent quality and safety standards.
            We partner exclusively with manufacturers who maintain ISO
            certifications and comply with food safety regulations.
          </p>

          <ul>
            <li>NSF/ANSI certified equipment for food safety</li>
            <li>Energy-efficient solutions reducing operational costs</li>
            <li>Stainless steel construction for hygiene and durability</li>
            <li>Compliance with local health department requirements</li>
            <li>Warranty coverage on all major equipment</li>
            <li>Regular maintenance programs available</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="quality-image">
          <img src="/bg.webp" alt="Quality Certifications" />
        </div>
      </div>
    </section>
  );
}
