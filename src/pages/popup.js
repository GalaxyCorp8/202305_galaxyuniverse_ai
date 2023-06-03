import React, { useState, useEffect, useRef } from "react";
// import { Document, Page } from "react-pdf";
import PDFViewer from "./../components/PDFViewer";

import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

// import Pdf from "../assets/pdf/testpdf.pdf";
// import Test from "../assets/pdf/test.jpg";

const PopupStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;
const PopupContentStyle = styled.div`
	background-color: darkgray;
	width: fit-content;
	height: fit-content;
	padding: 18px;
	border-radius: 8px;
`;

const Popup = () => {
	// 맨 뒤에 빈 배열을 넣어주면, 컴포넌트가 처음 렌더링 될 때만 실행된다.
	useEffect(() => {
		// 로컬 스토리지에서 isPDFHidden을 가져온다.
		const isPDFHidden = localStorage.getItem("isPDFHidden") === "true";
		setiIsPDFHidden(isPDFHidden);
	}, []);

	const pdfUrl =
		"https://s3.ap-northeast-2.amazonaws.com/202305-galaxyuniverse.ai-assets/s3_assets/pdfs/5.%EC%B1%84%EA%B6%8C%EC%9E%90%EC%9D%B4%EC%9D%98%EC%A0%9C%EC%B6%9C%EB%B0%8F%EA%B5%AC%EC%A3%BC%EA%B6%8C%EC%A0%9C%EC%B6%9C%EA%B3%B5%EA%B3%A0(%EA%B0%A4%EB%9F%AD%EC%8B%9C%2C%EB%B9%85%ED%94%8C%EB%9E%98%EC%89%AC%EA%B3%B5%ED%86%B5%EB%AC%B8%EA%B5%AC)23.6.5.pdf";
	const [showPopup, setShowPopup] = useState(true);

	const [isPDFHidden, setiIsPDFHidden] = useState(false);

	const handleClose = () => {
		setShowPopup(false);
	};

	const handleNotShowAgainToday = () => {
		setiIsPDFHidden(true);

		// 로컬 스토리지에 저장
		localStorage.setItem("isPDFHidden", true);
	};

	if (!showPopup || isPDFHidden) {
		return null; // 팝업이 숨겨진 경우 null을 반환하여 렌더링을 중지합니다.
	}

	return (
		<PopupStyle>
			<PopupContentStyle className="flex flex-col initial">
				<div className="flex justify-between mb-2">
					<button
						onClick={() => window.open(pdfUrl, "_blank")}
						className="text-xs text-center bg-white text-black py-1 px-1 mx-2 rounded-full shadow-xl"
					>
						다운로드
					</button>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<button
							onClick={handleClose}
							className="text-xs text-center bg-white text-black py-1 px-1 mx-2 rounded-full shadow-xl"
						>
							닫기
						</button>
						<label
							className="text-xs text-center bg-white text-black py-1 px-1 mx-2 rounded-full shadow-xl"
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<input type="checkbox" onChange={handleNotShowAgainToday} />
							&nbsp; Don't show again
						</label>
					</div>
				</div>

				{/* iframe은 모바일에서는 작동하지 않음 */}
				{/* <iframe src={Pdf} width="100%" height="100%"></iframe> */}
				{/* <source src={Pdf} type="application/pdf" /> */}

				{/* <img src={Test} alt="slash" /> */}

				<PDFViewer pdfUrl={pdfUrl} />
			</PopupContentStyle>
		</PopupStyle>
	);
};

export default Popup;
