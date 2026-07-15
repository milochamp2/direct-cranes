/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

/**
 * Glassmorphism plugin — a cohesive frosted-glass component layer with clear
 * transparency. Blur + saturate for depth, a bright 1px top-edge highlight,
 * and soft ambient shadow. Tuned per surface (dark section / light section /
 * flame accent) so text keeps WCAG contrast.
 */
const glassmorphism = plugin(function ({ addComponents }) {
  addComponents({
    /* Navbar bar — kept legible over the dark hero */
    ".glass": {
      background: "rgba(242,237,227,0.78)",
      backdropFilter: "blur(20px) saturate(150%)",
      WebkitBackdropFilter: "blur(20px) saturate(150%)",
      border: "2px solid #16120F",
    },
    /* Dark / obsidian sections: translucent white frost */
    ".glass-panel": {
      background: "rgba(255,255,255,0.055)",
      backdropFilter: "blur(20px) saturate(150%)",
      WebkitBackdropFilter: "blur(20px) saturate(150%)",
      border: "1px solid rgba(255,255,255,0.14)",
      boxShadow: "0 10px 34px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.10)",
    },
    /* Light / paper sections: clear frosted panel */
    ".glass-light": {
      background: "rgba(255,255,255,0.42)",
      backdropFilter: "blur(22px) saturate(135%)",
      WebkitBackdropFilter: "blur(22px) saturate(135%)",
      border: "1px solid rgba(255,255,255,0.55)",
      boxShadow: "0 10px 30px rgba(22,18,15,0.10), inset 0 1px 0 rgba(255,255,255,0.7)",
    },
    /* Flame-tinted accent glass */
    ".glass-flame": {
      background: "rgba(225,74,33,0.12)",
      backdropFilter: "blur(20px) saturate(160%)",
      WebkitBackdropFilter: "blur(20px) saturate(160%)",
      border: "1px solid rgba(225,74,33,0.30)",
      boxShadow: "0 10px 30px rgba(185,58,24,0.15), inset 0 1px 0 rgba(255,255,255,0.18)",
    },
    /* Dark spec tiles (fleet spec sheets) */
    ".spec-card": {
      background: "rgba(255,255,255,0.04)",
      backdropFilter: "blur(14px) saturate(140%)",
      WebkitBackdropFilter: "blur(14px) saturate(140%)",
      border: "1px solid rgba(225,74,33,0.22)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
    },
    /* Interaction: lift + flame edge glow */
    ".glass-hover": {
      transition:
        "background 0.3s ease, border-color 0.3s ease, box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)",
    },
    ".glass-hover:hover": {
      background: "rgba(255,255,255,0.10)",
      borderColor: "rgba(225,74,33,0.55)",
      boxShadow: "0 18px 44px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.14)",
      transform: "translateY(-4px)",
    },
    ".glass-light.glass-hover:hover": {
      background: "rgba(255,255,255,0.62)",
      borderColor: "rgba(225,74,33,0.45)",
      boxShadow: "0 18px 40px rgba(22,18,15,0.14), inset 0 1px 0 rgba(255,255,255,0.8)",
    },
    /* Top-edge light reflection */
    ".glass-sheen": { position: "relative", overflow: "hidden" },
    ".glass-sheen::before": {
      content: '""',
      position: "absolute",
      inset: "0 0 auto 0",
      height: "1px",
      background:
        "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
      pointerEvents: "none",
    },
  });
});

module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cabinet Grotesk', 'sans-serif'],
        wide: ['Michroma', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        flame: '#E14A21',
        flamedeep: '#B93A18',
        cream: '#F2EDE3',
        paper: '#E9E2D4',
        ink: '#16120F',
        obsidian: '#0C0B0A',
        surface: '#121212',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate"), glassmorphism],
};
