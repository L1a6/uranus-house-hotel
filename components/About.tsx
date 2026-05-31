"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";


const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease", once: true });
  }, []);

  return (
    <section
      id="about"
      className="bg-primary relative w-full overflow-hidden py-20 md:py-28 largesceen:py-40 px-5 md:px-10 largesceen:px-16"
    >
      {/* Subtle background texture line */}
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="max-w-screen-xl mx-auto">
        {/* Section label */}
        <div
          className="flex items-center gap-4 mb-16"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="w-8 h-px bg-secondary" />
          <p className="section-eyebrow">About Uranus House</p>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-start">
          {/* Left: Images stacked */}
          <div
            className="lg:w-[45%] relative"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Primary image */}
            <div className="img-rounded overflow-hidden w-full aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=85"
                alt="Uranus House lobby"
                width={700}
                height={875}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>

            {/* Floating secondary image */}
            <div
              className="absolute -bottom-10 -right-4 md:-right-10 w-48 md:w-60 img-rounded overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-cream-100 p-1 rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Uranus House room detail"
                  width={300}
                  height={300}
                  className="w-full h-40 md:h-52 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Since badge */}
            <div
              className="absolute top-6 -left-4 md:-left-8 bg-secondary px-5 py-3 rounded-xl"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <p
                className="text-primary text-xs uppercase tracking-widest font-medium"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                30 Rooms
              </p>
              <p
                className="text-primary/70 text-[10px] tracking-wider"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Exquisitely Furnished
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className="lg:w-[55%] pt-8 lg:pt-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Large heading */}
            <h2
              className="text-cream leading-none mb-10"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
              }}
            >
              A Place of
              <br />
              <span className="text-secondary italic">Refined</span>
              <br />
              Comfort
            </h2>

            <p
              className="text-cream/70 text-sm md:text-base leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              Uranus House by Pointcode Hospitality Ltd is a luxury boutique
              hotel situated in the heart of Uyo, Akwa Ibom State. Located at
              36B Aka Itiam, Opposite Uranus Hotel, Off Nsikak Eduok Avenue.
            </p>

            <p
              className="text-cream/60 text-sm md:text-base leading-relaxed mb-12"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              A two-storey building of 30 exquisite rooms — each honed with
              fine craftsmanship, impeccable taste, and uncompromising
              dedication to detail. Providing a distinctive, comfortable, secure
              and private environment for relaxation and rest.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {[
                { num: "30", label: "Exquisite Rooms" },
                { num: "2 min", label: "To Unity Park" },
                { num: "24/7", label: "Concierge" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="border-t border-cream/10 pt-4"
                  data-aos="fade-up"
                  data-aos-delay={`${300 + i * 100}`}
                >
                  <p
                    className="stat-number"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {stat.num}
                  </p>
                  <p
                    className="text-cream/40 text-xs uppercase tracking-wider mt-1"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Location highlights */}
            <div className="space-y-3" data-aos="fade-up" data-aos-delay="400">
              <p
                className="text-cream/40 text-xs uppercase tracking-[0.2em] mb-3"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Nearby Landmarks
              </p>
              {[
                "2 min walk · Udo Udoma Unity Park",
                "3 min drive · Ibom Hall",
                "5 min drive · Tropicana Mall",
                "25 min drive · Ibom Airport",
              ].map((loc, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
                  <p
                    className="text-cream/60 text-sm"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    {loc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
