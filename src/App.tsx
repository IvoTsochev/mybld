import "./App.css";
import { useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import SanityStudio from "./pages/SanityStudio";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="relative">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/sanity/*" element={<SanityStudio />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
