"use client";
import React, { useEffect } from "react";
import AOS from "aos";

const testimonials = [
  {
    content:
      "Uranus House exceeded every expectation. The room was immaculately clean, the staff were warm and professional, and waking up to that view of Uyo was something I won't forget. Truly a cut above the rest.",
    author: "Adaeze Okonkwo",
    role: "Business Executive, Lagos",
  },
  {
    content:
      "I've stayed at many hotels across Nigeria but Uranus House is in a class of its own. The attention to detail is remarkable — from the linen to the dining experience. We'll absolutely return.",
    author: "Emeka Chukwu",
    role: "Corporate Traveller, Abuja",
  },
  {
    content:
      "Our company retreat at the conference hall was seamlessly executed. The AV setup was excellent, the catering superb, and the staff anticipated our every need. Outstanding hospitality.",
    author: "Ngozi Bello",
    role: "HR Director, Port Harcourt",
  },
];

const Testimonials: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease", once: true });
  }, []);

  return (
    <section className="bg-cream w-full py-20 md:py-28 largesceen:py-40">
      <div className="px-5 md:px-10 largesceen:px-16 max-w-screen-xl mx-auto">
        {/* Header */}
        <div
          className="flex items-center gap-4 mb-16"
          data-aos="fade-up"
        >
          <div className="w-8 h-px bg-secondary" />
          <p className="section-eyebrow">Guest Voices</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
          {/* Large heading */}
          <div className="lg:w-[30%]" data-aos="fade-up" data-aos-delay="50">
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 300,
                color: "#0C1D35",
                lineHeight: 1.05,
              }}
            >
              What Our
              <br />
              <span style={{ color: "#C9A050", fontStyle: "italic" }}>
                Guests
              </span>
              <br />
              Say
            </h2>
            <div className="divider-line w-24 mt-6" />
          </div>

          {/* Testimonials */}
          <div className="lg:w-[70%] grid md:grid-cols-3 gap-0 lg:gap-0">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`py-8 px-6 border-b md:border-b-0 md:border-r border-primary/10 last:border-0`}
                data-aos="fade-up"
                data-aos-delay={`${100 + i * 100}`}
              >
                {/* Big quote mark */}
                <div className="quote-mark mb-2" aria-hidden="true">
                  &ldquo;
                </div>

                <p
                  className="text-primary/70 text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                >
                  {t.content}
                </p>

                <div>
                  <p
                    className="text-primary font-medium text-sm"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
                  >
                    {t.author}
                  </p>
                  <p
                    className="text-secondary text-xs uppercase tracking-wider mt-1"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
