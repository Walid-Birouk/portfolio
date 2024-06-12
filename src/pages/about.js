import React from "react";
import Layout from "../components/Layout";
import ProfileSection from "../components/ProfileSection";
import ContactLinks from "../components/ContactLinks";
import Education from "../components/Education";
import Experience from "../components/Experience";
import { graphql } from "gatsby";
import SkillsLanguageIntrests from "../components/SkillsLanguageIntrests";
import AboutMe from "../components/AboutMe";
import FileDownload from "../components/FileDownload";

export default function About({ data }) {
  const profilePic = data.file.childImageSharp.gatsbyImageData;
  const logos = {
    algorhythm: data.algorhythm.childImageSharp.gatsbyImageData,
    bleckmann: data.bleckmann.childImageSharp.gatsbyImageData,
    biscuiterieThijs: data.biscuiterieThijs.childImageSharp.gatsbyImageData,
    algerieTelecom: data.algerieTelecom.childImageSharp.gatsbyImageData,
    plaisancia: data.plaisancia.childImageSharp.gatsbyImageData,
    thomasMore: data.thomasMore.childImageSharp.gatsbyImageData,
    universiteDeJijel: data.universiteDeJijel.childImageSharp.gatsbyImageData,
  };

  return (
    <Layout>
      <div className="container mx-auto flex flex-wrap py-6">
        {/* Left Section */}
        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
          <ProfileSection
            profilePic={profilePic}
            name="Walid Birouk"
            role="Jr. Data Engineer - AI Bachelor"
          />
          <br />
          <ContactLinks />
          <span className="m-2"></span>
          <FileDownload
            fileLink="downloads/CV.pdf"
            fileLabel="CV.pdf"
            label="CV Download"
          />
          <br />
          <hr />
          <br />
          <SkillsLanguageIntrests />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 px-4">
          <div>
            <AboutMe />
            <br />
            <hr />
            <Experience logos={logos} />
            <br />
            <hr />
            <Education logos={logos} />
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
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    algorhythm: file(relativePath: { eq: "logo/algorhythm.png" }) {
      childImageSharp {
        gatsbyImageData(width: 32, height: 32)
      }
    }
    bleckmann: file(relativePath: { eq: "logo/bleckmann.png" }) {
      childImageSharp {
        gatsbyImageData(width: 32, height: 32)
      }
    }
    biscuiterieThijs: file(relativePath: { eq: "logo/biscuiterieThijs.png" }) {
      childImageSharp {
        gatsbyImageData(width: 32, height: 32)
      }
    }
    algerieTelecom: file(relativePath: { eq: "logo/algerieTelecom.png" }) {
      childImageSharp {
        gatsbyImageData(width: 32, height: 32)
      }
    }
    plaisancia: file(relativePath: { eq: "logo/plaisancia.png" }) {
      childImageSharp {
        gatsbyImageData(width: 32, height: 32)
      }
    }
    thomasMore: file(relativePath: { eq: "logo/thomasMore.png" }) {
      childImageSharp {
        gatsbyImageData(width: 32, height: 32)
      }
    }
    universiteDeJijel: file(
      relativePath: { eq: "logo/universiteDeJijel.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 32, height: 32)
      }
    }
  }
`;
