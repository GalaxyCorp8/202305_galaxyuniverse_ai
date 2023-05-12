import styled from 'styled-components'
import { Parallax, useParallax, ParallaxBanner } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'
import mBgImg from '../../assets/image/company/mirinae_bg.png'
import mTextImg from '../../assets/image/company/mirinae_texxt.png'
import mirinaeImg1 from '../../assets/image/business/avatar/ava.png'
import Human from '../../assets/image/business/avatar/human.png'
import SubVisualImage from '../../assets/image/business/avatar/bg.png'
import Av1 from '../../assets/image/business/avatar/av1.png'
import Av1Over from '../../assets/image/business/avatar/av1_over.png'
import Av2 from '../../assets/image/business/avatar/av2.png'
import Av2Over from '../../assets/image/business/avatar/av2_over.png'
import Av3 from '../../assets/image/business/avatar/av3.png'
import Av3Over from '../../assets/image/business/avatar/av3_over.png'
import MsXs from '../../assets/image/business/avatar/ms-xs.svg'
import MsMd from '../../assets/image/business/avatar/ms-md.svg'
import AvaXs from '../../assets/image/business/avatar/ava-xs.svg'
import AvaMd from '../../assets/image/business/avatar/ava-md.svg'
import HpXs from '../../assets/image/business/avatar/hp-xs.svg'
import HpMd from '../../assets/image/business/avatar/hp-md.svg'

import Txt1 from '../../assets/image/business/avatar/txt1.svg'

import { useState } from 'react'

const ListItem = styled.div`
	border-top: 1px solid #606060;
	display: flex;
	justify-content: space-between;
	align-items: top;
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
			<h1 className="text-6xl md:text-8xl text-white font-thin">Hello World!</h1>
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

const MirinaeBg = {
	image: mBgImg,
	translateY: [0, 50],
	opacity: [1, 0.3],
	scale: [1, 1, 'easeOutCubic'],
	shouldAlwaysCompleteAnimation: true,
}

const MirinaeText = {
	translateY: [-10, 5],
	scale: [0.8, 1, 'easeOutCubic'],
	opacity: [0.3, 1],
	shouldAlwaysCompleteAnimation: true,
	expanded: false,
	children: (
		<div className="absolute inset-0 flex items-center justify-center">
			<img
				src={mTextImg}
				alt="mirinae"
			/>
		</div>
	),
}

const MContainer = styled.div`
	position: relative;
	margin-top: 30px;
	height: 330px;
