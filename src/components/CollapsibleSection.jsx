// src/components/CollapsibleSection.jsx

import React, { useState, useEffect } from 'react';

const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Auto-expand on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="p-6 mt-4 bg-white rounded shadow-sm max-w-5xl mx-auto">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-xl font-semibold">{title}</h2>
        <button className="text-sm text-blue-600 hover:underline">
          {isOpen ? 'Hide' : 'Show'}
        </button>
      </div>

      {isOpen && <div className="mt-4 transition-all duration-300">{children}</div>}
    </section>
  );
};

export default CollapsibleSection;