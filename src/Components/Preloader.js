// Preloader.js
import React, { useEffect, useState } from "react";
import "../Styles/phoneinput.css"; // Custom SCSS file
import { useLocation } from "react-router-dom";


const Preloader = ({ duration = 1500, fadeDuration = 500 }) => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setFadeOut(false);

    // Start fade-out BEFORE removing the preloader
    const fadeTimer = setTimeout(() => setFadeOut(true), duration);

    // Remove from DOM AFTER fade-out animation finishes
    const removeTimer = setTimeout(
      () => setLoading(false),
      duration + fadeDuration
    );

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [location, duration, fadeDuration]);

  if (!loading) return null;

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="preloader-text">
        <div className="line ma text-center">MA</div>
        <div className="line">Muhammad</div>
        <div className="line">Akash Anwar</div>
      </div>
    </div>
  );
};

export default Preloader;

