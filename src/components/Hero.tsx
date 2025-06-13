"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="relative pt-30 h-screen w-full flex justify-center items-center bg-gradient-to-br from-primary via-blue-300 to-black overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      <section className="flex flex-col items-center justify-center z-20  text-center ">
        <div className="w-3/4 max-md:w-full flex flex-col items-center justify-center z-20  text-center gap-8 max-md:px-3 ">
          <h1 className="font-extrabold text-5xl max-md:text-3xl w-3/4 bg-white bg-clip-text text-transparent drop-shadow-lg z-50">
            WECONETDATA TECHNOLOGIES
            <p className="text-lg max-md:text-sm text-white/70">
              Powering Business Growth Through Smart Solutions
            </p>
          </h1>
          <p className="max-md:text-md text-xl max-md:text-lg text-white/90 font-medium mb-2">
            WeconetData Technologies is your trusted partner in smart business
            scaling. We build custom apps, websites, and mobile solutions that
            help your business scale faster and work smarter.
          </p>
          <i className="text-lg text-blue-200 mt-2 max-md:text-sm">
            Your Growth Journey Starts with Smart Tech <br />— Let’s Begin
          </i>
        </div>
        <div className="flex gap-6 mt-8 justify-center ">
          <a
            href="https://wa.me/+16727631514?text=Hello%20WeconetData%20Technologies,%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-lg "
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
      <div className="absolute top-10 left-10 w-40 h-32 bg-blue-400 opacity-20 rounded-full blur-2xl animate-pulse z-0 overflow-clip"></div>
      <div className="absolute bottom-10 right-80 w-90 h-80 bg-primary opacity-20 rounded-full blur-lg animate-pulse z-0 overflow-clip"></div>
      <div className="absolute top-10 left-30 w-30 h-30 bg-primary opacity-20 rounded-full blur-3xl animate-pulse z-0 overflow-clip"></div>
    </div>
  );
};

export default Hero;
