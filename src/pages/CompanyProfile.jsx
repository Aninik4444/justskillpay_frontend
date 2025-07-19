// src/pages/CompanyProfile.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  getEmployerProfile,
  getEmployerJobs,
  getEmployerTestimonials,
} from '../api/employerApi';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import JobsSection from '../components/JobsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CSRSection from '../components/CSRSection';
import ContactSection from '../components/ContactSection';
import SimilarEmployersSection from '../components/SimilarEmployersSection';
import FloatingActionButtons from '../components/FloatingActionButtons';

const CompanyProfile = () => {
  const { id } = useParams();

  const [employer, setEmployer] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [employerRes, jobsRes, testimonialsRes] = await Promise.all([
          getEmployerProfile(id),
          getEmployerJobs(id),
          getEmployerTestimonials(id),
        ]);

        setEmployer(employerRes.data);
        setJobs(jobsRes.data);
        setTestimonials(testimonialsRes.data);
      } catch (err) {
        console.error('❌ Error loading company profile:', err);
      }
    };

    fetchData();
  }, [id]);

    if (!employer) return <div className="p-6">Loading...</div>;

    if (!employer.isVerified || !employer.isPublic) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-700">
        <div className="bg-white p-8 rounded shadow max-w-md text-center">
            <h1 className="text-2xl font-bold mb-4">🚫 Profile Not Available</h1>
            <p className="text-sm">
            This employer profile is not publicly available at the moment.
            <br />
            Either it is under review or has not been verified yet.
            </p>
        </div>
        </div>
    );
    }

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{employer.name} | JustSkillPay</title>
        <meta name="description" content={`Explore ${employer.name}'s hiring trends, testimonials, and job openings.`} />
        <meta property="og:title" content={`${employer.name} | JustSkillPay`} />
        <meta property="og:description" content="View company profile, job openings, and testimonials." />
        <meta property="og:image" content={employer.logo} />
        <meta property="og:url" content={`https://justskillpay.com/company/${employer._id}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={`${employer.name} | JustSkillPay`} />
        <meta name="twitter:description" content="View company profile, job openings, and testimonials." />
        <meta name="twitter:image" content={employer.logo} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Sections */}
      <HeroSection employer={employer} />
      <AboutSection employer={employer} />
      <JobsSection jobs={jobs} employerId={employer._id} />
      <TestimonialsSection testimonials={testimonials} />
      <CSRSection
        csr={employer.csr}
        sponsoredCourses={employer.sponsoredCourses}
        mentors={employer.mentors}
        trainingVideoUrl={employer.trainingVideoUrl}
        trainingQuote={employer.trainingQuote}
      />
      <ContactSection employerId={employer._id} />
      <SimilarEmployersSection employers={employer.similarEmployers || []} />
      <FloatingActionButtons />
    </div>
  );
};

export default CompanyProfile;