import React from 'react';
import './act.css'; 

const ActPage = () => {
  return (
    <div className="act-page-container">
      <h1 className="act-page-title">The Act Document</h1>
      <div className="pdf-container">
        <iframe
          src="/Engineering_Act.pdf"
          title="Act Document"
          className="pdf-viewer"
        />
      </div>
    </div>
  );
};

export default ActPage;
