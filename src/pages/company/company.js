import styled from "styled-components";
import { Parallax, useParallax, ParallaxBanner } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { setDefaultLanguage } from "react-multi-lang";

import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLang } from "../../hooks/language";

import Img1 from "../../assets/image/company/img1.png";
import Img2 from "../../assets/image/company/img2.png";
import Img3 from "../../assets/image/company/img3.png";
import Img4 from "../../assets/image/company/img4.png";
import SubVisualImage from "../../assets/image//company/sub_company1.png";

import Txt1 from "../../assets/image/company/txt1.svg";
import Txt2 from "../../assets/image/company/txt2.svg";
import Txt3 from "../../assets/image/company/txt3.svg";
import Txt4 from "../../assets/image/company/txt4.svg";

import y2019n from "../../assets/image/company/y-2019_n.svg";
import y2019a from "../../assets/image/company/y-2019_a.svg";
import y2021n from "../../assets/image/company/y-2021_n.svg";
import y2021a from "../../assets/image/company/y-2021_a.svg";
import y2022n from "../../assets/image/company/y-2022_n.svg";
import y2022a from "../../assets/image/company/y-2022_a.svg";
import y2023n from "../../assets/image/company/y-2023_n.svg";
import y2023a from "../../assets/image/company/y-2023_a.svg";

// import Video from "../../assets/video/company.webm";

import { useState } from "react";

const SubParagraph = styled.p`
	text-align: left;
`;

const ListItem = styled.div`
	border-top: 1px solid #606060;
	display: flex;
	justify-content: space-between;
	align-items: top;
`;
const Visual = styled.div`
	.circle {
		position: absolute;
		top: 0;
		left: 0;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background: #000;
		opacity: 0.5;
	}
`;

const YearTabButton = styled.button`
	color: rgba(255, 255, 255, 0.25);
	&.active {
		color: rgba(255, 255, 255, 1);
	}
	@media (max-width: 1023px) {
		font-size: 1.5rem;
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

const ListLink = styled(Link)``;

const background = {
	image:
		"https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
	translateY: [0, 50],
	opacity: [1, 0.3],
	scale: [1.05, 1, "easeOutCubic"],
	shouldAlwaysCompleteAnimation: true,
};

const headline = {
	translateY: [0, 30],
	scale: [1, 1.05, "easeOutCubic"],
	shouldAlwaysCompleteAnimation: true,
	expanded: false,
	children: (
		<div className="absolute inset-0 flex items-center justify-center">
			<h1 className="text-6xl md:text-8xl text-white font-thin">TEXT</h1>
		</div>
	),
};

const foreground = {
	image:
		"https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
	translateY: [0, 15],
	scale: [1, 1.1, "easeOutCubic"],
	shouldAlwaysCompleteAnimation: true,
};

const gradientOverlay = {
	opacity: [0, 0.9],
	shouldAlwaysCompleteAnimation: true,
	expanded: false,
	children: (
		<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
	),
};

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
	}
`;

