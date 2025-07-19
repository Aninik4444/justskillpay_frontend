// src/components/FloatingActionButtons.jsx

import React from 'react';

const FloatingActionButtons = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <button
        onClick={() => scrollToSection('jobs-section')}
        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 text-sm"
      >
        📄 Apply
      </button>
      <button
        onClick={() => scrollToSection('contact-section')}
        className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 text-sm"
      >
        ✉️ Contact
      </button>
    </div>
  );
};

export default FloatingActionButtons;