// import React from "react";
// import { GatsbyImage } from "gatsby-plugin-image";

// export default function HeroImage({ imageData }) {
//   return (
//     <GatsbyImage image={imageData} className="  mt-5 hero-img" alt="Hero" />
//   );
// }

import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import CSS for react-image-lightbox

const HeroImage = ({ imageData }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Use getImage to ensure compatibility with Gatsby's image data structure
  //const image = getImage(imageData);, getImage
  // Adjust this line according to your actual data structure for direct URL access
  const imageUrl = imageData?.images?.fallback?.src;

  // Function to handle both click and keyboard events
  const handleOpenLightbox = (event) => {
    // Open lightbox on click or when Enter key is pressed
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
        role="button" // Indicate that the div is acting as a button
        tabIndex={0} // Make the div focusable, enabling keyboard interaction
        onClick={handleOpenLightbox}
        onKeyDown={handleOpenLightbox} // Allow opening with keyboard
        style={{ cursor: "pointer" }}
        aria-label="Open hero image in lightbox" // Provide an accessible name
      >
        <GatsbyImage image={imageData} alt="Hero" className="mt-5 hero-img" />
      </div>
      {isOpen && (
        <Lightbox mainSrc={imageUrl} onCloseRequest={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default HeroImage;
