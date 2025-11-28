import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import ProjectsPage from "./Pages/AllProjects.js";
import Contact from './Pages/Contact.js';
import NotFound from './Pages/NotFound.js';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/contactme" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
