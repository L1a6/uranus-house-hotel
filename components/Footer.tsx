"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease", once: true });
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary w-full">
      {/* Big CTA strip */}
      <div
        className="px-5 md:px-10 largesceen:px-16 pt-24 pb-16 border-b border-cream/10"
        data-aos="fade-up"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p className="section-eyebrow mb-4">Ready to Stay?</p>
            <h2
              className="text-cream leading-none"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(3rem, 8vw, 8rem)",
                fontWeight: 300,
              }}
            >
              Reserve
              <br />
              <span style={{ color: "#C9A050", fontStyle: "italic" }}>
                Your Room
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+2348000000000" className="btn-book">
              Call Us Now
            </a>
            <a href="#contact" className="btn-outline-gold">
              Send Enquiry
            </a>
          </div>
        </div>
      </div>

      {/* Footer grid */}
      <div
        className="px-5 md:px-10 largesceen:px-16 py-16"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 */}
          <div>
            <h3
              className="text-cream mb-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.6rem",
                fontWeight: 300,
                letterSpacing: "0.1em",
              }}
            >
              Uranus House
            </h3>
            <p
              className="text-cream/40 text-xs leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              A luxury boutique hotel by Pointcode Hospitality Ltd. Situated in
              the heart of Uyo, Akwa Ibom State.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-cream/30 hover:text-secondary transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4
              className="text-cream/60 text-xs uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              {[
                "36B Aka Itiam, Opp. Uranus Hotel",
                "Off Nsikak Eduok Avenue",
                "Uyo, Akwa Ibom State",
                "+234 800 000 0000",
                "reservations@uranushouse.com",
              ].map((line, i) => (
                <p
                  key={i}
                  className="text-cream/40 text-xs"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Column 3: Links */}
          <div>
            <h4
              className="text-cream/60 text-xs uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                ["About", "#about"],
                ["Rooms", "#rooms"],
                ["Facilities", "#facilities"],
                ["Gallery", "#gallery"],
                ["Contact", "#contact"],
              ].map(([label, href], i) => (
                <li key={i}>
                  <a
                    href={href}
                    className="text-cream/40 text-xs uppercase tracking-wider hover:text-secondary transition-colors"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Nearby */}
          <div>
            <h4
              className="text-cream/60 text-xs uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Nearby
            </h4>
            <ul className="space-y-3">
              {[
                "2 min · Udo Udoma Unity Park",
                "3 min · Ibom Hall",
                "5 min · Tropicana Mall",
                "25 min · Ibom Airport",
              ].map((loc, i) => (
                <li key={i}>
                  <p
                    className="text-cream/40 text-xs"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    {loc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10 px-5 md:px-10 largesceen:px-16 py-6">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p
            className="text-cream/30 text-xs"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            &copy; {year} Uranus House. All rights reserved. Managed by
            Pointcode Hospitality Ltd.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-cream/30 text-xs hover:text-secondary/60 transition-colors"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
