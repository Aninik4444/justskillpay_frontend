// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CompanyProfile from './pages/CompanyProfile';
import HomePage from './pages/HomePage';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Public Company Profile Page */}
          <Route path="/company/:id" element={<CompanyProfile />} />
          <Route path="/admin" element={<AdminPanel />} />
          {/* Fallback */}
          <Route path="*" element={<div className="p-6 text-center">404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
