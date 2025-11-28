import React from "react";
import "../Styles/About.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Muhammad Akash Anwar | Energy Audit & ECO4 Compliance Specialist</title>
      </Helmet>

      <main className="about-page mb-5 mt-5">
        <div className="container wide">
          <header className="about-header">
            <h1 className="about-title">About Me</h1>
            <p className="about-sub">
              International energy audit professional with expertise in UK compliance frameworks
            </p>

            <div className="about-intro">
              <p>
                I am an internationally oriented professional specializing in remote energy auditing,
                sustainability documentation, and compliance for UK ECO4/GBIS frameworks. My work bridges
                international teams and regulatory requirements, ensuring precision in data accuracy,
                reporting, and workflow optimization.
              </p>
              <p>
                With a strong commitment to global leadership development and sustainable practices,
                I bring technical expertise in energy efficiency assessments combined with a strategic
                approach to cross-border project coordination. My experience spans from hands-on audit work
                to establishing standardized processes that enhance team efficiency and compliance outcomes.
              </p>
            </div>
          </header>

          <section className="about-cards row gx-5 gy-4 align-items-stretch">
            <div className="col-md-6 d-flex">
              <div className="info-card roomy d-flex flex-column">
                <div className="info-icon">
                  <i className="ri-briefcase-4-line"></i>
                </div>

                <div className="info-body">
                  <h4 className="info-title">Professional Experience</h4>

                  <div className="info-item">
                    <strong className="job-title">Remote Energy Audit &amp; Documentation Specialist</strong>
                    <div className="muted">Paramount Green Services</div>
                    <div className="muted small">2023 - Present</div>
                  </div>

                  <div className="info-item mt-4">
                    <strong className="job-title">Stock Manager</strong>
                    <div className="muted">Carrefour / Hyperstar</div>
                    <div className="muted small">2018 - 2019</div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="info-card roomy d-flex flex-column">
                <div className="info-icon">
                  <i className="ri-book-2-line"></i>
                </div>

                <div className="info-body">
                  <h4 className="info-title">Education</h4>

                  <div className="info-item">
                    <strong className="job-title">D.A.E Mechanical Technology</strong>
                    <div className="muted">Govt. College of Technology, Sargodha</div>
                  </div>

                  <div className="info-item mt-4">
                    <strong className="job-title">Matriculation</strong>
                    <div className="muted">F.G. Public High School, Sargodha</div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <section className="competencies mt-5">
            <div className="competencies-card roomy d-flex">
              <div className="competencies-icon">
                <i className="ri-award-line"></i>
              </div>

              <div className="competencies-body">
                <h4 className="competencies-title">Core Competencies</h4>

                <div className="competencies-grid">
                  <ul>
                    <li>Energy Auditing</li>
                    <li>Sustainability Reporting</li>
                    <li>Remote Project Coordination</li>
                  </ul>

                  <ul>
                    <li>ECO4/GBIS Compliance</li>
                    <li>Documentation Accuracy</li>
                    <li>MS Office / Acrobat / Solocator</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="leadership mt-5" style={{marginBottom:"80px"}}>
            <div className="lead-card">
              <div className="lead-left">
                <h4>Leadership Vision</h4>
                <p>
                  I aspire to contribute internationally to sustainable development, climate-aligned innovation,
                  and youth professional empowerment. My aim is to adopt European leadership models and apply
                  them in global contexts, bridging technical expertise with strategic vision for a more sustainable
                  future.
                </p>
              </div>

              <div className="lead-media" aria-hidden="true">
                <img src="/mnt/data/ebd9a42c-9c90-448d-8f50-59bb0ce791e4.png" alt="decorative" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
