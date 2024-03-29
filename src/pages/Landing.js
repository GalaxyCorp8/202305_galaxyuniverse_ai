import Bg from "../assets/image/landing/landing_bg.png";
import styled from "styled-components";
import React, { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { osName } from "react-device-detect";
// import Video from "../assets/video/intro_30sec_10mb.mp4";

const VideoBackground = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const VideoWrapper = styled.div`
	position: relative;
	height: 100vh;
	overflow: hidden;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	.main-visual-inner {
		z-index: 1;
	}
`;

const PostContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${Bg});
	background-size: cover;
	background-position: center;
`;

const Landing = () => {
	const [isMobile, setIsMobile] = React.useState(false);
	useEffect(() => {
		console.log("@Landing.js / osName : ", osName);
		if (osName === "iOS" || osName === "Android") setIsMobile(true);
	}, []);
	return (
		<VideoWrapper>
			{/* 지디 기자회견 날 아침 긴급 작업. 영상 교체하면서 텍스트 영역도 삭제 2023.12.21 */}
			{/* <div className="main-visual-inner">
				<h1 className="eng lg:text-5xl text-lg">
					<span className="xs:block sm:block md:hidden lg:hidden">
						HUMAN
						<br />
						OUR
						<br />
						GALAXY
					</span>
					<span className="hidden sm:hidden md:block lg:block">
						HUMAN IS GALAXY
					</span>
				</h1>
			</div> */}

			{/* 최종선 대표님 코드, 모바일에서는 영상 배경이 되지 않도록 하였음 */}
			{isMobile ? (
				<VideoBackground
					playsInline
					muted
					autoPlay
					loop
					webkit-playsinline="true"
				>
					<source
						src={
							"https://s3.ap-northeast-2.amazonaws.com/2023.05.galhome.webm/welcomeStar_mobile.mp4"
						}
						type="video/mp4"
					/>
				</VideoBackground>
			) : (
				<VideoBackground
					playsInline
					muted
					autoPlay
					loop
					webkit-playsinline="true"
				>
					<source
						// src={Video}
						// src={
						// 	'https://s3.ap-northeast-2.amazonaws.com/2023.05.galhome.webm/main.webm'
						// }
						src={
							"https://s3.ap-northeast-2.amazonaws.com/2023.05.galhome.webm/welcomeStar.mp4"
						}
						type="video/mp4"
					/>
				</VideoBackground>
			)}
			{/* 안동현 코드, 모바일에서 영상 배경이 되지 않도록 한 것은 지우고, 항상 배경이 영상이 되도록. */}
			{/* <VideoBackground
				playsInline
				muted
				autoPlay
				loop
				webkit-playsinline="true"
			>
				<source
					// src={Video}
					// src={
					// 	'https://s3.ap-northeast-2.amazonaws.com/2023.05.galhome.webm/main.webm'
					// }
					src={
						"https://s3.ap-northeast-2.amazonaws.com/2023.05.galhome.webm/welcomeStar.mp4"
					}
					type="video/mp4"
				/>
			</VideoBackground> */}
		</VideoWrapper>
	);
};

export default Landing;
