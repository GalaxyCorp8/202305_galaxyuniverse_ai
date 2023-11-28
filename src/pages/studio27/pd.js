import styled from "styled-components";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import Pysical1 from "../../assets/image/WEB_image/x1/studio27/pys1.png";

import Img1 from "../../assets/image/WEB_image/x1/studio27/pd.png";
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
				<div className="block lg:flex flex-row mb-32">
					{/* 장호기 피디 사진 영역 (화면 폭과 상관없이 공통으로 1개만 정의) */}
					<div className="lg:basis-1/2">
						<img src={Img1} alt="장호기 PD" className="mb-5 lg:mb-0" />
					</div>

					{/* 소형화면 용 */}
					<div className="flex flex-col lg:justify-between lg:basis-1/2 lg:pl-11 px-7 lg:pr-0 sm:hidden">
						<div>
							<h2 className="text-6xl lg:text-7xl mb-4">
								<strong>[소/sm:hidden]JANG HOGI</strong>
							</h2>
							<p className="text-2xl mb-4">장호기 PD</p>
							<p className="text-2xl mb-7 lg:mb-14">갤럭시코퍼레이션 CCO</p>
						</div>
						<Ul className="mb-10 lg:mb-16">
							<li>넷플릭스 피지컬: 100 시즌1(23.01.24 온에어)</li>
							<li>넷플릭스 피지컬: 100 시즌2(제작 중)</li>
							<li>MBC PD수첩</li>
							<li>MBC 당신이 믿었던 페이크</li>
							<li>채널A 신문이야기 돌직구 쇼+</li>
							<li>채널A 먹거리 X파일</li>
							<li>채널A 신년특집 신혁이</li>
							<li>채널A 갈 데까지 가보자</li>
							<li>채널A 논리로 풀다</li>
							<li>채널A 다큐스페셜</li>
						</Ul>
						<Ul>
							<li>
								2014 제 19회 아시안 TV 어워즈
								<br />
								베스트 다큐멘터리 시리즈부문 최우수상
							</li>
							<li>2017 푸른미디어 특별상</li>
							<li>2020 올해의 호루라기 언론상 (PD수첩)</li>
							<li>
								2021 방송통신심의위원회
								<br />
								6월 이달의 좋은 프로그램상
								<br />
								(PD수첩 - 국정원과 하얀방 고문,공작관들의 고백)
							</li>
							<li>
								2023 ‘제5회 뉴시스 한류엑스포’
								<br />
								한국콘텐츠진흥원장상
							</li>
						</Ul>
					</div>

					{/* 대형화면 용 */}
					<div className="hidden lg:pl-11 px-7 lg:pr-0 sm:block">
						<div className="float-right" style={{ width: 360 }}>
							<div className="">
								<h2 className="text-6xl lg:text-7xl mb-4">
									<strong>[대/sm:block]JANG HOGI</strong>
								</h2>
								<p className="text-2xl mb-4">장호기 PD</p>
								<p className="text-2xl mb-7 lg:mb-14">갤럭시코퍼레이션 CCO</p>
							</div>
							<Ul className="mb-10 lg:mb-16">
								<li>넷플릭스 피지컬: 100 시즌1(23.01.24 온에어)</li>
								<li>넷플릭스 피지컬: 100 시즌2(제작 중)</li>
								<li>MBC PD수첩</li>
								<li>MBC 당신이 믿었던 페이크</li>
								<li>채널A 신문이야기 돌직구 쇼+</li>
								<li>채널A 먹거리 X파일</li>
								<li>채널A 신년특집 신혁이</li>
								<li>채널A 갈 데까지 가보자</li>
								<li>채널A 논리로 풀다</li>
								<li>채널A 다큐스페셜</li>
							</Ul>
							<Ul>
								<li>
									2014 제 19회 아시안 TV 어워즈
									<br />
									베스트 다큐멘터리 시리즈부문 최우수상
								</li>
								<li>2017 푸른미디어 특별상</li>
								<li>2020 올해의 호루라기 언론상 (PD수첩)</li>
								<li>
									2021 방송통신심의위원회
									<br />
									6월 이달의 좋은 프로그램상
									<br />
									(PD수첩 - 국정원과 하얀방 고문,공작관들의 고백)
								</li>
								<li>
									2023 ‘제5회 뉴시스 한류엑스포’
									<br />
									한국콘텐츠진흥원장상
								</li>
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
