import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function HeroImage({ imageData }) {
  const [isOpen, setIsOpen] = useState(false);

  const image = getImage(imageData);

  const mainSrc = image ? image.images.fallback.src : "";

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        onKeyPress={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            setIsOpen(true);
          }
        }}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
        aria-label="Open image in lightbox"
      >
        <GatsbyImage image={imageData} alt="Hero" className="mt-5 hero-img" />
      </button>

      {isOpen && (
        <Lightbox mainSrc={mainSrc} onCloseRequest={() => setIsOpen(false)} />
      )}
    </>
  );
}