`

const MirineaOverlay = {
	opacity: [0, 0.5], // 투명도 애니메이션의 시작과 끝 값
	shouldAlwaysCompleteAnimation: true, // 애니메이션이 항상 완료되어야 하는지 여부
	expanded: false, // 오버레이가 확장되었는지 여부
	// 자식 요소
	// 배경 그라데이션 스타일을 가진 div 요소
	children: (
		<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black" />
	),
}

const Avatar = () => {
	const [av1State, setAv1State] = useState(false)
	const [av2State, setAv2State] = useState(false)
	const [av3State, setAv3State] = useState(false)

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
				<h2 className="flex justify-center mt-32 mb-10">
					<img
						src={Txt1}
						alt=""
					/>
				</h2>
				<h3 className="text-lg lg:text-3xl text-center font-bold lg:font-light mb-36">
					무한 확장하는 갤럭시 IP
				</h3>
				<p
					className="text-lg lg:text-2xl text-center font-extralight lg:leading-9"
					style={{ marginBottom: '600px' }}
				>
					갤럭시코퍼레이션은 연예인의 메타버스 아바타를 만들고
					<br />
					다양한 영역의 멀티버스 IP로 확장합니다. 80여팀의 셀럽,연예인과의 협업
					경험을 통해
					<br />
					국내 최대/최다의 아바타 IP 사업 노하우 및 포트폴리오를 보유하고 있습니다
				</p>
				<h2 className="text-2xl lg:text-5xl eng text-center mb-5">MIRINAE</h2>
				<p className="text-lg lg:text-2xl text-center font-bold mb-16">
					무한 확장되는 갤럭시 멀티 메타버스 세계관
				</p>
			</div>
			<MContainer>
				<ParallaxBanner
					layers={[MirinaeBg, MirineaOverlay, MirinaeText]}
					className="bg-gray-900"
					style={{ height: '330px' }}
				/>
			</MContainer>
			<div className="container p-4 lg:p-0">
				<p className="text-lg text-center font-extralight lg:leading-9 mt-14 mb-20">
					미리내 세상은 빛을 통한 현실의 세계
					<br className="xs:block sm:block md:hidden lg:hidden" /> Light on와 빛이
					사라질 때 보이는 가상
					<br className="xs:block sm:block md:hidden lg:hidden" /> 세계 Balck on로
					나뉩니다.
					<br className="xs:block sm:block md:hidden lg:hidden" />
					<br />
					현실 세계의 우리는 수많은 찰나의 선에
					<br className="xs:block sm:block md:hidden lg:hidden" /> 따라 삶이
					흘러갑니다. 순간과 선택의
					<br className="xs:block sm:block md:hidden lg:hidden" /> 순간이 교차되는
					교차점이
					<br className="hidden sm:hidden md:block lg:block" /> 현재 모습을
					<br className="xs:block sm:block md:hidden lg:hidden" /> 이루고 수많은 순간
					중 꿈을 상상하는
					<br className="xs:block sm:block md:hidden lg:hidden" /> 순간 내가 상상하는
					꿈이 실현됩니다.
				</p>
			</div>
			<div
				className="container flex justify-center"
				style={{ marginBottom: '500px' }}
			>
				<img
					src={MsMd}
					className="hidden sm:block"
					alt=""
				/>
				<img
					src={MsXs}
					alt=""
					className="block sm:hidden"
				/>
			</div>
			<h2 className="text-2xl lg:text-5xl lg:leading-snug eng text-center mt-32 mb-2">
				AVA
			</h2>
			<h3 className="lg:text-3xl text-center font-bold mb-20">
				Another Vision Alpha
			</h3>
			<ParallaxBanner
				layers={[
					{
						image: mirinaeImg1,
						speed: -5,
					},
				]}
				style={{ height: 330 }}
			/>
			<div className="container p-4 lg:p-0">
				<p className="text-lg text-center font-extralight lg:leading-9 mt-14 mb-48">
					AVA는 현실의 꿈을 실현시켜 다양한
					<br className="xs:block sm:block md:hidden lg:hidden" /> 꿈을 경험하고
					현실과 미래를 초연결
					<br className="xs:block sm:block md:hidden lg:hidden" /> 시키는 갤럭시의
					핵심 가치입니다.
					<br className="xs:block sm:block md:hidden lg:hidden" />
					<br className="xs:block sm:block md:hidden lg:hidden" />
					<br className="hidden sm:hidden md:block lg:block" />
					갤럭시는 다양한 꿈을 AVA를 통해
					<br className="xs:block sm:block md:hidden lg:hidden" />
					실현하고 더 큰 세상과 더 많은 사람들을
					<br className="xs:block sm:block md:hidden lg:hidden" /> 연결해 일상에
					새로운 경험을 넘어 꿈과
					<br className="xs:block sm:block md:hidden lg:hidden" />
					<br className="hidden sm:hidden md:block lg:block" />
					희망의 메시지로 세상을 변화시키시
					<br className="xs:block sm:block md:hidden lg:hidden" />
					위해 노력하고 있습니다.
				</p>
			</div>
			<div className="container mb-10">
				<div className="block md:flex justify-center items-center gap-10">
					<img
						src={av1State ? Av1Over : Av1}
						onMouseEnter={() => setAv1State(true)}
						onMouseOut={() => setAv1State(false)}
						alt=""
						className="block md:inline-block mx-auto md:mx-0 mb-8 md:mb-0"
					/>
					<img
						src={av2State ? Av2Over : Av2}
						onMouseEnter={() => setAv2State(true)}
						onMouseOut={() => setAv2State(false)}
						alt=""
						className="block md:inline-block mx-auto md:mx-0 mb-8 md:mb-0"
					/>
					<img
						src={av3State ? Av3Over : Av3}
						onMouseEnter={() => setAv3State(true)}
						onMouseOut={() => setAv3State(false)}
						alt=""
						className="block md:inline-block mx-auto md:mx-0 mb-8 md:mb-0"
					/>
				</div>
			</div>
			<div
				className="container flex justify-center"
				style={{ marginBottom: '580px' }}
			>
				<img
					src={AvaMd}
					className="hidden sm:block"
					alt=""
				/>
				<img
					src={AvaXs}
					alt=""
					className="block sm:hidden"
				/>
			</div>
			<h2 className="text-2xl lg:text-5xl lg:leading-snug eng text-center mt-32 mb-2">
				HUMAN
			</h2>
			<h3 className="lg:text-2xl text-center font-bold mb-16">
				갤럭시코퍼레이션의 ARTIST & ACTOR
			</h3>
			<ParallaxBanner
				layers={[
					{
						image: Human,
						speed: -5,
					},
				]}
				style={{ height: 330 }}
			/>
			<div className="container p-4 lg:p-0">
				<p className="text-lg text-center font-extralight lg:leading-9 mt-14 mb-16">
					갤럭시코퍼레이션은 무한 잠재력이
					<br className="xs:block sm:block md:hidden lg:hidden" /> 있는 다양한
					아티스트와 전문가들을
					<br className="xs:block sm:block md:hidden lg:hidden" /> 끊임없이 발굴하여
					갤럭시 메타버스
					<br className="xs:block sm:block md:hidden lg:hidden" /> 사업에 호환이 잘
					될 수<br className="hidden sm:hidden md:block lg:block" />
					있도록 교감하여
					<br className="xs:block sm:block md:hidden lg:hidden" /> 매니지먼트를 지속
					연개하고 있습니다.
					<br className="xs:block sm:block md:hidden lg:hidden" />{' '}
					<br className="xs:block sm:block md:hidden lg:hidden" /> 갤럭시 휴먼은 국내
					최초 글로벌
					<br className="xs:block sm:block md:hidden lg:hidden" /> 메타버스
					크리에이터로 더 큰 세상과
					<br className="xs:block sm:block md:hidden lg:hidden" /> 무한한
					<br className="hidden sm:hidden md:block lg:block" />
					가능성으로 함께 성장할 수
					<br className="xs:block sm:block md:hidden lg:hidden" /> 있습니다. 갤럭시는
					성장 가능한
					<br className="xs:block sm:block md:hidden lg:hidden" /> 다양한 오리진
					크리에이터를
					<br className="xs:block sm:block md:hidden lg:hidden" /> 지향하고
					지원합니다.
				</p>
			</div>
			<div className="container flex justify-center">
				<Link to="/page/ip">
					<img
						src={HpMd}
						className="hidden sm:block"
						alt=""
					/>
					<img
						src={HpXs}
						alt=""
						className="block sm:hidden"
					/>
				</Link>
			</div>
		</>
	)
}

export default Avatar
