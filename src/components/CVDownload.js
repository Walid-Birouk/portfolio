import React from "react";
import { withPrefix } from "gatsby";
export default function CVDownload({ cvLink, cvLabel }) {
  return (
    <div className="text-center">
      <a
        href={withPrefix(cvLink)}
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
