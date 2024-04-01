import Arrow from "./icons/Arrow";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["700"], subsets: ["latin"] });

export default function CTA() {
  return (
    <button
      className={`${lato.className} flex w-full items-center justify-center gap-2 rounded-lg py-5 bg-black text-white md:w-fit md:px-14 hover:bg-[#1D1D1D] transition-colors select-none`}
    >
      Get started <Arrow />
    </button>
  );
}
