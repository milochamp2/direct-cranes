import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SakuraPetals from "@/components/site/SakuraPetals";
import Home from "@/pages/Home";
import ServicePage from "@/pages/ServicePage";
import LocationsPage from "@/pages/LocationsPage";
import AboutPage from "@/pages/AboutPage";
import { SERVICES } from "@/lib/site-data";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 z-[60] h-[3px] w-full origin-left bg-flame"
      data-testid="scroll-progress"
    />
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App grain">
        <ScrollToTop />
        <ScrollProgress />
        <SakuraPetals />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {SERVICES.map((s) => (
              <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage slug={s.slug} />} />
            ))}
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
