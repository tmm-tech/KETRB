import React, { useState, useEffect } from "react";
import "./gallery.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import {
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";
// Dynamically import all images from the Gallery folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);

const images = importAll(
  require.context("../Asset/Gallery", false, /\.(png|jpe?g|svg|JPG)$/)
);

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    if (selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const showPreviousImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <>
      <TopBar />
      <div style={{ paddingTop: '180px' }}  className="gallery">
        <h1 className="gallery-title">Gallery</h1>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>

        {selectedImageIndex !== null && (
          <div className="lightbox" onClick={closeLightbox}>
            <img
              src={images[selectedImageIndex]}
              alt="Selected"
              className="lightbox-image"
            />
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>

            {selectedImageIndex > 0 && (
              <button
                className="lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  showPreviousImage();
                }}
              >
                <FaArrowLeft/>
              </button>
            )}

            {selectedImageIndex < images.length - 1 && (
              <button
                className="lightbox-next"
                onClick={(e) => {
                  e.stopPropagation();
                  showNextImage();
                }}
              >
                <FaArrowRight/>
              </button>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
