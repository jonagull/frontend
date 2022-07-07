import "./App.scss";
import { LandingPage } from "./pages/LandingPage";
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom";
import React from "react";
import { ShopPage } from "./pages/ShopPage";
import { MicsPage } from "./pages/ShopPage/shopCategoriesPages/mics";
import { MixersPage } from "./pages/ShopPage/shopCategoriesPages/mixers";
import { ErrorPage } from "./pages/ErrorPage";
import { PortfolioPage } from "./pages/PortfolioPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="/shop/mics" element={<MicsPage />} />
        <Route path="/shop/mixers" element={<MixersPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
