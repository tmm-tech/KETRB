import React, { useState, useEffect } from "react";
import "./gallery.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import {
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";
import { Alert, AlertDescription, AlertTitle } from "../Component/alert";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://ketrb-backend.onrender.com/images/images');
        const result = await response.json();

        if (response.ok && result.images) {
          setImages(result.images); // Assuming result.images is an array of URLs
        } else {
          setAlertType("error");
          setAlertMessage("Failed to fetch images.");
        }
      } catch (error) {
        setAlertType("error");
        console.log('Error fetching images:', error);
        setAlertMessage("An error occurred while fetching images.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
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
      {alertMessage && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Alert
            className={`max-w-md mx-auto mt-4 ${alertType === "error" ? "bg-red-100 border-red-500" : "bg-green-100 border-green-500"}`}
          >
            <AlertTitle>{alertType === "error" ? "Error" : "Success"}</AlertTitle>
            <AlertDescription>{alertMessage}</AlertDescription>
          </Alert>
        </div>
      )}
      <div style={{ paddingTop: '30px' }} className="gallery">
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
                <FaArrowLeft />
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
                <FaArrowRight />
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
