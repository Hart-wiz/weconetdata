import React from "react";
import OfferCard from "./OfferCard";
import { cards } from "../assets/assets.js";

// // Example service cards data
// export const cards = [
//   {
//     id: 1,
//     title: "Custom Web Development",
//     text: "We build scalable, high-performance web applications tailored to your business needs using the latest technologies.",
//     image: "https://img.icons8.com/color/96/000000/source-code.png",
//   },
//   {
//     id: 2,
//     title: "Mobile App Solutions",
//     text: "From iOS to Android, our team crafts seamless mobile experiences that engage users and drive results.",
//     image: "https://img.icons8.com/color/96/000000/smartphone-tablet.png",
//   },
//   {
//     id: 3,
//     title: "UI/UX Design",
//     text: "Our designers create intuitive, beautiful interfaces that delight users and enhance brand value.",
//     image: "https://img.icons8.com/color/96/000000/design.png",
//   },
//   {
//     id: 4,
//     title: "Cloud Integration",
//     text: "Leverage the power of the cloud for scalability, security, and efficiency in your digital operations.",
//     image: "https://img.icons8.com/color/96/000000/cloud.png",
//   },
//   {
//     id: 5,
//     title: "Business Automation",
//     text: "Automate repetitive tasks and streamline workflows to boost productivity and reduce costs.",
//     image: "https://img.icons8.com/color/96/000000/automation.png",
//   },
// ];

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
      {/* <div className="absolute inset-0 pointer-events-none z-0">
        <iframe
          src="https://my.spline.design/cubic-QW6HFYQqtmo1My1DNtOfWLoO/"
          frameBorder="0"
          className="w-full h-full opacity-20"
          title="Decorative 3D"
        ></iframe>
      </div> */}
    </section>
  );
};

export default Services;
export { cards as serviceCards }; // Exporting cards for potential use in other components
