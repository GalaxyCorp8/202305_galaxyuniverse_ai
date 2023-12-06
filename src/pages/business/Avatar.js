import styled from "styled-components";
import { Parallax, useParallax, ParallaxBanner } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import mBgImg from "../../assets/image/company/mirinae_bg.png";
import mTextImg from "../../assets/image/company/mirinae_texxt.png";
import Human from "../../assets/image/business/avatar/human.png";

import SubVisualImage from "../../assets/image/WEB_image/x1/2_1avatar/avatar_1.jpg";
import SubVisualImageXs from "../../assets/image/MOBILE_image/x1/3_business_avatar/business-avatar_1.jpg";
import Img1 from "../../assets/image/WEB_image/x1/2_1avatar/avatar_2.jpg";
import Img1Xs from "../../assets/image/MOBILE_image/x1/3_business_avatar/business-avatar_2.jpg";
import Img2 from "../../assets/image/WEB_image/x1/2_1avatar/avatar_3.jpg";
import Img2Xs from "../../assets/image/MOBILE_image/x1/3_business_avatar/business-avatar_3.jpg";
import Img3 from "../../assets/image/WEB_image/x1/2_1avatar/avatar_4.jpg";
import Img3Xs from "../../assets/image/MOBILE_image/x1/3_business_avatar/business-avatar_7.jpg";

import Av1 from "../../assets/image/WEB_image/x1/2_1avatar/avatar_3_1(black).png";
import Av1Over from "../../assets/image/WEB_image/x1/2_1avatar/avatar_3_1.png";
import Av2 from "../../assets/image/WEB_image/x1/2_1avatar/avatar_3_2(black).png";
import Av2Over from "../../assets/image/WEB_image/x1/2_1avatar/avatar_3_2.png";
import Av3 from "../../assets/image/WEB_image/x1/2_1avatar/avatar_3_3(black).png";
import Av3Over from "../../assets/image/WEB_image/x1/2_1avatar/avatar_3_3.png";

// 23.05.26 요청
// 아래 3개의 이미지 세트를 모두 교체, ~~-xs 기준인 파일만 사용하는 것으로 변경
import MsXs from "../../assets/image/MOBILE_image/x1/3_business_avatar/ms-xs.png";
// import MsMd from "../../assets/image/business/avatar/ms-md.svg";
import MsMd from "../../assets/image/MOBILE_image/x1/3_business_avatar/ms-xs.png";

import AvaXs from "../../assets/image/MOBILE_image/x1/3_business_avatar/ava-xs.png";
// import AvaMd from '../../assets/image/business/avatar/ava-md.svg'
import AvaMd from "../../assets/image/MOBILE_image/x1/3_business_avatar/ava-xs.png";

import HpXs from "../../assets/image/MOBILE_image/x1/3_business_avatar/hp-xs.png";
// import HpMd from '../../assets/image/business/avatar/hp-md.svg'
import HpMd from "../../assets/image/MOBILE_image/x1/3_business_avatar/hp-xs.png";

import Txt1 from "../../assets/image/business/avatar/txt1.svg";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { setDefaultLanguage } from "react-multi-lang";

import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLang } from "../../hooks/language";

import { useState } from "react";

import { useWindowSize } from "@react-hook/window-size";

