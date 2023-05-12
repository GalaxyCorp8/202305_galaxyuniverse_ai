import Box from '../../assets/image/career/box.png'
import BtnInq from '../../assets/image/career/btn_inq.svg'
import BtnInqM from '../../assets/image/career/btn_inq_m.svg'
import Dot from '../../assets/image/career/dot.svg'
import Slash from '../../assets/image/career/slash.svg'
import Step from '../../assets/image/career/step.svg'
import StepM from '../../assets/image/career/step_m.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Injesang = styled.div`
	position: relative;
    width: 33.333%;
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    @media (max-width: 767px) {
        float: none;
        width: 100% !important;
        justify-content: flex-start;
        padding-left: 3rem;
        &.slash {
            &::before,
            &::after {
                display: none;
            }
        }
    }
	h4 {
        position: relative;
		font-size: 3.4rem;
		line-height: 1;
        .dot {
            position: absolute;
            top: 0;
            left: -15px;
            width: 13px;
            height: 15px;
            background: url(${Dot}) no-repeat;
            @media (max-width: 767px) {
                width: 10px;
                height: 12px;
                background-size: 10px 12px;
            }
        }
        @media (max-width: 767px) {
            font-size: 2.4rem;
            font-weight: 300;
        }
	}
	p {
        padding-left: 25px;
        @media (max-width: 767px) {
            font-size: 1rem;
            line-height: 1.2;
        }
	}
	}
	&.slash {
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -36px;
            width: 36px;
            height: 58px;
            background: url(${Slash}) no-repeat;
        }
        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: -36px;
            width: 36px;
            height: 58px;
            background: url(${Slash}) no-repeat;
        }
        @media (max-width: 767px) {
            margin-top: 2.25rem;
            margin-bottom: 2.25rem;
        }
	}
