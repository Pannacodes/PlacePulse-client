import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-mist px-4 py-4">
      <Link to="/" className="font-display text-2xl font-semibold text-ink">
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
