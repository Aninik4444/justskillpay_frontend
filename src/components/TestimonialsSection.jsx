// src/components/TestimonialCarousel.jsx

import React from 'react';
import Slider from 'react-slick';
import CollapsibleSection from './CollapsibleSection';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSection = ({ testimonials = [] }) => {
  if (!testimonials.length) return null;

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: Math.min(testimonials.length, 2),
  slidesToScroll: 1,
  appendDots: dots => (
    <div>
      <ul className="flex justify-center gap-2 mt-4">{dots}</ul>
    </div>
  ),
  customPaging: i => (
    <div className="w-4 h-4 bg-gray-200 rounded-full hover:bg-blue-200 transition-all"></div>
  ),
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    }
  ]
};

  return (
    <CollapsibleSection title="Learner Testimonials">
      <Slider {...settings}>
        {testimonials.map((t) => (
          <div key={t._id} className="px-2 h-full">
            <div className="h-full bg-gray-100 p-4 rounded-md shadow-inner flex flex-col justify-between min-h-[150px]">
              <p className="text-sm italic mb-4 text-gray-800">“{t.quote}”</p>
              <div className="flex items-center gap-3 mt-auto">
                {t.photo && (
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-10 h-10 rounded-full border"
                  />
                )}
                <div className="text-sm text-gray-700">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.courseTaken}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </CollapsibleSection>
  );
};

export default TestimonialSection;