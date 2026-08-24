import React from "react";
import { useState } from "react";

function InfoButton({ text }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <span
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      ⓘ{showInfo && <span>{text}</span>}
    </span>
  );
}

export default InfoButton;
