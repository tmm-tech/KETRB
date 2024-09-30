import React, { useState, useEffect } from "react";
import "./Carousel.css";

const images = [
  {
    className: "image0",
    coreValueTitle: "KENYA ENGINEERING TECHNOLOGY REGISTRATION BOARD",
    coreValueContent: "",
    url: "../Asset/Gallery/IMG_0093.JPG",
  },
  {
    className: "image1",
    coreValueTitle: "Accountability",
    coreValueContent: "We take responsibility for our actions and decisions, ensuring transparency and trust.",
    url: "../Asset/Gallery/IMG_0723.JPG",
  },
  {
    className: "image2",
    coreValueTitle: "Teamwork",
    coreValueContent: "We collaborate and support each other to achieve common goals.",
    url: "../Asset/Carousel/lady&man.jpg",
  },
  {
    className: "image3",
    coreValueTitle: "Integrity",
    coreValueContent: "We adhere to the highest ethical standards, demonstrating honesty and fairness in every action.",
    url: "../Asset/Gallery/IMG_3465.jpeg",
  },
  {
    className: "image4",
    coreValueTitle: "Innovation",
    coreValueContent: "We foster a culture of creativity and continuous improvement, embracing new ideas and technologies.",
    url: "../Asset/Gallery/IMG_0136.JPG",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  // Preload the first image when the component mounts
  useEffect(() => {
    preloadImage(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const preloadImage = (index) => {
    const img = new Image();
    img.src = images[index].url;
    img.onload = () => {
      setLoadedImages((prevLoadedImages) => ({
        ...prevLoadedImages,
        [index]: true,
      }));
    };
  };

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % images.length;
    setCurrentSlide(newSlide);
    preloadImage(newSlide); // Preload the next image
  };

  const prevSlide = () => {
    const newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
    preloadImage(newSlide); // Preload the previous image
  };

  return (
    <section
      style={{ paddingTop: "130px", position: "relative", overflow: "hidden" }}
      className="u-section-1"
      id="sec-63bc"
    >
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
                  {loadedImages[index] ? (
                    <img
                      src={image.url}
                      alt={image.coreValueTitle}
                      className="carousel-image"
                      loading="lazy"
                    />
                  ) : (
                    <span>Loading...</span>
                  )}
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
