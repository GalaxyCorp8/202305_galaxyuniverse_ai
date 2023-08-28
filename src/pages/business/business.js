import SubVisualImage from '../../assets/image/WEB_image/x1/2_business/BUSINESS_1.jpg'
import SubVisualImageXs from '../../assets/image/MOBILE_image/x1/2_business_main/business_main.jpg'

import styled from 'styled-components'

import { ParallaxBanner } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'

import { useSelector } from 'react-redux'
import { selectLanguage } from '../../hooks/language'
import MainTxt from '../../assets/image/business/biz_main_txt.svg'
import MainTxtXs from '../../assets/image/business/biz_main_txtxs.svg'

import { useWindowSize } from '@react-hook/window-size'

const ListItem = styled.div`
	position: relative;
	border-top: 1px solid #606060;
	transition: all 0.3s ease-in-out;
	z-index: 1;
	height: 122px;
	margin-bottom: 20px;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 0;
		display: block;
		transition: all 0.3s ease-in-out;
		background: #fff;
		z-index: -1;
	}
	&:hover {
		& > * {
			color: #000;
		}
		&:after {
			height: 100%;
		}
		span.svgMenu svg path {
			fill: #000;
		}
	}
	span.textMore {
		position: absolute;
		right: 15px;
	}
	span.svgContainer {
		position: absolute;
		right: 10px;
		top: 45px;
	}
	@media (max-width: 768px) {
		span.svgMenu.svgAvatar svg {
			transform: scale(0.8) translateX(-25px);
		}
		span.svgMenu.svgMedia svg {
			transform: scale(0.8) translateX(-22px);
		}
		span.svgMenu.svgCommerce svg {
			transform: scale(0.8) translateX(-36px);
		}
		span.svgMenu.svgTech svg {
			transform: scale(0.8) translateX(-17px);
		}
	}
	@media (max-width: 1023px) {
		margin-bottom: 40px;
		.textMore {
			font-size: 20px;
		}
		.svgContainer svg {
			transform: scale(0.75) translateX(12px) translateY(-13px);
		}
	}
`

const ListLink = styled(Link)``

