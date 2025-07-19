// src/components/JobsSection.jsx

import React from 'react';
import CollapsibleSection from './CollapsibleSection';

const JobsSection = ({ jobs = [], employerId }) => {
  if (!jobs.length) return null;

  return (
    <CollapsibleSection title="Recent Job Openings">
    <div id="jobs-section" className="pt-1">
      <div className="grid md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="border p-4 rounded-md bg-gray-50 hover:shadow-sm transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Skills:</strong> {job.skills?.join(', ') || 'N/A'}
            </p>
            <p className="text-sm text-gray-600">
              <strong>📍 Location:</strong> {job.location || 'Not specified'}
            </p>
            <button
              className="mt-3 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
              onClick={() => alert('Redirect to job application page or modal')}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <a
          href={`/company/${employerId}/jobs`}
          className="text-sm text-blue-600 hover:underline"
        >
          View All Jobs by this Employer →
        </a>
      </div>
    </div>
    </CollapsibleSection>
  );
};

export default JobsSection;