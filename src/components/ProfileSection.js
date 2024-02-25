import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function ProfileSection({ profilePic, name, role }) {
  const [isOpen, setIsOpen] = useState(false);

  const image = profilePic;

  return (
    <div className="flex flex-col items-center">
      <div className="w-2/3 max-w-xs mx-auto sm:w-full">
        {/* Wrap GatsbyImage in a button for clickable functionality */}
        <button
          onClick={() => setIsOpen(true)}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
          aria-label="Open profile image in lightbox"
        >
          <GatsbyImage image={image} alt="profile picture" className="w-full" />
        </button>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={image.images.fallback.src} // Adjust based on your image data structure
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
      <h2 className="text-2xl text-center font-semibold mt-4">{name}</h2>
      <h3 className="text-xl text-center text-gray-600">{role}</h3>
    </div>
  );
}
