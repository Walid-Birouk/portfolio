import React from "react";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";
import { graphql } from "gatsby";

export default function Projects({ data }) {
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl text-center text-white mb-8">PORTFOLIO</h1>
        <h3 className="text-2xl text-center text-gray-400 mb-12 typing-container">
          Projects & Works
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
        <p className="text-center text-gray-400 mt-10">
          Questions? Reach out at{" "}
          <a
            href={`mailto:${contact}`}
            className="text-customTeal-500 hover:text-customTeal-200"
          >
            {contact}
          </a>
        </p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
