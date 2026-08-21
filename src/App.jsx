import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Places from "./pages/Places";
import PlaceDetails from "./pages/PlaceDetails";
import AddPlace from "./pages/AddPlace";
import EditPlace from "./pages/EditPlace";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/places" element={<Places />} />

        <Route path="/about" element={<About />} />

        <Route path="/places/:id" element={<PlaceDetails />} />

        <Route path="/places/add" element={<AddPlace />} />

        <Route path="/places/:id/edit" element={<EditPlace />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;
