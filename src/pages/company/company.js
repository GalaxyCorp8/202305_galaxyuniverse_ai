import styled from 'styled-components'
import { Parallax, useParallax, ParallaxBanner } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'

import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../../hooks/language'

import Img1 from '../../assets/image/company/img1.png'
import Img2 from '../../assets/image/company/img2.png'
import Img3 from '../../assets/image/company/img3.png'
import Img4 from '../../assets/image/company/img4.png'
import SubVisualImage from '../../assets/image//company/sub_company1.png'

import Txt1 from '../../assets/image/company/txt1.svg'
import Txt2 from '../../assets/image/company/txt2.svg'
import Txt3 from '../../assets/image/company/txt3.svg'
import Txt4 from '../../assets/image/company/txt4.svg'

import { useState } from 'react'

const SubParagraph = styled.p`
	text-align: left;
`

const ListItem = styled.div`
	border-top: 1px solid #606060;
	display: flex;
	justify-content: space-between;
	align-items: top;
`
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
`

const YearTabButton = styled.button`
	color: rgba(255, 255, 255, 0.25);
	&.active {
		color: rgba(255, 255, 255, 1);
	}
	@media (max-width: 1023px) {
		font-size: 1.5rem;
	}
`

const TabContents = styled.div``
const TabContent = styled.div`
	display: none;
	&.active {
		display: block;
	}
