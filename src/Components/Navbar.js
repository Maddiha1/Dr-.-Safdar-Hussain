import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Educational & professional experience", id: "educational-professional-experience" },
    { name: "Research", id: "research" },
    { name: "Projects", id: "projects" },
    { name: "Publications", id: "publications" },
    { name: "Contact & meet me", id: "contact-me" }, // fixed id
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className="block py-2 border-b border-gray-700 hover:text-yellow-400"
              onClick={() => setIsOpen(false)} // close menu after click
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
