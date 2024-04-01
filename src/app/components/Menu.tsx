"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Curve from "./Curve";

export default function Menu() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const menuSlide = {
    initial: { x: "calc(100% + 100px)" },

    enter: { x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },

    exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-black fixed right-0 top-0 text-white"
    >
      <div className="h-full p-16 md:p-[100px] flex flex-col justify-between">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col text-6xl gap-3 mt-20"
        >
          <div className="border-b-2 border-b-gray-300 uppercase text-sm mb-10">
            <p>Navigation</p>
          </div>
          <ul className="grid gap-8 text-3xl md:text-5xl">
            <li>Home</li>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
