import React from "react";
import { useState } from "react";

function InfoButton({ text }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <span className="relative inline-flex">
      <button
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        className="flex h-6 w-6 items-center justify-center rounded-full border border-mist text-sm font-medium text-fog-blue transition hover:border-fog-blue hover:bg-mist"
        aria-label="More information"
      >
        ⓘ
      </button>

      {showInfo && (
        <span className="absolute right-0 top-8 z-10 w-64 rounded-lg border border-mist bg-white p-4 text-left text-sm leading-relaxed text-slate shadow-lg">
          {text}
        </span>
      )}
    </span>
  );
}

export default InfoButton;
