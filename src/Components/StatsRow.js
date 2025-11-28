import React from "react";
const decoImage = "/mnt/data/34e45db0-9977-497b-8c25-5967115e7598.png";

const stats = [
  { value: "500+", label: "Remote Audits Completed" },
  { value: "98%", label: "Accuracy Rate" },
  { value: "2,500+", label: "Tonnes CO₂ Reduced" },
  { value: "100%", label: "Compliance Rate" },
];

export default function StatsRow() {
  return (
    <section className="stats-section py-5">
      <div className="container">
        <div className="stats-deco">
          <img src={decoImage} alt="decorative" />
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`stat-card ${i === 3 ? "active" : ""}`}
              role="group"
              tabIndex={0}
            >
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
