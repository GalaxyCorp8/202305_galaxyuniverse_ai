import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
import PDFViewer from "./../components/PDFViewer";

import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

import Pdf from "../assets/pdf/testpdf.pdf";
import Test from "../assets/pdf/test.jpg";

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
	padding: 18px;
	border-radius: 8px;
`;

const Popup = () => {
	const [showPopup, setShowPopup] = useState(true);

	const handleClose = () => {
		setShowPopup(false);
	};

	const handleNeverShowAgain = () => {
		// 오늘 다시 보지 않기 버튼을 클릭한 경우 해당 로직을 추가합니다.
		// 예를 들어, 로컬 스토리지를 사용하여 사용자의 선택을 저장할 수 있습니다.
		// 로직을 추가하고 싶은 경우 여기에 작성합니다.
		setShowPopup(false);
	};

	if (!showPopup) {
		return null; // 팝업이 숨겨진 경우 null을 반환하여 렌더링을 중지합니다.
	}

	return (
		<PopupStyle>
			<PopupContentStyle>
				{/* iframe은 모바일에서는 작동하지 않음 */}
				{/* <iframe src={Pdf} width="100%" height="100%"></iframe> */}
				{/* <source src={Pdf} type="application/pdf" /> */}

				{/* <img src={Test} alt="slash" /> */}

				<PDFViewer url={Pdf} />

				<button onClick={handleClose}>[닫기]&nbsp;&nbsp;&nbsp;&nbsp;</button>
				<label>
					<input type="checkbox" onChange={handleNeverShowAgain} />
					Don't show again
				</label>
			</PopupContentStyle>
		</PopupStyle>
	);
};

export default Popup;
