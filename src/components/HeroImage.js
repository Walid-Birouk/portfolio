// import React from "react";
// import { GatsbyImage } from "gatsby-plugin-image";

// export default function HeroImage({ imageData }) {
//   return (
//     <div>
//       <GatsbyImage image={imageData} alt="Hero" />
//     </div>
//   );
// }

// HeroImage.js
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function HeroImage({ imageData }) {
  if (!imageData) {
    return <div>No Image Found</div>;
  }
  return (
    <GatsbyImage image={imageData} className="  mt-5 hero-img" alt="Hero" />
  );
}
