// components/Research.jsx
import React from "react";

const Research = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6" id="research">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-yellow-500 pl-4">
          Research
        </h2>

        {/* Summary */}
        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
          My research work spans multiple domains, focusing on impactful studies
          that contribute to the scientific community. I have published research
          in peer-reviewed journals, collaborated internationally, and achieved
          recognition through citations and indexing in major academic platforms.
        </p>

        {/* Research Metrics */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
            Research Metrics
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li>📊 Impact Factor: <span className="font-bold">55+</span></li>
            <li>📚 Citations: <span className="font-bold">1400+</span></li>
            <li>📈 h-index: <span className="font-bold">10</span></li>
            <li>📉 i10-index: <span className="font-bold">10</span></li>
          </ul>
        </div>

        {/* Profiles & Publications */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
            Profiles & Publications
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://scholar.google.com/citations?user=rp4iUA0AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                📖 Google Scholar
              </a>
            </li>
            <li>
              <a
                href="https://loop.frontiersin.org/people/636408/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                🔗 Loop
              </a>
            </li>
            <li>
              <a
                href="https://www.researchgate.net/profile/Safdar-Hussain-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                📄 ResearchGate
              </a>
            </li>
            <li>
              <a
                href="https://www.scopus.com/authid/detail.uri?authorId=57210357557"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                📊 Scopus ID
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Research;
