import Bg from '../assets/image/landing/landing_bg.png'
import styled from 'styled-components'
import React, { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { osName } from 'react-device-detect'

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

const Landing = () => {
	const [isMobile, setIsMobile] = React.useState(false)
	useEffect(() => {
		console.log(osName)
		if (osName === 'iOS' || osName === 'Android') setIsMobile(true)
	}, [])
	return (
		<VideoWrapper>
			<div className="main-visual-inner">
				<h1 className="eng lg:text-5xl text-lg">
					<span className="xs:block sm:block md:hidden lg:hidden">
						ENJOY
						<br />
						OUR
						<br />
						METAVERSE
					</span>
					<span className="hidden sm:hidden md:block lg:block">
						ENJOY OUR METAVERSE
					</span>
				</h1>
			</div>
			{isMobile ? (
				<PostContainer />
			) : (
				<PostContainer />
				// <VideoBackground
				// 	muted
				// 	autoPlay
				// 	loop
				// >
				// 	<source
				// 		src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
				// 		type="video/mp4"
				// 	/>
				// </VideoBackground>
			)}
		</VideoWrapper>
	)
}

export default Landing