`

const ListLink = styled(Link)``

const background = {
	image:
		'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
	translateY: [0, 50],
	opacity: [1, 0.3],
	scale: [1.05, 1, 'easeOutCubic'],
	shouldAlwaysCompleteAnimation: true,
}

const headline = {
	translateY: [0, 30],
	scale: [1, 1.05, 'easeOutCubic'],
	shouldAlwaysCompleteAnimation: true,
	expanded: false,
	children: (
		<div className="absolute inset-0 flex items-center justify-center">
			<h1 className="text-6xl md:text-8xl text-white font-thin">TEXT</h1>
		</div>
	),
}

const foreground = {
	image:
		'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
	translateY: [0, 15],
	scale: [1, 1.1, 'easeOutCubic'],
	shouldAlwaysCompleteAnimation: true,
}

const gradientOverlay = {
	opacity: [0, 0.9],
	shouldAlwaysCompleteAnimation: true,
	expanded: false,
	children: (
		<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
	),
}

const Company = () => {
	const language = useSelector(selectLanguage)
	const { t, i18n } = useTranslation()

	const [activeTabNum, setActiveTabNum] = useState(3)

	useEffect(() => {
		setDefaultLanguage(language ? language : 'ko')
	}, [language])

	return (
		<>
			<div className="sub-visual">
				{/* <ParallaxBanner
					layers={[background, headline, foreground, gradientOverlay]}
					className="aspect-[2/1] bg-gray-900"
				/> */}
				<ParallaxBanner
					layers={[
						{
							image: SubVisualImage,
							speed: -5,
						},
					]}
					style={{ height: 680 }}
				/>
			</div>
			<div className="container p-4 lg:p-0">
				<h2 className="flex justify-center mt-32 mb-10">
					<img
						src={Txt1}
						alt=""
					/>
				</h2>
				<h3 className="text-lg lg:text-3xl text-center font-light mb-36">
					메타버스 AI 아바타 포탈 기업
				</h3>
				<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9">
					<span className="block md:hidden lg:hidden">
						갤럭시 코퍼레이션은 가상과 현실을 공존시켜,
						<br />
						인류의 삶을 더 행복하고 이롭게 재창조하는
						<br />
						메타버스 AI 아바타 포탈 기업입니다.
					</span>
					<span className="hidden md:block lg:block">
						갤럭시 코퍼레이션은 가상과 현실을 공존시켜, 인류의 삶을
						<br /> 더 행복하고 이롭게 재창조하는 메타버스 AI 아바타 포탈 기업입니다.
					</span>
				</p>
			</div>
			<div className="container px-4 lg:p-0 mt-96">
				<span
					className="block md:hidden lg:hidden"
					m
				>
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
							<tspan
								x="0"
								y="0"
							>
								mission
							</tspan>
						</text>
					</svg>
				</span>
				<span
					className="hidden md:block lg:block"
					d
				>
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
							<tspan
								x="0"
								y="0"
							>
								mission
							</tspan>
						</text>
					</svg>
				</span>
				<h2 className="text-2xl lg:text-5xl eng mt-3 mb-6 lg:mb-8">
					<img
						src={Txt2}
						alt=""
					/>
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
					전 세계의 메타버스를 넘나들며 자사의 무한한 메타버스 콘텐츠, 플랫폼,
					비즈니스 등을 통해 전세계 70억명 인구가 다양한 아바타로 공생하는 신인류의
					세상을 창조하여 인류의 행복한 삶에 기여합니다. 전 세계의 메타버스를
					넘나들며 자사의 무한한 메타버스 콘텐츠, 플랫폼, 비즈니스 등을 통해 전세계
					70억명 인구가 다양한 아바타로 공생하는 신인류의 세상을 창조하여 인류의
					행복한 삶에 기여합니다.
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
								<tspan
									x="0"
									y="0"
								>
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
								<tspan
									x="0"
									y="0"
								>
									vision
								</tspan>
							</text>
						</svg>
					</div>
				</div>
				<h2 className="text-2xl lg:text-5xl eng mt-3 mb-3 lg:mb-8">
					<img
						src={Txt3}
						alt=""
					/>
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
					우리는 글로벌 메타버스 아바타 포탈 기업으로 미래 산업의 비즈니스에
					혁신하며, 무한한 IP를 기반으로 글로벌 최고의 메타버스 AI 아바타 포탈 기업을
					지향합니다. 이를 통해 인류의 삶의 긍정적인 영향을 끼치며 다양한 꿈을
					실현시키는 메타버스 AI 아바타 포탈 기업으로서의 역할을 수행하고 노력합니다.
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
								<tspan
									x="0"
									y="0"
								>
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
								<tspan
									x="0"
									y="0"
								>
									core value
								</tspan>
							</text>
						</svg>
					</div>
				</div>
				<h2 className="text-2xl lg:text-5xl eng mt-3 mb-3 lg:mb-8">
					<img
						src={Txt4}
						alt=""
					/>
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
					아티스트를 비롯한 다양한 전문가들의 IP을 활용하여, 양질의 갤럭시 아바타와
					갤럭시 미리내 세계관을 만들어갑니다. 이를 바탕으로 IP 매니지먼트, 콘텐츠
					제작, 버추얼 휴먼, 커머스, ESG 등 다양한 비즈니스 분야에서 활동하며,
					메타버스 A to Z를 통합한 메타버스 포털 기업으로 성장하고 있습니다.
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
								<tspan
									x="0"
									y="0"
								>
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
								className={`text-4xl ${activeTabNum === 0 && 'active'}`}
								onClick={() => setActiveTabNum(0)}
							>
								2019
							</YearTabButton>
						</div>
						<div className="flex-1 text-center">
							<YearTabButton
								type="button"
								className={`text-4xl ${activeTabNum === 1 && 'active'}`}
								onClick={() => setActiveTabNum(1)}
							>
								2021
							</YearTabButton>
						</div>
						<div className="flex-1 text-center">
							<YearTabButton
								type="button"
								className={`text-4xl ${activeTabNum === 2 && 'active'}`}
								onClick={() => setActiveTabNum(2)}
							>
								2022
							</YearTabButton>
						</div>
						<div className="flex-1 text-center">
							<YearTabButton
								type="button"
								className={`text-4xl ${activeTabNum === 3 && 'active'}`}
								onClick={() => setActiveTabNum(3)}
							>
								2023
							</YearTabButton>
						</div>
					</div>
					<TabContents>
						<TabContent className={`${activeTabNum === 0 && 'active'}`}>
							<p className="text-lg font-extralight">
								2019.08
								<br />
								갤럭시코퍼레이션 법인설립
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2020.01 <br />
								㈜주피터엔터테인먼트 법인 자회사 인수 (가수/배우 매니지먼트)
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2020.08 <br />
								티인베스트먼트, 신송지티아이 SEED 투자유치
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2020.09 <br />
								㈜페르소나유니버스 법인 설립 (CJ EnM SPC) 부캐 오디션 예능 Mnet
								부캐선발대회 방영
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2020.10 <br />
								㈜빅플래쉬 법인 자회사 인수 (마케팅/광고대행)
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2020.12 <br />
								㈜유라보레이션 법인 자회사 인수 (유튜브 콘텐츠 스튜디오)
							</p>
						</TabContent>
						<TabContent className={`${activeTabNum === 1 && 'active'}`}>
							<p className="text-lg font-extralight">
								2021.01
								<br />
								SK 광고 마케팅 대행 계약 체결
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2021.04
								<br />
								부캐릭터 기반 커머스 런칭 (GS 홈쇼핑/롯데홈쇼핑)
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2021.06
								<br />
								한국투자, KB인베스트먼트, 키움인베스트번트, P&I인베스트먼트,
								T인베스트먼트, ATU 파트너스 등 Series A 투자유치
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2021.07
								<br />
								카이스트 메타버스 전문가 양성 프로그램 공동 개설
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2021.08
								<br />
								골프예능 백돌이 대탈출 방영
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2021.09
								<br />
								신한금융지주 투자 유치
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2021.10
								<br />
								㈜페르소나스페이스 법인 설립 (메타버스 콘텐츠 스튜디오)
							</p>
							<br />
							<br />
							<p className="text-lg font-extralight">
								2021.12
								<br />
								㈜ 메타플래닛 설립 (메타버스 공간 개발사 올림플래닛 합작법인)
								<br />
								㈜메타사운드 설립(AI 보이스 미디어젠 합작법인)
								<br />
								메타버스 아바타쇼 TV조선 부캐전성시대 방영
							</p>
						</TabContent>
						<TabContent className={`${activeTabNum === 2 && 'active'}`}>
							<p className="text-lg font-extralight">
								2022.05
								<br />
								예능 제작사 루이웍스 미디어/WDM엔터테인먼트/루돌프 미디어 인수
							</p>
							<br />
							<br />
							<br />
							<p className="text-lg font-extralight">
								2022.10
								<br />
								메타버스 AI 음악쇼 TV조선 아바드림 방영
								<br />
								복싱선수 매니파퀴아오 아바타 매니지먼트 MOU 체결
							</p>
							<br />
							<br />
							<br />
							<p className="text-lg font-extralight">
								2022.12
								<br />
								트로트 예능 TV 조선 미스터트롯2 방영(WDM엔터테인먼트)
								<br />
								(주)브랑토리 인수 합병 (온라인 커머스)
							</p>
						</TabContent>
						<TabContent className={`${activeTabNum === 3 && 'active'}`}>
							<p className="text-lg font-extralight">
								2023.01
								<br />
								넷플릭스 예능 시청시간 글로벌1위 피지컬:100 방영(루이웍스 미디어)
							</p>
						</TabContent>
					</TabContents>
				</div>
			</div>
		</>
	)
}

export default Company
