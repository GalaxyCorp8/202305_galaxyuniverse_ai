import styled from "styled-components";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import SubVisualImage from "../../assets/image/WEB_image/x1/2_4tech/tech_1.jpg";
import SubVisualImageXs from "../../assets/image/MOBILE_image/x1/6_business-tech/business-tech_1.jpg";

// import Visual1 from "../../assets/image/WEB_image/x1/studio27/visual1.png";
// import Visual1Xs from "../../assets/image/MOBILE_image/x1/studio27/visual1.png";

import Visual1 from "../../assets/image/WEB_image/x1/studio27/studio27_top.png";
import Visual1Xs from "../../assets/image/MOBILE_image/x1/studio27/studio27_top_under500.jpg";

import AimingTxt from "../../assets/image/WEB_image/x1/studio27/beyond_frame_txt.png";
import AimingTxtXs from "../../assets/image/MOBILE_image/x1/studio27/aiming.png";
import AimingTxtSm from "../../assets/image/MOBILE_image/x1/studio27/aiming_sm.png";

import Pysical100Img from "../../assets/image/WEB_image/x1/studio27/img1.png";
// import Pysical100_2Img from "../../assets/image/WEB_image/x1/studio27/physical100_02.jpg";
import Pysical100_2Img from "../../assets/image/WEB_image/x1/studio27/physical100_02.png";

import Img3 from "../../assets/image/WEB_image/x1/studio27/img3.png";

import Txt2 from "../../assets/image/WEB_image/x1/studio27/txt2.png";
import Inspire from "../../assets/image/WEB_image/x1/studio27/inspire.png";
import InspireXs from "../../assets/image/MOBILE_image/x1/studio27/inspire.png";
import InspireSm from "../../assets/image/MOBILE_image/x1/studio27/inspire_sm.png";

import Janghogi from "../../assets/image/WEB_image/x1/studio27/janghogi.png";

import Txt3 from "../../assets/image/WEB_image/x1/studio27/txt3.png";
import Txt3Xs from "../../assets/image/MOBILE_image/x1/studio27/txt3.png";

import Map from "../../assets/image/WEB_image/x1/studio27/map.png";
import Btm from "../../assets/image/WEB_image/x1/studio27/btm.png";
import BtmXs from "../../assets/image/MOBILE_image/x1/studio27/btm.png";
import BtmTxt from "../../assets/image/WEB_image/x1/studio27/btmTxt.png";

import ReadMore from "../../assets/image/WEB_image/x1/studio27/readmore.png";

import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";
import { setDefaultLanguage } from "react-multi-lang";

import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLang } from "../../hooks/language";

import { useWindowSize } from "@react-hook/window-size";

const MContainer = styled.div`
	position: relative;
	padding-left: 120px;
	padding-right: 120px;
	@media (max-width: 767px) {
		padding-left: 0;
		padding-right: 0;
	}
`;

const Row = styled.div`
	display: flex;
	box-sizing: border-box;
`;
const RowItem = styled.div`
	position: relative;
	width: 50%;
`;
const Row2 = styled.div`
	display: flex;
	box-sizing: border-box;
`;
const RowItem2 = styled.div`
	position: relative;
	width: 40%;
	display: none;
	@media (max-width: 499px) {
		display: block;
		width: auto;
	}
`;
const RowItem22 = styled.div`
	position: relative;
	display: none;
	@media (min-width: 500px) and (max-width: 499px) {
		display: block;
	}
`;

const RowItem3 = styled.div`
	position: relative;
	width: 60%;
	@media (max-width: 767px) {
		width: 100%;
	}
`;

const BtnReadMore = styled(Link)`
	position: absolute;
	bottom: 0;
	background: url(${ReadMore}) no-repeat;
	width: 226px;
	height: 46px;
	overflow: hidden;
	display: block;
	&:hover,
	&:focus {
		background-position: 0 -51px;
	}
	@media (max-width: 767px) {
		width: 99px;
		height: 21px;
		background-size: 99px auto;
		&:hover,
		&:focus {
			background-position: 0 -22px;
		}
	}
	@media (min-width: 766px) and (max-width: 1199px) {
		width: 146px;
		height: 30px;
		background-size: 146px auto;
		&:hover,
		&:focus {
			background-position: 0 -32px;
		}
	}
`;

