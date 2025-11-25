import React from "react";

const items = [
  {
    icon: "ri-bar-chart-box-line",   // Energy Auditing icon
    title: "Energy Auditing",
    text: "Comprehensive remote property assessments using Solocator and satellite imagery for ECO4 compliance with 98% accuracy"
  },
  {
    icon: "ri-file-shield-2-line",   // Compliance Documentation icon
    title: "Compliance Documentation",
    text: "Standardized GBIS evidence packages and ECO4 submission documentation with 100% compliance success rate"
  },
  {
    icon: "ri-global-line",          // Remote Coordination icon
    title: "Remote Coordination",
    text: "Cross-border team management between Pakistan and UK operations, reducing project completion time by 40%"
  }
];


export default function CoreExpertise() {
  return (
    <section className="expertise-section py-5">
      <div className="container text-center">
        <h2 className="expertise-title">Core Expertise</h2>
        <p className="expertise-sub">
          Specialized services in remote energy auditing and compliance for UK<br />
          government schemes
        </p>

        <div className="expertise-grid mt-5">
          {items.map((item, i) => (
            <div key={i} className="expertise-card">
                <div className="expertise-icon-box">
                <i className={item.icon + " expertise-icon"}></i>
                </div>

              <h5 className="expertise-card-title">{item.title}</h5>
              <p className="expertise-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
