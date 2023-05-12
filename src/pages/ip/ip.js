import Bg from '../../assets/image/ip/bg.png'
import styled from 'styled-components'
import React, { useEffect } from 'react'

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

const Ip = () => {
	useEffect(() => {}, [])
	return <PostContainer></PostContainer>
}

export default Ip
