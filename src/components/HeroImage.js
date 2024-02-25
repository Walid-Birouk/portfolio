import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const HeroImage = ({ imageData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const image = getImage(imageData.gatsbyImageData);
  const imageUrl = image?.images?.fallback?.src;

  const handleOpenLightbox = (event) => {
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.key === "Enter")
    ) {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={handleOpenLightbox}
        onKeyDown={handleOpenLightbox}
        style={{ cursor: "pointer" }}
        aria-label="Open hero image in lightbox"
      >
        <GatsbyImage image={image} alt="Hero" className="mt-5 hero-img" />
      </div>
      {isOpen && (
        <Lightbox mainSrc={imageUrl} onCloseRequest={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default HeroImage;
