import styled from "styled-components";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import Pysical1 from "../../assets/image/WEB_image/x1/studio27/pys1.png";

import Img1 from "../../assets/image/WEB_image/x1/studio27/janghogi_02.jpg";
import Img2 from "../../assets/image/WEB_image/x1/studio27/pd2.png";
import Img3 from "../../assets/image/WEB_image/x1/studio27/pd3.png";

import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";
import { setDefaultLanguage } from "react-multi-lang";

import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLang } from "../../hooks/language";

import { useWindowSize } from "@react-hook/window-size";

const Container960 = styled.div`
	width: 960px;
	margin: 0 auto;
	@media (max-width: 767px) {
		width: auto;
	}
`;

const Ul = styled.ul`
	list-style: none;
	padding-left: 0;
	li {
		position: relative;
		padding-left: 13px;
		&:before {
			position: absolute;
			left: 0;
			content: "-";
			display: block;
		}
	}
`;

const Pd = () => {
	const language = useSelector(selectLanguage);
	const { t, i18n } = useTranslation();
	const [width, height] = useWindowSize({ fps: 60 });
	const [isXs, setIsXs] = useState(false);

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
			<Container960 className="">
				{/* <div className="block lg:flex justify-between mb-32"> */}
				<div className="block lg:flex flex-row mb-32">
					{/* 장호기 피디 사진 영역 (화면 폭과 상관없이 공통으로 1개만 정의) */}
					<div className="lg:basis-1/2">
						<img src={Img1} alt="장호기 PD" className="mb-5 lg:mb-0" />
					</div>
					{/* 소형화면 용 */}
					<div className="flex flex-col lg:justify-between lg:basis-1/2 lg:pl-11 px-7 lg:pr-0 sm:hidden">
						<Ul className="mb-10 lg:mb-16">
							<li>2024 Netflix &lt;PHYSICAL:100&gt; S2</li>
							<li>2023 Netflix &lt;PHYSICAL:100&gt; S1</li>
							<li>2015 ~ 2023 MBC Documentary Producer</li>
						</Ul>

						<div className="">
							<p className="text-2xl mb-4">수상 내역</p>
						</div>

						<Ul>
							<li>2023 대한민국 콘텐츠 대상 ‘방송영상산업발전 유공 포상’</li>
							<li>2023 부산국제영화제 베스트 리얼리티&버라이어티상</li>
							<li>2023 한류문화대상 한국콘텐츠진흥원장상</li>
							<li>2021 올해의 호루라기 언론상</li>
							<li>2021 방송통신심의위원회 6월 이달의 좋은 프로그램상</li>
							<li>2017 푸른 미디어 특별상</li>
							<li>2014 제19회 아시안 TV어워즈 베스트 다큐멘터리상</li>
						</Ul>
					</div>
					{/* 대형화면 용 */}
					<div className="hidden lg:pl-11 px-7 lg:pr-0 sm:block">
						<div className="float-right" style={{ width: 400 }}>
							<Ul className="mb-10 lg:mb-16">
								<li>2024 Netflix &lt;PHYSICAL:100&gt; S2</li>
								<li>2023 Netflix &lt;PHYSICAL:100&gt; S1</li>
								<li>2015 ~ 2023 MBC Documentary Producer</li>
							</Ul>

							<div className="">
								<p className="text-2xl mb-4">수상 내역</p>
							</div>

							<Ul>
								<li>2023 대한민국 콘텐츠 대상 ‘방송영상산업발전 유공 포상’</li>
								<li>2023 부산국제영화제 베스트 리얼리티&버라이어티상</li>
								<li>2023 한류문화대상 한국콘텐츠진흥원장상</li>
								<li>2021 올해의 호루라기 언론상</li>
								<li>2021 방송통신심의위원회 6월 이달의 좋은 프로그램상</li>
								<li>2017 푸른 미디어 특별상</li>
								<li>2014 제19회 아시안 TV어워즈 베스트 다큐멘터리상</li>
							</Ul>
						</div>
						<div className="clear-both"></div>
					</div>
				</div>
				{/* <img
					src={Img2}
					alt=""
					className="mx-auto block mb-7 lg:mb-28"
				/>
				<img
					src={Img3}
					alt=""
					className="mx-auto block mb-20 lg:mb-56"
				/> */}
			</Container960>
		</>
	);
};

export default Pd;
