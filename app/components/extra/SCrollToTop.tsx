"use client";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import React, { useRef, useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {" "}
      <div className="fixed bottom-4 right-4 z-50">
        {isVisible && (
          <button
            className="bg-violet-500 hover:bg-violet-600 transition-opacity text-white font-bold py-1 px-1 rounded animate-bounce divide-purple-300"
            onClick={scrollToTop}
          >
            <ArrowUpCircleIcon className="w-8 h-8" />
          </button>
        )}
      </div>
    </>
  );
};

export default ScrollToTop;
