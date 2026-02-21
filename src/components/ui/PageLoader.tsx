"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), 1100);
    const removeTimer = window.setTimeout(() => setIsVisible(false), 1520);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`page-loader ${isLeaving ? "is-leaving" : ""}`} aria-hidden="true">
      <div className="page-loader__bubbles" />
      <div className="page-loader__dots" />
      <div className="page-loader__center">
        <img
          src="/images/branding/logo-icon-color.png"
          alt=""
          className="page-loader__icon"
          draggable={false}
        />
      </div>
    </div>
  );
}
