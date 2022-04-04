import "./App.scss";
import { ProjectComponent } from "./pages/comp/ProjectComponent";
import { LandingPage } from "./pages/LandingPage";
import { Navbar } from "./pages/Navbar";
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom";
import React from "react";
import { ErrorPage } from "./pages/ErrorPage";
import { ShopPage } from "./pages/comp/ShopPage";
import { MicsPage } from "./pages/comp/ShopPage/shopCategoriesPages/mics";
import { MixersPage } from "./pages/comp/ShopPage/shopCategoriesPages/mixers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="portfolio" element={<ProjectComponent />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="/shop/mics" element={<MicsPage />} />
        <Route path="/shop/mixers" element={<MixersPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
