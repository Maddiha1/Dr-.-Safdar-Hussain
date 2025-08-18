import React from "react";
import { FaEnvelope, FaChevronUp, FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section
      id="contact-me"
      className="bg-black text-gray-300 py-16 relative scroll-mt-20"
    >
      {/* Main content */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-6">
        {/* Left side: Icon + text */}
        <div className="flex items-start gap-6">
          <FaEnvelope className="text-white text-5xl flex-shrink-0" />
          <p className="max-w-md leading-relaxed">
            I would be happy to talk to you if you need my assistance in your
            research or whether you need technical support for your
            organization.
          </p>
        </div>

        {/* Right side: Name & Email */}
        <div className="mt-10 md:mt-0 text-right">
          <h3 className="font-bold text-white mb-2">Name and Email</h3>
          <p className="text-gray-300">Dr. Safdar Hussain</p>
          <p className="text-gray-400">ranasafdar@uaar.edu.pk</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center relative">
        {/* Up Arrow Button */}
        <a
          href="#home"
          className="bg-gray-700 hover:bg-gray-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto cursor-pointer"
        >
          <FaChevronUp />
        </a>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center gap-6 text-gray-400 text-3xl">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-white cursor-pointer" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500 mt-4">
          © Copyright {new Date().getFullYear()} • Crafted by{" "}
          <a href="#" className="text-teal-500 hover:underline">
            Maddiha Naeem
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactMe;
