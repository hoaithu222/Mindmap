import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../globals.css";
import { slides } from "./slidesData";
import "../style/PowerPointSlider.css";

const PowerPointSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    changeSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Main Slide */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-5xl">
        {slides[currentSlide]?.fullImage ? (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-12">
              {slides[currentSlide]?.icon}
              <h1 className="text-5xl font-bold text-blue mb-4">
                {slides[currentSlide]?.title || "Tiêu đề"}
              </h1>
              <p className="text-xl text-white/80">
                {slides[currentSlide]?.subtitle || "Mô tả"}
              </p>
              <a
                href="https://mindmap-neon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 mt-4 py-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Demo trực tiếp
              </a>
            </div>
          </div>
        ) : (
          <div
            className={`w-full h-full ${slides[currentSlide]?.bgColor} p-12`}
          >
            {slides[currentSlide]?.icon}
            <h1 className="text-4xl font-bold text-white text-center ">
              {slides[currentSlide]?.title || "Tiêu đề"}
            </h1>
            <p className="text-lg text-white/80 text-center">
              {slides[currentSlide]?.subtitle || "Mô tả"}
            </p>
            <div className="grid grid-cols-2 gap-8 mt-10">
              {slides[currentSlide]?.content?.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-center text-white/90 text-lg"
                      >
                        <div className="w-2 h-2 bg-white rounded-full mr-3" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all backdrop-blur-sm"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all backdrop-blur-sm"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Slide Number */}
        <div className="absolute bottom-6 right-6 text-white/80 font-medium">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-6 flex justify-center gap-4 overflow-x-auto p-2">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`flex-shrink-0 w-32 h-20 rounded-lg ${
              slide.bgColor
            } p-3 transition-all transform hover:scale-105 ${
              currentSlide === index
                ? "ring-2 ring-white ring-offset-2 scale-105"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <div className="text-white text-xs leading-tight">
              {slide.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PowerPointSlider;
