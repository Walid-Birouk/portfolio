import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ContactLinks from "./ContactLinks"; // Import the ContactLinks component

// Footer component
const Footer = () => {
  // Query for site metadata, including copyright information
  const data = useStaticQuery(graphql`
    query CopyrightInfo {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);

  // Destructuring the copyright data from the query result
  const { copyright } = data.site.siteMetadata;

  return (
    <footer className="bg-transparent text-center text-sm lg:text-base p-4 ">
      <ContactLinks />
      <p className="mt-2 text-gray-400">
        &copy; {new Date().getFullYear()} {copyright}
      </p>
    </footer>
  );
};

export default Footer;
