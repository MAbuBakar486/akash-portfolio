
// const heroImage = 'https://thumbs.dreamstime.com/b/initial-letter-ma-logotype-company-name-colored-orange-grey-swoosh-star-design-vector-logo-business-identity-203970029.jpg';

import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="brand">MA</div>
        <nav>
          <ul className="nav">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a className="btn btn-teal" href="#">Download CV</a>
      </div>
    </header>
  );
}
