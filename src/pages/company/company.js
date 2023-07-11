import styled from 'styled-components'
import { Parallax, useParallax, ParallaxBanner } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'

import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../../hooks/language'

import Txt1 from '../../assets/image/company/txt1.svg'
import Txt2 from '../../assets/image/company/txt2.svg'
import Txt3 from '../../assets/image/company/txt3.svg'
import Txt4 from '../../assets/image/company/txt4.svg'
import Txt5 from '../../assets/image/company/txt5.svg'

import Txt2Xs from '../../assets/image/company/txt2xs.svg'
import Txt3Xs from '../../assets/image/company/txt3xs.svg'
import Txt4Xs from '../../assets/image/company/txt4xs.svg'
import Txt5Xs from '../../assets/image/company/txt5xs.svg'

import y2019n from '../../assets/image/company/y-2019_n.svg'
import y2019a from '../../assets/image/company/y-2019_a.svg'
import y2021n from '../../assets/image/company/y-2021_n.svg'
import y2021a from '../../assets/image/company/y-2021_a.svg'
import y2022n from '../../assets/image/company/y-2022_n.svg'
import y2022a from '../../assets/image/company/y-2022_a.svg'
import y2023n from '../../assets/image/company/y-2023_n.svg'
import y2023a from '../../assets/image/company/y-2023_a.svg'

import Img1 from '../../assets/image/WEB_image/x1/1_company/COMPANY_2.jpg'
import Img2 from '../../assets/image/WEB_image/x1/1_company/COMPANY_3.jpg'
import Img3 from '../../assets/image/WEB_image/x1/1_company/COMPANY_4.jpg'

import Img1xs from '../../assets/image/MOBILE_image/x1/1_company/company_2.jpg'
import Img2xs from '../../assets/image/MOBILE_image/x1/1_company/company_3.jpg'
import Img3xs from '../../assets/image/MOBILE_image/x1/1_company/company_4.jpg'

import y2019 from '../../assets/image/WEB_image/x1/1_company/COMPANY_5_1.jpg'
import y2021 from '../../assets/image/WEB_image/x1/1_company/COMPANY_5_2.jpg'
import y2022 from '../../assets/image/WEB_image/x1/1_company/COMPANY_5_3.jpg'
import y2023 from '../../assets/image/WEB_image/x1/1_company/COMPANY_5_4.jpg'

import y2019Xs from '../../assets/image/WEB_image/x1/1_company/COMPANY_5_1.jpg'
import y2021Xs from '../../assets/image/WEB_image/x1/1_company/COMPANY_5_2.jpg'
import y2022Xs from '../../assets/image/WEB_image/x1/1_company/COMPANY_5_3.jpg'
import y2023Xs from '../../assets/image/WEB_image/x1/1_company/COMPANY_5_4.jpg'

// 각 섹션의 이미지 위에 있는 타이틀이 있는데, 그 이미지 타이틀 위의 라벨 이미지!
// MISSION
import img_1_mob_MISSION from '../../assets/image/company/1_mob_MISSION.png'
import img_1_web_MISSION from '../../assets/image/company/1_web_MISSION.png'
// VISION
import img_2_mob_VISION from '../../assets/image/company/2_mob_VISION.png'
import img_2_web_VISION from '../../assets/image/company/2_web_VISION.png'
// CORE VALUE
import img_3_mob_COREVALUE from '../../assets/image/company/3_mob_COREVALUE.png'
import img_3_web_COREVALUE from '../../assets/image/company/3_web_COREVALUE.png'
// HISTORY
import img_4_mob_HISTORY from '../../assets/image/company/4_mob_HISTORY.png'
import img_4_web_HISTORY from '../../assets/image/company/4_web_HISTORY.png'

// import Video from "../../assets/video/company_5mb.mp4";

import { useState } from 'react'

import { useWindowSize } from '@react-hook/window-size'

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
`

const TabContents = styled.div``
const TabContent = styled.div`
	display: none;
	&.active {
		display: block;
	}
`

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
`

