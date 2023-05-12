import Bg from '../../assets/image/company/company_bg-1.png'
import styled from 'styled-components'
import { Parallax, useParallax, ParallaxBanner } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'

import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../../hooks/language'

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

	useEffect(() => {
		setDefaultLanguage(language ? language : 'ko')
	}, [language])

	return (
		<>
			<div className="sub-visual">
				<ParallaxBanner
					layers={[background, headline, foreground, gradientOverlay]}
					className="aspect-[2/1] bg-gray-900"
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

			<div className="container">
				<h2 className="text-4xl eng text-center mt-14 mb-16">
					METAVERSE WORLD FOR PEOPLE // {i18n.language} -- {t('welcome')}
				</h2>
			</div>
			<div className="container">
				<div className="md:flex flex-row">
					<div className="basis-1/4 p-4">
						<ListItem className="eng pt-4">
							<span className="pr-2 sm:text-sm lg:text-xl">AVATAR</span>
							<ListLink
								to=""
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="65.5"
									height="40.022"
									viewBox="0 0 65.5 40.022"
								>
									<text
										id="MORE"
										transform="translate(0.75 11.75)"
										stroke="#fff"
										strokeMiterlimit="10"
										strokeWidth="0.75"
										fontSize="16"
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
										id="그룹_26"
										data-name="그룹 26"
										transform="translate(-579.362 -899.677)"
									>
										<line
											id="선_4"
											data-name="선 4"
											x2="60.868"
											transform="translate(580.581 933.184)"
											fill="none"
											stroke="#606060"
											strokeMiterlimit="10"
											strokeWidth="1.5"
										/>
										<path
											id="패스_13"
											data-name="패스 13"
											d="M636.015,927.2,642,933.184l-5.985,5.985"
											fill="none"
											stroke="#606060"
											strokeMiterlimit="10"
											strokeWidth="1.5"
										/>
									</g>
								</svg>
							</ListLink>
						</ListItem>
					</div>
					<div className="basis-1/4 p-4">
						<ListItem className="eng pt-4">
							<span className="pr-2 sm:text-sm lg:text-xl">COMMERCE</span>
							<ListLink
								to=""
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="65.5"
									height="40.022"
									viewBox="0 0 65.5 40.022"
								>
									<text
										id="MORE"
										transform="translate(0.75 11.75)"
										stroke="#fff"
										strokeMiterlimit="10"
										strokeWidth="0.75"
										fontSize="16"
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
										id="그룹_26"
										data-name="그룹 26"
										transform="translate(-579.362 -899.677)"
									>
										<line
											id="선_4"
											data-name="선 4"
											x2="60.868"
											transform="translate(580.581 933.184)"
											fill="none"
											stroke="#606060"
											strokeMiterlimit="10"
											strokeWidth="1.5"
										/>
										<path
											id="패스_13"
											data-name="패스 13"
											d="M636.015,927.2,642,933.184l-5.985,5.985"
											fill="none"
											stroke="#606060"
											strokeMiterlimit="10"
											strokeWidth="1.5"
										/>
									</g>
								</svg>
							</ListLink>
						</ListItem>
					</div>
					<div className="basis-1/4 p-4">
						<ListItem className="eng pt-4">
							<span className="pr-2 sm:text-sm lg:text-xl">MEDIA</span>
							<ListLink
								to=""
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="65.5"
									height="40.022"
									viewBox="0 0 65.5 40.022"
								>
									<text
										id="MORE"
										transform="translate(0.75 11.75)"
										stroke="#fff"
										strokeMiterlimit="10"
										strokeWidth="0.75"
										fontSize="16"
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
										id="그룹_26"
										data-name="그룹 26"
										transform="translate(-579.362 -899.677)"
									>
										<line
											id="선_4"
											data-name="선 4"
											x2="60.868"
											transform="translate(580.581 933.184)"
											fill="none"
											stroke="#606060"
											strokeMiterlimit="10"
											strokeWidth="1.5"
										/>
										<path
											id="패스_13"
											data-name="패스 13"
											d="M636.015,927.2,642,933.184l-5.985,5.985"
											fill="none"
											stroke="#606060"
											strokeMiterlimit="10"
											strokeWidth="1.5"
										/>
									</g>
								</svg>
							</ListLink>
						</ListItem>
					</div>
					<div className="basis-1/4 p-4">
						<ListItem className="eng pt-4">
							<span className="pr-2 sm:text-sm lg:text-xl">TECH</span>
							<ListLink
								to=""
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="65.5"
									height="40.022"
									viewBox="0 0 65.5 40.022"
								>
									<text
										id="MORE"
										transform="translate(0.75 11.75)"
										stroke="#fff"
										strokeMiterlimit="10"
										strokeWidth="0.75"
										fontSize="16"
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
										id="그룹_26"
										data-name="그룹 26"
										transform="translate(-579.362 -899.677)"
									>
										<line
											id="선_4"
											data-name="선 4"
											x2="60.868"
											transform="translate(580.581 933.184)"
											fill="none"
											stroke="#606060"
											strokeMiterlimit="10"
											strokeWidth="1.5"
										/>
										<path
											id="패스_13"
											data-name="패스 13"
											d="M636.015,927.2,642,933.184l-5.985,5.985"
											fill="none"
											stroke="#606060"
											strokeMiterlimit="10"
											strokeWidth="1.5"
										/>
									</g>
								</svg>
							</ListLink>
						</ListItem>
					</div>
				</div>
			</div>
		</>
	)
}

export default Company
