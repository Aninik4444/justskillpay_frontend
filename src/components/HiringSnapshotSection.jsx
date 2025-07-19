function HiringSnapshotSection({ snapshot }) {
  // Placeholder data structure
  return (
    <section className="p-6 mt-4 bg-white rounded shadow-sm max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Hiring Snapshot</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-gray-100 p-4 rounded">
          <div className="text-2xl font-bold">{snapshot.totalJobs || 0}</div>
          <div className="text-sm text-gray-600">Total Jobs Posted</div>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <div className="text-2xl font-bold">{snapshot.learnersHired || 0}</div>
          <div className="text-sm text-gray-600">Learners Hired</div>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <div className="text-2xl font-bold">{snapshot.avgHireTime || '-'}</div>
          <div className="text-sm text-gray-600">Avg. Interview-to-Hire Time</div>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <div className="text-sm font-bold">{snapshot.topSkills?.join(', ') || '-'}</div>
          <div className="text-sm text-gray-600">Most Hired Skills</div>
        </div>
      </div>
    </section>
  );
}
export default HiringSnapshotSection;