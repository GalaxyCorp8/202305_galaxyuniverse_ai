import SubVisualImage from '../../assets/image/business/sub_business1.png'
import styled from 'styled-components'
import { ParallaxBanner } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'

import { useSelector } from 'react-redux'
import { selectLanguage } from '../../hooks/language'
import MainTxt from '../../assets/image/business/biz_main_txt.svg'
import Mn1 from '../../assets/image/business/mn1.svg'
import Mn2 from '../../assets/image/business/mn2.svg'
import Mn3 from '../../assets/image/business/mn3.svg'
import Mn4 from '../../assets/image/business/mn4.svg'

const ListItem = styled.div`
	border-top: 1px solid #606060;
	// display: flex;
	// justify-content: space-between;
	// align-items: top;
	@media (max-width: 768px) {
	}
`

const ListLink = styled(Link)``

const Business = () => {
	const language = useSelector(selectLanguage)
	const { t, i18n } = useTranslation()

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
					style={{ height: 680 }}
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
				<h2 className="flex justify-center mt-24 mb-11">
					<img
						src={MainTxt}
						alt=""
					/>
					{/* METAVERSE WORLD FOR PEOPLE // {i18n.language} -- {t('welcome')} */}
				</h2>
				<div className="w-auto md:w-4/5 mx-auto">
					<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 mb-28 break-keep">
						{t('biz1')}
					</p>
				</div>
			</div>
			<div className="container">
				<div className="flex flex-wrap">
					<div className="basis-full lg:basis-1/2 p-4">
						<ListItem className="eng pt-4 mb-8 lg:mb-0 relative">
							<span className="pr-2 text-3xl lg:text-4xl">
								<img
									src={Mn1}
									alt="avatar"
								/>
							</span>
							<ListLink
								to="/page/business/avatar"
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
							>
								<span className="absolute t-14 lg:top-4 right-0 clear-both">
									<span className="block lg:hidden">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="61.29"
											height="32.05"
											viewBox="0 0 61.29 32.05"
										>
											<g
												id="그룹_351"
												data-name="그룹 351"
												transform="translate(-304.546 -994.999)"
											>
												<text
													id="MORE"
													transform="translate(305.191 1006.644)"
													stroke="#fff"
													strokeMiterlimit="10"
													strokeWidth="0.645"
													fontSize="15"
													fontFamily="GALAXY_eng"
													letterSpacing="-0.075em"
													fill="none"
												>
													<tspan
														x="0"
														y="0"
													>
														MORE
													</tspan>
												</text>
												<g
													id="그룹_18"
													data-name="그룹 18"
													transform="translate(0 -1088.585)"
												>
													<line
														id="선_1"
														data-name="선 1"
														x2="59.693"
														transform="translate(305.307 2110.22)"
														fill="none"
														stroke="#494949"
														strokeMiterlimit="10"
														strokeWidth="1"
													/>
													<path
														id="패스_9"
														data-name="패스 9"
														d="M359.941,2105.161,365,2110.22l-5.059,5.06"
														fill="none"
														stroke="#494949"
														strokeMiterlimit="10"
														strokeWidth="1"
													/>
												</g>
											</g>
										</svg>
									</span>
									<span className="hidden lg:block">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="112.5"
											height="69.57"
											viewBox="0 0 112.5 69.57"
										>
											<g
												id="그룹_28"
												data-name="그룹 28"
												transform="translate(0.75 44.239)"
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
											<text
												id="MORE"
												transform="translate(0.75 19.75)"
												stroke="#fff"
												strokeMiterlimit="10"
												strokeWidth="0.75"
												fontSize="28"
												fontFamily="GALAXY_eng"
												letterSpacing="-0.075em"
												fill="none"
											>
												<tspan
													x="0"
													y="0"
												>
													MORE
												</tspan>
											</text>
										</svg>
									</span>
								</span>
							</ListLink>
						</ListItem>
					</div>
					<div className="basis-full  lg:basis-1/2 p-4">
						<ListItem className="eng pt-4 mb-8 lg:mb-0 relative">
							<span className="pr-2 text-3xl lg:text-4xl">
								<img
									src={Mn2}
									alt="commerce"
								/>
							</span>
							<ListLink
								to="/page/business/commerce"
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
							>
								<span className="absolute t-14 lg:top-4 right-0 clear-both">
									<span className="block lg:hidden">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="61.29"
											height="32.05"
											viewBox="0 0 61.29 32.05"
										>
											<g
												id="그룹_351"
												data-name="그룹 351"
												transform="translate(-304.546 -994.999)"
											>
												<text
													id="MORE"
													transform="translate(305.191 1006.644)"
													stroke="#fff"
													strokeMiterlimit="10"
													strokeWidth="0.645"
													fontSize="15"
													fontFamily="GALAXY_eng"
													letterSpacing="-0.075em"
													fill="none"
												>
													<tspan
														x="0"
														y="0"
													>
														MORE
													</tspan>
												</text>
												<g
													id="그룹_18"
													data-name="그룹 18"
													transform="translate(0 -1088.585)"
												>
													<line
														id="선_1"
														data-name="선 1"
														x2="59.693"
														transform="translate(305.307 2110.22)"
														fill="none"
														stroke="#494949"
														strokeMiterlimit="10"
														strokeWidth="1"
													/>
													<path
														id="패스_9"
														data-name="패스 9"
														d="M359.941,2105.161,365,2110.22l-5.059,5.06"
														fill="none"
														stroke="#494949"
														strokeMiterlimit="10"
														strokeWidth="1"
													/>
												</g>
											</g>
										</svg>
									</span>
									<span className="hidden lg:block">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="112.5"
											height="69.57"
											viewBox="0 0 112.5 69.57"
										>
											<g
												id="그룹_28"
												data-name="그룹 28"
												transform="translate(0.75 44.239)"
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
											<text
												id="MORE"
												transform="translate(0.75 19.75)"
												stroke="#fff"
												strokeMiterlimit="10"
												strokeWidth="0.75"
												fontSize="28"
												fontFamily="GALAXY_eng"
												letterSpacing="-0.075em"
												fill="none"
											>
												<tspan
													x="0"
													y="0"
												>
													MORE
												</tspan>
											</text>
										</svg>
									</span>
								</span>
							</ListLink>
						</ListItem>
					</div>
					<div className="basis-full  lg:basis-1/2 p-4">
						<ListItem className="eng pt-4 mb-8 lg:mb-0 relative">
							<span className="pr-2 text-3xl lg:text-4xl">
								<img
									src={Mn3}
									alt="media"
								/>
							</span>
							<ListLink
								to="/page/business/media"
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
							>
								<span className="absolute t-14 lg:top-4 right-0 clear-both">
									<span className="block lg:hidden">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="61.29"
											height="32.05"
											viewBox="0 0 61.29 32.05"
										>
											<g
												id="그룹_351"
												data-name="그룹 351"
												transform="translate(-304.546 -994.999)"
											>
												<text
													id="MORE"
													transform="translate(305.191 1006.644)"
													stroke="#fff"
													strokeMiterlimit="10"
													strokeWidth="0.645"
													fontSize="15"
													fontFamily="GALAXY_eng"
													letterSpacing="-0.075em"
													fill="none"
												>
													<tspan
														x="0"
														y="0"
													>
														MORE
													</tspan>
												</text>
												<g
													id="그룹_18"
													data-name="그룹 18"
													transform="translate(0 -1088.585)"
												>
													<line
														id="선_1"
														data-name="선 1"
														x2="59.693"
														transform="translate(305.307 2110.22)"
														fill="none"
														stroke="#494949"
														strokeMiterlimit="10"
														strokeWidth="1"
													/>
													<path
														id="패스_9"
														data-name="패스 9"
														d="M359.941,2105.161,365,2110.22l-5.059,5.06"
														fill="none"
														stroke="#494949"
														strokeMiterlimit="10"
														strokeWidth="1"
													/>
												</g>
											</g>
										</svg>
									</span>
									<span className="hidden lg:block">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="112.5"
											height="69.57"
											viewBox="0 0 112.5 69.57"
										>
											<g
												id="그룹_28"
												data-name="그룹 28"
												transform="translate(0.75 44.239)"
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
											<text
												id="MORE"
												transform="translate(0.75 19.75)"
												stroke="#fff"
												strokeMiterlimit="10"
												strokeWidth="0.75"
												fontSize="28"
												fontFamily="GALAXY_eng"
												letterSpacing="-0.075em"
												fill="none"
											>
												<tspan
													x="0"
													y="0"
												>
													MORE
												</tspan>
											</text>
										</svg>
									</span>
								</span>
							</ListLink>
						</ListItem>
					</div>
					<div className="basis-full lg:basis-1/2 p-4">
						<ListItem className="eng pt-4 mb-8 lg:mb-0 relative">
							<span className="pr-2 text-3xl lg:text-4xl">
								<img
									src={Mn4}
									alt="tech"
								/>
							</span>
							<ListLink
								to="/page/business/tech"
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110 "
							>
								<span className="absolute t-14 lg:top-4 right-0 clear-both">
									<span className="block lg:hidden">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="61.29"
											height="32.05"
											viewBox="0 0 61.29 32.05"
										>
											<g
												id="그룹_351"
												data-name="그룹 351"
												transform="translate(-304.546 -994.999)"
											>
												<text
													id="MORE"
													transform="translate(305.191 1006.644)"
													stroke="#fff"
													strokeMiterlimit="10"
													strokeWidth="0.645"
													fontSize="15"
													fontFamily="GALAXY_eng"
													letterSpacing="-0.075em"
													fill="none"
												>
													<tspan
														x="0"
														y="0"
													>
														MORE
													</tspan>
												</text>
												<g
													id="그룹_18"
													data-name="그룹 18"
													transform="translate(0 -1088.585)"
												>
													<line
														id="선_1"
														data-name="선 1"
														x2="59.693"
														transform="translate(305.307 2110.22)"
														fill="none"
														stroke="#494949"
														strokeMiterlimit="10"
														strokeWidth="1"
													/>
													<path
														id="패스_9"
														data-name="패스 9"
														d="M359.941,2105.161,365,2110.22l-5.059,5.06"
														fill="none"
														stroke="#494949"
														strokeMiterlimit="10"
														strokeWidth="1"
													/>
												</g>
											</g>
										</svg>
									</span>
									<span className="hidden lg:block">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="112.5"
											height="69.57"
											viewBox="0 0 112.5 69.57"
										>
											<g
												id="그룹_28"
												data-name="그룹 28"
												transform="translate(0.75 44.239)"
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
											<text
												id="MORE"
												transform="translate(0.75 19.75)"
												stroke="#fff"
												strokeMiterlimit="10"
												strokeWidth="0.75"
												fontSize="28"
												fontFamily="GALAXY_eng"
												letterSpacing="-0.075em"
												fill="none"
											>
												<tspan
													x="0"
													y="0"
												>
													MORE
												</tspan>
											</text>
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
