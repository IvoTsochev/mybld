import "./App.css";
import { useEffect, useRef, useState } from "react";
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
  const bannerRef = useRef<HTMLDivElement>(null);
  const [bannerHeight, setBannerHeight] = useState(0);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      setBannerHeight(entry.contentRect.height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [announcementBannerData?.enabled]);

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
        <div ref={bannerRef}>
          {announcementBannerData?.enabled && <AnnouncementBanner />}
        </div>
        <Navigation bannerHeight={bannerHeight} />
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
