import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/site-data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full" data-testid="navbar">
      <div className="mx-3 mt-3 sm:mx-5 sm:mt-4">
        <div className="glass sticker-sm rounded-full px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between gap-3">
            <Link to="/" className="flex items-center" data-testid="nav-logo" aria-label="Direct Cranes home">
              <img src="/images/logo.png" alt="Direct Cranes" className="h-7 w-auto sm:h-8" />
            </Link>

            <nav className="hidden items-center lg:flex">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `whitespace-nowrap rounded-full px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors xl:text-[11px] ${
                      isActive ? "bg-ink text-cream" : "text-ink hover:bg-ink hover:text-cream"
                    }`
                  }
                  data-testid={`nav-link-${l.to.slice(1)}`}
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={BRAND.phoneHref}
                className="sticker-sm sticker-hover hidden items-center gap-2 whitespace-nowrap rounded-full bg-flame px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-cream xl:flex"
                data-testid="nav-phone-cta"
              >
                <Phone size={13} /> {BRAND.phone}
              </a>
              <a
                href={BRAND.phoneHref}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-flame text-cream xl:hidden"
                data-testid="nav-phone-icon"
                aria-label="Call us"
              >
                <Phone size={16} />
              </a>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink text-ink lg:hidden"
                onClick={() => setOpen(!open)}
                data-testid="nav-mobile-toggle"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-3 mt-2 sm:mx-5 lg:hidden"
            data-testid="nav-mobile-menu"
          >
            <div className="sticker max-h-[75vh] overflow-y-auto rounded-3xl bg-cream p-5">
              <div className="grid grid-cols-1 gap-1">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="flex items-center justify-between rounded-lg px-2 py-2.5 font-display text-lg font-bold text-ink"
                    data-testid={`nav-mobile-link-${l.to.slice(1)}`}
                  >
                    {l.label} <ArrowUpRight size={15} className="text-flame" />
                  </Link>
                ))}
              </div>
              <a
                href={BRAND.phoneHref}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-flame px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-cream"
                data-testid="nav-mobile-phone"
              >
                <Phone size={14} /> Call {BRAND.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
