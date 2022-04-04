import "./App.scss";
import { ProjectComponent } from "./pages/comp/ProjectComponent";
import { LandingPage } from "./pages/LandingPage";
import { Navbar } from "./pages/Navbar";
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom";
import React from "react";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="portfolio" element={<ProjectComponent />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
