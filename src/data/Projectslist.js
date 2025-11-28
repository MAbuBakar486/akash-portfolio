import React from "react";
import "../Styles/Projects.css";
import { Link } from "react-router-dom";


export default function ProjectsList({ projects = [], limit = null }) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="projects-section py-5">
      <div className="container mb-5" >
        <div className="projects-header d-flex align-items-center justify-content-between">
          <div>
            <h2 className="projects-title">Featured Projects</h2>
            <p className="projects-sub">Evidence-driven case studies with measurable outcomes</p>
          </div>

          {limit ? (
            <div>
              <Link to="/projects" className="view-all">
                View All <span className="arrow">→</span>
              </Link>
            </div>
          ) : null}
        </div>

        <div className="projects-list mt-4">
          {items.map((p, i) => (
            <article key={p.id} className="project-card">
              <div className="project-body">
                <span className="project-category">{p.category}</span>

                <h3 className="project-title">{p.title}</h3>

                <p className="project-desc">{p.description}</p>

                <ul className="project-bullets list-unstyled">
                  {p.bullets.map((b, idx) => (
                    <li key={idx}>
                      <i className="ri-checkbox-circle-line"></i>
                      <span style={{ marginLeft: 8 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
