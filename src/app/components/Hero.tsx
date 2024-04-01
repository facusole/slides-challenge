"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "./CTA";

export default function Hero() {
  return (
    <motion.main
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid gap-6 md:grid-cols-2 md:place-items-center md:gap-0 select-text selection:bg-[#ddf247] selection:text-black"
    >
      <section className="text-center md:text-left">
        <h2 className="uppercase tracking-[0.4em] text-xs mb-3 md:mb-2">
          About — Personal
        </h2>
        <h1 className="text-3xl mb-6 md:text-5xl">
          Hello! <span className="font-semibold">I&apos;m Angela Smith</span>
        </h1>
        <p className="md:hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <p className="hidden md:block md:max-w-[60ch] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="hidden md:block">
          <CTA />
        </div>
      </section>
      <section className="select-none">
        <Image
          src={"/assets/hero-image-mobile.webp"}
          alt="Profile picture of Angela Smith looking left"
          width={0}
          height={0}
          sizes="100vw"
          className="max-w-[700px] h-auto md:hidden"
        />
        <Image
          src={"/assets/hero-image-desktop.webp"}
          alt="Profile picture of Angela Smith looking left"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto hidden md:block"
        />
      </section>
      <div className="md:hidden">
        <CTA />
      </div>
    </motion.main>
  );
}
