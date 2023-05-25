import Bg from '../../assets/image/ip/bg.png'
import styled from 'styled-components'
import React, { useEffect, useState, useRef } from 'react'
import { Parallax, useParallax, ParallaxBanner } from 'react-scroll-parallax'

import Img1 from '../../assets/image/ip/cardImg/image_1.jpg'
import Img2 from '../../assets/image/ip/cardImg/image_2.jpg'
import Img3 from '../../assets/image/ip/cardImg/image_3.jpg'
import Img4 from '../../assets/image/ip/cardImg/image_4.jpg'
import Img5 from '../../assets/image/ip/cardImg/image_5.jpg'
import Img6 from '../../assets/image/ip/cardImg/image_6.jpg'
import Img7 from '../../assets/image/ip/cardImg/image_7.jpg'
import Img8 from '../../assets/image/ip/cardImg/image_8.jpg'
import Img9 from '../../assets/image/ip/cardImg/image_9.jpg'
import Img10 from '../../assets/image/ip/cardImg/image_10.jpg'
import Img11 from '../../assets/image/ip/cardImg/image_11.jpg'
import Img12 from '../../assets/image/ip/cardImg/image_12.jpg'
import Img13 from '../../assets/image/ip/cardImg/image_13.jpg'
import Img14 from '../../assets/image/ip/cardImg/image_14.jpg'
import Img15 from '../../assets/image/ip/cardImg/image_15.jpg'
import Img16 from '../../assets/image/ip/cardImg/image_16.jpg'
import Img17 from '../../assets/image/ip/cardImg/image_17.jpg'
import Img18 from '../../assets/image/ip/cardImg/image_18.jpg'
import Img19 from '../../assets/image/ip/cardImg/image_19.jpg'
import Img20 from '../../assets/image/ip/cardImg/image_20.jpg'
import Img21 from '../../assets/image/ip/cardImg/image_21.jpg'
import Img22 from '../../assets/image/ip/cardImg/image_22.jpg'
import Img23 from '../../assets/image/ip/cardImg/image_23.jpg'
import Img24 from '../../assets/image/ip/cardImg/image_24.jpg'
import Img25 from '../../assets/image/ip/cardImg/image_25.jpg'
import Img26 from '../../assets/image/ip/cardImg/image_26.jpg'
import Img27 from '../../assets/image/ip/cardImg/image_27.jpg'
import Img28 from '../../assets/image/ip/cardImg/image_28.jpg'
import Img29 from '../../assets/image/ip/cardImg/image_29.jpg'
import Img30 from '../../assets/image/ip/cardImg/image_30.jpg'
import Img31 from '../../assets/image/ip/cardImg/image_31.jpg'
import Img32 from '../../assets/image/ip/cardImg/image_32.jpg'
import Img33 from '../../assets/image/ip/cardImg/image_33.jpg'
import Img34 from '../../assets/image/ip/cardImg/image_34.jpg'
import Img35 from '../../assets/image/ip/cardImg/image_35.jpg'
import Img36 from '../../assets/image/ip/cardImg/image_36.jpg'
import Img37 from '../../assets/image/ip/cardImg/image_37.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrLeft from '../../assets/image/business/media/arr-l.svg'
import ArrRight from '../../assets/image/business/media/arr-r.svg'
import PopupCloseImg from '../../assets/image/common/popupClose.svg'

import SubVisual from '../../assets/image/ava_poster.png'
import SUbVisualXs from '../../assets/image/ava_poster.jpg'
import { setDefaultLanguage } from 'react-multi-lang'

import { useWindowSize } from '@react-hook/window-size'

import ReactHammer from 'react-hammerjs'

import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../../hooks/language'

const VideoBackground = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`
const VideoWrapper = styled.div`
	position: relative;
	height: 100vh;
	overflow: hidden;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	.main-visual-inner {
		z-index: 1;
	}
