import styled from 'styled-components'
import { ParallaxBanner } from 'react-scroll-parallax'
import SubVisualImage from '../../assets/image/business/media/bg.png'
import Img1 from '../../assets/image/business/media/img1.png'
import Img2 from '../../assets/image/business/media/img2.png'
import Slide1 from '../../assets/image/business/media/slide1.png'
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
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		initialSlide: 0,
		variableWidth: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
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
			<div className="container p-4 lg:p-0">
				<h2 className="flex justify-center mt-14 mb-5 ">
					<img
						src={Txt1}
						alt=""
					/>
				</h2>
				<h3 className="lg:text-3xl text-center font-bold lg:font-light mb-20">
					미디어 콘텐츠
				</h3>
				<p
					className="text-lg lg:text-2xl text-center font-extralight lg:leading-9"
					style={{ marginBottom: '600px' }}
				>
					<span className="block md:hidden lg:hidden">
						누구나 쉽게 접하고 즐길 수 있는
						<br />
						콘텐츠를 통해 보다 많은 사람들이
						<br />
						행복한 세상을 꿈꿀 수 있는
						<br />
						새로운 세상을 전달합니다.
					</span>
					<span className="hidden md:block lg:block">
						누구나 쉽게 접하고 즐길 수 있는 콘텐츠를 통해 보다 많은 사람들이
						<br />
						행복한 세상을 꿈꿀 수 있는 새로운 세상을 전달합니다.
					</span>
				</p>
				<h2 className="text-2xl lg:text-6xl eng text-center mt-14 mb-10">
					virtual variety
				</h2>
				<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 mb-32">
					<span className="block md:hidden lg:hidden">
						갤럭시의 메타버스 콘텐츠들은
						<br />
						갤럭시 미리내 세계관과 초연결되어
						<br />
						무한한 메타버스 이야기로 재미와 즐거움을
						<br />
						선사하며 잠재되어있던 꿈을 깨워줍니다.
					</span>
					<span className="hidden md:block lg:block">
						갤럭시의 메타버스 콘텐츠들은 갤럭시 미리내 세계관과 초연결되어
						<br />
						무한한 메타버스 이야기로 재미와 즐거움을 선사하며 잠재되어있던 꿈을
						깨워줍니다.
					</span>
				</p>
			</div>
			<MContainer>
				<ParallaxBanner
					layers={[
						{
							image: Img1,
							speed: -5,
						},
					]}
					className="bg-gray-900"
					style={{ height: '330px' }}
				/>
			</MContainer>
			<h2
				className="text-2xl lg:text-6xl eng text-center eng mb-5"
				style={{ marginTop: '700px' }}
			>
				REAL VARIETY
			</h2>
			<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 mb-54">
				<span className="block md:hidden lg:hidden">
					국내, 글로벌에서 가장 화제가 되고 있는
					<br />
					콘텐츠를 제작하는 스튜디오로 TV,
					<br />
					온라인플랫폼, OTT 등 다양한 채널 별<br />
					포트폴리오와 노하우를 갖춘 스튜디오입니다.
				</span>
				<span className="hidden md:block lg:block">
					국내, 글로벌에서 가장 화제가 되고 있는 콘텐츠를 제작하는 스튜디오로 TV,
					온라인플랫폼, OTT 등<br />
					다양한 채널 별 포트폴리오와 노하우를 갖춘 스튜디오입니다.
				</span>
			</p>
			<h2 className="text-2xl lg:text-5xl eng text-center eng mb-5 mt-80">
				lUYWORKS Media
			</h2>
			<p className="text-lg lg:text-2xl  font-bold lg:font-light text-center mb-32">
				예능콘텐츠 전문 스튜디오
			</p>
			<div className="mb-10">
				<Slider {...settings}>
					<div className="px-1">
						<img
							src={Sl1}
							alt=""
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl2}
							alt=""
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl3}
							alt=""
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl4}
							alt=""
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl5}
							alt=""
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl6}
							alt=""
						/>
					</div>
				</Slider>
			</div>
			<h2 className="text-2xl lg:text-5xl eng text-center eng mb-5 mt-80">WDM</h2>
			<p className="text-lg lg:text-2xl  font-bold lg:font-light text-center mb-16">
				예능콘텐츠 전문 스튜디오
			</p>

			<ParallaxBanner
				layers={[
					{
						image: Img2,
						speed: -5,
					},
				]}
				style={{ height: 330 }}
			/>
			<h2 className="text-2xl lg:text-5xl eng text-center eng mb-5 mt-80">
				rudolph studio
			</h2>
			<p className="text-lg lg:text-2xl font-bold lg:font-light text-center mb-16">
				예능콘텐츠 전문 스튜디오
			</p>
			<div className="mb-10">
				<Slider {...settings}>
					<div className="px-1">
						<img
							src={Sl11}
							alt=""
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl12}
							alt=""
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl13}
							alt=""
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl14}
							alt=""
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl15}
							alt=""
						/>
					</div>
					<div className="px-1">
						<img
							src={Sl16}
							alt=""
						/>
					</div>
				</Slider>
			</div>
		</>
	)
}

export default Media
