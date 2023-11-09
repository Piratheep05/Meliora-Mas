import React, { useState } from "react";
import { Box } from "@mui/material";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

const PDFViewer = ({ pdfUrl, childWidth }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          {/* <Page pageNumber={pageNumber} width={childWidth} /> */}
          {new Array(numPages).fill().map((_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            // width={childWidth}
          />
        ))}
        </Document>
      </Box>
    </>
  );
};

// Set default props to component
PDFViewer.defaultProps = {
  pdfUrl: "",
};

export default PDFViewer;
