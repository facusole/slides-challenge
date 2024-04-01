import HamburgerIcon from "./icons/HamburgerIcon";

export default function Navbar() {
  return (
    <nav className="flex justify-end mb-6">
      <button>
        <HamburgerIcon />
      </button>
    </nav>
  );
}
