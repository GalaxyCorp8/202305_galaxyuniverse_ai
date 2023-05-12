import Bg from '../../assets/image/landing/landing_bg.png'
import styled from 'styled-components'
import React, { useEffect } from 'react'
import { Parallax, useParallax, ParallaxBanner } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'
import MoreImg from '../../assets/image/landing/more.svg'
const Container = styled.section`
	width: 848px;
	margin-left: auto;
	margin-right: auto;
`
const Box = styled.div`
	height: 217px;
	background: rgba(255, 255, 255, 0.5);
`

const p_08 = () => {
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
			<Container>
				<h2 className="text-3xl eng text-center mt-24">
					Happier with the metaverse
				</h2>
				<p
					className="text-2xl text-center mt-14"
					style={{ marginBottom: 580 }}
				>
					갤럭시코퍼레이션은 가상과 현실을 공존시켜, 인류의 삶을
					<br />더 행복하고 이롭게 재창조하는 메타버스 아바타 포탈 기업입니다
				</p>
				<h3 className="text-3xl eng text-center mb-4">core value</h3>
				<h3 className="text-4xl eng text-center mb-6">METAVERSE AVATA POrtAL</h3>
				<Box className="mb-5" />
				<p className="text-base mb-64">
					연예인 IP로 만들어진 AVA와 갤럭시 세계관을 기반으로 미디어, 콘텐츠 제작,
					매니지먼트, 커머스, 버추얼 휴먼, ESG 등 메타버스 A to Z 사업을 하는
					메타버스포털 기업 입니다.
				</p>
				<h3 className="text-3xl eng text-center mb-4">VISION</h3>
				<h3 className="text-4xl eng text-center mb-6">Sharing the new world</h3>
				<Box className="mb-5" />
				<p className="text-base mb-64">
					자사의 플랫폼, 비즈니스는 물론 전 세계의 메타버스를 넘나들며 공생하는
					메타버스 아바타 포탈 기업입니다. 전세계 70억 명 인구가 다양 한 아바타로
					공생하는 신인류의 세상을 창조합니다.
				</p>
				<h3 className="text-3xl eng text-center mb-4">VISION</h3>
				<h3 className="text-4xl eng text-center mb-6">open the infinite world</h3>
				<Box className="mb-5" />
				<p className="text-base mb-64">
					우리는 무한의 콘텐츠 세계의 새로운 메타버스 세계를 만들고 그곳에 서 모든
					사람들이 행복을 찾고 꿈을 이룰수 있는 새로운 세상을 열고 그이를 통해
					일상에서의 자아실현을 시켜 현실을 바꾸는것 그것이 우리의 비젼입니다.
				</p>
			</Container>
		</div>
	)
}

export default p_08
