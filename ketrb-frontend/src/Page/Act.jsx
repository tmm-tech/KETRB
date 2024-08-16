import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import "./act.css";

// Setting the workerSrc for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ActPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true); // State to track loading

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setLoading(false); // PDF loaded successfully
  };

  return (
    <>
      <TopBar />
      <div className="pdf-container">
        <h1 className="pdf-title">KETRB Act</h1> {/* Title added here */}
        {loading && <p className="loading-message">Loading PDF...</p>} {/* Loading message */}
        <Document
          file="/Engineering_Act.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => {
            console.error("Error loading PDF:", error);
            setLoading(false);
          }}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        {numPages && (
          <div className="pagination">
            <button
              onClick={() => setPageNumber(pageNumber - 1)}
              disabled={pageNumber <= 1}
            >
              Previous
            </button>
            <span>
              Page {pageNumber} of {numPages}
            </span>
            <button
              onClick={() => setPageNumber(pageNumber + 1)}
              disabled={pageNumber >= numPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ActPage;