const ListItem = styled.div`
	border-top: 1px solid #606060;
	display: flex;
	justify-content: space-between;
	align-items: top;
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
			<h1 className="text-6xl md:text-8xl text-white font-thin">
				Hello World!
			</h1>
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

const MirinaeBg = {
	image: mBgImg,
	translateY: [0, 50],
	opacity: [1, 0.3],
	scale: [1, 1, "easeOutCubic"],
	shouldAlwaysCompleteAnimation: true,
};

const MirinaeText = {
	translateY: [-10, 5],
	scale: [0.8, 1, "easeOutCubic"],
	opacity: [0.3, 1],
	shouldAlwaysCompleteAnimation: true,
	expanded: false,
	children: (
		<div className="absolute inset-0 flex items-center justify-center">
			<img src={mTextImg} alt="mirinae" />
		</div>
	),
};

const LinkButton = styled.div``;

const MirineaOverlay = {
	opacity: [0, 0.5], // 투명도 애니메이션의 시작과 끝 값
	shouldAlwaysCompleteAnimation: true, // 애니메이션이 항상 완료되어야 하는지 여부
	expanded: false, // 오버레이가 확장되었는지 여부
	// 자식 요소
	// 배경 그라데이션 스타일을 가진 div 요소
	children: (
		<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black" />
	),
};

const Avatar = () => {
	const language = useSelector(selectLanguage);
	const { t, i18n } = useTranslation();
	const [width, height] = useWindowSize({ fps: 60 });
	const [isXs, setIsXs] = useState(false);

	const [av1State, setAv1State] = useState(false);
	const [av2State, setAv2State] = useState(false);
	const [av3State, setAv3State] = useState(false);

	useEffect(() => {
		setDefaultLanguage(language ? language : "ko");
		if (width < 767) {
			setIsXs(true);
		} else {
			setIsXs(false);
		}
	}, [language, width]);

	return (
		<>
			<div className="sub-visual">
				<ParallaxBanner
					layers={[
						{
							image: isXs ? SubVisualImageXs : SubVisualImage,
							speed: -5,
						},
					]}
					style={{ height: 680 }}
				/>
			</div>
			<div className="container px-7 lg:p-0">
				<h2 className="flex justify-center mt-14 mb-12 lg:mb-10 ">
					<img src={Txt1} alt="" />
				</h2>
				<h3 className="text-lg lg:text-3xl text-center font-light lg:mb-36 mb-10">
					{t("ava1_1")}
				</h3>
				<div className="w-auto md:w-3/5 mx-auto">
					<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9">
						{t("ava1_2")}
					</p>
				</div>
				<div className="container px-4 lg:p-0 mt-72 lg:mt-96">
					<h2 className="text-2xl lg:text-5xl eng text-center mb-0 lg:mb-5">
						MIRINAE
					</h2>
					<p className="text-lg lg:text-2xl text-center font-bold mb-5 lg:mb-16">
						{t("ava1_3")}
					</p>
				</div>
			</div>
			<ParallaxBanner
				// layers={[MirinaeBg, MirineaOverlay, MirinaeText]}
				layers={[{ image: isXs ? Img1Xs : Img1, speed: -5 }]}
				className="bg-gray-900"
				style={{ height: isXs ? "235px" : "300px" }}
			/>
			<div className="container px-7 lg:p-0">
				<div className="w-auto md:w-4/5 mx-auto">
					<p className="text-lg text-center font-extralight leading-8 lg:leading-9 mt-5 lg:mt-14 mb-20 lg:mb-20 break-keep">
						{t("ava1_4")}
					</p>
				</div>
			</div>
			<div
				className="container flex justify-center"
				style={{ marginBottom: isXs ? "270px" : "500px" }}
			>
				<a
					href="https://galaxyava.com/"
					target="_blank"
					rel="noreferrer"
					className="linkButton"
				>
					<div className="tp" />
					<div className="lt" />
					<div className="lb" />
					<span className="eng">MIRINAE SITE</span>
					<div className="rt" />
					<div className="rb" />
					<div className="bt" />
				</a>
				{/* <a
					href="https://galaxyava.com/"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={MsMd}
						className="hidden sm:block"
						alt=""
					/>
					<img
						src={MsXs}
						alt=""
						className="block sm:hidden"
					/>
				</a> */}
			</div>
			<h2 className="text-2xl lg:text-5xl lg:leading-snug eng text-center mt-32 mb-0 lg:mb-2">
				AVA
			</h2>
			<h3 className="lg:text-3xl text-center font-bold mb-5 lg:mb-20">
				Another Vision Alpha
			</h3>
			<ParallaxBanner
				layers={[
					{
						image: isXs ? Img2Xs : Img2,
						speed: -5,
					},
				]}
				style={{ height: isXs ? 235 : 330 }}
			/>
			<div className="container px-7 lg:p-0">
				<div className="w-auto md:w-4/5 mx-auto">
					<p className="text-lg text-center font-extralight leading-8 lg:leading-9 mt-5 lg:mt-14 mb-20 lg:mb-20 break-keep">
						{t("ava1_5")}
					</p>
				</div>
			</div>
			{/* <div className="container mb-28 lg:mb-10">
				<div className="block md:flex justify-center items-center gap-10">
					<img
						src={av1State ? Av1Over : Av1}
						onMouseEnter={() => setAv1State(true)}
						onMouseOut={() => setAv1State(false)}
						alt=""
						className="block md:inline-block mx-auto md:mx-0 mb-8 md:mb-0"
					/>
					<img
						src={av2State ? Av2Over : Av2}
						onMouseEnter={() => setAv2State(true)}
						onMouseOut={() => setAv2State(false)}
						alt=""
						className="block md:inline-block mx-auto md:mx-0 mb-8 md:mb-0"
					/>
					<img
						src={av3State ? Av3Over : Av3}
						onMouseEnter={() => setAv3State(true)}
						onMouseOut={() => setAv3State(false)}
						alt=""
						className="block md:inline-block mx-auto md:mx-0 mb-8 md:mb-0"
					/>
				</div>
			</div> */}
			<div
				className="container flex justify-center"
				style={{ marginBottom: isXs ? 277 : 580 }}
			>
				<Link to="/page/ip">
					<div className="linkButton">
						<div className="tp" />
						<div className="lt" />
						<div className="lb" />
						<span className="eng">AVA IP VIEW</span>
						<div className="rt" />
						<div className="rb" />
						<div className="bt" />
					</div>
				</Link>
			</div>
			<h2 className="text-2xl lg:text-5xl lg:leading-snug eng text-center mt-32 mb-0 lg:mb-2">
				HUMAN
			</h2>
			<h3 className="lg:text-2xl text-center font-bold mb-5 lg:mb-16">
				{t("ava1_6")}
			</h3>

			{/* 2023.12.06 마미손 관련 긴급 작업 */}
			{/* <ParallaxBanner
				layers={[
					{
						image: isXs ? Img3Xs : Img3,
						speed: -5,
					},
				]}
				style={{ height: isXs ? "235px" : "300px" }}
			/> */}
			<div className="container px-7 lg:p-0">
				<div className="w-auto md:w-4/5 mx-auto">
					<p className="text-lg text-center font-extralight leading-8 lg:leading-9 mt-5 lg:mt-14 mb-16 lg:mb-20 break-keep">
						{t("ava1_7")}
					</p>
				</div>
			</div>
			<div className="container flex justify-center mb-96">
				{/* 2023.12.06 마미손 관련 긴급 작업 */}
				{/* <Link to="/page/human">
					<div className="linkButton">
						<div className="tp" />
						<div className="lt" />
						<div className="lb" />
						<span className="eng">HUMAN IP VIEW</span>
						<div className="rt" />
						<div className="rb" />
						<div className="bt" />
					</div>
				</Link> */}
			</div>
		</>
	);
};

export default Avatar;
