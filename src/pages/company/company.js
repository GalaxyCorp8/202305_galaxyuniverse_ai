import styled from "styled-components";
import { Parallax, useParallax, ParallaxBanner } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { setDefaultLanguage } from "react-multi-lang";

import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLang } from "../../hooks/language";

import Txt1 from "../../assets/image/company/txt1.svg";
import Txt2 from "../../assets/image/company/txt2.svg";
import Txt3 from "../../assets/image/company/txt3.svg";
import Txt4 from "../../assets/image/company/txt4.svg";
import Txt5 from "../../assets/image/company/txt5.svg";

import Txt2Xs from "../../assets/image/company/txt2xs.svg";
import Txt3Xs from "../../assets/image/company/txt3xs.svg";
import Txt4Xs from "../../assets/image/company/txt4xs.svg";
import Txt5Xs from "../../assets/image/company/txt5xs.svg";

import y2019n from "../../assets/image/company/y-2019_n.svg";
import y2019a from "../../assets/image/company/y-2019_a.svg";
import y2021n from "../../assets/image/company/y-2021_n.svg";
import y2021a from "../../assets/image/company/y-2021_a.svg";
import y2022n from "../../assets/image/company/y-2022_n.svg";
import y2022a from "../../assets/image/company/y-2022_a.svg";
import y2023n from "../../assets/image/company/y-2023_n.svg";
import y2023a from "../../assets/image/company/y-2023_a.svg";

import SubVisualImage from "../../assets/image/WEB_image/x1/1_company/COMPANY_1.png";
import SubVisualImageMobile from "../../assets/image/MOBILE_image/x1/1_company/company_1.png";

import Img1 from "../../assets/image/WEB_image/x1/1_company/COMPANY_2.jpg";
import Img2 from "../../assets/image/WEB_image/x1/1_company/COMPANY_3.jpg";
import Img3 from "../../assets/image/WEB_image/x1/1_company/COMPANY_4.jpg";

import Img1xs from "../../assets/image/MOBILE_image/x1/1_company/company_2.jpg";
import Img2xs from "../../assets/image/MOBILE_image/x1/1_company/company_3.jpg";
import Img3xs from "../../assets/image/MOBILE_image/x1/1_company/company_4.jpg";

import y2019 from "../../assets/image/WEB_image/x1/1_company/COMPANY_5_1.jpg";
import y2021 from "../../assets/image/WEB_image/x1/1_company/COMPANY_5_2.jpg";
import y2022 from "../../assets/image/WEB_image/x1/1_company/COMPANY_5_3.jpg";
import y2023 from "../../assets/image/WEB_image/x1/1_company/COMPANY_5_4.jpg";

import y2019Xs from "../../assets/image/WEB_image/x1/1_company/COMPANY_5_1.jpg";
import y2021Xs from "../../assets/image/WEB_image/x1/1_company/COMPANY_5_2.jpg";
import y2022Xs from "../../assets/image/WEB_image/x1/1_company/COMPANY_5_3.jpg";
import y2023Xs from "../../assets/image/WEB_image/x1/1_company/COMPANY_5_4.jpg";

import ArrLeft from "../../assets/image/MOBILE_image/x1/1_company/history-left.png";
import ArrRight from "../../assets/image/MOBILE_image/x1/1_company/history-right.png";

// 각 섹션의 이미지 위에 있는 타이틀이 있는데, 그 이미지 타이틀 위의 라벨 이미지!
// MISSION
import img_1_mob_MISSION from "../../assets/image/company/1_mob_MISSION.png";
import img_1_web_MISSION from "../../assets/image/company/1_web_MISSION.png";
// VISION
import img_2_mob_VISION from "../../assets/image/company/2_mob_VISION.png";
import img_2_web_VISION from "../../assets/image/company/2_web_VISION.png";
// CORE VALUE
import img_3_mob_COREVALUE from "../../assets/image/company/3_mob_COREVALUE.png";
import img_3_web_COREVALUE from "../../assets/image/company/3_web_COREVALUE.png";
// HISTORY
import img_4_mob_HISTORY from "../../assets/image/company/4_mob_HISTORY.png";
import img_4_web_HISTORY from "../../assets/image/company/4_web_HISTORY.png";

