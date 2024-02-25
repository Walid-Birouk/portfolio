// import React from "react";
// import { GatsbyImage } from "gatsby-plugin-image"; // Ensure to import getImage if you need it

// export default function ProfileSection({ profilePic, name, role }) {
//   return (
//     <div className="flex flex-col items-center">
//       {" "}
//       <div className="w-2/3 max-w-xs mx-auto sm:w-full">
//         {" "}
//         <GatsbyImage
//           image={profilePic}
//           alt="profile picture"
//           className="w-full"
//         />{" "}
//       </div>
//       <h2 className="text-2xl text-center font-semibold mt-4">{name}</h2>
//       <h3 className="text-xl text-center text-gray-600">{role}</h3>
//     </div>
//   );
// }

import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import CSS for react-image-lightbox

const ProfileSection = ({ profilePic, name, role }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Use getImage to ensure compatibility with Gatsby's image data structure
  const image = getImage(profilePic);
  // Adjust this line according to your actual data structure for direct URL access
  const imageUrl = image?.images?.fallback?.src;

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
    <div className="flex flex-col items-center">
      <div
        className="w-2/3 max-w-xs mx-auto sm:w-full"
        role="button" // Indicate that the div is acting as a button
        tabIndex={0} // Make the div focusable
        onClick={handleOpenLightbox}
        onKeyDown={handleOpenLightbox} // Allow opening with keyboard
        style={{ cursor: "pointer" }}
        aria-label="Open profile picture in lightbox" // Provide an accessible name
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
