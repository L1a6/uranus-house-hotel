"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Rooms", link: "#rooms" },
  { name: "Facilities", link: "#facilities" },
  { name: "Gallery", link: "#gallery" },
  { name: "Contact", link: "#contact" },
];

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 60);

      const sections = ["about", "rooms", "facilities", "gallery", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${
        scroll ? "is-sticky" : ""
      } flex px-5 md:px-10 largesceen:px-16 pt-6 pb-4 justify-between items-center mb-0 z-50 w-full ${
        !scroll ? "absolute top-0 left-0" : ""
      }`}
    >
      {/* Logo */}
      <div>
        <Link
          href="/"
          className={`nav-logo text-base md:text-lg tracking-widest uppercase font-light z-[999] relative font-jost ${
            scroll ? "text-primary" : "text-cream"
          }`}
          style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.2em" }}
        >
          Uranus House
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="flex gap-x-8 2xl:gap-x-12 max-lg:hidden">
        {navItems.map((item, idx) => (
          <ul key={idx}>
            <li>
              <a
                href={item.link}
                className={`nav-link text-xs tracking-widest uppercase font-jost font-light transition-colors ${
                  scroll ? "text-primary" : "text-cream"
                } ${activeSection === item.link.slice(1) ? "active" : ""}`}
                style={{ fontFamily: "var(--font-jost)" }}
              >
                {item.name}
              </a>
            </li>
          </ul>
        ))}
      </div>

      {/* Phone */}
      <div className="max-lg:hidden">
        <a
          href="tel:+2348000000000"
          className={`nav-phone text-xs tracking-widest uppercase font-light ${
            scroll ? "text-primary" : "text-cream"
          }`}
          style={{ fontFamily: "var(--font-jost)" }}
        >
          +234 800 000 0000
        </a>
      </div>

      {/* Mobile toggle */}
      <section className="lg:hidden z-[995]">
        <div>
          {toggleMenu ? (
            <HiX
              size={28}
              className={`cursor-pointer ${scroll ? "text-primary" : "text-cream"}`}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt3
              size={28}
              className={`cursor-pointer ${scroll ? "text-primary" : "text-cream"}`}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <div className="w-full fixed top-0 right-0 h-screen z-[990]">
              <div className="scale-up-ver-top w-full h-full bg-primary pt-28 px-8 pb-8 flex flex-col justify-between">
                <div>
                  {navItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      onClick={() => setToggleMenu(false)}
                      className="block text-4xl text-cream py-3 font-light tracking-wide"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div>
                  <p
                    className="text-cream text-sm uppercase tracking-widest mb-2 font-light"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    +234 800 000 0000
                  </p>
                  <p
                    className="text-cream/60 text-xs uppercase tracking-widest mb-6 font-light"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    36B Aka Itiam, Uyo
                  </p>
                  <div className="flex gap-5">
                    <a href="#" className="text-secondary">
                      <FaFacebook size={18} />
                    </a>
                    <a href="#" className="text-secondary">
                      <FaInstagram size={18} />
                    </a>
                    <a href="#" className="text-secondary">
                      <FaTwitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
