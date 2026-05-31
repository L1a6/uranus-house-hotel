"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

const facilities = [
  {
    number: "01",
    name: "Restaurant,\nLounge & Bar",
    description:
      "Our in-house chef presents a true fusion of African and Continental cuisines. The well-stocked lounge, ably managed by seasoned barmen, carries the finest brands and exotic drinks — a one-stop shop for leisure and entertainment.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=85",
  },
  {
    number: "02",
    name: "Conference\nHall",
    description:
      "A 100-seater conference hall well-equipped with a modern public address system, projector, and a digitalised trace board — meeting every standard of today's corporate retreats and banqueting requirements.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=85",
  },
  {
    number: "03",
    name: "Concierge &\nGuest Services",
    description:
      "24-hour front office, room service operations, complimentary breakfast, personalised concierge, airport pickup, unlimited Wi-Fi, laundry services, and round-the-clock security surveillance.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=85",
  },
];

const Facilities: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease", once: true });
  }, []);

  return (
    <section
      id="facilities"
      className="bg-cream-100 w-full py-20 md:py-28 largesceen:py-40"
    >
      <div className="px-5 md:px-10 largesceen:px-16 max-w-screen-xl mx-auto">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          data-aos="fade-up"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <p className="section-eyebrow">Hotel Facilities</p>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                fontWeight: 300,
                color: "#0C1D35",
                lineHeight: 1.05,
              }}
            >
              What We
              <span
                style={{ color: "#C9A050", fontStyle: "italic", display: "block" }}
              >
                Offer
              </span>
            </h2>
          </div>
          <p
            className="text-primary/50 text-sm max-w-xs leading-relaxed"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
          >
            From intimate dining to large conferences, every space at Uranus
            House is curated for distinction.
          </p>
        </div>

        {/* Divider */}
        <div className="divider-line mb-16" />

        {/* Facility rows — Bank Hotel numbered style */}
        <div className="space-y-0">
          {facilities.map((facility, i) => (
            <div key={i}>
              <div
                className="flex flex-col md:flex-row justify-between md:items-center py-12 md:py-16 gap-8 md:gap-12"
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
              >
                {/* Left: Number */}
                <div className="md:w-[10%] max-md:hidden">
                  <span
                    className="text-primary/10"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "5rem",
                      fontWeight: 300,
                      lineHeight: 1,
                    }}
                  >
                    {facility.number}
                  </span>
                </div>

                {/* Center: Text */}
                <div className="md:w-[38%]">
                  <p
                    className="text-secondary text-xs uppercase tracking-widest mb-3"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {facility.number}
                  </p>
                  <h3
                    className="text-primary mb-5"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "clamp(2rem, 3.5vw, 3rem)",
                      fontWeight: 300,
                      lineHeight: 1.1,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {facility.name}
                  </h3>
                  <p
                    className="text-primary/55 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    {facility.description}
                  </p>
                </div>

                {/* Right: Image — flat, color-blocked, rounded */}
                <div className="md:w-[45%]">
                  <div className="img-rounded overflow-hidden w-full aspect-[3/2]">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      width={700}
                      height={467}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {i < facilities.length - 1 && <div className="divider-line" />}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-line mt-0 mb-16" />

        {/* Additional services flat block */}
        <div
          className="flat-block bg-primary overflow-hidden"
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[55%] p-8 md:p-12 lg:p-16">
              <p className="section-eyebrow mb-4">All Inclusive</p>
              <h3
                className="text-cream mb-6"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                  fontWeight: 300,
                }}
              >
                Additional Services
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {[
                  "24-Hour Front Office",
                  "Complimentary Breakfast",
                  "Airport Pickup",
                  "Unlimited Wi-Fi",
                  "24hr Security Surveillance",
                  "Laundry Services",
                  "Prompt Check-in Technology",
                  "Personalised Concierge",
                  "Room Service",
                  "Bar & Restaurant",
                ].map((service, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
                    <p
                      className="text-cream/60 text-sm"
                      style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                    >
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-[45%] min-h-[280px] md:min-h-0">
              <Image
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=85"
                alt="Hotel services"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
