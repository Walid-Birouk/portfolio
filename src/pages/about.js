import React from "react";
import Layout from "../components/Layout";
import ProfileSection from "../components/ProfileSection";
import ContactLinks from "../components/ContactLinks";
import Education from "../components/Education";
import Experience from "../components/Experience";
import CVDownload from "../components/CVDownload";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import SkillsLanguageIntrests from "../components/SkillsLanguageIntrests";

export default function About({ data }) {
  // console.log({data});
  const profilePic = getImage(data.file.childImageSharp.gatsbyImageData);
  return (
    <Layout>
      <div className="container mx-auto flex flex-wrap py-6">
        {/* Left Section */}
        <div className="w-full  md:w-1/3 px-4 mb-4 md:mb-0">
          <ProfileSection
            profilePic={profilePic}
            name="Walid Birouk"
            role="ACS - AI Student"
          />
          <br />
          <ContactLinks />
          <span className="m-2"></span>
          <CVDownload cvLink="downloads/CV.pdf" cvLabel="CV.pdf" />
          <br />
          <hr />
          <br />
          <SkillsLanguageIntrests />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 px-4">
          <div>
            <Education />
            <br />
            <hr />
            <br />
            <Experience />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Profile {
    file(relativePath: { eq: "profilePic.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, quality: 90)
      }
    }
  }
`;
