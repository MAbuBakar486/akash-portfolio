import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ProjectsList from "../data/Projectslist.js";
import { projectsdata } from "../data/projectsdata.js";
import CTA from "../Components/CTA.js";
import StatsRow from "../Components/StatsRow.js";
import CoreExpertise from "../Components/CoreExpertise.js";
import heroimage from "../assets/hero-image.jpg";

// Hero-only Home component — preserves look & feel of your original hero
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Muhammad Akash Anwar | Energy Audit &amp; ECO4 Compliance Specialist</title>
        <meta
          name="description"
          content="Remote Energy Audit & Documentation Specialist with expertise in ECO4/GBIS compliance and UK energy efficiency frameworks."
        />
      </Helmet>

      <main>
        <section className="py-5" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}>
          <div className="container">
            <div className="row align-items-center">
              {/* Left: Text */}
              <div className="col-lg-7 col-md-12">
                <div className="hero-left">
                  <span className="tag">Energy Efficiency Specialist</span>

                  <h1 className="hero-title">
                    Muhammad Akash
                    <br />
                    Anwar
                  </h1>

                  <p className="hero-sub">
                    Remote Energy Audit & Documentation Specialist with expertise in
                    ECO4/GBIS compliance and UK energy efficiency frameworks. Accurate
                    audit reporting, retrofit recommendations, and compliance
                    documentation for social housing and private portfolios.
                  </p>

                  <div className="hero-buttons d-flex flex-wrap gap-3 mt-4">
                    <Link to="/projects" className="hero-btn dark-btn">
                      View Projects <span className="arrow">→</span>
                    </Link>

                    <Link to="/contact" className="hero-btn teal-btn">
                      Get In Touch
                    </Link>
                  </div>
                </div>
              </div>


              {/* Right: Image */}
              <div className="col-lg-5 col-md-12 mt-4 mt-lg-0 d-flex justify-content-center">
                <div
                  style={{
                    width: "100%",
                    maxWidth: 520,
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(2,6,23,0.08)",
                    border: "1px solid rgba(2,6,23,0.06)",
                    background: "#fff",
                  }}
                >
                  {/* Use the exact path you uploaded — build tooling will transform this as needed */}
                  <img
                    src={heroimage}
                    alt="Energy / city illustration"
                    style={{ width: "100%", display: "block", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <StatsRow />
        <CoreExpertise />
        <ProjectsList projects={projectsdata} limit={2} />
        <CTA />
      </main>
    </>
  );
};

export default Home;
