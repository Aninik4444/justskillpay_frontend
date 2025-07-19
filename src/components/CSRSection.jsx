// src/components/CSRSection.jsx

import React from 'react';

const CSRSection = ({ csr = [], sponsoredCourses = [], mentors = [], trainingVideoUrl, trainingQuote }) => {
  if (!csr.length && !sponsoredCourses.length && !mentors.length && !trainingVideoUrl && !trainingQuote) {
    return null;
  }

  return (
    <section className="p-6 mt-4 bg-white rounded shadow-sm max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">CSR & Training Involvement</h2>

      {/* CSR Projects */}
      {csr.length > 0 && (
        <div className="mb-4">
          <h3 className="text-md font-medium mb-2">🌱 CSR Projects Supported</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {csr.map((project, i) => (
              <li key={i}>{project}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Sponsored Courses */}
      {sponsoredCourses.length > 0 && (
        <div className="mb-4">
          <h3 className="text-md font-medium mb-2">🎓 Courses Sponsored</h3>
          <div className="flex flex-wrap gap-2">
            {sponsoredCourses.map((course, i) => (
              <span
                key={i}
                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full border"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Mentors */}
      {mentors.length > 0 && (
        <div className="mb-4">
          <h3 className="text-md font-medium mb-2">👨‍🏫 Mentors from this Company</h3>
          <div className="flex flex-wrap gap-4">
            {mentors.map((mentor, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-700 border p-2 rounded-md bg-gray-50"
              >
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center font-bold text-white">
                  {mentor.charAt(0).toUpperCase()}
                </div>
                <span>{mentor}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Optional Video */}
      {trainingVideoUrl && (
        <div className="mt-6">
          <h3 className="text-md font-medium mb-2">📹 Training Engagement Video</h3>
          <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden border">
            <iframe
              src={trainingVideoUrl}
              title="CSR Training Video"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Optional Quote */}
      {trainingQuote && (
        <div className="mt-4 p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
          <p className="italic text-sm text-gray-700">“{trainingQuote}”</p>
        </div>
      )}
    </section>
  );
};

export default CSRSection;