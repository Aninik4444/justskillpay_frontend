import React from 'react';
import FeaturedEmployersCarousel from '../components/FeaturedEmployersCarousel';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-bold text-center">Welcome to JustSkillPay</h1>
      </header>

      <main className="p-6">
        <FeaturedEmployersCarousel />
        {/* Add more homepage sections here */}
      </main>
    </div>
  );
};

export default HomePage;