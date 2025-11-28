import React from "react";
import { Link } from "react-router-dom";
import MyCV from "../assets/MyCV.pdf";

export default function ReadyToCollaborate() {
  return (
    <section className="cta-wrapper">
      <div className="container">
        <div className="cta-box">
          <h2 className="cta-title">Ready to Collaborate?</h2>
          <p className="cta-text">
            Open to opportunities in energy efficiency consulting, sustainability
            projects, and remote coordination roles
          </p>

          <div className="cta-buttons">
            <Link to="/contactme" className="cta-btn teal-button">
              Contact Me <span className="arrow">→</span>
            </Link>

            <a
              href={MyCV}
              download
              className="cta-btn outline-button"
            >
              <i className="ri-file-download-line"></i> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
