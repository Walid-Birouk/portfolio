import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ContactLinks from "./ContactLinks";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query CopyrightInfo {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);

  const { copyright } = data.site.siteMetadata;

  return (
    <footer className="bg-transparent text-center text-sm lg:text-base pb-0 ">
      <ContactLinks />
      <p className="mt-1 text-gray-400">
        &copy; {new Date().getFullYear()} {copyright}
      </p>
    </footer>
  );
};

export default Footer;
