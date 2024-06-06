import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactLinks() {
  return (
    <div className="flex justify-center initials text-customTeal-100 items-center  flex-wrap ">
      {/* LinkedIn */}

      <span className="hover:text-customTeal-600 ">
        <a
          href="https://www.linkedin.com/in/walid-birouk-571b70203/"
          className="mx-5 md:mx-2 my-1  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </span>

      {/* GitHub */}

      <span className="hover:text-customTeal-600 ">
        <a
          href="https://github.com/Walid-Birouk"
          className="mx-5 md:mx-2 my-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </span>

      {/* Email */}
      <span className="hover:text-customTeal-600 ">
        <a
          href="mailto:uki.walid@live.fr"
          className="mx-5 md:mx-2 my-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </span>
    </div>
  );
}
