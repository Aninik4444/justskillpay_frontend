import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: BASE_URL,
});

// Get public employer profile
export const getEmployerProfile = (id) =>
  api.get(`/api/public/employer/${id}`);

// Get recent jobs (limit 3)
export const getEmployerJobs = (id) =>
  api.get(`/api/employer/${id}/jobs?limit=3`);

// Get testimonials
export const getEmployerTestimonials = (id) =>
  api.get(`/api/employer/${id}/testimonials`);

// Submit contact form
export const submitContactForm = (payload) =>
  api.post(`/api/employer/contact`, payload);

// Get featured employers
export const getFeaturedEmployers = (payload) =>
  api.get(`/api/public/employers/featured`, payload);

// Get all employers
export const getAllEmployers = (payload) =>
  api.get(`/api/public/employers/all`, payload);

// Get all employers
export const updateBadgesCSR = (id, payload) =>
  api.post(`/api/admin/employer/${id}/badges-csr`, payload);

// Get all employers
export const updateFeature = (id, payload) =>
  api.post(`/api/admin/employer/${id}/feature`, payload);

// Get all employers
export const updateVisibility = (id, payload) =>
  api.post(`/api/admin/employer/${id}/visibility`, payload);