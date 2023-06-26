import React, { useEffect, useRef, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import styled from "styled-components";
import "react-pdf/dist/esm/Page/TextLayer.css";

import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // 주석 레이어 스타일 시트
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; // 워커 스크립트 경로

const PDFViewerStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const pdfContainer = styled.div``;
const PdfPage = styled.div`
	display: block;
	margin: 0 auto;
`;

const PDFViewer = ({ pdfUrl }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [numPages, setNumPages] = useState(null);

	const handleDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const goToNextPage = () => {
		if (currentPage < numPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<PDFViewerStyle>
			<pdfContainer>
				<Document file={pdfUrl} onLoadSuccess={handleDocumentLoadSuccess}>
					<Page pageNumber={currentPage} className="pdf-page" />
				</Document>
			</pdfContainer>
			<PdfPage className="text-center">
				<button onClick={goToPreviousPage} disabled={currentPage === 1}>
					&lt; &nbsp;&nbsp;&nbsp;&nbsp;
				</button>
				<span>
					{currentPage} / {numPages} Pages
				</span>
				<button onClick={goToNextPage} disabled={currentPage === numPages}>
					&nbsp;&nbsp;&nbsp;&nbsp; &gt;
				</button>
			</PdfPage>
		</PDFViewerStyle>
	);
};

export default PDFViewer;
