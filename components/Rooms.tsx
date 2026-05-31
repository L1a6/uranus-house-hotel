"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import Swal from "sweetalert2";

interface Room {
  id: string;
  number: string;
  name: string;
  description: string;
  price: string;
  size: string;
  capacity: string;
  image: string;
  features: string[];
}

const rooms: Room[] = [
  {
    id: "classic",
    number: "01",
    name: "Classic Room",
    description:
      "A beautifully appointed retreat with warm tones, quality linens, and thoughtful furnishings for a restful stay.",
    price: "₦35,000",
    size: "25 m²",
    capacity: "2 guests",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=85",
    features: ["King Bed", "Unlimited WiFi", "Air Conditioning", "Flat Screen TV", "Room Service"],
  },
  {
    id: "deluxe",
    number: "02",
    name: "Deluxe Room",
    description:
      "Enhanced comfort with premium furnishings, a spacious layout, and sweeping views of the vibrant Uyo metropolis.",
    price: "₦50,000",
    size: "35 m²",
    capacity: "2 guests",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=85",
    features: ["King Bed", "Unlimited WiFi", "Air Conditioning", "Mini Bar", "Work Desk", "Complimentary Breakfast"],
  },
  {
    id: "executive",
    number: "03",
    name: "Executive Suite",
    description:
      "Our signature suite offers a separate lounge, premium amenities, and the finest craftsmanship throughout — an experience beyond ordinary.",
    price: "₦80,000",
    size: "55 m²",
    capacity: "2–3 guests",
    image:
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=85",
    features: ["King Bed", "Sitting Area", "Unlimited WiFi", "Mini Bar", "Bathtub", "Butler on Call", "Complimentary Breakfast"],
  },
  {
    id: "family",
    number: "04",
    name: "Family Room",
    description:
      "Spacious and welcoming — ideal for families, featuring twin configurations, ample storage, and kid-friendly comforts.",
    price: "₦65,000",
    size: "45 m²",
    capacity: "4 guests",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1970&q=85",
    features: ["Twin + King Beds", "Unlimited WiFi", "Air Conditioning", "Flat Screen TV", "Complimentary Breakfast", "Room Service"],
  },
];

const Rooms: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease", once: true });
  }, []);

  const handleBook = () => {
    Swal.fire({
      title: "Reserve a Room",
      html: `
        <input id="swal-name" class="swal2-input" placeholder="Your Full Name" />
        <input id="swal-email" class="swal2-input" placeholder="Email Address" />
        <input id="swal-phone" class="swal2-input" placeholder="Phone Number" />
      `,
      showCancelButton: true,
      confirmButtonText: "Submit Request",
      confirmButtonColor: "#0C1D35",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const name = (document.getElementById("swal-name") as HTMLInputElement)?.value;
        const email = (document.getElementById("swal-email") as HTMLInputElement)?.value;
        if (!name || !email) {
          Swal.showValidationMessage("Please enter your name and email");
          return false;
        }
        return { name, email };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Reservation Request Sent",
          text: `Thank you, ${result.value?.name}. Our team will contact you shortly to confirm your booking.`,
          icon: "success",
          confirmButtonColor: "#0C1D35",
        });
      }
    });
  };

  const current = rooms[activeRoom];

  return (
    <section
      id="rooms"
      className="bg-cream w-full py-20 md:py-28 largesceen:py-40 overflow-hidden"
    >
      <div className="px-5 md:px-10 largesceen:px-16 max-w-screen-xl mx-auto">
        {/* Header */}
        <div
          className="flex items-center gap-4 mb-16"
          data-aos="fade-up"
        >
          <div className="w-8 h-px bg-secondary" />
          <p className="section-eyebrow">Rooms &amp; Suites</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* Room tabs */}
          <div
            className="lg:w-[28%] flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex-shrink-0 lg:mb-8">
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 300,
                  lineHeight: 1,
                  color: "#0C1D35",
                }}
              >
                Our
                <br />
                <span style={{ color: "#C9A050", fontStyle: "italic" }}>
                  Rooms
                </span>
              </h2>
            </div>

            {rooms.map((room, i) => (
              <button
                key={room.id}
                onClick={() => setActiveRoom(i)}
                className={`flex-shrink-0 text-left px-5 py-4 transition-all duration-300 ${
                  activeRoom === i
                    ? "bg-primary text-cream"
                    : "bg-cream-100 text-primary hover:bg-cream-200"
                }`}
                style={{ borderRadius: "10px" }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-medium tracking-widest ${
                      activeRoom === i ? "text-secondary" : "text-primary/40"
                    }`}
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {room.number}
                  </span>
                  <span
                    className="text-sm md:text-base"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontWeight: 400,
                    }}
                  >
                    {room.name}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Room display — flat color-blocked, no shadow */}
          <div
            className="lg:w-[72%] flat-block bg-primary overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
            key={current.id}
          >
            {/* Full-bleed image */}
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-cover transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 72vw"
              />
              {/* Room number overlay */}
              <div className="absolute bottom-4 right-6">
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "6rem",
                    color: "white",
                    opacity: 0.15,
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  {current.number}
                </span>
              </div>
            </div>

            {/* Color-blocked content section */}
            <div className="bg-primary p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 justify-between">
                <div className="md:w-[55%]">
                  <h3
                    className="text-cream mb-3"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                      fontWeight: 300,
                    }}
                  >
                    {current.name}
                  </h3>
                  <p
                    className="text-cream/60 text-sm leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    {current.description}
                  </p>

                  {/* Features as text list — no icons */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {current.features.map((f, i) => (
                      <span
                        key={i}
                        className="text-cream/50 text-xs uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-jost)" }}
                      >
                        {i > 0 && (
                          <span className="text-secondary mr-4">·</span>
                        )}
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:w-[40%] flex flex-col justify-between">
                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { label: "From", val: current.price },
                      { label: "Size", val: current.size },
                      { label: "Capacity", val: current.capacity },
                    ].map((spec, i) => (
                      <div key={i} className="border-t border-cream/10 pt-3">
                        <p
                          className="text-cream/40 text-[10px] uppercase tracking-widest mb-1"
                          style={{ fontFamily: "var(--font-jost)" }}
                        >
                          {spec.label}
                        </p>
                        <p
                          className="text-secondary text-sm font-medium"
                          style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
                        >
                          {spec.val}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleBook}
                    className="btn-book text-center w-full"
                  >
                    Reserve this Room
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
