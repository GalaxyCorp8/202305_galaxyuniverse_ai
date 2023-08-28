import React, { useState, useEffect, useRef } from "react";
// import { Document, Page } from "react-pdf";
import PDFViewer from "../components/PDFViewer";

import styled from "styled-components";
// import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

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

const PdfNoticePopup = () => {
	const currentDate = new Date();
	// 팝업 활성화 여부를 정의한다.
	let activateNoticePopup = true; // true로 설정하면 팝업이 뜬다.
	// let activateNoticePopup = false;   // false로 설정하면 팝업이 뜨지 않는다.

	useEffect(() => {
		// activateNoticePopup = true;

		const disabledDate = localStorage.getItem("modalLastDisabledDate");

		// 로컬 스토리지에서 가져온 disabledDate가 오늘 날짜와 같지 않으면 모달을 보여준다.
		if (
			!disabledDate ||
			disabledDate !== currentDate.toISOString().split("T")[0]
		) {
			setIsPdfDisabledToday(false);
		} else {
			setIsPdfDisabledToday(true);
		}

		console.log(
			"@PadNoticePopup.js / lastDisabled & currentDate : ",
			disabledDate,
			" & ",
			currentDate.toISOString().split("T")[0]
		);
		console.log(
			"                   / isPdfDisabledToday : ",
			isPdfDisabledToday
		);
		console.log(
			"                   / activateNoticePopup : ",
			activateNoticePopup
		);
		// // 로컬 스토리지에서 isPdfDisabledForever Bool값을 가져온다.
		// // 아래 코드는 로컬에서 가져온 isPDFHidden이 true이면 isPDFHidden을 true로 설정하고, false이면 false로 설정한다.
		// const isPDFHidden = localStorage.getItem("isPdfDisabledForever") === "true";
		// setIsPdfDisabledForever(isPDFHidden);
	}, []);

	// S3에 올린 PDF 파일의 URL
	// const pdfUrl = 'https://s3.ap-northeast-2.amazonaws.com/202305-galaxyuniverse.ai-assets/s3_assets/pdfs/5.%EC%B1%84%EA%B6%8C%EC%9E%90%EC%9D%B4%EC%9D%98%EC%A0%9C%EC%B6%9C%EB%B0%8F%EA%B5%AC%EC%A3%BC%EA%B6%8C%EC%A0%9C%EC%B6%9C%EA%B3%B5%EA%B3%A0(%EA%B0%A4%EB%9F%AD%EC%8B%9C%2C%EB%B9%85%ED%94%8C%EB%9E%98%EC%89%AC%EA%B3%B5%ED%86%B5%EB%AC%B8%EA%B5%AC)23.6.5.pdf'
	// const pdfUrl = "https://s3.ap-northeast-2.amazonaws.com/202305-galaxyuniverse.ai-assets/s3_assets/pdfs/7.%ED%95%A9%EB%B3%91%EB%B3%B4%EA%B3%A0%EC%9D%98%EA%B3%B5%EA%B3%A0(%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EA%B3%B5%EA%B3%A0-%EA%B0%A4%EB%9F%AD%EC%8B%9C)23.7.11.pdf";
	const pdfUrl =
		"https://s3.ap-northeast-2.amazonaws.com/202305-galaxyuniverse.ai-assets/s3_assets/pdfs/20230828_%EC%A0%9C9%EC%A2%85+%EC%A6%9D%EC%9E%90_%EA%B3%B5%EA%B3%A0%EB%AC%B8.pdf";

	const [showPopup, setShowPopup] = useState(true);
	const [isPdfDisabledToday, setIsPdfDisabledToday] = useState(false);

	const handleClose = () => {
		setShowPopup(false);
	};

	const handleNotShowAgainToday = () => {
		setIsPdfDisabledToday(true);

		// 로컬 스토리지에 저장
		localStorage.setItem(
			"modalLastDisabledDate",
			currentDate.toISOString().split("T")[0]
		);
		console.log(
			"@PadNoticePopup.js / modalLastDisabledDate : ",
			localStorage.getItem("modalLastDisabledDate")
		);
	};

	// 1. showPopup이 false이거나 (사용자가 직접 '닫기'로 닫았을 경우)
	// 2. isPdfDisabledForever가 true이거나 ('오늘 다시 보지 않기'를 클릭한 경우)
	// 3. activateNoticePopup이 false 이면
	// 렌더링을 중지한다.
	if (!showPopup || isPdfDisabledToday || !activateNoticePopup) {
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

export default PdfNoticePopup;