const Company = () => {
	const language = useSelector(selectLanguage)
	const { t, i18n } = useTranslation()
	const [width, height] = useWindowSize({ fps: 60 })
	const [isXs, setIsXs] = useState(false)

	const [activeTabNum, setActiveTabNum] = useState(3)

	const [activeImg, setActiveImg] = useState(isXs ? y2023Xs : y2023)

	const activeImgHandler = (num) => {
		setActiveTabNum(num)
		switch (num) {
			case 0:
				setActiveImg(isXs ? y2019Xs : y2019)
				break
			case 1:
				setActiveImg(isXs ? y2021Xs : y2021)
				break
			case 2:
				setActiveImg(isXs ? y2022Xs : y2022)
				break
			case 3:
				setActiveImg(isXs ? y2023Xs : y2023)
				break
			default:
				break
		}
	}

	useEffect(() => {
		setDefaultLanguage(language ? language : 'ko')
		if (width < 767) {
			setIsXs(true)
		} else {
			setIsXs(false)
		}
	}, [language, width])

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
			</VideoContainer>
			<div className="container px-7 lg:px-4 lg:p-0">
				<h2 className="flex justify-center mt-14 mb-12 lg:mb-10 ">
					<img
						src={Txt1}
						alt=""
					/>
				</h2>
				<h3 className="text-lg lg:text-3xl text-center font-light lg:mb-36 mb-10">
					{t('cmp1')}
				</h3>
				<div className="w-auto md:w-3/5 mx-auto">
					<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9">
						{t('cmp1_1')}
					</p>
				</div>
			</div>
			<div className="container px-7 lg:px-4 lg:px-4 lg:p-0 mt-72 lg:mt-96">
				{/* MISSION 라벨 (lg:hidden 작은 화면)*/}
				<span className="block md:hidden lg:hidden">
					<img
						src={img_1_mob_MISSION}
						alt=""
					/>
				</span>
				<span className="hidden md:block lg:block">
					<img
						src={img_1_web_MISSION}
						alt=""
					/>
				</span>
				{/* <span className="block md:hidden lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="92.276"
						height="12.372"
						viewBox="0 0 92.276 12.372"
					>
						<path
							id="패스_163"
							data-name="패스 163"
							d="M16.912-10.672h.016V1.2H13.376V-4.72L10.864-.528h-3.3L5.056-4.736V1.2H1.5V-10.672H5.1l4.112,6.56,4.112-6.56ZM19.808,1.2V-10.672h4.16V1.2ZM29.92-6.288h7.472l2.5,1.776v3.9l-2.5,1.792H26.832v-2.96h9.376V-3.184h-6.88l-2.5-1.792v-3.9l2.5-1.776h9.936V-7.7H29.92Zm14.672,0h7.472l2.5,1.776v3.9l-2.5,1.792H41.5v-2.96H50.88V-3.184H44L41.5-4.976v-3.9L44-10.656h9.936V-7.7H44.592ZM57.376,1.2V-10.672h4.16V1.2Zm11.808-.016h-2.24L64.368-.592V-8.88l2.576-1.776h9.04L78.56-8.88V-.592L75.984,1.184ZM67.92-7.7v5.92h7.088V-7.7Zm21.808-2.96H93.28V1.184H89.5l-5.7-6.144V1.184H80.256v-11.84h3.76l5.712,6.144Z"
							transform="translate(-1.254 10.922)"
							fill="none"
							stroke="#fff"
							strokeWidth="0.5"
						/>
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
							fontSize="28"
							fontFamily="GALAXY_eng"
							letterSpacing="-0.075em"
						>
							<tspan x="0" y="0">
								MISSION!!!
							</tspan>
						</text>
					</svg>
				</span> */}

				{/* "BEYOND THE NEW WORLD" 이미지 타이틀 */}
				<h2 className="text-2xl lg:text-5xl eng mt-3 mb-6 lg:mb-8">
					<span className="hidden lg:block">
						<img
							src={Txt2}
							alt=""
						/>
					</span>
					<span className="block lg:hidden">
						<img
							src={Txt2Xs}
							alt=""
						/>
					</span>
				</h2>
			</div>
			<div className="container px-7 lg:px-4 lg:p-0">
				<ParallaxBanner
					layers={[
						{
							image: isXs ? Img1xs : Img1,
							speed: -5,
						},
					]}
					style={{ height: isXs ? '195px' : '300px' }}
				/>
			</div>
			<div className="container px-7 lg:px-4 lg:p-0">
				<p className="text-lg lg:text-xl mt-3 lg:mt-8 font-extralight lg:leading-9 leading-8">
					{t('cmp1_2')}
				</p>
				<div className="mt-72 lg:mt-96">
					{/* VISSION 라벨 (lg:hidden 작은 화면)*/}
					<span className="block md:hidden lg:hidden">
						<img
							src={img_2_mob_VISION}
							alt=""
						/>
					</span>
					<span className="hidden md:block lg:block">
						<img
							src={img_2_web_VISION}
							alt=""
						/>
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
						<img
							src={Txt3}
							alt=""
						/>
					</span>
					<span className="block lg:hidden">
						<img
							src={Txt3Xs}
							alt=""
						/>
					</span>
				</h2>
			</div>
			<div className="container px-7 lg:px-4 lg:p-0">
				<ParallaxBanner
					layers={[
						{
							image: isXs ? Img2xs : Img2,
							speed: -5,
						},
					]}
					style={{ height: isXs ? '195px' : '300px' }}
				/>
			</div>
			<div className="container px-7 lg:px-4 lg:p-0">
				<p className="text-lg lg:text-xl mt-3 lg:mt-8 font-extralight lg:leading-9 leading-8">
					{t('cmp1_3')}
				</p>
				<div className="mt-72 lg:mt-96">
					{/* CORE VALUE 라벨 (lg:hidden 작은 화면)*/}
					<span className="block md:hidden lg:hidden">
						<img
							src={img_3_mob_COREVALUE}
							alt=""
						/>
					</span>
					<span className="hidden md:block lg:block">
						<img
							src={img_3_web_COREVALUE}
							alt=""
						/>
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
						<img
							src={Txt4}
							alt=""
						/>
					</span>
					<span className="block lg:hidden">
						<img
							src={Txt4Xs}
							alt=""
						/>
					</span>
				</h2>
			</div>
			<div className="container px-7 lg:px-4 lg:px-0">
				<ParallaxBanner
					layers={[
						{
							image: isXs ? Img3xs : Img3,
							speed: -5,
						},
					]}
					style={{ height: isXs ? '195px' : '300px' }}
				/>
			</div>
			<div className="container px-7 lg:px-4 lg:px-0">
				<p className="text-lg lg:text-xl mt-3 lg:mt-8 font-extralight lg:leading-9 leading-8">
					{t('cmp1_4')}
				</p>
				<div className="mt-72 lg:mt-96">
					{/* HISTORY 라벨 (lg:hidden 작은 화면)*/}

					<span className="block md:hidden lg:hidden">
						<img
							src={img_4_mob_HISTORY}
							alt=""
						/>
					</span>
					<span className="hidden md:block lg:block">
						<img
							src={img_4_web_HISTORY}
							alt=""
						/>
					</span>
					{/* <div className="outlined-text xs:block sm:block md:hidden lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="100"
							height="14"
							viewBox="0 0 100 14"
						>
							<text
								id="history"
								transform="translate(0.5 11.5)"
								fill="rgba(0,0,0,0)"
								stroke="#fff"
								strokeMiterlimit="10"
								strokeWidth="0.5"
								fontSize="16"
								fontFamily="GALAXY_eng"
								letterSpacing="-0.075em"
							>
								<tspan x="0" y="0">
									history
								</tspan>
							</text>
						</svg>
					</div>
					<div className="outlined-text hidden sm:hidden md:block lg:block">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="181.747"
							height="23.04"
							viewBox="0 0 181.747 23.04"
						>
							<path
								id="패스_163"
								dataname="패스 163"
								d="M9.75-5.55v7.8H3.06V-20.01H9.75v7.8h11.1v-7.8h6.69V2.25H20.85v-7.8Zm23.52,7.8V-20.01h7.8V2.25ZM52.23-11.79H66.24l4.68,3.33v7.32L66.24,2.22H46.44V-3.33H64.02V-5.97H51.12L46.44-9.33v-7.32l4.68-3.33H69.75v5.55H52.23Zm21.63-1.92v-6.24H98.28v6.24H89.97V2.28H82.2V-13.71ZM110.31,2.22h-4.2l-4.83-3.33V-16.65l4.83-3.33h16.95l4.83,3.33V-1.11l-4.83,3.33Zm-2.37-16.65v11.1h13.29v-11.1Zm46.53,7.77-3.45,2.61,4.59,6.27h-7.29l-4.59-6.27h-5.94V2.22h-6.66v-22.2h18.9l4.44,3.33Zm-6.66-3.33v-4.47h-9.99v4.47Zm9.27-9.99h8.04l5.28,7.68,5.28-7.68h8.04L174.84-7.02V2.22h-8.88V-7.02Z"
								transform="translate(-2.685 20.385)"
								fill="none"
								stroke="#fff"
								strokeWidth="0.75"
							/>
						</svg>
					</div> */}
				</div>
				<h2 className="text-2xl lg:text-5xl eng mt-3 mb-3 lg:mb-8">
					{/* 두줄인 히스토리 중 아래것 제거 */}
					{/* "history..." 이미지 타이틀 */}
					{/* <span className="hidden lg:block">
						<img src={Txt5} alt="" />
					</span>
					<span className="block lg:hidden">
						<img src={Txt5Xs} alt="" />
					</span> */}
				</h2>
				<div className="container">
					<ParallaxBanner
						layers={[
							{
								image: activeImg,
								speed: -5,
							},
						]}
						style={{ height: isXs ? '195px' : '300px' }}
					/>
				</div>
				<div className="container px-7 lg:px-4 lg:p-0">
					{/* 2019, 2021, 2022, 2023 년 표시, 클릭 가능 */}
					<div className="flex mt-14 mb-16 lg:mb-32 ">
						<div className="flex-1 text-center">
							<YearTabButton
								type="button"
								className={`text-4xl ${activeTabNum === 0 && 'active'}`}
								onClick={() => activeImgHandler(0)}
							>
								<img
									src={activeTabNum === 0 ? y2019a : y2019n}
									alt=""
								/>
							</YearTabButton>
						</div>
						<div className="flex-1 text-center">
							<YearTabButton
								type="button"
								className={`text-4xl ${activeTabNum === 1 && 'active'}`}
								onClick={() => activeImgHandler(1)}
							>
								<img
									src={activeTabNum === 1 ? y2021a : y2021n}
									alt=""
								/>
							</YearTabButton>
						</div>
						<div className="flex-1 text-center">
							<YearTabButton
								type="button"
								className={`text-4xl ${activeTabNum === 2 && 'active'}`}
								onClick={() => activeImgHandler(2)}
							>
								<img
									src={activeTabNum === 2 ? y2022a : y2022n}
									alt=""
								/>
							</YearTabButton>
						</div>
						<div className="flex-1 text-center">
							<YearTabButton
								type="button"
								className={`text-4xl ${activeTabNum === 3 && 'active'}`}
								onClick={() => activeImgHandler(3)}
							>
								<img
									src={activeTabNum === 3 ? y2023a : y2023n}
									alt=""
								/>
							</YearTabButton>
						</div>
					</div>
					{/* 각 년도 별 하부 내용들 영역 시작 */}
					<TabContents style={{ height: !isXs ? 1572 : 'auto' }}>
						<TabContent className={`${activeTabNum === 0 && 'active'}`}>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2019.08
								<br />
								{t('cmp1_17')}
							</p>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2020.01 <br />
								{t('cmp1_18')}
							</p>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2020.08 <br />
								{t('cmp1_19')}
							</p>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2020.09 <br />
								{t('cmp1_20')}
							</p>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2020.10 <br />
								{t('cmp1_21')}
							</p>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2020.12 <br />
								{t('cmp1_22')}
							</p>
						</TabContent>
						<TabContent className={`${activeTabNum === 1 && 'active'}`}>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2021.01
								<br />
								{t('cmp1_9')}
							</p>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2021.04
								<br />
								{t('cmp1_10')}
							</p>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2021.06
								<br />
								{t('cmp1_11')}
							</p>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2021.07
								<br />
								{t('cmp1_12')}
							</p>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2021.08
								<br />
								{t('cmp1_13')}
							</p>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2021.09
								<br />
								{t('cmp1_14')}
							</p>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2021.10
								<br />
								{t('cmp1_15')}
							</p>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2021.12
								<br />
								{t('cmp1_16')}
								<br />
								{t('cmp1_16_1')}
								<br />
								{t('cmp1_16_2')}
							</p>
						</TabContent>
						<TabContent className={`${activeTabNum === 2 && 'active'}`}>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2022.05
								<br />
								{t('cmp1_6')}
							</p>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2022.10
								<br />
								{t('cmp1_7')}
							</p>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2022.12
								<br />
								{t('cmp1_8')}
								<br />
								{t('cmp1_8_1')}
							</p>
						</TabContent>
						<TabContent className={`${activeTabNum === 3 && 'active'}`}>
							<p className="text-xs lg:text-lg font-extralight mb-10 lg:mb-12">
								2023.01
								<br />
								{t('cmp1_5')}
							</p>
						</TabContent>
					</TabContents>
				</div>
			</div>
		</>
	)
}

export default Company
