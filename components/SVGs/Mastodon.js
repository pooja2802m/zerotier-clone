import React from "react";

function Mastodon({ isHovered }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke={isHovered === "Mastodon" ? "#4436ca" : "currentColor"}
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M21.6 14.3c-.3 1.5-2.5 3.1-5.1 3.4-1.3.2-2.7.3-4.1.2-2.3-.1-4.1-.6-4.1-.6v.6c.3 2.3 2.3 2.4 4.1 2.5 1.9.1 3.6-.5 3.6-.5l.1 1.7s-1.3.7-3.7.8c-1.3.1-2.9 0-4.8-.5-4.1-1.1-4.7-5.4-4.9-9.8V8.5c0-4.5 2.9-5.8 2.9-5.8 1.5-.7 4-1 6.7-1h.1c2.6 0 5.2.3 6.7 1 0 0 2.9 1.3 2.9 5.8 0 .2 0 3.5-.4 5.8"
      ></path>
      <path
        fill={isHovered === "Mastodon" ? "#4436ca" : "currentColor"}
        d="M18.5 9v5.4h-2.2V9.2c0-1.1-.5-1.7-1.4-1.7-1 0-1.6.7-1.6 2v2.9h-2.1V9.5c0-1.3-.5-2-1.6-2-.9 0-1.4.6-1.4 1.7v5.3h-2V9c0-1.1.3-2 .8-2.6.6-.7 1.4-1 2.3-1 1.1 0 1.9.4 2.5 1.3l.5.9.5-.9c.6-.8 1.4-1.3 2.5-1.3 1 0 1.7.3 2.3 1 .6.7.9 1.5.9 2.6"
      ></path>
    </svg>
  );
}

export default Mastodon;
