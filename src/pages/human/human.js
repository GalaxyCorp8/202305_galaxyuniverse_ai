import Bg from '../../assets/image/ip/bg.png'
import styled from 'styled-components'
import React, { useEffect, useState, useRef } from 'react'
import { Parallax, useParallax, ParallaxBanner } from 'react-scroll-parallax'

import Img1 from '../../assets/image/human/humanIp/1.jpg'
import Img2 from '../../assets/image/human/humanIp/2.jpg'
import Img3 from '../../assets/image/human/humanIp/3.jpg'
import Img4 from '../../assets/image/human/humanIp/4.jpg'
import Img5 from '../../assets/image/human/humanIp/5.jpg'
import Img6 from '../../assets/image/human/humanIp/6.jpg'
import Img7 from '../../assets/image/human/humanIp/7.jpg'
import Img8 from '../../assets/image/human/humanIp/8.jpg'
import Img9 from '../../assets/image/human/humanIp/9.jpg'
import Img10 from '../../assets/image/human/humanIp/10.jpg'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrLeft from '../../assets/image/business/media/arr-l.svg'
import ArrRight from '../../assets/image/business/media/arr-r.svg'
import PopupCloseImg from '../../assets/image/common/popupClose.svg'

import ReactHammer from 'react-hammerjs'

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

const Sb = styled.div`
	height: 500px;
	background: #000 !important;
	@media (min-width: 767px) {
		height: 780px;
	}
`

const Human = () => {
	const [popup, setPopup] = useState(false)
	const imageRefs = useRef([])

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
	const imgArr = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10]

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
			<Sb className="sub-visual">
				<h3 className="text-lg lg:text-5xl eng text-center font-light mb-10">
					Metaverse World for People
				</h3>
				<div
					className="w-auto md:w-3/5 mx-auto"
					style={{ background: '#000' }}
				>
					<p className="text-xs lg:text-2xl text-center font-extralight break-keep lg:leading-9 px-20 md:px-0">
						갤럭시코퍼레이션은 가상과 현실을 넘나드는 매니지먼트를 통해 아티스트의 폭
						넓은 활동을 돕습니다.
					</p>
				</div>
			</Sb>
			<ImgContainer>
				<Slider {...settings}>
					{imgArr.map((img, index) => (
						<ReactHammer
							key={index}
							onSwipeLeft={() => handleSwipeLeft(index)}
							onSwipeRight={() => handleswipeRight(index)}
							onTap={() => handleClick(index)}
							className="px-1"
						>
							<img
								src={img}
								ref={(el) => (imageRefs.current[index] = el)}
								alt=""
							/>
						</ReactHammer>
						// <li
						// 	key={index}
						// 	className="px-1"
						// >
						// 	<img
						// 		src={img}
						// 		alt=""
						// 		//onClick={() => setPopup(true)}
						// 	/>
						// </li>
					))}
				</Slider>
			</ImgContainer>
		</>
	)
}

export default Human
