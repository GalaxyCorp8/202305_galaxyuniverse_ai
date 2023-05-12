import Img from '../../assets/image/recruit/img.png'

const recruit = () => {
	return (
		<>
			<div className="container">
				<h2 className="text-5xl eng text-center mt-80">Galaxy growing together</h2>
				<p
					className="text-2xl text-center mt-14"
					style={{ marginBottom: 380 }}
				>
					갤럭시코퍼레이션은 능동적으로 탐구하고 새로운 탐험을 갈망하는
					<br />
					사람들이 함께 모여 새로운 조직문화를 만들어 나갑니다.
				</p>
				<img
					src={Img}
					alt=""
				/>
			</div>
			<div className="container flex justify-center align-center mt-40 mb-96">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="345.234"
						height="54.396"
						viewBox="0 0 345.234 54.396"
					>
						<g
							id="지원하기"
							transform="translate(-787 -2103.592)"
						>
							<text
								id="갤럭시_지원하기"
								data-name="갤럭시 지원하기"
								transform="translate(872.808 2140.412)"
								fill="#fff"
								fontSize="28.309"
								fontFamily="AppleSDGothicNeo-Regular, Apple SD Gothic Neo"
								letterSpacing="-0.06em"
							>
								<tspan
									x="0"
									y="0"
								>
									갤럭시
								</tspan>
								<tspan
									y="0"
									fontFamily="Helvetica"
								>
									{' '}
								</tspan>
								<tspan y="0">지원하기</tspan>
							</text>
							<g
								id="패스_232"
								data-name="패스 232"
								transform="translate(-0.066 55.178)"
								fill="none"
								strokeMiterlimit="10"
							>
								<path
									d="M1116.6,2048.414H802.769l-15.7,27.2,15.7,27.2H1116.6l15.7-27.2Z"
									stroke="none"
								/>
								<path
									d="M 803.3463134765625 2049.414306640625 L 788.2205810546875 2075.612548828125 L 803.3463134765625 2101.810791015625 L 1116.019409179688 2101.810791015625 L 1131.14501953125 2075.612548828125 L 1116.019409179688 2049.414306640625 L 803.3463134765625 2049.414306640625 M 802.7689208984375 2048.414306640625 L 1116.596801757812 2048.414306640625 L 1132.299682617188 2075.612548828125 L 1116.596801757812 2102.810791015625 L 802.7689208984375 2102.810791015625 L 787.06591796875 2075.612548828125 L 802.7689208984375 2048.414306640625 Z"
									stroke="none"
									fill="#fff"
								/>
							</g>
						</g>
					</svg>
				</div>
			</div>
		</>
	)
}

export default recruit
