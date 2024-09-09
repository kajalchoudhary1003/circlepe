"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // Debounce state to control scroll events

  const handleScroll = (direction) => {
    // Prevent default scroll behavior
    event.preventDefault();

    // Check if currently scrolling to debounce
    if (isScrolling) return;

    setIsScrolling(true); // Set scrolling state to true

    setCurrentSection((prevSection) => {
      if (direction === "down") {
        return Math.min(prevSection + 1, 5);
      } else {
        return Math.max(prevSection - 1, 0);
      }
    });

    // Debounce scroll events by adding a timeout
    setTimeout(() => {
      setIsScrolling(false); // Allow new scroll events after a delay
    }, 600);
  };

  const handleWheel = (event) => {
    // Prevent default scroll behavior
    event.preventDefault();

    const direction = event.deltaY > 0 ? "down" : "up";
    handleScroll(direction);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      handleScroll("up");
    } else if (event.key === "ArrowDown") {
      handleScroll("down");
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isScrolling, currentSection]);

  return (
    <>
      <div className="h-screen w-full overflow-hidden relative">
        {/* Animate presence for smooth transition */}
        <AnimatePresence>
          {currentSection === 0 && <Section1 currentSection={currentSection} />}
          {currentSection === 1 && <Section2 currentSection={currentSection} />}
          {currentSection === 2 && <Section3 currentSection={currentSection} />}
          {currentSection === 3 && <Section4 currentSection={currentSection} />}
          {currentSection === 4 && <Section5 currentSection={currentSection} />}
          {currentSection === 5 && <Section6 currentSection={currentSection} />}
        </AnimatePresence>
      </div>
    </>
  );
}
