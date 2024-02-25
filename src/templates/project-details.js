import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import ImageCarousel from "../components/ImageCarousel";
import * as styles from "../styles/project-details.module.css";

export default function ProjectDetails({ data }) {
  const { html, frontmatter } = data.markdownRemark;
  const { title, stack, images } = frontmatter;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-4xl pt-5 text-center text-white mb-4">{title}</h2>
        <h3 className="text-xl text-center text-gray-300 mb-8">{stack}</h3>

        {images && images.length > 0 ? <ImageCarousel images={images} /> : null}

        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
        images {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
