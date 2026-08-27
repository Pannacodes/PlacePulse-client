import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/90 px-4 py-4 backdrop-blur-[2px]">
      <Link
        to="/"
        className="flex items-center gap-2 font-display text-2xl font-semibold text-text  hover:text-primary"
      >
        {" "}
        <img
          src="/placepulse-icon-mark-transparent-2.svg"
          alt="PlacePulse logo"
          className="h-7 w-7"
        />
        Home
      </Link>
      <div className="flex gap-6 font-sans">
        <Link to="/places" className="text-slate hover:text-primary">
          Places
        </Link>
        <Link to="/about" className="text-slate hover:text-primary">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
