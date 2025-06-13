"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="relative pt-30 h-screen w-full flex justify-center items-center bg-gradient-to-br from-primary via-blue-300 to-black overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      {/* Decorative Spline or SVG background (optional) */}
      {/* <iframe
        src="https://my.spline.design/cubic-QW6HFYQqtmo1My1DNtOfWLoO/"
        frameBorder="0"
        className="w-full h-full absolute top-0 left-0 z-0 opacity-20"
        title="3D Decorative"
      ></iframe> */}
      <section className="flex flex-col items-center justify-center z-20 w-3/4 max-md:w-full text-center gap-8">
        <h1 className="font-extrabold text-3xl bg-white bg-clip-text text-transparent drop-shadow-lg z-50">
          WECONETDATA TECHNOLOGIES
        </h1>
        <p className="max-md:text-md text-xl text-white/90 font-medium mb-2">
          <b>
            Powering Business Growth
            <br className="max-md:hidden" />
            We build custom apps, websites, and mobile solutions that help your
            business scale faster and work smarter.
          </b>
        </p>
        <i className="text-lg text-blue-200 mt-2">
          Let’s create something great together.
        </i>
        <div className="flex gap-6 mt-8 justify-center">
          <a
            href="#contact"
            className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-lg"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="bg-white/10 border border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-lg"
          >
            Our Services
          </a>
        </div>
      </section>
      {/* Animated tech shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-2xl animate-pulse z-0"></div>
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-primary opacity-20 rounded-full blur-2xl animate-pulse z-0"></div>
    </div>
  );
};

export default Hero;
