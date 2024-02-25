import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData);

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center ">
        <div className="lg:w-1/2 w-full flex items-center p-5 mr-5">
          <Header />
        </div>
        <div className="lg:w-1/2 w-2/3 flex  items-center justify-center ">
          <HeroImage imageData={image} />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Hero {
    file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
