import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function HeroImage({ imageData }) {
  return (
    <GatsbyImage image={imageData} className="  mt-5 hero-img" alt="Hero" />
  );
}
