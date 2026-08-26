import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-mist bg-white/90 px-4 py-4 backdrop-blur-[2px]">
      <Link
        to="/"
        className="font-display text-2xl font-semibold text-ink  hover:text-moss"
      >
        Home
      </Link>
      <div className="flex gap-6 font-sans">
        <Link to="/places" className="text-slate hover:text-moss">
          Places
        </Link>
        <Link to="/about" className="text-slate hover:text-moss">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
