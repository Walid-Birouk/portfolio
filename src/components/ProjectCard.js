import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProjectCard({ project }) {
  const image = getImage(
    project.frontmatter.thumb.childImageSharp.gatsbyImageData
  );

  return (
    <Link
      to={"/projects/" + project.frontmatter.slug}
      className="group bg-gray-1400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl border border-gray-700 flex flex-col rounded-lg overflow-hidden"
    >
      <div className="flex flex-col flex-grow">
        <GatsbyImage
          className="w-full flex-shrink-0 h-48 object-cover"
          image={image}
          alt={project.frontmatter.title}
        />
        <div className="p-4 flex-grow">
          <h3 className="text-xl text-white  group-hover:text-customTeal-600">
            {project.frontmatter.title}
          </h3>
        </div>
      </div>
      <div className="p-4 bg-gray-1400">
        <p className="text-gray-400">{project.frontmatter.stack}</p>
      </div>
    </Link>
  );
}
