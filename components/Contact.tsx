"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import Swal from "sweetalert2";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease", once: true });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Swal.fire({
      title: "Message Received",
      text: `Thank you, ${form.name}. Our team at Uranus House will be in touch shortly.`,
      icon: "success",
      confirmButtonColor: "#0C1D35",
    });
    setForm({ name: "", email: "", phone: "", type: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-cream-100 w-full py-20 md:py-28 largesceen:py-40"
    >
      <div className="px-5 md:px-10 largesceen:px-16 max-w-screen-xl mx-auto">
        {/* Header */}
        <div
          className="flex items-center gap-4 mb-16"
          data-aos="fade-up"
        >
          <div className="w-8 h-px bg-secondary" />
          <p className="section-eyebrow">Contact Us</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Info */}
          <div className="lg:w-[42%]" data-aos="fade-up" data-aos-delay="100">
            <h2
              className="mb-8"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.8rem, 5vw, 5rem)",
                fontWeight: 300,
                color: "#0C1D35",
                lineHeight: 1.05,
              }}
            >
              Get in
              <br />
              <span style={{ color: "#C9A050", fontStyle: "italic" }}>
                Touch
              </span>
            </h2>

            <p
              className="text-primary/55 text-sm leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              Whether you are planning a stay, hosting a corporate event, or
              simply curious — our team is always ready to assist with warmth
              and efficiency.
            </p>

            <div className="space-y-6">
              {[
                {
                  label: "Address",
                  value: "36B Aka Itiam, Opposite Uranus Hotel\nOff Nsikak Eduok Avenue, Uyo\nAkwa Ibom State",
                },
                { label: "Phone", value: "+234 800 000 0000" },
                { label: "Email", value: "reservations@uranushouse.com" },
                { label: "Front Office", value: "Open 24 Hours Daily" },
              ].map((item, i) => (
                <div key={i} className="border-t border-primary/10 pt-5">
                  <p
                    className="form-label mb-2"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-primary text-sm leading-relaxed whitespace-pre-line"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form — flat, no shadow */}
          <div
            className="lg:w-[58%] bg-primary flat-block p-8 md:p-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3
              className="text-cream mb-8"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "2rem",
                fontWeight: 300,
              }}
            >
              Send an Enquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className="form-label block mb-2"
                    style={{ color: "rgba(250,247,242,0.4)" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-transparent border-b border-cream/20 pb-3 text-cream text-sm outline-none placeholder:text-cream/30 focus:border-secondary transition-colors"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  />
                </div>
                <div>
                  <label
                    className="form-label block mb-2"
                    style={{ color: "rgba(250,247,242,0.4)" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-transparent border-b border-cream/20 pb-3 text-cream text-sm outline-none placeholder:text-cream/30 focus:border-secondary transition-colors"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className="form-label block mb-2"
                    style={{ color: "rgba(250,247,242,0.4)" }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234 ..."
                    className="w-full bg-transparent border-b border-cream/20 pb-3 text-cream text-sm outline-none placeholder:text-cream/30 focus:border-secondary transition-colors"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  />
                </div>
                <div>
                  <label
                    className="form-label block mb-2"
                    style={{ color: "rgba(250,247,242,0.4)" }}
                  >
                    Enquiry Type
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-cream/20 pb-3 text-cream/70 text-sm outline-none focus:border-secondary transition-colors"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    <option value="" className="text-primary bg-cream">
                      Select type
                    </option>
                    <option value="reservation" className="text-primary bg-cream">
                      Room Reservation
                    </option>
                    <option value="conference" className="text-primary bg-cream">
                      Conference Booking
                    </option>
                    <option value="event" className="text-primary bg-cream">
                      Event / Banquet
                    </option>
                    <option value="other" className="text-primary bg-cream">
                      General Enquiry
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="form-label block mb-2"
                  style={{ color: "rgba(250,247,242,0.4)" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we assist you?"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-cream/20 pb-3 text-cream text-sm outline-none placeholder:text-cream/30 focus:border-secondary transition-colors resize-none"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                />
              </div>

              <button
                type="submit"
                className="btn-book w-full text-center mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
