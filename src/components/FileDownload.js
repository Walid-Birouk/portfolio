import React from "react";
import { withPrefix } from "gatsby";
export default function FileDownload({ fileLink, fileLabel, label }) {
  return (
    <div className="text-center">
      <a
        href={withPrefix(fileLink)}
        download={fileLabel}
        className="px-1 py-2 hover:text-customTeal-200 cursor-pointer whitespace-nowrap"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </div>
  );
}
