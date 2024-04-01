"use client";

import { useState } from "react";
import HamburgerIcon from "./icons/HamburgerIcon";
import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="flex justify-end mb-6">
      <button
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <HamburgerIcon isActive={isActive} />
      </button>
      <AnimatePresence mode="wait">{isActive && <Menu />}</AnimatePresence>
    </nav>
  );
}
