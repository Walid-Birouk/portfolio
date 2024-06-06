import { Link, graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../images/logo/logo.svg";
export default function NavBar() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Query site metadata using GraphQL
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          initials
        }
      }
    }
  `);

  // Extract title from the site metadata
  const { initials } = data.site.siteMetadata;

  // Render the navigation bar
  return (
    <nav
      style={{
        background: "linear-gradient(to right, #0A0A0B, #202124)",
      }}
      className="p-2  text-white relative z-10 top-0 w-full sticky"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Link to home with site title */}
        <Link
          to="/"
          className="flex initials items-center space-x-2 text-xl font-bold"
        >
          <img src={logo} alt="Logo" className="mx-2 w-6 h-6" /> {initials}
        </Link>

        {/* Toggle button for the mobile menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col absolute top-full right-0 md:flex md:flex-row md:relative md:top-0 bg-gray-900 md:bg-transparent z-50`}
        >
          <Link to="/" className="px-4 py-2 hover:text-customTeal-200">
            Home
          </Link>
          <Link to="/about" className="px-4 py-2 hover:text-customTeal-200">
            About
          </Link>
          <Link to="/projects" className="px-4 py-2 hover:text-customTeal-200">
            Portfolio Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
