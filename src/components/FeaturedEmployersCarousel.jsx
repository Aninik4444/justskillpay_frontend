// src/components/FeaturedEmployersCarousel.jsx

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getFeaturedEmployers } from '../api/employerApi';

const FeaturedEmployersCarousel = () => {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await getFeaturedEmployers();
        setEmployers(res.data || []);
      } catch (err) {
        console.error('Failed to load featured employers', err);
      }
    };
    fetchFeatured();
  }, []);

  if (!employers.length) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(employers.length, 3),
    slidesToScroll: 1,
      appendDots: dots => (
    <div>
      <ul className="flex justify-center gap-2 mt-4">{dots}</ul>
    </div>
  ),
  customPaging: i => (
    <div className="w-4 h-4 bg-gray-200 rounded-full hover:bg-blue-300 transition-all"></div>
  ),
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      }
    ]
  };
 
  return (
    <section className="p-6 bg-white rounded shadow-sm max-w-6xl mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">🌟 Featured Employers</h2>
      <Slider {...settings}>
        {employers.map((emp) => (
          <div key={emp._id} className="px-3">
            <div className="border rounded-lg p-4 shadow-sm bg-gray-50 h-full flex flex-col items-center text-center">
              <img
                src={emp.logo}
                alt={emp.name}
                className="w-16 h-16 object-contain mb-3 rounded"
              />
              <h3 className="font-semibold text-sm">{emp.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{emp.industry}</p>
              <Link
                to={`/company/${emp._id}`}
                className="text-sm text-blue-600 hover:underline"
              >
                View Profile →
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedEmployersCarousel;