"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Deluxe Room",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Hotel Suite",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Restaurant",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hotel Lounge",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    alt: "Conference Hall",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Hotel Bar",
    span: "col-span-2 row-span-1",
  },
];

const Gallery: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease", once: true });
  }, []);

  return (
    <section
      id="gallery"
      className="bg-primary w-full py-20 md:py-28 largesceen:py-40"
    >
      <div className="px-5 md:px-10 largesceen:px-16 max-w-screen-xl mx-auto">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
          data-aos="fade-up"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <p className="section-eyebrow">Gallery</p>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                fontWeight: 300,
                color: "#FAF7F2",
                lineHeight: 1.05,
              }}
            >
              Spaces &amp;
              <span
                style={{ color: "#C9A050", fontStyle: "italic", display: "block" }}
              >
                Moments
              </span>
            </h2>
          </div>

          <p
            className="text-cream/40 text-sm max-w-xs leading-relaxed"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
          >
            Every corner of Uranus House is designed to inspire — explore
            our spaces through the lens.
          </p>
        </div>

        {/* Masonry-style grid — no shadows, rounded edges */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`gallery-item ${img.span}`}
              data-aos="fade-up"
              data-aos-delay={`${i * 60}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div
          className="mt-16 flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <div className="divider-line w-48 mb-8" />
          <p
            className="text-cream/60 text-sm md:text-base italic max-w-xl leading-loose"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem" }}
          >
            "A top-class hotel in Uyo — where every room reflects fine
            craftsmanship and uncompromising dedication to detail."
          </p>
          <div className="divider-line w-48 mt-8" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
