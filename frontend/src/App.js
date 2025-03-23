// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Borrowers from "./pages/Borrowers";
import Loans from "./pages/Loans";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/borrowers" element={<Borrowers />} />
        <Route path="/loans" element={<Loans />} />
      </Routes>
    </Router>
  );
};

export default App;