// import Video from "../../assets/video/company_5mb.mp4";

import { useState } from "react";

import { useWindowSize } from "@react-hook/window-size";

const YearTabButton = styled.button`
	color: rgba(255, 255, 255, 0.25);
	&.active {
		color: rgba(255, 255, 255, 1);
	}
	@media (max-width: 1023px) {
		img {
			max-width: 55px;
		}
	}
`;

const TabContents = styled.div``;
const TabContent = styled.div`
	display: none;
	&.active {
		display: block;
	}
`;

const VideoContainer = styled.div`
	position: relative;
	height: 680px;
	overflow: hidden;
	video {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
		object-fit: cover;
	}
	@media (max-width: 767px) {
		height: 300px;
	}
`;

const Container1146 = styled.div`
	position: relative;
	width: 1146px;
	display: block;
	margin-left: auto;
	margin-right: auto;
	@media (max-width: 1145px) {
		width: 100%;
	}
`;

const Company = () => {
	const language = useSelector(selectLanguage);
	const { t, i18n } = useTranslation();
	const [width, height] = useWindowSize({ fps: 60 });
	const [isXs, setIsXs] = useState(false);
	const [isMd, setIsMd] = useState(false);
	const [isLg, setIsLg] = useState(false);

	const [activeTabNum, setActiveTabNum] = useState(3);

	const [activeImg, setActiveImg] = useState(isXs ? y2023Xs : y2023);

	const activeImgHandler = (num) => {
		setActiveTabNum(num);
		switch (num) {
			case 0:
				setActiveImg(isXs ? y2019Xs : y2019);
				break;
			case 1:
				setActiveImg(isXs ? y2021Xs : y2021);
				break;
			case 2:
				setActiveImg(isXs ? y2022Xs : y2022);
				break;
			case 3:
				setActiveImg(isXs ? y2023Xs : y2023);
				break;
			default:
				break;
		}
	};

	const historyBtnOnClickLeft = () => {
		switch (activeTabNum) {
			case 0:
				setActiveImg(isXs ? y2019Xs : y2019);
				break;
			case 1:
				setActiveImg(isXs ? y2021Xs : y2021);
				break;
			case 2:
				setActiveImg(isXs ? y2022Xs : y2022);
				break;
			case 3:
				setActiveImg(isXs ? y2023Xs : y2023);
				break;
			default:
				break;
		}
		setActiveTabNum(activeTabNum <= 0 ? 3 : activeTabNum - 1);
	};

	const historyBtnOnClickRight = () => {
		switch (activeTabNum) {
			case 0:
				setActiveImg(isXs ? y2019Xs : y2019);
				break;
			case 1:
				setActiveImg(isXs ? y2021Xs : y2021);
				break;
			case 2:
				setActiveImg(isXs ? y2022Xs : y2022);
				break;
			case 3:
				setActiveImg(isXs ? y2023Xs : y2023);
				break;
			default:
				break;
		}
		setActiveTabNum(activeTabNum >= 3 ? 0 : activeTabNum + 1);
	};

	useEffect(() => {
		setDefaultLanguage(language ? language : "ko");
		if (width < 767) {
			setIsXs(true);
		} else {
			setIsXs(false);
		}
		if (width > 1024) {
			setIsLg(true);
		} else {
			setIsLg(false);
		}
		if (width > 767 && width < 1024) {
			setIsMd(true);
		} else {
			setIsMd(false);
		}
	}, [language, width]);

	return (
		<>
			{/* <ParallaxBanner
					layers={[background, headline, foreground, gradientOverlay]}
					className="aspect-[2/1] bg-gray-900"
				/> */}
			<ParallaxBanner
				layers={[
					{
						image: isXs ? SubVisualImageMobile : SubVisualImage,
						speed: -5,
					},
				]}
				style={{ height: 680 }}
			/>
			{/* <VideoContainer>
				<video
					playsInline
					muted
					autoPlay
					loop
					webkit-playsinline="true"
				>
					<source
						// src={Video}
						// src="https://s3.ap-northeast-2.amazonaws.com/2023.05.galhome.webm/company.webm"
						src="https://s3.ap-northeast-2.amazonaws.com/2023.05.galhome.webm/company_5mb.mp4"
						type="video/mp4"
					/>
				</video>
			</VideoContainer> */}
			<Container1146 className="px-7 lg:p-0">
				<div className="container">
					<h2 className="flex justify-center mt-14 mb-12 lg:mb-10 ">
						<img src={Txt1} alt="" />
					</h2>
					<h3 className="text-lg lg:text-3xl text-center font-light lg:mb-36 mb-10">
						{t("cmp1")}
					</h3>
					<div className="w-auto md:w-3/5 mx-auto">
						<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9">
							{t("cmp1_1")}
						</p>
					</div>
				</div>
				<div className="container mt-72 lg:mt-96">
					{/* MISSION 라벨 (lg:hidden 작은 화면)*/}
					<span className="block md:hidden lg:hidden">
						<img src={img_1_mob_MISSION} alt="" />
					</span>
					<span className="hidden md:block lg:block">
						<img src={img_1_web_MISSION} alt="" />
					</span>
					{/* "BEYOND THE NEW WORLD" 이미지 타이틀 */}
					<h2 className="text-2xl lg:text-5xl eng mt-3 mb-6 lg:mb-8">
						<span className="hidden md:block">
							<img
								src={Txt2}
								alt=""
								style={{ width: isLg ? "100%" : "480px" }}
							/>
						</span>
						<span className="block md:hidden">
							<img src={Txt2Xs} alt="" />
						</span>
					</h2>
				</div>
				<div className="container">
					<ParallaxBanner
						layers={[
							{
								image: isXs ? Img1xs : Img1,
								speed: 0,
							},
						]}
						style={{ height: isXs ? "195px" : "300px" }}
					/>
				</div>
				<div className="container">
					<p className="text-lg lg:text-xl mt-3 lg:mt-8 font-extralight lg:leading-9 leading-8">
						{t("cmp1_2")}
					</p>
					<div className="mt-72 lg:mt-96">
						{/* VISSION 라벨 (lg:hidden 작은 화면)*/}
						<span className="block md:hidden lg:hidden">
							<img src={img_2_mob_VISION} alt="" />
						</span>
						<span className="hidden md:block lg:block">
							<img src={img_2_web_VISION} alt="" />
						</span>
						{/* <div className="outlined-text xs:block sm:block md:hidden lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="76"
							height="14"
							viewBox="0 0 76 14"
						>
							<text
								id="vision"
								transform="translate(0.5 11.5)"
								stroke="#fff"
								strokeMiterlimit="10"
								strokeWidth="0.5"
								fontSize="15"
								fontFamily="GALAXY_eng"
								letterSpacing="-0.075em"
								fill="none"
							>
								<tspan x="0" y="0">
									vision
								</tspan>
							</text>
						</svg>
					</div>
					<div className="outlined-text hidden sm:hidden md:block lg:block">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="150.5"
							height="26.5"
							viewBox="0 0 150.5 26.5"
						>
							<text
								id="vision"
								transform="translate(0.75 21.75)"
								fill="none"
								stroke="#fff"
								strokeMiterlimit="10"
								strokeWidth="0.75"
								fontSize="30"
								fontFamily="GALAXY_eng"
								letterSpacing="-0.075em"
							>
								<tspan x="0" y="0">
									vision
								</tspan>
							</text>
						</svg>
					</div> */}
					</div>

					{/* "REALIZER OF IN..." 이미지 타이틀 */}
					<h2 className="text-2xl lg:text-5xl eng mt-3 mb-3 lg:mb-8">
						<span className="hidden lg:block">
							<img src={Txt3} alt="" />
						</span>
						<span className="block lg:hidden">
							<img src={Txt3Xs} alt="" />
						</span>
					</h2>
				</div>
				<div className="container">
					<ParallaxBanner
						layers={[
							{
								image: isXs ? Img2xs : Img2,
								speed: 0,
							},
						]}
						style={{ height: isXs ? "195px" : "300px" }}
					/>
				</div>
				<div className="container">
					<p className="text-lg lg:text-xl mt-3 lg:mt-8 font-extralight lg:leading-9 leading-8">
						{t("cmp1_3")}
					</p>
					<div className="mt-72 lg:mt-96">
						{/* CORE VALUE 라벨 (lg:hidden 작은 화면)*/}
						<span className="block md:hidden lg:hidden">
							<img src={img_3_mob_COREVALUE} alt="" />
						</span>
						<span className="hidden md:block lg:block">
							<img src={img_3_web_COREVALUE} alt="" />
						</span>
						{/* <div className="outlined-text xs:block sm:block md:hidden lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="141.156"
							height="12.372"
							viewBox="0 0 141.156 12.372"
						>
							<path
								id="패스_162"
								dataname="패스 162"
								d="M13.616,1.184H3.888L1.52-.592V-8.88l2.368-1.776h9.728v3.088h-7.9V-1.9h7.9Zm6.656,0h-2.24L15.456-.592V-8.88l2.576-1.776h9.04L29.648-8.88V-.592L27.072,1.184ZM19.008-7.7v5.92H26.1V-7.7ZM43.824-3.552,41.984-2.16l2.448,3.344H40.544L38.1-2.16H34.928V1.184H31.376v-11.84h10.08L43.824-8.88ZM40.272-5.328V-7.712H34.944v2.384ZM45.984,1.2V-10.672h12.24v3.1H49.552V-6.08h7.632v2.688H49.552V-1.9h8.672V1.2ZM81.792-10.656h.768L77.856,1.2H71.84l-4.7-11.856h4.288l3.424,8.64,3.44-8.64h3.5ZM98.976,1.2h-3.9l-.7-1.792H88.144L87.44,1.2H83.552l4.7-11.872h6.016ZM89.328-3.552h3.856l-1.92-4.864ZM113.44-2.368V1.2H100.416V-10.672h4.16v8.3Zm1.648,1.792V-10.64h4.144v8.48h4.736v-8.48h4.144V-.576L125.744,1.2h-8.288ZM129.936,1.2V-10.672h12.24v3.1H133.5V-6.08h7.632v2.688H133.5V-1.9h8.672V1.2Z"
								transform="translate(-1.27 10.922)"
								fill="none"
								stroke="#fff"
								strokeWidth="0.5"
							/>
						</svg>
					</div>
					<div className="outlined-text hidden sm:hidden md:block lg:block">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="271.5"
							height="26.5"
							viewBox="0 0 271.5 26.5"
						>
							<text
								id="core_value"
								dataname="core value"
								transform="translate(0.75 21.75)"
								stroke="#fff"
								strokeMiterlimit="10"
								strokeWidth="0.75"
								fontSize="30"
								fontFamily="GALAXY_eng"
								letterSpacing="-0.075em"
								fill="none"
							>
								<tspan x="0" y="0">
									core value
								</tspan>
							</text>
						</svg>
					</div> */}
					</div>

					{/* "MULTI METAVERSE DR..." 이미지 타이틀 */}
					<h2 className="text-2xl lg:text-5xl eng mt-3 mb-3 lg:mb-8">
						<span className="hidden lg:block">
							<img src={Txt4} alt="" />
						</span>
						<span className="block lg:hidden">
							<img src={Txt4Xs} alt="" />
						</span>
					</h2>
				</div>
				<div className="container">
					<ParallaxBanner
						layers={[
							{
								image: isXs ? Img3xs : Img3,
								speed: 0,
							},
						]}
						style={{ height: isXs ? "195px" : "300px" }}
					/>
				</div>
				<div className="container">
					<p className="text-lg lg:text-xl mb-14 mt-3 lg:mt-8 font-extralight lg:leading-9 leading-8">
						{t("cmp1_4")}
					</p>

					{/* 					
					<div className="mt-72 lg:mt-96">
						// 2023.12.20(수) 회사 연혁 제거 요청 by 요청 미르 최정수, 작업 안동현
						
						// HISTORY 라벨 (lg:hidden 작은 화면)
						<span className="block md:hidden lg:hidden">
							<img src={img_4_mob_HISTORY} alt="" />
						</span>
						<span className="hidden md:block lg:block">
							<img src={img_4_web_HISTORY} alt="" />
						</span>
					</div>
					<h2 className="text-2xl lg:text-5xl eng mt-3 mb-3 lg:mb-8"></h2>
					<div className="container">
						<ParallaxBanner
							layers={[
								{
									image: activeImg,
									speed: 0,
								},
							]}
							style={{ height: isXs ? "195px" : "300px" }}
						/>
					</div>
					<div className="container">
						<div className="flex justify-center lg:hidden mt-10 mb-12">
							<button
								className=""
								type="button"
								style={{ marginRight: 30 }}
								onClick={historyBtnOnClickLeft}
							>
								<img src={ArrLeft} alt="" />
							</button>
							<button
								className=""
								type="button"
								onClick={historyBtnOnClickRight}
							>
								<img src={ArrRight} alt="" />
							</button>
						</div>
						// 2019, 2021, 2022, 2023 년 표시, 클릭 가능
						<div className="flex mt-14 mb-16 lg:mb-32 ">
							<div className="flex-1 text-center">
								<YearTabButton
									type="button"
									className={`text-lg lg:text-4xl ${
										activeTabNum === 0 && "active"
									}`}
									onClick={() => activeImgHandler(0)}
								>
									{isLg ? (
										<img src={activeTabNum === 0 ? y2019a : y2019n} alt="" />
									) : (
										2019
									)}
								</YearTabButton>
							</div>
							<div className="flex-1 text-center">
								<YearTabButton
									type="button"
									className={`text-lg lg:text-4xl ${
										activeTabNum === 1 && "active"
									}`}
									onClick={() => activeImgHandler(1)}
								>
									{isLg ? (
										<img src={activeTabNum === 1 ? y2021a : y2021n} alt="" />
									) : (
										2021
									)}
								</YearTabButton>
							</div>
							<div className="flex-1 text-center">
								<YearTabButton
									type="button"
									className={`text-lg lg:text-4xl ${
										activeTabNum === 2 && "active"
									}`}
									onClick={() => activeImgHandler(2)}
								>
									{isLg ? (
										<img src={activeTabNum === 2 ? y2022a : y2022n} alt="" />
									) : (
										2022
									)}
								</YearTabButton>
							</div>
							<div className="flex-1 text-center">
								<YearTabButton
									type="button"
									className={`text-lg lg:text-4xl ${
										activeTabNum === 3 && "active"
									}`}
									onClick={() => activeImgHandler(3)}
								>
									{isLg ? (
										<img src={activeTabNum === 3 ? y2023a : y2023n} alt="" />
									) : (
										2023
									)}
								</YearTabButton>
							</div>
						</div>
						각 년도 별 하부 내용들 영역 시작
						<TabContents style={{ height: !isXs ? 1572 : "auto" }}>
							<TabContent className={`${activeTabNum === 0 && "active"}`}>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2019.08
									<br />
									{t("cmp1_17")}
								</p>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2020.01 <br />
									{t("cmp1_18")}
								</p>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2020.08 <br />
									{t("cmp1_19")}
								</p>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2020.09 <br />
									{t("cmp1_20")}
								</p>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2020.10 <br />
									{t("cmp1_21")}
								</p>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2020.12 <br />
									{t("cmp1_22")}
								</p>
							</TabContent>
							<TabContent className={`${activeTabNum === 1 && "active"}`}>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2021.01
									<br />
									{t("cmp1_9")}
								</p>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2021.04
									<br />
									{t("cmp1_10")}
								</p>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2021.06
									<br />
									{t("cmp1_11")}
								</p>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2021.07
									<br />
									{t("cmp1_12")}
								</p>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2021.08
									<br />
									{t("cmp1_13")}
								</p>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2021.09
									<br />
									{t("cmp1_14")}
								</p>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2021.10
									<br />
									{t("cmp1_15")}
								</p>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2021.12
									<br />
									{t("cmp1_16")}
									<br />
									{t("cmp1_16_1")}
									<br />
									{t("cmp1_16_2")}
								</p>
							</TabContent>
							<TabContent className={`${activeTabNum === 2 && "active"}`}>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2022.05
									<br />
									{t("cmp1_6")}
								</p>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2022.10
									<br />
									{t("cmp1_7")}
								</p>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2022.12
									<br />
									{t("cmp1_8")}
									<br />
									{t("cmp1_8_1")}
								</p>
							</TabContent>
							<TabContent className={`${activeTabNum === 3 && "active"}`}>
								<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
									2023.01
									<br />
									{t("cmp1_5")}
								</p>
							</TabContent>
						</TabContents>
					</div>

									*/}
				</div>
			</Container1146>
		</>
	);
};

export default Company;
