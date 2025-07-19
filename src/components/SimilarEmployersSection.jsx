import React from 'react';
import { Link } from 'react-router-dom';

const SimilarEmployersSection = ({ employers = [] }) => {
  if (!employers.length) return null;

  return (
    <section className="p-6 mt-4 bg-white rounded shadow-sm max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Similar Employers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {employers.map((employer) => (
          <div
            key={employer._id}
            className="border rounded-md p-4 bg-gray-50 hover:shadow transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={employer.logo}
                alt={employer.name}
                className="w-12 h-12 object-contain rounded-md border"
              />
              <div>
                <p className="font-semibold text-sm">{employer.name}</p>
                <p className="text-xs text-gray-500">{employer.industry}</p>
              </div>
            </div>
            <Link
              to={`/company/${employer._id}`}
              className="text-sm text-blue-600 hover:underline"
            >
              View Profile →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarEmployersSection;