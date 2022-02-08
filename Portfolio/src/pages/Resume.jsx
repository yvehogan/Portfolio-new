import React from 'react';
import '../styles/Styles.css';

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



const Resume = () => {
  function onDocumentLoadSuccess( ) {

  }
    return (
        <div className="resume-page">
            <h2>Resume</h2>
            <Document
        file="Ita-Evelyn-Hogan.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
         {[1,2].map(page => (
            <Page pageNumber={page} />
        ))}
      </Document>
        </div>
    )
}

export default Resume
