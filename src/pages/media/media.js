import styled from 'styled-components'
import { ParallaxBanner } from 'react-scroll-parallax'
import SubVisualImage from '../../assets/image/business/media/bg.png'
import Img1 from '../../assets/image/WEB_image/x1/2_3media/media_2.jpg'
import Img1Xs from '../../assets/image/MOBILE_image/x1/4_business_media/business_media_2.jpg'
import Img2 from '../../assets/image/WEB_image/x1/2_3media/media_4.jpg'
import Img2Xs from '../../assets/image/MOBILE_image/x1/4_business_media/business_media_4.jpg'

import Studio27 from '../../assets/image/WEB_image/x1/2_3media/studio27.png'
import Pysical from '../../assets/image/WEB_image/x1/2_3media/pysical.png'
import PysicalXs from '../../assets/image/MOBILE_image/x1/4_business_media/pysical.png'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrLeft from '../../assets/image/business/media/arr-l.svg'
import ArrRight from '../../assets/image/business/media/arr-r.svg'
import Sl1 from '../../assets/image/business/media/sl1.png'
import Sl2 from '../../assets/image/business/media/sl2.png'
import Sl3 from '../../assets/image/business/media/sl3.png'
import Sl4 from '../../assets/image/business/media/sl4.png'
import Sl5 from '../../assets/image/business/media/sl5.png'
import Sl6 from '../../assets/image/business/media/sl6.png'

import Sl11 from '../../assets/image/business/media/sl11.png'
import Sl12 from '../../assets/image/business/media/sl12.png'
import Sl13 from '../../assets/image/business/media/sl13.png'
import Sl14 from '../../assets/image/business/media/sl14.png'
import Sl15 from '../../assets/image/business/media/sl15.png'
import Sl16 from '../../assets/image/business/media/sl16.png'

import Txt1 from '../../assets/image/business/media/txt1.svg'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../../hooks/language'

import { useWindowSize } from '@react-hook/window-size'

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

const MContainer = styled.div`
	position: relative;
	margin-top: 30px;
	height: 330px;
`

