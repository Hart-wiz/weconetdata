import React from "react";
import spline from "../assets/spline.png";
import truehost from "../assets/truehost.png";
import hostinger from "../assets/hostinger.png";

const partners = [
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "Acme Corp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },

  {
    name: "Spline",
    logo: spline, // local image import
  },
  {
    name: "WordPress",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
  },
  {
    name: "TrueHost",
    logo: truehost,
  },
  {
    name: "Hostinger",
    logo: hostinger, // local image import
  },
];

const Partners = () => (
  <section className="relative w-full py-16 bg-white  flex flex-col items-center">
    <h2 className="text-3xl font-bold text-primary mb-8 text-center">
      Our Partners
    </h2>
    <p className="mb-10 text-gray-600 text-center max-w-2xl">
      We are proud to collaborate with industry-leading organizations to deliver
      exceptional digital solutions and services.
    </p>
    <div className="flex flex-wrap justify-center gap-10 items-center w-full max-w-4xl ">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="flex flex-col items-center group max-md:w-20 max-md:text-sm"
        >
          {typeof partner.logo === "string" ? (
            // External image
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-24 h-24 object-contain mb-2 grayscale group-hover:grayscale-0 transition-all duration-300 bg-white p-2 rounded-lg"
            />
          ) : (
            // Local image
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-24 h-24 object-contain mb-2 grayscale group-hover:grayscale-0 transition-all duration-300 bg-white p-2 rounded-lg"
            />
          )}
          <span className="text-lg font-semibold text-gray-700 group-hover:text-primary transition-colors">
            {partner.name}
          </span>
        </div>
      ))}
    </div>
    {/* Optional: Add a decorative background or animation */}
    <div className="absolute bottom-10 right-80 w-90 h-80 bg-primary opacity-20 rounded-full blur-lg animate-pulse z-0 overflow-clip"></div>
    <div className="absolute top-[-400px] left-40 w-50 h-50 bg-primary opacity-20 rounded-full blur-lg animate-pulse z-0 overflow-clip"></div>
    <div className="absolute top-[300px] left-40 w-30 h-30 bg-primary opacity-20 rounded-full blur-lg animate-pulse z-0 overflow-clip"></div>
  </section>
);

export default Partners;
