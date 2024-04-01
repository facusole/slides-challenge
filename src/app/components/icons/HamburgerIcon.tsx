type HamburgeIconProps = {
  isActive: boolean;
};

export default function HamburgerIcon({ isActive }: HamburgeIconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`relative z-10 ${isActive ? "stroke-white" : "stroke-black"}`}
    >
      <path
        d="M13.5 10C23.6536 10 33 10 33 10M7 19.75H33M13.5 29.5H33"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
