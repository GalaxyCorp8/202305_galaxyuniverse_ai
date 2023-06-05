import P1 from '../../assets/image/contact/p1.png'
import P2 from '../../assets/image/contact/p2.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useParallax } from 'react-scroll-parallax'

const Box = styled.div`
	position: relative;
	height: 748px;
	background-color: rgba(255, 255, 255, 0.5);
	img {
		position: absolute;
		&.p1 {
			top: 40px;
			left: 0;
		}
		&.p2 {
			top: -55px;
			left: 0;
			width: 600px;
		}
	}
`

const Contact = () => {
	const img1 = useParallax({ easing: 'easeOutQuad', translateX: [-100, 50] })
	const img2 = useParallax({
		easing: 'easeOutQuad',
		translateX: [100, 150],
	})
	return (
		<div className="overflow-x-hidden">
			<h2 className="text-5xl eng text-center mt-80 mb-24">CONTACT US</h2>
			<Box>
				<div className="container">
					<img
						src={P1}
						ref={img1.ref}
						className="p1"
						alt=""
					/>
					<img
						src={P2}
						ref={img2.ref}
						className="p2"
						alt=""
					/>
				</div>
			</Box>
			<div className="container flex mt-24">
				<div className="flex-1 p-5">
					<h3 className="text-2xl mb-7 pt-8 border-t-2 border-white">
						사업제휴 및 업무
					</h3>
					<div className="mb-14 flex justify-between items-center">
						<p className="text-lg">galaxyuniverse.ai</p>
						<Link to="/">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="142.657"
								height="25.357"
								viewBox="0 0 142.657 25.357"
							>
								<g
									id="그룹_429"
									data-name="그룹 429"
									transform="translate(-793.071 -1331.153)"
								>
									<line
										id="선_36"
										data-name="선 36"
										x2="141.243"
										transform="translate(793.071 1343.831)"
										fill="none"
										stroke="#fff"
										strokeMiterlimit="10"
										strokeWidth="2"
									/>
									<path
										id="패스_100"
										data-name="패스 100"
										d="M3060.184,1331.86l11.971,11.971-11.971,11.972"
										transform="translate(-2137.842)"
										fill="none"
										stroke="#fff"
										strokeMiterlimit="10"
										strokeWidth="2"
									/>
								</g>
							</svg>
						</Link>
					</div>
					<p className="text-sm">
						업무 상 중요한 기밀사항일 경우, 답변을 드리지 못할 수 있습니다.
						<br />
						갤럭시와 관계가 없는 내용일 경우, 검토 후 별도의 연락을 드리지 못할 수
						있으니 양해 부탁드립니다.
					</p>
				</div>
				<div className="flex-1 p-5">
					<h3 className="text-2xl mb-7 pt-8 border-t-2 border-white">기타문의</h3>
					<div className="mb-14 flex justify-between items-center">
						<p className="text-lg">galaxyuniverse.ai</p>
						<Link to="/">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="142.657"
								height="25.357"
								viewBox="0 0 142.657 25.357"
							>
								<g
									id="그룹_429"
									data-name="그룹 429"
									transform="translate(-793.071 -1331.153)"
								>
									<line
										id="선_36"
										data-name="선 36"
										x2="141.243"
										transform="translate(793.071 1343.831)"
										fill="none"
										stroke="#fff"
										strokeMiterlimit="10"
										strokeWidth="2"
									/>
									<path
										id="패스_100"
										data-name="패스 100"
										d="M3060.184,1331.86l11.971,11.971-11.971,11.972"
										transform="translate(-2137.842)"
										fill="none"
										stroke="#fff"
										strokeMiterlimit="10"
										strokeWidth="2"
									/>
								</g>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