const BarText = styled.div`
	position: relative;
	h2 {
		position: relative;
		padding-left: 120px;
		width: 50%;
	}
	@media (max-width: 767px) {
		h2 {
			padding-left: 0;
		}
		&:after {
			width: 50%;
		}
	}
	@media (min-width: 768px) and (max-width: 1199px) {
		&:after {
			width: 50%;
		}
	}
`;

const Dummy = styled.div`
	display: block;
	background: #ff0000;
	height: 2px;
	margin-top: 5px;
	position: relative;
	left: 0;
	&:after {
		content: "";
		width: 100%;
		height: 100px;
		display: block;
		margin-bottom: 100px;
	}
`;

const WorksText = styled.span`
	position: relative;
`;

const Bar = styled.div`
	position: relative;
	margin-bottom: 100px;
	height: 1px;
	&:after {
		content: "";
		position: absolute;
		bottom: -7px;
		right: 0;
		width: 35%;
		height: 2px;
		background: #ff0000;
	}
	@media (min-width: 499px) and (max-width: 767px) {
		&:after {
			width: 70%;
		}
	}
`;

const Studio27Main = () => {
	const language = useSelector(selectLanguage);
	const { t, i18n } = useTranslation();
	const [width, height] = useWindowSize({ fps: 60 });
	const [isXs, setIsXs] = useState(false);
	const [isSm, setIsSm] = useState(false);

	const [dummyWidth, setDummyWidth] = useState(0);

	useEffect(() => {
		setDefaultLanguage(language ? language : "ko");
		if (width < 500) {
			setIsXs(true);
			setIsSm(false);
		} else if (width >= 500 && width < 768) {
			setIsXs(false);
			setIsSm(true);
		} else {
			setIsXs(false);
			setIsSm(false);
		}
	}, [language, width]);

	return (
		<>
			<div className="sub-visual2">
				<ParallaxBanner
					layers={[
						{
							image: isXs ? Visual1Xs : Visual1,
							speed: -5,
						},
					]}
					style={{ height: 680 }}
				/>
			</div>
			<div className="container px-7 lg:p-0">
				<h2 className="text-2xl lg:text-5xl eng text-center mt-14 lg:mt-10 mb-24 lg:mb-12">
					<img
						// 2023.12.18(월) 이미지로 된 텍스트 교체
						// src={isXs ? AimingTxtXs : isSm ? AimingTxtSm : AimingTxt}
						src={AimingTxt}
						alt=""
						피지컬100
						className="mx-auto"
					/>
				</h2>
				<p
					className="text-lg lg:text-lg text-center font-light"
					style={{ marginBottom: isXs ? 160 : 380 }}
				>
					갤럭시코퍼레이션의 스튜디오27은
					<br />
					TV & OTT를 넘어 다양한 플랫폼의 콘텐츠를 기획하고 제작하는 스튜디오
					레이블 입니다.
					<br />
				</p>
			</div>

			{/* 장호기 피디 영역 */}
			<div className="container px-7 lg:p-0">
				<MContainer style={{ marginBottom: isXs || isSm ? 247 : 519 }}>
					<div className="block sm:hidden">
						<img
							src={Janghogi}
							alt="장호기PD"
							style={{ marginLeft: "-28px", width: "70%" }}
						/>

						<div className="flex flex-row">
							<div className="basis-2/5"></div>
							<div className="basis-3/5 ml-7 flex flex-col justify-end">
								<p className="text-lg mb-16">
									JANG HOGI
									<br />
									장호기 PD
									<br />
									<br />
									갤럭시코퍼레이션 CCO
								</p>
								<div>
									<BtnReadMore to="/studio27/pd" />
								</div>
							</div>
						</div>
					</div>
					<div className="hidden sm:block md:block lg:hidden">
						<div className="flex flex-row">
							<div className="basis-1/2">
								<img src={Janghogi} alt="장호기PD" />
							</div>
							<div className="basis-3/5 ml-7 flex flex-col justify-end">
								<p className="text-lg mb-16">
									JANG HOGI
									<br />
									장호기 PD
									<br />
									<br />
									갤럭시코퍼레이션 CCO
								</p>
								<div>
									<BtnReadMore to="/studio27/pd" />
								</div>
							</div>
						</div>
					</div>
					<div className="hidden lg:block">
						<div className="flex flex-row">
							<div className="basis-2/5">
								<img src={Janghogi} alt="장호기PD" />
							</div>
							<div className="basis-3/5 ml-7 flex flex-col justify-end">
								{/* <img src={Inspire} alt="피지컬100" /> */}
								<p className="text-lg mb-16">
									JANG HOGI
									<br />
									장호기 PD
									<br />
									<br />
									갤럭시코퍼레이션 CCO
								</p>
								<div>
									<BtnReadMore to="/studio27/pd" />
								</div>
							</div>
						</div>
					</div>
				</MContainer>
			</div>

			<BarText className="mb-28">
				<div className="container px-7 lg:p-0">
					<h2 className="text-2xl lg:text-4xl eng ">
						<WorksText>WORKS</WorksText>
					</h2>
				</div>
			</BarText>
			{/* <Dummy
				className="mb-16 lg:mb-28"
				style={{
					width: isXs || isSm ? '23%' : dummyWidth,
				}}
			/> */}

			{/* 피지컬100 1 & 2 영역 */}
			<div className="container px-7 lg:p-0">
				{/* 피지컬100 2 영역 */}
				<MContainer style={{ marginBottom: isXs ? 160 : 380 }}>
					<Row>
						<RowItem
							style={{
								width: isSm ? "70%" : "50%",
								display: isSm ? "flex" : "block",
								justifyContent: "flex-end",
								paddingRight: isSm ? 20 : 0,
							}}
						>
							<div
								className="block sm:flex sm:items-start sm:flex-col"
								style={{ width: isSm ? 150 : "atuo" }}
							>
								<h3
									className="text-2xl lg:text-5xl font-medium mb-2.5"
									style={{ lineHeight: isXs || isSm ? "30px" : "60px" }}
								>
									피지컬100
									<br />
									시즌2 - Underground
								</h3>
								<p className="text-sm lg:text-2xl mb-10">
									{isXs ? (
										<>
											최고의 피지컬을 자랑하는 100인의 참가자,
											<br />
											연이은 험난한 대결에서 치열한 경쟁을 펼친다.
										</>
									) : (
										<>
											최고의 피지컬을 자랑하는 100인의 참가자,
											<br />
											연이은 험난한 대결에서 치열한 경쟁을 펼친다.
										</>
									)}
								</p>
								<p className="text-xs lg:text-2xl">
									Director : 장호기
									<br />
									Air Date : 2024. 03. 19
									<br />
									채널 정보 : 넷플릭스
								</p>
							</div>
						</RowItem>
						<RowItem style={{ width: isSm ? "30%" : "50%" }}>
							<img src={Pysical100_2Img} alt="피지컬100_02" />
						</RowItem>
					</Row>
				</MContainer>

				{/* 피지컬100 1 영역 */}
				<MContainer className="mb-28 lg:mb-64">
					<Row>
						<RowItem style={{ width: isSm ? "30%" : "45%" }}>
							<img src={Pysical100Img} alt="피지컬100_01" />
						</RowItem>
						<RowItem
							className="pl-5 lg:pl-14"
							style={{ width: isSm ? "70%" : "55%" }}
						>
							<h3
								className="text-2xl lg:text-5xl font-medium mb-2.5"
								style={{ lineHeight: isXs || isSm ? "30px" : "60px" }}
							>
								피지컬100
								<br />
								시즌1
							</h3>
							<p className="text-sm lg:text-2xl mb-3 sm:mb-10">
								{isXs ? (
									<span className="text-xs">
										최고의 ‘몸’을 찾기 위해, 최강 피지컬
										<br />
										100인이 벌이는 극강의 서바이벌 게임 예능
									</span>
								) : (
									<>
										최고의 ‘몸’을 찾기 위해, 최강 피지컬
										<br />
										100인이 벌이는 극강의 서바이벌 게임 예능
									</>
								)}
							</p>
							<p className="text-xs lg:text-2xl">
								Director : 장호기
								<br />
								Air Date : 2023. 01. 24
								<br />
								회차 : 9부작
								<br />
								채널 정보 : 넷플릭스
							</p>
							<BtnReadMore to="/studio27/physical100" />
						</RowItem>
					</Row>
				</MContainer>

				{/* 2023.12.17 주말 작업, 삭제 */}
				{/* <h2 className="text-2xl lg:text-5xl eng text-center mb-20 lg:mb-32">
					<img src={Txt2} alt="" className="mx-auto" />
				</h2>
				<p
					className="text-lg lg:text-lg  text-center font-light"
					style={{ marginBottom: isXs || isSm ? 160 : 440 }}
				>
					우리는 서로 이야기를 하고, 그 이야기를 누구나 즐길 수 있도록 콘텐츠를
					제작합니다.
					<br />
					우리만의 이야기가 아닌 전 세계 모든 사람들이 공감하고 하나가 될 수
					있는 스토리를 만들어 가고자 합니다.
				</p> */}
			</div>

			<div className="container px-7 lg:p-0">
				{/* 2023.12.19 화요 작업, 삭제 */}
				{/* <h2 className="text-2xl lg:text-5xl eng text-center mb-60 lg:mb-64">
					<img src={isXs || isSm ? Txt3Xs : Txt3} alt="" className="mx-auto" />
				</h2> */}
				<h2 className="text-2xl lg:text-4xl eng text-center mb-9 lg:mb-10">
					CONTACT US
				</h2>
			</div>

			<ParallaxBanner
				layers={[
					{
						image: isXs ? Map : Map,
						speed: -5,
					},
				]}
				style={{ height: 328 }}
			/>
			{/* 피씨 버전 */}
			<div className="hidden lg:block container mt-10 mb-32">
				<div className="flex flex-row">
					<div className="basis-1/3">
						<p className="text-lg">
							10, Gukjegeumyung-ro,
							<br />
							Yeongdeungpo-gu, Seoul,
							<br />
							Republic of Korea
						</p>
					</div>
					<div className="basis-1/3">
						<p className="text-lg">
							서울 영등포구 국제금융로
							<br />
							10 Three IFC 53F
						</p>
					</div>
					<div className="basis-1/3">
						<p className="text-lg mb-10">
							<span className="text-xl">CONTACT E-MAIL</span>
							<br />
							s27@galaxyuniverse.ai
						</p>
						<p className="text-lg">
							비즈니스 제안
							<br />
							공동 기획/제작 제안
							<br />
							작가/피디 상시 지원
						</p>
					</div>
				</div>
			</div>
			{/* 모바일 버전 */}
			<div className="block lg:hidden container mt-10 mb-40 px-7">
				<p className="text-lg mb-5">
					<span className="text-xl">CONTACT E-MAIL</span>
					<br />
					s27@galaxyuniverse.ai
				</p>
				<p className="text-lg mb-12">
					비즈니스 제안
					<br />
					공동 기획/제작 제안
					<br />
					작가/피디 상시 지원
				</p>

				<div className="flex flex-end">
					<div className="basis-1/2"></div>
					<div className="basis-1/2">
						<p className="text-lg">
							10, Gukjegeumyung-ro,
							<br />
							Yeongdeungpo-gu, Seoul,
							<br />
							Republic of Korea
						</p>
						<br />
						<br />
						<p className="text-lg">
							서울 영등포구 국제금융로
							<br />
							10 Three IFC 53F
						</p>
					</div>
				</div>
			</div>
			<div className="relative mb-32">
				<div
					style={{
						position: "absolute",
						top: isXs || isSm ? 80 : 267,
						left: 20,
						right: 20,
						zIndex: 1,
					}}
				>
					<h5 className="eng text-center">
						<span className="block sm:hidden text-xl">
							LET'S TELL OUR STORY
							<br />
							IN A SQUARE FRAME
							<br />
							AND SHOW THE WORLD
						</span>
						<span className="hidden sm:block lg:hidden text-xl">
							LET'S TELL OUR STORY IN A<br />
							SQUARE FRAME AND SHOW THE
							<br />
							WORLD
						</span>
						<span className="hidden lg:block text-2xl">
							LET'S TELL OUR STORY IN A SQUARE
							<br />
							FRAME AND SHOW THE WORLD
						</span>
					</h5>
					{/* <img
						src={BtmTxt}
						alt=""
						className="mx-auto"
					/> */}
				</div>
				<ParallaxBanner
					layers={[
						{
							image: Btm,
							speed: -5,
						},
					]}
					style={{ height: isXs ? 522 : 1080 }}
				/>
			</div>
		</>
	);
};

export default Studio27Main;
