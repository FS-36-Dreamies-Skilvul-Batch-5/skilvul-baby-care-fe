import React from "react";
import DOMPurify from "dompurify";

export default function SanitizeRawHTML({ rawHtml, customClass }) {
  const sanitizedHtml = DOMPurify.sanitize(rawHtml);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      className={customClass}
    />
  );
}
