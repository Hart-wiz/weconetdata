import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Partners from "./components/Partners";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="bg-light text-white">
      <Nav />
      <div className=" px-5 max-md:px-0">
        <Hero />
        <Services />
        <Testimonial />
        <Partners />
        <Form />
        {/* <div className="absolute inset-0 pointer-events-none z-0">
          <iframe
            src="https://my.spline.design/cubic-QW6HFYQqtmo1My1DNtOfWLoO/"
            frameBorder="0"
            className="w-full h-full opacity-20"
            title="Decorative 3D"
          ></iframe>
        </div> */}
      </div>
      <Footer />
      testing the web
    </div>
  );
}
