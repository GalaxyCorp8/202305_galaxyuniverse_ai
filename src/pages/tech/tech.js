import styled from 'styled-components'
import { ParallaxBanner } from 'react-scroll-parallax'
import SubVisualImage from '../../assets/image/business/tech/bg.png'
import Img1 from '../../assets/image/business/tech/img1.png'
import Img2 from '../../assets/image/business/tech/img2.png'

import Txt1 from '../../assets/image/business/tech/txt1.svg'

const MContainer = styled.div`
	position: relative;
	margin-top: 30px;
	height: 330px;
`

const Tech = () => {
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
				<h3 className="lg:text-3xl text-center  font-bold lg:font-light mb-20">
					갤럭시 메타버스 테크
				</h3>
				<p
					className="text-lg lg:text-2xl text-center font-extralight lg:leading-9"
					style={{ marginBottom: '600px' }}
				>
					<span className="block md:hidden lg:hidden">
						다양한 형태의 아바타를 제작하기 위한
						<br />
						기술과 제작 기준을 정의하고 있으며,
						<br />
						이를 다양한 플랫폼에서 사용 가능하도록
						<br />
						최적화하는 기술을 지원합니다.
					</span>
					<span className="hidden md:block lg:block">
						다양한 형태의 아바타를 제작하기 위한 기술과 제작 기준을 정의하고 있으며,
						<br />
						이를 다양한 플랫폼에서 사용 가능하도록 최적화하는 기술을 지원합니다.
					</span>
				</p>
				<h2 className="text-2xl lg:text-5xl eng text-center mt-14 mb-5">
					Avatar Creation Tech
				</h2>
				<p className="text-lg lg:text-2xl text-center  font-bold lg:font-extralight lg:leading-9 mt-3 mb-20">
					아바타 제작
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
				<p
					className="text-lg lg:text-xl text-center font-extralight lg:leading-9 mt-14"
					style={{ marginBottom: '470px' }}
				>
					<span className="block md:hidden lg:hidden">
						갤럭시코퍼레이션은 다양한 플랫폼과
						<br />
						콘텐츠에 맞는 아바타를 만들기 위해,
						<br />
						아바타와 인간의 유사성 정도에 따라
						<br />
						5%부터 90%까지의 정의에 따라
						<br />
						아바타 제작 기술을 보유하고 있습니다.
						<br />
						<br />
						이러한 아바타 제작 기술은 다양한 콘텐츠와
						<br />
						플랫폼에서 고객들이 보다 현실적이고
						<br />
						개인화된 경험을 누릴 수 있도록 도와줍니다.
						<br />
						<br />
						5% 유사성의 경우는 비교적 단순한
						<br />
						그래픽과 적은 정보만으로 아바타를
						<br />
						만들어낼 수 있는 기술이며,
						<br />
						90% 유사성의 경우는 더욱 현실적이고
						<br />
						세밀한 디자인 기술을 사용하여
						<br />
						인간과 아바타 사이의 차이를 최소화합니다.
					</span>
					<span className="hidden md:block lg:block">
						갤럭시코퍼레이션은 다양한 플랫폼과 콘텐츠에 맞는 아바타를 만들기 위해,
						<br />
						아바타와 인간의 유사성 정도에 따라 5%부터 90%까지의 정의에 따라
						<br />
						아바타 제작 기술을 보유하고 있습니다.
						<br />
						<br />
						이러한 아바타 제작 기술은 다양한 콘텐츠와 플랫폼에서 고객들이 보다
						현실적이고
						<br />
						개인화된 경험을 누릴 수 있도록 도와줍니다.
						<br />
						<br />
						5% 유사성의 경우는 비교적 단순한 그래픽과 적은 정보만으로 아바타를
						만들어낼 수 있는 기술이며,
						<br />
						90% 유사성의 경우는 더욱 현실적이고 세밀한 디자인 기술을 사용하여
						<br />
						인간과 아바타 사이의 차이를 최소화합니다.
					</span>
				</p>
			</div>
			<h2 className="text-2xl lg:text-5xl eng text-center eng mb-5">
				Avatar Portal Platform
			</h2>
			<p className="text-lg lg:text-2xl text-center mb-14">
				One Avatar - Multi Platform(OAMP)
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
			<div className="container p-4 lg:p-0">
				<p className="text-lg lg:text-xl text-center font-extralight lg:leading-9 mt-16">
					<span className="block md:hidden lg:hidden">
						우리는 다양한 디지털 플랫폼에서 정보와
						<br />
						콘텐츠를 소비하며 시간을 보내고 있습니다.
						<br />
						하지만 각각의 플랫폼에서는 아바타를
						<br />
						새로 만들어야 하기 때문에,
						<br />
						사용자들은 번거로움과
						<br />
						시간 낭비를 겪게 됩니다.
						<br />
						<br />
						또한, 각각의 플랫폼에서는 아바타의
						<br />
						기능이 제한적이기 때문에,
						<br />
						사용자들은 다양한 플랫폼에서도
						<br />
						동일한 경험을 누리기 어렵습니다.
						<br />
						<br />
						때문에 갤럭시코퍼레이션의 목표는
						<br />
						"하나의 아바타로 멀티 플랫폼을
						<br />
						체험하는 서비스"를 제공함으로
						<br />
						사용자들이 다양한 플랫폼에서도
						<br />
						일관된 아바타를 사용할 수 있도록
						<br />
						하는 것 입니다.
					</span>
					<span className="hidden md:block lg:block">
						우리는 다양한 디지털 플랫폼에서 정보와 콘텐츠를 소비하며 시간을 보내고
						있습니다.
						<br />
						하지만 각각의 플랫폼에서는 아바타를 새로 만들어야 하기 때문에,
						<br />
						사용자들은 번거로움과 시간 낭비를 겪게 됩니다.
						<br />
						<br />
						또한, 각각의 플랫폼에서는 아바타의 기능이 제한적이기 때문에,
						<br />
						사용자들은 다양한 플랫폼에서도 동일한 경험을 누리기 어렵습니다.
						<br />
						<br />
						때문에 갤럭시코퍼레이션의 목표는 "하나의 아바타로 멀티 플랫폼을 체험하는
						서비스"를 제공함으로
						<br />
						사용자들이 다양한 플랫폼에서도 일관된 아바타를 사용할 수 있도록 하는 것
						입니다.
					</span>
				</p>
			</div>
		</>
	)
}

export default Tech
