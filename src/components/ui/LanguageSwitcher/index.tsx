"use client";

import React, { useEffect, useRef, useState } from "react";

const LanguageSwitcher = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedLang, setSelectedLang] = useState("US");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSelectLang = (lang: string) => {
    setSelectedLang(lang);
    setIsExpanded(false);
  };

  return (
    <div className={"relative w-fit"} ref={menuRef}>
      <button
        className={"text-secondary font-semibold flex items-center gap-1"}
        onClick={() => handleClickExpand()}
      >
        {selectedLang}
        {isExpanded ? (
          <img src="/img/arrow-up.svg" alt="arrow-up" />
        ) : (
          <img src="/img/arrow-down.svg" alt="arrow-down" />
        )}
      </button>
      {isExpanded && (
        <div className={"flex flex-col border border-secondary absolute"}>
          {["EN", "RU", "KZ"].map((lang) => (
            <button
              key={lang}
              className={"hover:bg-secondary hover:bg-opacity-20 px-2 py-1"}
              onClick={() => handleSelectLang(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
