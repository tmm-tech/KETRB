import React, { useState, useEffect } from "react";
import "./gallery.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";

// Dynamically import all images from the Gallery folder
const importAll = (requireContext) => 
  requireContext.keys().map(requireContext);

const images = importAll(require.context('../Asset/Gallery', false, /\.(png|jpe?g|svg|jpg)$/));

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <TopBar />
      <div className="gallery">
        <h1 className="gallery-title">Gallery</h1>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(src)}
            >
              <img src={src} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <img
              src={selectedImage}
              alt="Selected"
              className="lightbox-image"
            />
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;