`

const Career = () => {
	return (
		<>
			<div className="container p-4 lg:p-0">
				<img
					src={Box}
					alt=""
					className="mt-20 block md:hidden lg:hidden"
				/>
				<h2 className="text-2xl lg:text-5xl eng text-center mt-20 lg:mt-80 mb-2 lg:mb-9">
					Galaxy
					<br />
					growing together
				</h2>
				<p className="text-lg lg:text-4xl text-center font-bold lg:font-light mb-5 lg:mb-40">
					갤럭시안이 함께하는 조직 문화
				</p>
				<img
					src={Box}
					alt=""
					className="mt-20 hidden md:block lg:block"
				/>
			</div>
			<div className="container p-4 lg:p-0 mb-16 border-t-2">
				<h3 className="text-base md:text-3xl mt-0 md:mt-5 mb-16 font-bold">
					인재상
				</h3>
				<Injesang className="">
					<h4>
						<span className="dot"></span>탐험
					</h4>
					<p className="text-lg font-light">
						열정과 호기심으로
						<br />
						무한 세상을 탐험하는 인재
					</p>
				</Injesang>
				<Injesang className="slash">
					<h4>
						<span className="dot"></span>실행
					</h4>
					<p className="text-lg font-light">
						불가능을 창의적 도전으로
						<br />
						실행하는 인재
					</p>
				</Injesang>
				<Injesang className="">
					<h4>
						<span className="dot"></span>행복
					</h4>
					<p className="text-lg font-light">
						선한 마음으로 세상을
						<br />
						행복하게 지어가는 인재
					</p>
				</Injesang>
				<div className="clear-both"></div>
			</div>
			<div className="container p-4 lg:p-0 mt-16 border-t-2">
				<div className="block md:flex">
					<h3 className="text-base md:text-3xl mt-0 md:mt-5 md:w-2/5 w-full font-bold">
						문화
					</h3>
					<ul className="md:w-3/5 mt-6 md:mt-12 list-disc w-full pl-6 md:pl-0">
						<li className="text-base md:text-lg font-light mb-7 md:mb-3">
							자유롭게 의견을 제시하고, 서로를 존중하는 수평적인 소통 문화
						</li>
						<li className="text-base md:text-lg font-light mb-7 md:mb-3">
							개개인이 아닌 팀워크로 업무를 하고 성과를 달성하는 조직
						</li>
						<li className="text-base md:text-lg font-light mb-7 md:mb-3">
							단체 활동을 통해 팀워크를 향상시킬 수 있도록 분기별 워크샵 운영
						</li>
						<li className="text-base md:text-lg font-light mb-7 md:mb-3">
							회사에서 추진하는 프로젝트를 전 임직원이 공유하는 문화
						</li>
						<li className="text-base md:text-lg font-light">
							신나는 음악과 함께하는 즐거운 사무공간
						</li>
					</ul>
				</div>
			</div>
			<div className="container p-4 lg:p-0 mt-16 border-t-2 hidden md:block">
				<h3 className="text-3xl mt-5 mb-16">복리후생</h3>
				<div className="flex mb-20">
					<h4 className="text-4xl w-1/4 font-thin">LIFE</h4>
					<div className="w-3/4">
						<table className="table-auto text-lg font-light">
							<colgroup>
								<col style={{ width: 200 }} />
								<col />
							</colgroup>
							<tbody>
								<tr>
									<td className="p-2">경조사지원</td>
									<td className="p-2">
										구성원들의 경조사에 축하와 조의를 담아 휴가와 비용, 용품을 지원합니다.
									</td>
								</tr>
								<tr>
									<td className="p-2">기념일선물</td>
									<td className="p-2">
										기념일 마다 감사한 마음을 담아 선물을 제공합니다.
									</td>
								</tr>
								<tr>
									<td className="p-2">가족사랑지원</td>
									<td className="p-2">
										엄마, 아빠가 되고싶은 구성원들에게 휴가와 비용을 지원합니다.
									</td>
								</tr>
								<tr>
									<td className="p-2">문화생활지원</td>
									<td className="p-2">
										즐거운 문화생활을 위해 영화, 뮤지컬, 운동경기 등 단체 관람을
										지원합니다.
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className="flex relative">
					<h4
						className="text-4xl w-1/4 font-thin"
						style={{ transform: 'translateY(-20px)' }}
					>
						WORK
					</h4>
					<div className="w-3/4 border-t-2 border-gray-800">
						<table className="table-auto text-lg font-light my-20">
							<colgroup>
								<col style={{ width: 200 }} />
								<col />
							</colgroup>
							<tbody>
								<tr>
									<td className="p-2">음료&스낵바</td>
									<td className="p-2">
										구성원들이 출출하지 않도록 스낵과 음료를 제공하고 있습니다.
									</td>
								</tr>
								<tr>
									<td className="p-2">근무 장비 지원</td>
									<td className="p-2">
										직무별 최적화된 장비와 소프트웨어를 제공하고 있습니다.
									</td>
								</tr>
								<tr>
									<td className="p-2">동호회</td>
									<td className="p-2">
										구성원들의 취미활동과 상호 친목도모를 위해 사내동호회를 운영하고
										있습니다.
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="flex relative">
					<h4
						className="text-4xl w-1/4 font-thin"
						style={{ transform: 'translateY(-20px)' }}
					>
						HEALTH
					</h4>
					<div className="w-3/4 border-t-2 border-gray-800">
						<table className="table-auto text-lg font-light my-20">
							<colgroup>
								<col style={{ width: 200 }} />
								<col />
							</colgroup>
							<tbody>
								<tr>
									<td className="p-2">단체상해보험</td>
									<td className="p-2">
										구성원들의 의료비 부담을 줄이고자, 보장성 보험료와 실손의료비를
										지원해드립니다.
									</td>
								</tr>
								<tr>
									<td className="p-2">종합건강검진</td>
									<td className="p-2">
										구성원의 건강을 위해 매년 1회 무료로 검사하고, 휴가도 제공합니다.
									</td>
								</tr>
								<tr>
									<td className="p-2">마인드케어</td>
									<td className="p-2">
										부정적인 마음 상태를 긍정적으로 회복할 수 있도록 전문 상담을 지원하고
										있습니다.
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className="container p-4 lg:p-0 mt-16 border-t-2 block md:hidden">
				<h3 className="text-base font-bold">복리후생</h3>
				<h4 className="text-3xl eng my-16">LIFE</h4>
				<h3 className="text-base font-bold">경조사지원</h3>
				<p className="text-base font-light mb-16">
					구성원들의 경조사에 축하와 조의를 담아 휴가와 비용, 용품을 지원합니다.
				</p>
				<h3 className="text-base font-bold">기념일선물</h3>
				<p className="text-base font-light mb-16">
					기념일 마다 감사한 마음을 담아 선물을 제공합니다.
				</p>
				<h3 className="text-base font-bold">가족사랑지원</h3>
				<p className="text-base font-light mb-16">
					엄마, 아빠가 되고싶은 구성원들에게 휴가와 비용을 지원합니다.
				</p>
				<h3 className="text-base font-bold">문화생활지원</h3>
				<p className="text-base font-light mb-48">
					즐거운 문화생활을 위해 영화, 뮤지컬, 운동경기 등 단체 관람을 지원합니다.
				</p>

				<h4 className="text-3xl eng my-16">WORK</h4>
				<h3 className="text-base font-bold">음료&스택바</h3>
				<p className="text-base font-light mb-16">
					구성원들이 출출하지 않도록 스낵과 음료를 제공하고 있습니다.
				</p>
				<h3 className="text-base font-bold">근무 장비 지원</h3>
				<p className="text-base font-light mb-16">
					직무별 최적화된 장비와 소프트웨어를 제공하고 있습니다.
				</p>
				<h3 className="text-base font-bold">동호회</h3>
				<p className="text-base font-light mb-48">
					구성원들의 취미활동과 상호 친목도모를 위해 사내동호회를 운영하고 있습니다.
				</p>

				<h4 className="text-3xl eng my-16">HEALTH</h4>
				<h3 className="text-base font-bold">단체상해보험</h3>
				<p className="text-base font-light mb-16">
					구성원들의 의료비 부담을 줄이고자, 보장성 보험료와 실손의료비를
					지원해드립니다.
				</p>
				<h3 className="text-base font-bold">종합건강검진</h3>
				<p className="text-base font-light mb-16">
					구성원의 건강을 위해 매년 1회 무료로 검사하고, 휴가도 제공합니다.
				</p>
				<h3 className="text-base font-bold">마인드케어</h3>
				<p className="text-base font-light mb-48">
					부정적인 마음 상태를 긍정적으로 회복할 수 있도록 전문 상담을 지원하고
					있습니다.
				</p>
			</div>
			<div className="container p-4 lg:p-0 border-t-2">
				<h3 className="text-base font-bold md:text-3xl mt-0 md:mt-5 mb-16">
					채용절차
				</h3>
				<img
					src={Step}
					alt="채용절차"
					className="hidden md:block lg:block"
				/>
				<div className="md:hidden lg:hidden flex justify-center">
					<img
						src={StepM}
						alt="채용절차"
					/>
				</div>
			</div>
			<div className="container p-4 lg:p-0 flex justify-center align-center mb-96 mt-32">
				<Link to="/">
					<img
						src={BtnInq}
						alt="지원하기"
						className="hidden md:block lg:block"
					/>
					<img
						src={BtnInqM}
						alt="지원하기"
						className="block md:hidden lg:hidden"
					/>
				</Link>
			</div>
		</>
	)
}

export default Career
