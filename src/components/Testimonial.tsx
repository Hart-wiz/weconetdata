"use client";
import React, { useState } from "react";

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, Acme Corp",
    quote:
      "WeconetData Technologies transformed our business with their innovative solutions. Their team is professional, responsive, and truly cares about our success.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    role: "CTO, BetaTech",
    quote:
      "The custom app they built for us streamlined our workflow and increased productivity. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Chen",
    role: "Product Manager, Startify",
    quote:
      "Excellent communication and top-notch results. We will definitely work with WeconetData again.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-primary/10 to-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        What Our Clients Say
      </h2>
      <div className="relative w-full max-w-xl mx-auto flex items-center">
        {/* Side Button - Previous */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-0 z-20 bg-primary/80 hover:bg-primary text-primary rounded-full p-3 shadow transition-all -translate-x-1/2"
          aria-label="Previous testimonial"
          style={{ top: "50%", transform: "translateY(-50%) translateX(-50%)" }}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 22l-8-8 8-8" />
          </svg>
        </button>
        {/* Testimonial Card */}
        <div className="bg-white rounded-xl shadow-xl px-8 py-10 flex flex-col items-center transition-all duration-500 min-h-[260px] w-full">
          <img
            src={testimonials[current].avatar}
            alt={testimonials[current].name}
            className="w-20 h-20 rounded-full border-4 border-primary mb-4 object-cover"
          />
          <p className="text-lg italic text-gray-700 mb-4 text-center">
            “{testimonials[current].quote}”
          </p>
          <div className="font-semibold text-primary">
            {testimonials[current].name}
          </div>
          <div className="text-sm text-gray-500">
            {testimonials[current].role}
          </div>
        </div>
        {/* Side Button - Next */}
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-0 z-20 bg-primary/80 hover:bg-primary text-primary rounded-full p-3 shadow transition-all translate-x-1/2"
          aria-label="Next testimonial"
          style={{ top: "50%", transform: "translateY(-50%) translateX(50%)" }}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10 6l8 8-8 8" />
          </svg>
        </button>
      </div>
      {/* Mobile Controls */}
      <div className="flex md:hidden justify-between w-full max-w-xl mt-4 px-4">
        <button
          onClick={prevSlide}
          className="bg-primary/80 hover:bg-primary text-white rounded-full p-2 shadow transition-all"
          aria-label="Previous testimonial"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="bg-primary/80 hover:bg-primary text-white rounded-full p-2 shadow transition-all"
          aria-label="Next testimonial"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? "bg-primary" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
