"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { TextRoll } from "./skiper-ui/skiper58";

function Hero() {
  // Track mouse position relative to center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map values to tilt/translate range
  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);
  const translateX = useTransform(x, [-200, 200], [-20, 20]);
  const translateY = useTransform(y, [-200, 200], [-20, 20]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { innerWidth, innerHeight } = window;
    const offsetX = e.clientX - innerWidth / 2;
    const offsetY = e.clientY - innerHeight / 2;
    x.set(offsetX);
    y.set(offsetY);
  }

  // Typewriter hook
  const [text] = useTypewriter({
    words: ["Web Designer", "Full-Stack Developer", "UI/UX Enthusiast"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      data-tilt-to-mouse="1"
      className="full-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background elements with floating effect */}
      <motion.div
        className="selfie"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className="texture-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      {/* Main content */}
      <div className="main-title-wrap">
        <motion.div
          className="corners-wrap shadow"
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>

        </motion.div>

        {/* Text animations */}
        <motion.div
          className="flex flex-col items-center justify-center h-full text-center px-4 gap-4 cursor-default"
          style={{ rotateX, rotateY, x: translateX, y: translateY }}
          onMouseMove={handleMouseMove}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        >
          <motion.div
            className="bold-text"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Hello, I’m
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
          >
            <TextRoll className="main-title fredericka small">Ankit &nbsp; Rathore</TextRoll>
          </motion.div>

          <motion.div
            className="bold-text"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            A Passionate
          </motion.div>

          {/* ✅ Typing effect */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="subtitle fredericka text-xl font-semibold"
          >
            {text}
            <Cursor cursorStyle="|" cursorBlinking={true} />
          </motion.div>

          <motion.div
            className="text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2 }}
          >
            Crafting ideas into digital experiences
          </motion.div>
        </motion.div>
      </div>

      {/* Floating animated gradient circles */}
      <motion.div
        className="absolute top-20 left-60 w-52 h-52 bg-[rgba(255,76,117,0.8)] rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-52 h-52 bg-pink-500 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export default Hero;