`

const PostContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${Bg});
	background-size: cover;
	background-position: center;
`
const ImgContainer = styled.ul`
	position: relative;
	&:before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 50px;
		height: 100%;
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 1) 0%,
			rgba(0, 0, 0, 0.01) 100%
		);
		z-index: 1;
	}
	&:after {
		content: '';
		display: block;
		position: absolute;
		right: 0;
		top: 0;
		width: 50px;
		height: 100%;
		background: linear-gradient(
			-90deg,
			rgba(0, 0, 0, 1) 0%,
			rgba(0, 0, 0, 0.01) 100%
		);
		z-index: 1;
	}
	li {
		img {
			width: 220px;
			height: auto;
		}
	}
	.slick-dots {
		display: none !important;
	}
`
const NextArrowContainer = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 4rem;
	width: 43px;
	height: 85px;
	z-index: 1;
	&::before {
		content: url(${ArrLeft});
		width: 43px;
		height: 85px;
	}
`
const PrevArrowContainer = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 4rem;
	width: 43px;
	height: 85px;
	z-index: 1;
	&::before {
		content: url(${ArrRight});
		width: 43px;
		height: 85px;
	}
`

const PopupContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	align-items: center;
	justify-content: center;
	.popup-inner {
		position: relative;
		width: 1219px;
		height: 701px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #fff;
		background: #000;
		.popup-close {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 48px;
			height: 48px;
			border: 1px solid #fff;
			background: #000;
			z-index: 10000;
			span {
				display: block;
				width: 12px;
				height: 12px;
				background-image: url(${PopupCloseImg});
				background-size: cover;
				background-position: center;
			}
			position: absolute;
			top: -1px;
			right: -48px;
		}
		.popup-content {
			position: relative;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	@media (max-width: 1320px) {
		padding: 60px;
		.popup-inner {
			width: 100%;
			height: 422px;
			.popup-close {
				right: -1px;
				top: -48px;
			}
		}
	}
`

const Ip = () => {
	const language = useSelector(selectLanguage)
	const [popup, setPopup] = useState(false)
	const imageRefs = useRef([])
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

	const NextArrow = (props) => {
		const { className, style, onClick } = props
		return (
			<NextArrowContainer
				className={className}
				style={{ ...style }}
				onClick={onClick}
			/>
		)
	}

	const PrevArrow = (props) => {
		const { className, style, onClick } = props
		return (
			<PrevArrowContainer
				className={className}
				style={{ ...style }}
				onClick={onClick}
			/>
		)
	}
	const imgArr = [
		Img1,
		Img2,
		Img3,
		Img4,
		Img5,
		Img6,
		Img7,
		Img8,
		Img9,
		Img10,
		Img11,
		Img12,
		Img13,
		Img14,
		Img15,
		Img16,
		Img17,
		Img18,
		Img19,
		Img20,
		Img21,
		Img22,
		Img23,
		Img24,
		Img25,
		Img26,
		Img27,
		Img28,
		Img29,
		Img30,
		Img31,
		Img32,
		Img33,
		Img34,
		Img35,
		Img36,
		Img37,
	]

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 5,
		initialSlide: 0,
		variableWidth: true,
		centerMode: false,
		arrows: false,
		// nextArrow: <NextArrow />,
		// prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
		],
	}

	const handleSwipeLeft = (index) => {
		console.log(index)
	}

	const handleswipeRight = (index) => {
		console.log(index)
	}

	const handleClick = (index) => {
		setPopup(true)
	}

	useEffect(() => {
		imageRefs.current = imageRefs.current.slice(0, imgArr.length)
	}, [imgArr])

	return (
		<>
			{popup && (
				<PopupContainer>
					<div className="popup-inner">
						<button
							type="button"
							className="popup-close"
							onClick={() => setPopup(false)}
						>
							<span></span>
						</button>
						<div className="popup-content">111</div>
					</div>
				</PopupContainer>
			)}
			<div className="sub-visual">
				<ParallaxBanner
					layers={[
						{
							image: isXs ? SUbVisualXs : SubVisual,
							speed: -5,
						},
					]}
					style={{ height: 780 }}
				/>
			</div>
			<ImgContainer>
				<Slider {...settings}>
					{imgArr.map((img, index) => (
						<ReactHammer
							key={index}
							// onSwipeLeft={() => handleSwipeLeft(index)}
							// onSwipeRight={() => handleswipeRight(index)}
							// onTap={() => handleClick(index)}
							className="px-1"
						>
							<img
								src={img}
								ref={(el) => (imageRefs.current[index] = el)}
								alt=""
							/>
						</ReactHammer>
					))}
				</Slider>
			</ImgContainer>
		</>
	)
}

export default Ip
