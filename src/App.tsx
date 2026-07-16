import "./App.css";
import { useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectDetails } from "./pages/ProjectDetails";
import { AnnouncementBanner } from "./components/AnnouncementBanner";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import SanityStudio from "./pages/SanityStudio";
import { useAnnouncementBannerData } from "./hooks/useSanityData";
import { LanguageProvider } from "./context/LanguageContext";

const Layout = () => {
  const location = useLocation();
  const { data: announcementBannerData } = useAnnouncementBannerData();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <LanguageProvider>
      <div className="relative">
        {announcementBannerData?.enabled && <AnnouncementBanner />}
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/sanity/*" element={<SanityStudio />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
