import React from "react";
import { Link } from "react-router-dom";

export default function HoverCTAButton({ to, text, hoverText }) {
  return (
    <Link
      to={to}
      // Added `flex-col justify-center items-center` here to always centre internal text block
      className="group relative flex flex-col justify-center items-center rounded-full bg-primary text-white font-bold shadow-[var(--shadow-glow)] overflow-hidden transition-all duration-300 ease-out py-3.5 sm:py-4 h-auto min-h-[52px] sm:min-h-[56px] w-[220px] sm:w-auto sm:min-w-[200px] hover:min-h-[70px] sm:hover:min-h-[80px]"
    >
      {/* Normal Text: Standard button text (centres on both mobile/desktop) */}
      <span className="flex items-center justify-center text-center whitespace-nowrap transition-opacity duration-300 ease-out group-hover:opacity-0 group-active:opacity-0 text-sm sm:text-[15px]">
        {text}
      </span>

      {/* Hover Text: The multi-line text block (centres itself on both mobile/desktop) */}
      <span className="absolute inset-0 flex items-center justify-center text-center text-xs sm:text-sm font-bold leading-tight max-w-[170px] sm:max-w-none px-2 mx-auto opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-active:opacity-100">
        {hoverText}
      </span>
    </Link>
  );
}