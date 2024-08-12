import React, { useState, useEffect } from "react";
import "./gallery.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";

const galleryImages = [
  { src: "https://via.placeholder.com/150", alt: "Description of image 1" },
  { src: "https://via.placeholder.com/150", alt: "Description of image 2" },
  { src: "https://via.placeholder.com/150", alt: "Description of image 3" },
  // Add more images as needed
];

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
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.alt} className="gallery-image" />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
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