const Business = () => {
	const language = useSelector(selectLanguage)
	const { t, i18n } = useTranslation()
	const [width, height] = useWindowSize({ fps: 60 })
	const [isXs, setIsXs] = useState(false)

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
			<div className="sub-visual">
				{/* <ParallaxBanner
					layers={[background, headline, foreground, gradientOverlay]}
					className="aspect-[2/1] bg-gray-900"
				/> */}
				<ParallaxBanner
					layers={[
						{
							image: isXs ? SubVisualImageXs : SubVisualImage,
							speed: -5,
							// children: (
							// 	<div className="container absolute inset-0">
							// 		<div className="absolute bottom-40 right-0 hidden lg:block">
							// 			<h1 className="text-xl text-white font-thin text-left">
							// 				갤럭시코퍼레이션은 국내 최초 메타버스 AI 아바타 포탈 기업입니다.
							// 				<br />
							// 				현실과 가상의 조화를 통한 ‘행복’을 최우선 가치로 두고 메타버스 FIRST
							// 				MOVER로서
							// 				<br />
							// 				IP, 컨텐츠, 커머스, 테크를 메타버스 아바타와 융복합하여 비즈니스를
							// 				진행하고 있습니다.
							// 			</h1>
							// 		</div>
							// 	</div>
							// ),
						},
					]}
					style={{ height: isXs ? 480 : 680 }}
				/>
			</div>

			{/* <div className="sub-visual__inner">
									<h2 className="sub-visual__title">Sub Visual</h2>
									<SubParagraph>
										갤럭시코퍼레이션은 국내 최초 메타버스 AI 아바타 포탈 기업입니다.
										현실과 가상의 조화를 통한 ‘행복’을 최우선 가치로 두고 메타버스 FIRST
										MOVER로서 IP, 컨텐츠, 커머스, 테크를 메타버스 아바타와 융복합하여
										비즈니스를 진행하고 있습니다.
									</SubParagraph>
								</div>*/}

			<div className="container p-4 lg:p-0">
				<h2 className="flex justify-center mt-14 mb-12 lg:mb-20 ">
					<img
						src={isXs ? MainTxtXs : MainTxt}
						alt=""
					/>
					{/* METAVERSE WORLD FOR PEOPLE // {i18n.language} -- {t('welcome')} */}
				</h2>
				<div className="w-auto md:w-4/5 mx-auto">
					<p
						className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 leading-8 mb-28 lg:mb-16 break-keep"
						dangerouslySetInnerHTML={{ __html: t('biz1') }}
					></p>
				</div>
			</div>
			<div className="container">
				<div className="flex flex-wrap">
					<div className="basis-full lg:basis-1/2 px-4 lg:p-4">
						<ListItem className="eng pt-4 mb-8 lg:mb-0 relative pb-5 lg:pb-16">
							{/* <img
								src={isXs ? bizMn1Xs : bizMn1}
								alt="avatar"
							/> */}
							<span className="pr-2 text-3xl lg:text-4xl svgMenu svgAvatar">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="212.876"
									height="28.234"
									viewBox="0 0 212.876 28.234"
								>
									<path
										id="패스_174"
										data-name="패스 174"
										d="M39.558,2.85H30.286L28.614-1.406H13.832L12.16,2.85H2.926L14.1-25.346H28.386ZM16.644-8.436H25.8l-4.56-11.552ZM74.518-25.308h1.824L65.17,2.85H50.882L39.71-25.308H49.894l8.132,20.52,8.17-20.52h8.322ZM113.24,2.85h-9.272L102.3-1.406H87.514L85.842,2.85H76.608l11.172-28.2h14.288ZM90.326-8.436h9.158l-4.56-11.552Zm24.016-8.93v-7.9h30.932v7.9H134.748V2.888h-9.842V-17.366ZM183.274,2.85H174L172.33-1.406H157.548L155.876,2.85h-9.234l11.172-28.2H172.1ZM160.36-8.436h9.158l-4.56-11.552Zm54,0-4.37,3.306L215.8,2.812h-9.234L200.754-5.13H193.23V2.812h-8.436v-28.12h23.94l5.624,4.218Zm-8.436-4.218v-5.662H193.268v5.662Z"
										transform="translate(-2.926 25.346)"
										fill="#fff"
									/>
								</svg>
							</span>
							<ListLink
								to="/page/business/avatar"
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
							>
								<span className="absolute top-20 lg:top-4 right-0 clear-both">
									{/* <span className="block lg:hidden">
										<img
											src={BtnMoreXs}
											alt="more"
										/>
									</span> */}
									<span className="text-2xl mb-3 textMore">MORE</span>
									<span className="svgContainer">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="110.815"
											height="25.861"
											viewBox="0 0 110.815 25.861"
										>
											<g
												id="그룹_469"
												data-name="그룹 469"
												transform="translate(0 0.53)"
											>
												<line
													id="선_6"
													data-name="선 6"
													x2="108.612"
													transform="translate(0 12.4)"
													fill="none"
													stroke="#606060"
													strokeMiterlimit="10"
													strokeWidth="1.5"
												/>
												<path
													id="패스_15"
													data-name="패스 15"
													d="M1230.015,927.2l12.4,12.4-12.4,12.4"
													transform="translate(-1132.662 -927.199)"
													fill="none"
													stroke="#606060"
													strokeMiterlimit="10"
													strokeWidth="1.5"
												/>
											</g>
										</svg>
									</span>
								</span>
							</ListLink>
						</ListItem>
						<ListItem className="eng pt-4 mb-8 lg:mb-0 relative pb-5 lg:pb-16">
							<span className="pr-2 text-3xl lg:text-4xl svgMenu svgMedia">
								{/* <img
									src={isXs ? bizMn2Xs : bizMn2}
									alt="media"
								/> */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="166.668"
									height="28.196"
									viewBox="0 0 166.668 28.196"
								>
									<path
										id="패스_177"
										data-name="패스 177"
										d="M40.166-25.346H40.2V2.85H31.768V-11.21L25.8-1.254H17.974l-5.966-9.994V2.85H3.572v-28.2h8.55l9.766,15.58,9.766-15.58Zm4.788,28.2v-28.2h29.07v7.372h-20.6v3.534H71.554v6.384H53.428v3.534h20.6V2.85Zm43.51,0H79.192v-28.2h25.346l5.662,4.218v19.76L104.538,2.85Zm13.262-20.824H88.464V-4.522h13.262ZM117.344,2.85v-28.2h9.88V2.85Zm52.9,0h-9.272L159.3-1.406H144.514L142.842,2.85h-9.234l11.172-28.2h14.288ZM147.326-8.436h9.158l-4.56-11.552Z"
										transform="translate(-3.572 25.346)"
										fill="#fff"
									/>
								</svg>
							</span>
							<ListLink
								to="/page/business/media"
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
							>
								<span className="absolute top-20 lg:top-4 right-0 clear-both">
									{/* <span className="block lg:hidden">
										<img
											src={BtnMoreXs}
											alt="more"
										/>
									</span> */}
									<span className="text-2xl mb-3 textMore">MORE</span>
									<span className="svgContainer">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="110.815"
											height="25.861"
											viewBox="0 0 110.815 25.861"
										>
											<g
												id="그룹_469"
												data-name="그룹 469"
												transform="translate(0 0.53)"
											>
												<line
													id="선_6"
													data-name="선 6"
													x2="108.612"
													transform="translate(0 12.4)"
													fill="none"
													stroke="#606060"
													strokeMiterlimit="10"
													strokeWidth="1.5"
												/>
												<path
													id="패스_15"
													data-name="패스 15"
													d="M1230.015,927.2l12.4,12.4-12.4,12.4"
													transform="translate(-1132.662 -927.199)"
													fill="none"
													stroke="#606060"
													strokeMiterlimit="10"
													strokeWidth="1.5"
												/>
											</g>
										</svg>
									</span>
								</span>
							</ListLink>
						</ListItem>
					</div>
					<div className="basis-full lg:basis-1/2 px-4 lg:p-4">
						<ListItem className="eng pt-4 mb-8 lg:mb-0 relative pb-5 lg:pb-16">
							<span className="pr-2 text-3xl lg:text-4xl svgMenu svgCommerce">
								{/* <img
									src={isXs ? bizMn3Xs : bizMn3}
									alt="commerce"
								/> */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="284.278"
									height="28.196"
									viewBox="0 0 284.278 28.196"
								>
									<path
										id="패스_175"
										data-name="패스 175"
										d="M32.338,2.812H9.234L3.61-1.406V-21.09l5.624-4.218h23.1v7.334H13.566V-4.522H32.338Zm15.808,0h-5.32L36.708-1.406V-21.09l6.118-4.218H64.3l6.118,4.218V-1.406L64.3,2.812Zm-3-21.09v14.06H61.978v-14.06Zm65.892-7.068h.038V2.85h-8.436V-11.21L96.672-1.254H88.844l-5.966-9.994V2.85H74.442v-28.2h8.55l9.766,15.58,9.766-15.58Zm40.85,0h.038V2.85h-8.436V-11.21l-5.966,9.956h-7.828l-5.966-9.994V2.85h-8.436v-28.2h8.55l9.766,15.58,9.766-15.58Zm4.788,28.2v-28.2h29.07v7.372h-20.6v3.534h18.126v6.384H165.148v3.534h20.6V2.85ZM220.248-8.436l-4.37,3.306,5.814,7.942h-9.234L206.644-5.13H199.12V2.812h-8.436v-28.12h23.94l5.624,4.218Zm-8.436-4.218v-5.662H199.158v5.662Zm41.8,15.466h-23.1l-5.624-4.218V-21.09l5.624-4.218h23.1v7.334H234.84V-4.522h18.772Zm5.206.038v-28.2h29.07v7.372h-20.6v3.534h18.126v6.384H267.292v3.534h20.6V2.85Z"
										transform="translate(-3.61 25.346)"
										fill="#fff"
									/>
								</svg>
							</span>
							<ListLink
								to="/page/business/commerce"
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
							>
								<span className="absolute top-20 lg:top-4 right-0 clear-both">
									{/* <span className="block lg:hidden">
										<img
											src={BtnMoreXs}
											alt="more"
										/>
									</span> */}
									<span className="text-2xl mb-3 textMore">MORE</span>
									<span className="svgContainer">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="110.815"
											height="25.861"
											viewBox="0 0 110.815 25.861"
										>
											<g
												id="그룹_469"
												data-name="그룹 469"
												transform="translate(0 0.53)"
											>
												<line
													id="선_6"
													data-name="선 6"
													x2="108.612"
													transform="translate(0 12.4)"
													fill="none"
													stroke="#606060"
													strokeMiterlimit="10"
													strokeWidth="1.5"
												/>
												<path
													id="패스_15"
													data-name="패스 15"
													d="M1230.015,927.2l12.4,12.4-12.4,12.4"
													transform="translate(-1132.662 -927.199)"
													fill="none"
													stroke="#606060"
													strokeMiterlimit="10"
													strokeWidth="1.5"
												/>
											</g>
										</svg>
									</span>
								</span>
							</ListLink>
						</ListItem>
						<ListItem className="eng pt-4 mb-8 lg:mb-0 relative pb-5 lg:pb-16">
							<span className="pr-2 text-3xl lg:text-4xl svgMenu svgTech">
								{/* <img
									src={isXs ? bizMn4Xs : bizMn4}
									alt="tech"
								/> */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="134.254"
									height="28.234"
									viewBox="0 0 134.254 28.234"
								>
									<path
										id="패스_176"
										data-name="패스 176"
										d="M3.23-17.366v-7.9H34.162v7.9H23.636V2.888H13.794V-17.366ZM38.8,2.85v-28.2h29.07v7.372h-20.6v3.534H65.4v6.384H47.272v3.534h20.6V2.85Zm62.7-.038h-23.1L72.77-1.406V-21.09l5.624-4.218h23.1v7.334H82.726V-4.522H101.5ZM114.95-7.03V2.85h-8.474v-28.2h8.474v9.88h14.06v-9.88h8.474V2.85H129.01V-7.03Z"
										transform="translate(-3.23 25.346)"
										fill="#fff"
									/>
								</svg>
							</span>
							<ListLink
								to="/page/business/tech"
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110 "
							>
								<span className="absolute top-20 lg:top-4 right-0 clear-both">
									{/* <span className="block lg:hidden">
										<img
											src={BtnMoreXs}
											alt="more"
										/>
									</span> */}
									<span className="text-2xl mb-3 textMore">MORE</span>
									<span className="svgContainer">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="110.815"
											height="25.861"
											viewBox="0 0 110.815 25.861"
										>
											<g
												id="그룹_469"
												data-name="그룹 469"
												transform="translate(0 0.53)"
											>
												<line
													id="선_6"
													data-name="선 6"
													x2="108.612"
													transform="translate(0 12.4)"
													fill="none"
													stroke="#606060"
													strokeMiterlimit="10"
													strokeWidth="1.5"
												/>
												<path
													id="패스_15"
													data-name="패스 15"
													d="M1230.015,927.2l12.4,12.4-12.4,12.4"
													transform="translate(-1132.662 -927.199)"
													fill="none"
													stroke="#606060"
													strokeMiterlimit="10"
													strokeWidth="1.5"
												/>
											</g>
										</svg>
									</span>
								</span>
							</ListLink>
						</ListItem>
					</div>
				</div>
			</div>
		</>
	)
}

export default Business
