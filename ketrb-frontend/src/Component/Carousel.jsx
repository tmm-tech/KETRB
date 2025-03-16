import React, { useState, useEffect } from "react";
import image0 from "../Asset/Gallery/IMG_0114.JPG";
import image1 from "../Asset/Gallery/IMG_0723.JPG";
import image2 from "../Asset/Gallery/IMG_0093.JPG";
import image3 from "../Asset/Gallery/IMG_0499.JPG";
import image4 from "../Asset/Gallery/IMG_0136.JPG";
import { Button } from "../Component/button";
import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const carouselItems = [
  {
    image: image0,
    title: "Kenya Engineering Technology Registration Board",
    description: "",
  },
  {
    image: image1,
    title: "Accountability",
    description:
      "We take responsibility for our actions and decisions, ensuring transparency and trust.",
  },
  {
    image: image2,
    title: "Teamwork",
    description:
      "We collaborate and support each other to achieve common goals.",
  },
  {
    image: image3,
    title: "Integrity",
    description:
      "We adhere to the highest ethical standards, demonstrating honesty and fairness in every action.",
  },
  {
    image: image4,
    title: "Innovation",
    description:
      "We foster a culture of creativity and continuous improvement, embracing new ideas and technologies.",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === carouselItems.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Carousel Section */}
      <section className="relative">
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4 text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                  {item.title}
                </h2>
                <p className="max-w-2xl text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Carousel;
