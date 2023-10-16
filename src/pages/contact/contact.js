import styled from 'styled-components'
import { ParallaxBanner } from 'react-scroll-parallax'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'

import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../../hooks/language'

import { useWindowSize } from '@react-hook/window-size'

import { Link } from 'react-router-dom'

import Bg from '../../assets/image/WEB_image/x1/5_contact/img1.png'
import Address from '../../assets/image/WEB_image/x1/5_contact/address.png'
import Enjoy from '../../assets/image/WEB_image/x1/5_contact/enjoy.png'
import Human from '../../assets/image/WEB_image/x1/5_contact/human.png'

import FooterLogo from '../../assets/image/common/footer-logo.svg'
import FooterYoutube from '../../assets/image/common/footerYoutube.svg'
import FooterBlog from '../../assets/image/common/footerBlog.svg'

import VideoBg from '../../assets/video/9_Contact_V1.mp4'

const Container = styled.footer`
	position: relative;
	border-top: 1px solid #fff;
`
const PrivacyList = styled.ul`
  li {
    position: relative;
    &:first-of-type {
      margin-right: 40px;
      &::after {
        // position: absolute;
        // top: 50%;
        // right: -20px;
        // transform: translateY(-50%);
        // content: '';
        // display: block;
        // width: 1px;
        // height: 13px;
        // background-color: #fff;
        // opacity: 0.2;
      }
	  @media (max-width: 919px) {
		margin-bottom: 0.5rem !important;
	  }
  }
`

const OutlinkList = styled.ul``

const MiscContainer = styled.div`
	@media (max-width: 919px) {
		position: absolute;
		left: 0;
		top: 1rem;
		right: 0;
	}
`

const FooterContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	@media (max-width: 767px) {
		position: relative;
		bottom: auto;
		left: auto;
		right: auto;
	}
`

const FooterInfo = styled.div`
	@media (max-width: 919px) {
		position: relative;
		margin-top: 90px;
	}
`

const Wrapper = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	@media (max-width: 767px) {
		height: 410px;
	}
`

const WrapperInside = styled.div`
	height: calc(100% - 176px);
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	.isdiv {
		width: 100%;
	}
	@media (max-width: 767px) {
		padding-left: 2rem;
		padding-right: 2rem;
		height: 100%;
		&:after {
			content: '';
			display: block;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 160px;
			background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0) 0%,
				rgba(0, 0, 0, 0.8) 100%
			);
		}
		.isdiv {
			height: 100%;
			display: flex;
			padding-top: 110px;
			padding-bottom: 56px;
			flex-direction: column;
			justify-content: space-between;
		}
		.human {
			width: 180px;
		}
		.enjoy {
			width: 320px;
			z-index: 1;
		}
	}
`

const VideoBackground = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: 0;
`

const Contact = () => {
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
			<Wrapper>
				{/* 안동현 코드, 모바일에서 영상 배경이 되지 않도록 한 것은 지우고, 항상 배경이 영상이 되도록. */}
				<VideoBackground
					playsInline
					muted
					autoPlay
					loop
					webkit-playsinline="true"
				>
					<source
						src={VideoBg}
						type="video/mp4"
					/>
				</VideoBackground>
				<WrapperInside className="container px-7 lg:p-0 flex justify-center items-center">
					<div className="isdiv">
						<div className="flex justify-start align-top">
							<img
								src={Human}
								alt="human is galaxy"
								className="self-start human"
							/>
							<img
								src={Address}
								alt="address"
								className="ml-28 hidden md:block"
							/>
						</div>
						<div className="flex justify-end mt-5">
							<img
								src={Enjoy}
								alt="enjoy our metaverse"
								className="enjoy"
							/>
						</div>
					</div>
				</WrapperInside>
			</Wrapper>
			<img
				src={Address}
				alt="address"
				className="block md:hidden mt-12 mb-20"
				style={{ width: 260, paddingLeft: '2rem' }}
			/>
			<FooterContainer>
				<div className="container p-4">
					<Container className="container text-center flex justify-between align-top md:text-left mb-20 pt-4">
						<FooterInfo>
							<img
								src={FooterLogo}
								className="footer-logo mb-3"
								alt="GALAXY CORP."
							/>
							<p
								className="text-xs font-extralight"
								style={{ fontSize: 10 }}
							>
								2023 GALAXY corporation. CO., LTD. All rights reserved.
							</p>
						</FooterInfo>
						<MiscContainer className="flex justify-between md:justify-normal">
							<PrivacyList className="text-sm lg:flex md:mr-20 text-left">
								<li>
									<Link
										to="/"
										className="font-extralight"
									>
										개인정보처리방침
									</Link>
								</li>
								<li>
									<Link
										to="/"
										className="font-extralight"
									>
										문의하기
									</Link>
								</li>
							</PrivacyList>
							<OutlinkList className="flex">
								<li className="mr-6">
									<a
										href="https://www.youtube.com"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src={FooterYoutube}
											alt="youtube"
										/>
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src={FooterBlog}
											alt="youblog"
										/>
									</a>
								</li>
							</OutlinkList>
						</MiscContainer>
					</Container>
				</div>
			</FooterContainer>
		</>
	)
}

export default Contact
