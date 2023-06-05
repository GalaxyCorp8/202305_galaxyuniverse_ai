import styled from 'styled-components'
import { useEffect } from 'react'

const LodingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	position: fixed;
	z-index: 9999;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	.loader {
		border: 10px solid #f3f3f3;
		border-top: 10px solid #3498db;
		border-radius: 50%;
		width: 80px;
		height: 80px;
		animation: spin 1s linear infinite;
		display: inline-block;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`

function Loader() {
	useEffect(() => {}, [])
	return (
		<LodingContainer>
			<span className="loader" />
		</LodingContainer>
	)
}

export default Loader
