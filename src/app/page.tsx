import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Chevron from "./components/icons/Chevron";

export default function Home() {
  return (
    <div className="p-6 md:px-16 md:py-6">
      <Navbar />
      <Hero />
      <div className="grid place-items-center mt-8 md:mt-12">
        <Chevron />
      </div>
    </div>
  );
}
