import React from "react";

export default function CVDownload({ cvLink, cvLabel }) {
  return (
    <div className="text-center">
      <a
        href={cvLink}
        download={cvLabel}
        className="px-1 py-2 hover:text-customTeal-200 cursor-pointer whitespace-nowrap"
        target="_blank"
        rel="noopener noreferrer"
      >
        CV Download
      </a>
    </div>
  );
}
