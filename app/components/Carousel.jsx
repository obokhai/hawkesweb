"use client";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "ENERGY",
    description:
      "Energy projects are increasingly complex and highly regulated. We advise on regulatory compliance, project development, and energy-related transactions.",
    image: "/energy.png",
  },
  {
    title: "COMMERCIAL PRACTICE",
    description: "",
    image: "/commerce.png",
  },
  {
    title: "E-COMMERCE",
    description: "",
    image: "/e-com.png",
  },
  {
    title: "ENVIRONMENT",
    description: "",
    image: "/enviroment.png",
  },
];

function SampleNextArrow({ onClick }) {
  return (
    <button
      className="absolute -bottom-12 lg:right-12 max-lg:left-1/2  translate-x-4 bg-white border border-orange-500 p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
      onClick={onClick}
    >
      <ChevronRight size={18} />
    </button>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <button
      className="absolute -bottom-12 lg:right-14 max-lg:left-1/2 -translate-x-12 bg-white border border-orange-500 p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
      onClick={onClick}
    >
      <ChevronLeft size={18} />
    </button>
  );
}

export default function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="p-4">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="px-2">
            <div className="relative h-80 rounded overflow-hidden shadow-lg group">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Text */}
              <div className="absolute bottom-5 left-0 right-0 px-4 text-center">
                {slide.description && (
                  <p className="text-white text-xs mb-3">{slide.description}</p>
                )}
                <h4
                  className={`text-sm uppercase font-bold ${
                    slide.description ? "text-white" : "text-orange-400"
                  }`}
                >
                  {slide.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
