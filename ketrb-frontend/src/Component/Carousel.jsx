import React, { useState, useEffect } from "react";
import "./Carousel.css";

const images = [
  {
    className: "image0",
    coreValueTitle: "KENYA ENGINEERING TECHNOLOGY REGISTRATION BOARD",
    coreValueContent:
      "",
  },
  {
    className: "image1",
    coreValueTitle: "Accountability",
    coreValueContent:
      "We take responsibility for our actions and decisions, ensuring transparency and trust.",
  },
  {
    className: "image2",
    coreValueTitle: "Teamwork",
    coreValueContent:
      "We collaborate and support each other to achieve common goals.",
  },
  {
    className: "image3",
    coreValueTitle: "Integrity",
    coreValueContent:
      "We adhere to the highest ethical standards, demonstrating honesty and fairness in every action.",
  },
  {
    className: "image4",
    coreValueTitle: "Innovation",
    coreValueContent:
      "We foster a culture of creativity and continuous improvement, embracing new ideas and technologies.",
  },
  {
    className: "image5",
    coreValueTitle: "Commitment",
    coreValueContent:
      "We are dedicated to achieving excellence in everything we do, putting our best efforts into every task.",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="u-section-1" id="sec-63bc">
      <div className="u-carousel u-expanded-width u-slider-1">
        <div
          className="u-carousel-inner"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              className={`u-carousel-item ${
                currentSlide === index ? "u-active" : ""
              }`}
              key={index}
            >
              <div className={`u-image u-shading ${image.className}`}>
                <div className="u-container-layout">
                  <div className="u-core-values">
                    <h2>{image.coreValueTitle}</h2>
                    <p>{image.coreValueContent}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="u-carousel-control-prev" onClick={prevSlide}>
          <svg viewBox="0 0 8 8">
            <path d="M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z"></path>
          </svg>
        </button>
        <button className="u-carousel-control-next" onClick={nextSlide}>
          <svg viewBox="0 0 8 8">
            <path d="M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z"></path>
          </svg>
        </button>
        <ol className="u-carousel-indicators">
          {images.map((_, index) => (
            <li
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={currentSlide === index ? "u-active" : ""}
            ></li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Carousel;
