"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false); // Flag for deleting state

  // Cycle through words with delete and type effect
  useEffect(() => {
    const currentWord = words[currentWordIndex].text;

    // Handle the delete effect
    if (isDeleting) {
      if (displayedText.length > 0) {
        // Simulate deleting one character at a time
        setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, 100); // Deleting speed
      } else {
        // Once deletion is done, switch to next word and start typing
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
      // Handle the typing effect
      if (displayedText.length < currentWord.length) {
        // Simulate typing one character at a time
        setTimeout(() => {
          setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
        }, 150); // Typing speed
      } else {
        // Pause before starting the delete effect
        setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // How long to wait before deleting
      }
    }
  }, [displayedText, isDeleting, words, currentWordIndex]);

  return (
    <div className={cn("flex justify-center items-center h-6 ", className)}>
      <motion.div
        className="overflow-hidden"
        initial={{
          width: "0%",
        }}
        animate={{
          width: "fit-content",
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <div
          className="text-sm text-center text-blue-100"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {" "}
          {/* Render the current displayed text */}
          {displayedText.split("").map((char, index) => (
            <span
              key={`char-${index + 1}`}
              className={cn(`text-purple`)}
            >
              {char}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Blinking cursor */}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[3px] h-2 sm:h-6 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
