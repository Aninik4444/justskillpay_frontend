function AboutSection({ employer }) {
  return (
    <section className="p-6 bg-white mt-4 rounded shadow-sm max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">About the Company</h2>
      <p className="text-gray-700 mb-4">{employer.about}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
        <div>📍 <strong>Location:</strong> {employer.location || 'Remote / Bangalore'}</div>
        <div>📆 <strong>Established:</strong> {employer.yearEstablished}</div>
        <div>💼 <strong>Hiring Category:</strong> {employer.hiringCategory}</div>
      </div>
    </section>
  );
}
export default AboutSection;