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

import BtnMore from '../../assets/image/business/btn_more.svg'
import BtnMoreXs from '../../assets/image/business/btn_more_xs.svg'

import bizMn1 from '../../assets/image/business/biz_mn1.svg'
import bizMn2 from '../../assets/image/business/biz_mn2.svg'
import bizMn3 from '../../assets/image/business/biz_mn3.svg'
import bizMn4 from '../../assets/image/business/biz_mn4.svg'

import bizMn1Xs from '../../assets/image/business/biz_mn1_xs.svg'
import bizMn2Xs from '../../assets/image/business/biz_mn2_xs.svg'
import bizMn3Xs from '../../assets/image/business/biz_mn3_xs.svg'
import bizMn4Xs from '../../assets/image/business/biz_mn4_xs.svg'

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
				<h2 className="flex justify-center mt-14 mb-12 lg:mb-10 ">
					<img
						src={isXs ? MainTxtXs : MainTxt}
						alt=""
					/>
					{/* METAVERSE WORLD FOR PEOPLE // {i18n.language} -- {t('welcome')} */}
				</h2>
				<div className="w-auto md:w-4/5 mx-auto">
					<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 leading-8 mb-28 break-keep">
						{t('biz1')}
					</p>
				</div>
			</div>
			<div className="container">
				<div className="flex flex-wrap">
					<div className="basis-full lg:basis-1/2 px-4 lg:p-4">
						<ListItem className="eng pt-4 mb-8 lg:mb-0 relative pb-5 lg:pb-16">
							<span className="pr-2 text-3xl lg:text-4xl">
								<img
									src={isXs ? bizMn1Xs : bizMn1}
									alt="avatar"
								/>
							</span>
							<ListLink
								to="/page/business/avatar"
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
							>
								<span className="absolute top-20 lg:top-4 right-0 clear-both">
									<span className="block lg:hidden">
										<img
											src={BtnMoreXs}
											alt="more"
										/>
									</span>
									<span className="hidden lg:block">
										<img
											src={BtnMore}
											alt="more"
										/>
									</span>
								</span>
							</ListLink>
						</ListItem>
						<ListItem className="eng pt-4 mb-8 lg:mb-0 relative pb-5 lg:pb-16">
							<span className="pr-2 text-3xl lg:text-4xl">
								<img
									src={isXs ? bizMn2Xs : bizMn2}
									alt="media"
								/>
							</span>
							<ListLink
								to="/page/business/media"
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
							>
								<span className="absolute top-20 lg:top-4 right-0 clear-both">
									<span className="block lg:hidden">
										<img
											src={BtnMoreXs}
											alt="more"
										/>
									</span>
									<span className="hidden lg:block">
										<img
											src={BtnMore}
											alt="more"
										/>
									</span>
								</span>
							</ListLink>
						</ListItem>
					</div>
					<div className="basis-full lg:basis-1/2 px-4 lg:p-4">
						<ListItem className="eng pt-4 mb-8 lg:mb-0 relative pb-5 lg:pb-16">
							<span className="pr-2 text-3xl lg:text-4xl">
								<img
									src={isXs ? bizMn3Xs : bizMn3}
									alt="commerce"
								/>
							</span>
							<ListLink
								to="/page/business/commerce"
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
							>
								<span className="absolute top-20 lg:top-4 right-0 clear-both">
									<span className="block lg:hidden">
										<img
											src={BtnMoreXs}
											alt="more"
										/>
									</span>
									<span className="hidden lg:block">
										<img
											src={BtnMore}
											alt="more"
										/>
									</span>
								</span>
							</ListLink>
						</ListItem>
						<ListItem className="eng pt-4 mb-8 lg:mb-0 relative pb-5 lg:pb-16">
							<span className="pr-2 text-3xl lg:text-4xl">
								<img
									src={isXs ? bizMn4Xs : bizMn4}
									alt="tech"
								/>
							</span>
							<ListLink
								to="/page/business/tech"
								className="transition ease-in-out hover:-translate-y-1 hover:scale-110 "
							>
								<span className="absolute top-20 lg:top-4 right-0 clear-both">
									<span className="block lg:hidden">
										<img
											src={BtnMoreXs}
											alt="more"
										/>
									</span>
									<span className="hidden lg:block">
										<img
											src={BtnMore}
											alt="more"
										/>
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
