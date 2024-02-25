import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"; // Ensure to import getImage if you need it

export default function ProfileSection({ profilePic, name, role }) {
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="w-2/3 max-w-xs mx-auto sm:w-full">
        {" "}
        <GatsbyImage
          image={profilePic}
          alt="profile picture"
          className="w-full"
        />{" "}
      </div>
      <h2 className="text-2xl text-center font-semibold mt-4">{name}</h2>
      <h3 className="text-xl text-center text-gray-600">{role}</h3>
    </div>
  );
}
