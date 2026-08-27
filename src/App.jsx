import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Places from "./pages/Places";
import PlaceDetails from "./pages/PlaceDetails";
import AddPlace from "./pages/AddPlace";
import EditPlace from "./pages/EditPlace";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <Navbar />

      {/* Theme toggle */}

      <button
        onClick={toggleTheme}
        className="sticky top-[73px] z-40 ml-auto mr-4 block rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-text shadow-sm transition hover:border-primary hover:text-primary"
      >
        {theme === "dark" ? "☀ Light mode" : "☾ Dark mode"}
      </button>

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/places" element={<Places />} />

          <Route path="/places/:id" element={<PlaceDetails />} />

          <Route path="/places/add" element={<AddPlace />} />

          <Route path="/places/edit/:id" element={<EditPlace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
