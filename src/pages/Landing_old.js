import Bg from '../assets/image/landing/landing_bg.png'
import styled from 'styled-components'
import React, { useEffect } from 'react'
import { Parallax, useParallax, ParallaxBanner } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'
import MoreImg from '../assets/image/landing/more.svg'

const BusinessPartList = styled.ul`
	width: 840px;
	margin-left: auto;
	margin-right: auto;
	li {
		padding-top: 20px;
		border-top: 1px solid #494949;
		.btn-more {
			transition: all 0.2s ease-in-out;
			&:hover,
			&:focus {
				transform: scale(1.1);
			}
		}
	}
`

const Landing = () => {
	const { ref } = useParallax({ opacity: [1, 0] })
	const list1 = useParallax({
		scale: [0.5, 2, 'easeInQuad'],
	})
	const list2 = useParallax({
		scale: [0.5, 2, 'easeInQuad'],
	})
	const list3 = useParallax({
		scale: [0.5, 2, 'easeInQuad'],
	})
	const list4 = useParallax({
		scale: [0.5, 2, 'easeInQuad'],
	})
	const list5 = useParallax({
		scale: [0.5, 2, 'easeInQuad'],
	})
	useEffect(() => {}, [])
	return (
		<div className="overflow-x-hidden">
			<ParallaxBanner
				className="main-visual"
				layers={[{ image: Bg, speed: -20, opacity: [2, 0] }]}
			>
				<div className="main-visual-inner">
					<Parallax
						className="eng text-5xl"
						translateY={[200, 0]}
						opacity={[2, 0]}
					>
						ENJOY OUR METAVERSE
					</Parallax>
					<Parallax
						className="arrow-container"
						translateY={[200, 0]}
						opacity={[1, 0]}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="48.593"
							height="116.431"
							viewBox="0 0 48.593 116.431"
						>
							<g
								id="arrowGroup"
								dataname="arrow"
								transform="translate(-966.614 -825.803)"
							>
								<line
									id="verticalLine"
									dataname="line26"
									y2="103.753"
									transform="translate(990.911 825.803)"
									fill="none"
									stroke="#fff"
									strokeMiterlimit="10"
									strokeWidth="1"
								/>
								<path
									id="arrowLine"
									dataname="path78"
									d="M1014.854,917.585l-23.943,23.943-23.943-23.943"
									fill="none"
									stroke="#fff"
									strokeMiterlimit="10"
									strokeWidth="1"
								/>
							</g>
						</svg>
					</Parallax>
				</div>
			</ParallaxBanner>
			<div
				className="container"
				ref={ref}
			>
				<h2 className="text-4xl eng text-center mt-14 mb-16">
					Metaverse World for People
				</h2>
				<p
					className="text-center text-3xl leading-relaxed"
					style={{ marginBottom: '250px' }}
				>
					갤럭시코퍼레이션은 무한한 가능성의 메타버스를 통해
					<br />
					소비자와 기업 모두에게 새로운 가치와 경험을 선도합니다.
				</p>
			</div>
			<BusinessPartList>
				<li
					className="mb-64 flex justify-between"
					ref={list1.ref}
				>
					<div className="">
						<h3 className="text-4xl eng mb-5">G-META IP BUSINESS</h3>
						<p className="text-sm">
							현실과 사람 중심 메타버스로 보다 확장된 기준을
							<br />
							가지고 팬들과 아티스트를 위한 매니지먼트를 실천합니다.
						</p>
					</div>
					<Link
						to="/"
						className="text-3x eng btn-more"
					>
						<img
							src={MoreImg}
							alt="more"
						/>
					</Link>
				</li>
				<li
					className="mb-64 flex justify-between"
					ref={list2.ref}
				>
					<div className="">
						<h3 className="text-4xl eng mb-5">METAVERSE CONTENTS</h3>
						<p className="text-sm">
							누구나 쉽게 접하고 즐길 수 있는 콘텐츠를 통해 보다 많은 사람들이
							<br />
							행복한 세상을 꿈꿀 수 있는 새로운 메타버스 세상을 전달합니다.
						</p>
					</div>
					<Link
						to="/"
						className="text-3x eng btn-more"
					>
						<img
							src={MoreImg}
							alt="more"
						/>
					</Link>
				</li>
				<li
					className="mb-64 flex justify-between"
					ref={list3.ref}
				>
					<div className="">
						<h3 className="text-4xl eng mb-5">METAVERSE PRODUCTION</h3>
						<p className="text-sm">
							현실과 가상을 연결하며 다양한 콘텐츠 제작으로
							<br />
							사람을 위한 새로운 메타버스 세상을 꿈꾸고 있습니다.
						</p>
					</div>
					<Link
						to="/"
						className="text-3x eng btn-more"
					>
						<img
							src={MoreImg}
							alt="more"
						/>
					</Link>
				</li>
				<li
					className="mb-64 flex justify-between"
					ref={list4.ref}
				>
					<div className="">
						<h3 className="text-4xl eng mb-5">METAVERSE MAGAZINE </h3>
						<p className="text-sm">
							메타버스 전문 미디어 플랫폼으로 현실과 가상을 넘나드는
							<br />
							실감형 콘텐츠로 한층 더 생동감 있는 소식을 전달합니다.
						</p>
					</div>
					<Link
						to="/"
						className="text-3x eng btn-more"
					>
						<img
							src={MoreImg}
							alt="more"
						/>
					</Link>
				</li>
				<li
					className="mb-64 flex justify-between"
					ref={list5.ref}
				>
					<div className="">
						<h3 className="text-4xl eng mb-5">Meta future business</h3>
						<p className="text-sm">
							갤럭시코퍼레션은 현실과 사람 중심 메타버스로 보다 확장된 기준을
							<br />
							가지고 팬들과 아티스트를 위한 매니지먼트를 실천합니다.
						</p>
					</div>
					<Link
						to="/"
						className="text-3x eng btn-more"
					>
						<img
							src={MoreImg}
							alt="more"
						/>
					</Link>
				</li>
			</BusinessPartList>
		</div>
	)
}

export default Landing
