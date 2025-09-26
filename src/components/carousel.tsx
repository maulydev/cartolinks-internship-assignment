"use client";

import { slides } from "@/data/features";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselCard from "./common/carousel-card";

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const getTranslatePercent = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 50;
      if (window.innerWidth >= 768) return 66.66;
    }
    return 100;
  };

  return (
    <div className="relative container mx-auto p-4">
      {/* Slides wrapper */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * getTranslatePercent()}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <CarouselCard key={index} {...slide} />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between px-8 mt-2 md:mt-4">
        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition ${
                current === index
                  ? "bg-black dark:bg-white"
                  : "bg-gray-400 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="space-x-2">
          <button
            onClick={prevSlide}
            className="bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 lg:cursor-pointer transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 lg:cursor-pointer transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
