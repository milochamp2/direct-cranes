import React from "react";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Manifesto from "@/components/site/Manifesto";
import Services from "@/components/site/Services";
import Fleet from "@/components/site/Fleet";
import Industries from "@/components/site/Industries";
import Locations from "@/components/site/Locations";
import About from "@/components/site/About";

export default function Home() {
  return (
    <div data-testid="home-page">
      <Hero />
      <Marquee />
      <Manifesto />
      <Services />
      <Fleet />
      <Industries />
      <Locations />
      <About />
    </div>
  );
}
