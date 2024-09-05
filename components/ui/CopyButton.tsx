"use client";
import React, { useState, useEffect } from "react";
import MagicButton from "./MagicButton";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";

const CopyButton: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Lottie animation options
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "tahahamdyfullstack02@gmail.com";
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
      })
      .catch(() => {
        console.error("Failed to copy text");
      });
  };

  // Reset copied state after a delay
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div className="relative">
      {copied && (
        <div className="absolute -bottom-5 right-0">
          <Lottie options={defaultOptions} height={200} width={400} />
        </div>
      )}
      {/* <button onClick={} className="focus:outline-none"> */}
        <MagicButton
        handleClick={handleCopy}
          title={copied ? "Email Copied!" : "Copy my email"}
          icon={<IoCopyOutline />}
          position="left"
          otherClasses="!bg-[#161A31]"
        />
      {/* </button> */}
    </div>
  );
};

export default CopyButton;
