// components/Research.jsx
import React from "react";
import { BookOpen, Link2, FileText, BarChart3 } from "lucide-react"; // lucide-react icons

const Research = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6" id="research">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-yellow-500 pl-4">
          Research
        </h2>

        {/* Research Summary */}
        <h3 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 inline-block">
          Research Summary
        </h3>
        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
          Recent trends in economics research emphasize the integration of 
          data-driven approaches, advanced econometric models, and interdisciplinary 
          methods to address pressing social and economic challenges. Much of our 
          work focuses on policy analysis, economic growth, financial markets, labor 
          economics, and sustainable development. Our results include evidence-based 
          insights for poverty alleviation, assessment of global and local market trends, 
          evaluation of government policies, analysis of trade and investment patterns, 
          and the development of decision support systems for effective economic planning 
          and management.
        </p>

        {/* Research Topics Styled like Cards */}
        <div className="space-y-6">
          {[
            "Economics, Management, Marketing & Trade",
            "Consumer Behavior, eWOM, Online Information Adoption",
            "Applications to Sustainability, Circular Economy, and Future Tech",
            "COVID-19 and Trade Economics",
            "Macroeconomic Variables & Stock Market Dynamics",
            "Innovation in Financial Processes & Dividend Policy",
          ].map((topic, idx) => (
            <div
              key={idx}
              className="bg-gray-800 text-lg font-semibold tracking-wide uppercase p-4 rounded-lg shadow-md hover:bg-gray-700 transition"
            >
              {topic}
            </div>
          ))}
        </div>

        {/* Profiles & Publications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400 border-b border-gray-700 pb-2">
            Profiles & Publications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="https://scholar.google.com/citations?user=rp4iUA0AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-xl shadow-md hover:bg-gray-700 transition"
            >
              <BookOpen className="text-yellow-400 w-8 h-8" />
              <span className="text-lg font-medium">Google Scholar</span>
            </a>

            <a
              href="https://loop.frontiersin.org/people/636408/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-xl shadow-md hover:bg-gray-700 transition"
            >
              <Link2 className="text-yellow-400 w-8 h-8" />
              <span className="text-lg font-medium">Loop</span>
            </a>

            <a
              href="https://www.researchgate.net/profile/Safdar-Hussain-2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-xl shadow-md hover:bg-gray-700 transition"
            >
              <FileText className="text-yellow-400 w-8 h-8" />
              <span className="text-lg font-medium">ResearchGate</span>
            </a>

            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=57210357557"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-xl shadow-md hover:bg-gray-700 transition"
            >
              <BarChart3 className="text-yellow-400 w-8 h-8" />
              <span className="text-lg font-medium">Scopus ID</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
