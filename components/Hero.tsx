"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="relative bg-primary min-h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=90"
          alt="Uranus House Hotel"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/80" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col pt-32 pb-16 px-5 md:px-10 largesceen:px-16">
        {/* Top row */}
        <div className="flex justify-between items-start mb-auto">
          <div
            className={`transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p
              className="text-cream/50 text-xs uppercase tracking-[0.3em] mb-2"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Uyo, Akwa Ibom State
            </p>
            <p
              className="text-secondary text-xs uppercase tracking-[0.25em]"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              Est. by Pointcode Hospitality
            </p>
          </div>

          <div
            className={`text-right max-md:hidden transition-all duration-1000 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p
              className="text-cream/50 text-xs uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Rooms · Restaurant · Conference
            </p>
          </div>
        </div>

        {/* Hero heading */}
        <div className="flex flex-col items-center justify-center flex-1 text-center py-16">
          <div
            className={`transition-all duration-1200 delay-100 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p
              className="section-eyebrow mb-6"
              style={{ letterSpacing: "0.4em" }}
            >
              Luxury Boutique Hotel
            </p>
            <h1
              className="hero-heading text-cream leading-none mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(4.5rem, 14vw, 12rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
              }}
            >
              Uranus
              <span className="text-secondary italic block md:inline">
                {" "}House
              </span>
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className="text-cream/70 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              30 exquisite rooms in the heart of Uyo — where craftsmanship,
              comfort, and warmth converge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#rooms" className="btn-book">
                Explore Rooms
              </a>
              <a href="#contact" className="btn-outline-gold">
                Make a Reservation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex justify-between items-end">
          <div
            className={`transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <p
              className="text-secondary text-sm md:text-base underline uppercase tracking-widest"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              +234 800 000 0000
            </p>
            <p
              className="text-cream/50 text-xs uppercase tracking-wider mt-1"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              36B Aka Itiam, Opp. Uranus Hotel
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator animate-float">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-secondary/60 mx-auto mb-2" />
            <p
              className="text-cream/40 text-[10px] uppercase tracking-[0.3em] -rotate-90 translate-x-4"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Scroll
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
