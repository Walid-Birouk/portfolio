import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ProfileSection = ({ profilePic, name, role }) => {
  const [isOpen, setIsOpen] = useState(false);

  const image = getImage(profilePic.gatsbyImageData);
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
    <div className="flex flex-col items-center">
      <div
        className="w-2/3 max-w-xs mx-auto sm:w-full"
        role="button"
        tabIndex={0}
        onClick={handleOpenLightbox}
        onKeyDown={handleOpenLightbox}
        style={{ cursor: "pointer" }}
        aria-label="Open profile picture in lightbox"
      >
        <GatsbyImage image={image} alt="profile picture" className="w-full" />
      </div>
      {isOpen && (
        <Lightbox mainSrc={imageUrl} onCloseRequest={() => setIsOpen(false)} />
      )}
      <h2 className="text-2xl text-center font-semibold mt-4">{name}</h2>
      <h3 className="text-xl text-center text-gray-600">{role}</h3>
    </div>
  );
};

export default ProfileSection;
