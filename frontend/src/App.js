// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";


import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Borrowers from "./pages/Borrowers";
import Loans from "./pages/Loans";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Sidebar />
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/borrowers" element={<Borrowers />} />
          <Route path="/loans" element={<Loans />} />
          
        </Routes>
      </Router>
    </AuthProvider>    
    
  );
};

export default App;
