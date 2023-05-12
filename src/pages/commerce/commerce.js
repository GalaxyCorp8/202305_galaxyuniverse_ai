import styled from 'styled-components'
import { ParallaxBanner } from 'react-scroll-parallax'
import SubVisualImage from '../../assets/image/business/commerce/bg.png'
import Img1 from '../../assets/image/business/commerce/img1.png'
import Img2 from '../../assets/image/business/commerce/img2.png'

import Lg1 from '../../assets/image/business/commerce/lg1.png'
import Lg2 from '../../assets/image/business/commerce/lg2.png'
import Lg3 from '../../assets/image/business/commerce/lg3.png'
import Lg4 from '../../assets/image/business/commerce/lg4.png'
import Lg5 from '../../assets/image/business/commerce/lg5.png'
import Lg6 from '../../assets/image/business/commerce/lg6.png'
import Lg7 from '../../assets/image/business/commerce/lg7.png'
import Lg8 from '../../assets/image/business/commerce/lg8.png'
import Lg9 from '../../assets/image/business/commerce/lg9.png'
import Lg10 from '../../assets/image/business/commerce/lg10.png'
import Lg11 from '../../assets/image/business/commerce/lg11.png'
import Lg12 from '../../assets/image/business/commerce/lg12.png'
import Lg13 from '../../assets/image/business/commerce/lg13.png'
import Lg14 from '../../assets/image/business/commerce/lg14.png'

import Txt1 from '../../assets/image/business/commerce/txt1.svg'

const MContainer = styled.div`
	position: relative;
	margin-top: 30px;
	height: 330px;
`

const Commerce = () => {
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
				<h2 className="flex justify-center mt-14 mb-5">
					<img
						src={Txt1}
						alt=""
					/>
				</h2>
				<h3 className="text-lg lg:text-3xl text-center font-bold lg:font-light mb-36">
					현실과 가상이 공존하는 무한 커머스
				</h3>
				<p
					className="text-lg lg:text-2xl text-center font-extralight lg:leading-9"
					style={{ marginBottom: '600px' }}
				>
					<span className="block md:hidden lg:hidden">
						기존 온라인 커머스를 기반으로
						<br />
						메타버스와 연동된 상품을 판매함으로써
						<br />
						새로운 수익 모델을 창출하고 고객과
						<br />
						브랜드 간의 특별한 사용자 경험을 제공합니다.
					</span>
					<span className="hidden md:block lg:block">
						기존 온라인 커머스를 기반으로 메타버스와 연동된 상품을 판매함으로써
						<br />
						새로운 수익 모델을 창출하고 고객과 브랜드 간의 특별한 사용자 경험을
						제공합니다.
					</span>
				</p>
				<h2 className="text-2xl lg:text-5xl lg:leading-snug eng text-center mb-4">
					meta commerce
				</h2>
				<p className="text-lg lg:text-2xl text-center mt-3 mb-20">
					커머스 산업의 새로운 패러다임
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
			<div className="container p-4 lg:p-0">
				<p className="text-lg text-center font-extralight lg:leading-9 mt-14 mb-80">
					<span className="block md:hidden lg:hidden">
						갤럭시코퍼레이션은 기존의 이커머스
						<br />
						산업에서의 한계를 극복하기 위해,
						<br />
						새로운 유통 채널과 혁신적인 방법을
						<br />
						도입하여 메타버스에서의
						<br />
						새로운 패러다임을 제시하고 있습니다.
						<br />
						이를 통해, 기존 이커머스 산업에서
						<br />
						발생하던 문제들을 해결하고,
						<br />
						더욱 더 효율적이고 편리한 구매 경험을
						<br />
						제공하고자 노력하고 있습니다.
					</span>
					<span className="hidden md:block lg:block">
						갤럭시코퍼레이션은 기존의 이커머스 산업에서의 한계를 극복하기 위해, 새로운
						유통 채널과 혁신적인 방법을 도입하여 메타버스에서의 새로운 패러다임을
						제시하고 있습니다. 이를 통해, 기존 이커머스 산업에서 발생하던 문제들을
						해결하고, 더욱 더 효율적이고 편리한 구매 경험을 제공하고자 노력하고
						있습니다.
					</span>
				</p>
			</div>
			<h2 className="text-2xl lg:text-5xl lg:leading-snug eng text-center mb-4">
				REAL COMMERCE
			</h2>
			<p className="text-lg lg:text-2xl text-center mb-20">커머스 올인원</p>
			<ParallaxBanner
				layers={[
					{
						image: Img2,
						speed: -5,
					},
				]}
				style={{ height: 330 }}
			/>
			<div className="container p-4 lg:p-0">
				<p className="text-lg text-center font-extralight lg:leading-9 mt-16">
					<span className="block md:hidden lg:hidden">
						다년간 축적된 노하우를 기반으로
						<br />
						커머스 브랜딩, 서비스, 디자인
						<br />
						그리고 마케팅까지 온·오프라인을 아우르는
						<br />
						이커머스 관련 제반 업무를 제공합니다.
					</span>
					<span className="hidden md:block lg:block">
						다년간 축적된 노하우를 기반으로 커머스 브랜딩, 서비스, 디자인 그리고
						마케팅까지 온·오프라인을 아우르는
						<br />
						이커머스 관련 제반 업무를 제공합니다.
					</span>
				</p>
			</div>
			<div className="container mb-10 mt-52">
				<h3 className="text-3xl mb-2">입점채널</h3>
				<div className="flex flex-row flex-wrap">
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg1}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg2}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg3}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg4}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg5}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg6}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg7}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg8}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg9}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg10}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg11}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg12}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg13}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg14}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Commerce
