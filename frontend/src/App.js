import { useEffect, useLayoutEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
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

/* Quick top sweep on every route change — the "page is loading" signal */
function RouteLoadBar({ pathname }) {
  return (
    <motion.div
      key={pathname}
      initial={{ scaleX: 0, opacity: 1 }}
      animate={{ scaleX: 1, opacity: 0 }}
      transition={{ scaleX: { duration: 0.45, ease: "easeOut" }, opacity: { delay: 0.45, duration: 0.25 } }}
      className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left bg-flame"
      data-testid="route-load-bar"
    />
  );
}

/* Fade pages in/out so navigation has the rhythm of a page load */
function PageFade({ children }) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <RouteLoadBar pathname={location.pathname} />
      <AnimatePresence mode="wait">
        <PageFade key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            {SERVICES.map((s) => (
              <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage slug={s.slug} />} />
            ))}
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageFade>
      </AnimatePresence>
    </>
  );
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
    <HelmetProvider>
      <BrowserRouter>
      <div className="App grain">
        <ScrollProgress />
        <SakuraPetals />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