const Media = () => {
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

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		initialSlide: 0,
		variableWidth: true,
		autoplay: true,
		pauseonhover: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
					arrows: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: false,
					centerMode: true,
				},
			},
		],
	}
	return (
		<>
			<div className="sub-visual">
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
			<div className="container px-7 lg:p-0">
				<h2 className="flex justify-center mt-14 mb-12 lg:mb-10 ">
					<img
						src={Txt1}
						alt=""
					/>
				</h2>
				<h3 className="text-lg lg:text-3xl text-center font-light lg:mb-36 mb-10">
					{t('media1_1')}
				</h3>
				<div className="w-auto md:w-3/5 mx-auto">
					<p
						className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 break-keep"
						style={{ marginBottom: isXs ? 350 : 600 }}
					>
						{t('media1_2')}
					</p>
				</div>
				<h2 className="text-3xl lg:text-6xl eng text-center mt-14 mb-10">
					virtual variety
				</h2>
				<div className="w-auto md:w-3/5 mx-auto">
					<p className="text-lg lg:text-2xl text-left lg:text-center font-extralight lg:leading-9 mb-5 lg:mb-32 break-keep">
						{t('media1_3')}
					</p>
				</div>
			</div>
			<ParallaxBanner
				layers={[
					{
						image: isXs ? Img1Xs : Img1,
						speed: -5,
					},
				]}
				className="bg-gray-900 mb-54"
				style={{ height: isXs ? '235px' : '300px' }}
			/>
			<div
				className="container flex justify-center"
				style={{ marginTop: 100 }}
			>
				<a
					className="linkButton"
					href="https://www.avadream.co.kr/"
					target="_blank"
					rel="noreferrer"
				>
					<div className="tp" />
					<div className="lt" />
					<div className="lb" />
					<span className="eng">CONTENTS VIEW</span>
					<div className="rt" />
					<div className="rb" />
					<div className="bt" />
				</a>
			</div>

			<h2
				className="text-2xl lg:text-6xl eng text-center eng mb-5"
				style={{ marginTop: '530px' }}
			>
				REAL VARIETY
			</h2>
			<div className="w-auto md:w-3/5 mx-auto mb-20">
				<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9">
					국내, 글로벌에서 가장 화제가 되고 있는 콘텐츠를 제작하는 스튜디오로 TV,
					온라인플랫폼, OTT 등 다양한 채널 별 포트폴리오와 노하우를 갖춘
					스튜디오입니다.
				</p>
			</div>
			<h2 className="text-2xl lg:text-3xl eng text-center eng mb-5 mt-64 flex justify-center">
				<img
					src={Studio27}
					alt="studio27"
				/>
			</h2>
			<div className="w-auto md:w-3/5 mx-auto">
				<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 mb-16">
					글로벌 No.1 크리에이티브 스튜디오
				</p>
			</div>
			<ParallaxBanner
				layers={[
					{
						image: isXs ? PysicalXs : Pysical,
						speed: -5,
					},
				]}
				className="bg-gray-900"
				style={{ height: isXs ? '235px' : '300px' }}
			/>
			<div
				className="container flex justify-center"
				style={{ marginTop: 100 }}
			>
				<Link to="/studio27">
					<div className="linkButton">
						<div className="tp" />
						<div className="lt" />
						<div className="lb" />
						<span className="eng">CONTENTS VIEW</span>
						<div className="rt" />
						<div className="rb" />
						<div className="bt" />
					</div>
				</Link>
			</div>
			<h2
				className="text-3xl lg:text-5xl eng text-center eng mb-3 break-keep"
				style={{ marginTop: 447 }}
			>
				lUYWORKS Media
			</h2>
			<div className="w-auto md:w-3/5 mx-auto">
				<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 mb-5 lg:mb-32 break-keep">
					{t('media1_6')}
				</p>
			</div>
			<div className="mb-10">
				<Slider {...settings}>
					<div className="px-1">
						<img
							src={Sl1}
							alt=""
							style={{ width: isXs ? 200 : 'auto' }}
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl2}
							alt=""
							style={{ width: isXs ? 200 : 'auto' }}
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl3}
							alt=""
							style={{ width: isXs ? 200 : 'auto' }}
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl4}
							alt=""
							style={{ width: isXs ? 200 : 'auto' }}
						/>
					</div>
					{/* <div className="px-1">
						<img
							src={Sl5}
							alt=""
							style={{ width: isXs ? 200 : 'auto' }}
						/>
					</div> */}
					<div className="px-1">
						<img
							src={Sl6}
							alt=""
							style={{ width: isXs ? 200 : 'auto' }}
						/>
					</div>
				</Slider>
			</div>
			<h2 className="text-3xl lg:text-5xl eng text-center eng mb-3 mt-80 break-keep">
				WDM
			</h2>
			<div className="w-auto md:w-3/5 mx-auto">
				<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 mb-5 lg:mb-32 break-keep">
					{t('media1_6')}
				</p>
			</div>
			<ParallaxBanner
				layers={[
					{
						image: isXs ? Img2Xs : Img2,
						speed: -5,
					},
				]}
				style={{ height: isXs ? '235px' : '400px' }}
			/>
			<h2 className="text-3xl lg:text-5xl eng text-center eng mb-3 mt-48 lg:mt-80 break-keep">
				rudolph
				<br />
				studio
			</h2>
			<div className="w-auto md:w-3/5 mx-auto">
				<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 mb-5 lg:mb-32 break-keep">
					{t('media1_6')}
				</p>
			</div>
			<div style={{ marginBottom: isXs ? 86 : 460 }}>
				<Slider {...settings}>
					<div className="px-1">
						<img
							src={Sl11}
							alt=""
							style={{ width: isXs ? 200 : 'auto' }}
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl12}
							alt=""
							style={{ width: isXs ? 200 : 'auto' }}
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl13}
							alt=""
							style={{ width: isXs ? 200 : 'auto' }}
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl14}
							alt=""
							style={{ width: isXs ? 200 : 'auto' }}
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl15}
							alt=""
							style={{ width: isXs ? 200 : 'auto' }}
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl16}
							alt=""
							style={{ width: isXs ? 200 : 'auto' }}
						/>
					</div>
				</Slider>
			</div>
		</>
	)
}

export default Media
