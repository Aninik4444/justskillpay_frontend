function HeroSection({ employer }) {
  return (

    <section className="bg-white border-b shadow-sm px-6 py-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo */}
        <div className="flex items-center gap-4 w-full md:w-1/2">
        <img
            src={employer.logo}
            alt="Company Logo"
            className="w-20 h-20 object-contain rounded-md border"
        />
        <div>
            <h1 className="text-2xl font-bold">{employer.name}</h1>
            <p className="text-sm text-gray-500">{employer.industry}</p>
            <div className="flex flex-wrap gap-2 mt-2">
            {employer.badges?.map((badge, i) => (
                <span
                key={i}
                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-300"
                >
                {badge}
                </span>
            ))}
            </div>
        </div>
        </div>

        {/* Right: Links */}
        <div className="flex flex-wrap gap-4 w-full md:w-1/2 justify-start md:justify-end">
        {employer.website && (
            <a href={employer.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">
            🌐 Website
            </a>
        )}
        {employer.socialLinks?.map((link, i) => (
            <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm"
            >
            🔗 Social {i + 1}
            </a>
        ))}
        </div>
    </div>
    </section>
  );
}
export default HeroSection;