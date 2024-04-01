import Image from "next/image";
import CTA from "./CTA";

export default function Hero() {
  return (
    <main>
      <section>
        <h2>About — Personal</h2>
        <h1>
          Hello! <span>I'm Angela Smith</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <div className="hidden md:block">
          <CTA />
        </div>
      </section>
      <Image
        src={"/assets/hero-image-mobile.webp"}
        alt="Profile picture of Angela Smith looking left"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
      <div className="md:hidden">
        <CTA />
      </div>
    </main>
  );
}
