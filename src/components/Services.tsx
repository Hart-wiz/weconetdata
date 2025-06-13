import React from "react";
import OfferCard from "./OfferCard";
import { cards } from "../assets/assets.js";

const Services = () => {
  return (
    <section className="flex flex-col gap-6 text-white/80 my-16 px-8 max-md:px-2 relative">
      <h1 className="text-3xl text-center text-primary font-extrabold py-9 max-md:text-xl tracking-wide">
        Our Services
      </h1>
      <p className="text-center text-lg text-gray-400 max-w-2xl mx-auto mb-8">
        WeconetData Technologies offers a comprehensive suite of digital
        services to help your business grow, innovate, and succeed in the
        digital age.
      </p>
      <div className="flex gap-9 flex-wrap justify-center z-10">
        {cards.map((card) => (
          <OfferCard
            key={card.id}
            title={card.title}
            text={card.text}
            image={card.image}
          />
        ))}
      </div>
      {/* Optional: Add a decorative background or animation */}
      <div className="absolute bottom-10 right-80 w-90 h-90 bg-primary opacity-20 rounded-full blur-lg animate-pulse z-0 overflow-clip max-md:right-20 max-md:bottom-14"></div>
      <div className="absolute top-[-30px] left-40 w-30 h-30 bg-primary opacity-20 rounded-full blur-lg animate-pulse z-0 overflow-clip"></div>
    </section>
  );
};

export default Services;
export { cards as serviceCards }; // Exporting cards for potential use in other components
