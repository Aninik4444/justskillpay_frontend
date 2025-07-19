// src/pages/AdminPanel.jsx

import React, { useEffect, useState } from 'react';
import { getAllEmployers, updateBadgesCSR, updateFeature, updateVisibility } from '../api/employerApi';

const AdminPanel = () => {
  const [employers, setEmployers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployers = async () => {
    try {
      const res = await getAllEmployers(); // You may need to create this route
      setEmployers(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to load employers', err);
    }
  };

  useEffect(() => {
    fetchEmployers();
  }, []);

  const handleToggle = async (id, field, value) => {
    try {
      if (field === 'isPublic' || field === 'isVerified') {
        await updateVisibility(id, {
          isPublic: field === 'isPublic' ? value : undefined,
          isVerified: field === 'isVerified' ? value : undefined
        });
      } else if (field === 'featured') {
        await updateFeature(id, { featured: value });
      }

      fetchEmployers(); // Refresh
    } catch (err) {
      console.error('Update failed', err);
    }
  };

  const handleUpdateBadgesCSR = async (id, badges, csr) => {
    try {
      await updateBadgesCSR(id, {
        badges: badges.split(',').map(b => b.trim()),
        csr: csr.split(',').map(c => c.trim())
      });
      fetchEmployers();
    } catch (err) {
      console.error('Failed to update badges/CSR', err);
    }
  };

  if (loading) return <div className="p-6">Loading employers...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🛠️ Admin Panel: Employer Management</h1>

      {employers.map((emp) => (
        <div key={emp._id} className="border p-4 rounded mb-4 bg-white shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">{emp.name}</h2>
              <p className="text-sm text-gray-500">{emp.industry}</p>
            </div>
            <img src={emp.logo} alt={emp.name} className="w-12 h-12 object-contain rounded" />
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Public</label>
              <input
                type="checkbox"
                checked={emp.isPublic}
                onChange={(e) => handleToggle(emp._id, 'isPublic', e.target.checked)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Verified</label>
              <input
                type="checkbox"
                checked={emp.isVerified}
                onChange={(e) => handleToggle(emp._id, 'isVerified', e.target.checked)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Featured</label>
              <input
                type="checkbox"
                checked={emp.featured}
                onChange={(e) => handleToggle(emp._id, 'featured', e.target.checked)}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Badges (comma-separated)</label>
            <input
              type="text"
              defaultValue={emp.badges?.join(', ')}
              className="w-full border p-2 rounded text-sm"
              id={`badges-${emp._id}`}
            />
          </div>

          <div className="mt-2">
            <label className="block text-sm font-medium mb-1">CSR Projects (comma-separated)</label>
            <input
              type="text"
              defaultValue={emp.csr?.join(', ')}
              className="w-full border p-2 rounded text-sm"
              id={`csr-${emp._id}`}
            />
          </div>

          <button
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
            onClick={() =>
              handleUpdateBadgesCSR(
                emp._id,
                document.getElementById(`badges-${emp._id}`).value,
                document.getElementById(`csr-${emp._id}`).value
              )
            }
          >
            Save Badges & CSR
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
