import React, { useState } from 'react';
import { submitContactForm } from '../api/employerApi';

const ContactSection = ({ employerId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(null);

    try {
      await submitContactForm({
        employerId,
        ...formData,
      });
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact-section" className="p-6 mt-4 bg-white rounded shadow-sm max-w-5xl mx-auto">
    <h2 className="text-xl font-semibold mb-4">Contact Company</h2>
      <p className="text-sm text-gray-600 mb-4">
        Ask a question or request a campus drive. Your message will be forwarded to the employer’s dashboard and moderated by our admin team.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded p-2 text-sm"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded p-2 text-sm"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full border border-gray-300 rounded p-2 text-sm"
            value={formData.message}
            onChange={handleChange}
            placeholder="e.g. I’d like to invite you for a campus drive..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>

        {formStatus === 'success' && (
          <p className="text-green-600 text-sm mt-2">✅ Message sent successfully!</p>
        )}
        {formStatus === 'error' && (
          <p className="text-red-600 text-sm mt-2">❌ Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
};

export default ContactSection;