const Company = () => {
	const language = useSelector(selectLanguage);
	const { t, i18n } = useTranslation();

	const [activeTabNum, setActiveTabNum] = useState(3);

	useEffect(() => {
		setDefaultLanguage(language ? language : "ko");
	}, [language]);

	return (
		<>
			{/* <ParallaxBanner
					layers={[background, headline, foreground, gradientOverlay]}
					className="aspect-[2/1] bg-gray-900"
				/> */}
			{/* <ParallaxBanner
					layers={[
						{
							image: SubVisualImage,
							speed: -5,
						},
					]}
					style={{ height: 680 }}
				/> */}
			<VideoContainer>
				<video
					// src={Video}
					src={
						"https://s3.ap-northeast-2.amazonaws.com/2023.05.galhome.webm/company.webm"
					}
					autoPlay
					loop
					muted
				></video>
			</VideoContainer>
			<div className="container p-4 lg:p-0">
				<h2 className="flex justify-center mt-32 mb-10">
					<img src={Txt1} alt="" />
				</h2>
				<h3 className="text-lg lg:text-3xl text-center font-light mb-36">
					{t("cmp1")}
				</h3>
				<div className="w-auto md:w-3/5 mx-auto">
					<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9">
						{t("cmp1_1")}
					</p>
				</div>
			</div>
			<div className="container px-4 lg:p-0 mt-96">
				<span className="block md:hidden lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="90"
						height="14"
						viewBox="0 0 90 14"
					>
						<text
							id="mission"
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
								mission
							</tspan>
						</text>
					</svg>
				</span>
				<span className="hidden md:block lg:block">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="179.5"
						height="26.5"
						viewBox="0 0 179.5 26.5"
					>
						<text
							id="mission"
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
								mission
							</tspan>
						</text>
					</svg>
				</span>
				<h2 className="text-2xl lg:text-5xl eng mt-3 mb-6 lg:mb-8">
					<img src={Txt2} alt="" />
				</h2>
			</div>
			<div className="container px-4 lg:p-0">
				<ParallaxBanner
					layers={[
						{
							image: Img1,
							speed: -5,
						},
					]}
					style={{ height: 300 }}
				/>
			</div>
			<div className="container px-4 lg:p-0">
				<p className="text-lg lg:text-xl mt-3 lg:mt-8 font-extralight lg:leading-9">
					{t("cmp1_2")}
				</p>
				<div className=" mt-96">
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
					</div>
					<div className="outlined-text xs:block sm:block md:hidden lg:hidden">
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
				</div>
				<h2 className="text-2xl lg:text-5xl eng mt-3 mb-3 lg:mb-8">
					<img src={Txt3} alt="" />
				</h2>
			</div>
			<div className="container px-4 lg:p-0">
				<ParallaxBanner
					layers={[
						{
							image: Img2,
							speed: -5,
						},
					]}
					style={{ height: 300 }}
				/>
			</div>
			<div className="container px-4 lg:p-0">
				<p className="text-lg lg:text-xl mt-3 lg:mt-8 font-extralight lg:leading-9">
					{t("cmp1_3")}
				</p>
				<div className="mt-96">
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
					</div>
					<div className="outlined-text xs:block sm:block md:hidden lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="145"
							height="14"
							viewBox="0 0 145 14"
						>
							<text
								id="core_value"
								dataname="core value"
								transform="translate(0.5 11.5)"
								stroke="#fff"
								strokeMiterlimit="10"
								strokeWidth="0.5"
								fontSize="16"
								fontFamily="GALAXY_eng"
								letterSpacing="-0.075em"
								fill="none"
							>
								<tspan x="0" y="0">
									core value
								</tspan>
							</text>
						</svg>
					</div>
				</div>
				<h2 className="text-2xl lg:text-5xl eng mt-3 mb-3 lg:mb-8">
					<img src={Txt4} alt="" />
				</h2>
			</div>
			<div className="container px-4 lg:px-0">
				<ParallaxBanner
					layers={[
						{
							image: Img3,
							speed: -5,
						},
					]}
					style={{ height: 300 }}
				/>
			</div>
			<div className="container px-4 lg:px-0">
				<p className="text-lg lg:text-xl mt-3 lg:mt-8 font-extralight lg:leading-9">
					{t("cmp1_4")}
				</p>
				<div className="mt-96">
					<div className="outlined-text hidden sm:hidden md:block lg:block">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="187.5"
							height="26.5"
							viewBox="0 0 187.5 26.5"
						>
							<text
								id="history"
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
									history
								</tspan>
							</text>
						</svg>
					</div>
				</div>
				<h2 className="text-2xl lg:text-5xl eng mt-3 mb-3 lg:mb-10">HISTORY</h2>
				<div className="container">
					<ParallaxBanner
						layers={[
							{
								image: Img4,
								speed: -5,
							},
						]}
						style={{ height: 300 }}
					/>
				</div>
				<div className="container p-4 lg:p-0">
					<div className="flex mt-14 mb-32">
						<div className="flex-1 text-center">
							<YearTabButton
								type="button"
								className={`text-4xl ${activeTabNum === 0 && "active"}`}
								onClick={() => setActiveTabNum(0)}
							>
								<img src={activeTabNum === 0 ? y2019a : y2019n} alt="" />
							</YearTabButton>
						</div>
						<div className="flex-1 text-center">
							<YearTabButton
								type="button"
								className={`text-4xl ${activeTabNum === 1 && "active"}`}
								onClick={() => setActiveTabNum(1)}
							>
								<img src={activeTabNum === 1 ? y2021a : y2021n} alt="" />
							</YearTabButton>
						</div>
						<div className="flex-1 text-center">
							<YearTabButton
								type="button"
								className={`text-4xl ${activeTabNum === 2 && "active"}`}
								onClick={() => setActiveTabNum(2)}
							>
								<img src={activeTabNum === 2 ? y2022a : y2022n} alt="" />
							</YearTabButton>
						</div>
						<div className="flex-1 text-center">
							<YearTabButton
								type="button"
								className={`text-4xl ${activeTabNum === 3 && "active"}`}
								onClick={() => setActiveTabNum(3)}
							>
								<img src={activeTabNum === 3 ? y2023a : y2023n} alt="" />
							</YearTabButton>
						</div>
					</div>
					<TabContents>
						<TabContent className={`${activeTabNum === 0 && "active"}`}>
							<p className="text-lg font-extralight">
								2019.08
								<br />
								{t("cmp1_17")}
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2020.01 <br />
								{t("cmp1_18")}
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2020.08 <br />
								{t("cmp1_19")}
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2020.09 <br />
								{t("cmp1_20")}
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2020.10 <br />
								{t("cmp1_21")}
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2020.12 <br />
								{t("cmp1_22")}
							</p>
						</TabContent>
						<TabContent className={`${activeTabNum === 1 && "active"}`}>
							<p className="text-lg font-extralight">
								2021.01
								<br />
								{t("cmp1_9")}
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2021.04
								<br />
								{t("cmp1_10")}
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2021.06
								<br />
								{t("cmp1_11")}
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2021.07
								<br />
								{t("cmp1_12")}
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2021.08
								<br />
								{t("cmp1_13")}
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2021.09
								<br />
								{t("cmp1_14")}
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2021.10
								<br />
								{t("cmp1_15")}
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
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
							<p className="text-lg font-extralight">
								2022.05
								<br />
								{t("cmp1_6")}
							</p>
							<br />
							<br />
							<br />
							<p className="text-lg font-extralight">
								2022.10
								<br />
								{t("cmp1_7")}
							</p>
							<br />
							<br />
							<br />
							<p className="text-lg font-extralight">
								2022.12
								<br />
								{t("cmp1_8")}
								<br />
								{t("cmp1_8_1")}
							</p>
						</TabContent>
						<TabContent className={`${activeTabNum === 3 && "active"}`}>
							<p className="text-lg font-extralight">
								2023.01
								<br />
								{t("cmp1_5")}
							</p>
						</TabContent>
					</TabContents>
				</div>
			</div>
		</>
	);
};

export default Company;
