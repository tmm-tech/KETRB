import React, { useState, useEffect } from "react";
import "./act.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const MyPdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
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

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <TopBar />
      <div className="pdf-viewer-container">
        <h1 className="pdf-viewer-title">KETRB Act</h1>
        <Document
          file="/Engineering_Act.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p className="pdf-page-info">
          Page {pageNumber} of {numPages}
        </p>
        <div className="pdf-navigation">
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Previous
          </button>
          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyPdfViewer;