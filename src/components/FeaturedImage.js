import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function FeaturedImage({ imageData }) {
  const image = getImage(imageData.childImageSharp.gatsbyImageData);
  return (
    <div className="flex justify-center items-center overflow-hidden">
      <GatsbyImage
        className="rounded-lg shadow-lg"
        image={image}
        alt="Featured image"
      />
    </div>
  );
}
