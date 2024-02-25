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
        <h2 className="text-4xl text-center text-white mb-8">Portfolio</h2>
        <h3 className="text-2xl text-center text-gray-400 mb-12">
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
              gatsbyImageData(
                layout: CONSTRAINED

                placeholder: BLURRED
              )
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

// <Link
//   to={"/projects/" + project.frontmatter.slug}
//   key={project.id}
//   className="bg-gray-1400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl  border border-gray-700 "
// >
//   <div className=" rounded-lg overflow-hidden">
//     <GatsbyImage
//       className="w-full h-48 object-contain"
//       image={image}
//       alt={project.frontmatter.title}
//     />
//     <div className="p-4 ">
//       <h3 className="text-xl text-white mb-2 ">
//         {project.frontmatter.title}
//       </h3>
//       <p className="text-gray-400">{project.frontmatter.stack}</p>
//     </div>
//   </div>
// </Link>
