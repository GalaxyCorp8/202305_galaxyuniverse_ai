import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'
import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../../hooks/language'
import { useWindowSize } from '@react-hook/window-size'
import { useNavigate } from 'react-router-dom'

import JobImg1 from '../../assets/image/WEB_image/x1/job/job1.png'
import TitleJob from '../../assets/image/WEB_image/x1/job/life.png'
import TitleWork from '../../assets/image/WEB_image/x1/job/work.png'
import TitleHealth from '../../assets/image/WEB_image/x1/job/health.png'
import Arr from '../../assets/image/WEB_image/x1/job/arr.png'

const JobHeader = styled.div`
	.dt {
		color: rgba(255, 255, 255, 0.4);
	}
`

const Intro = styled.div`
	position: relative;
	background: rgba(255, 255, 255, 0.2);
	.wrapper {
		width: 1540px;
		position: relative;
		margin: auto;
		min-height: 410px;
		@media (max-width: 767px) {
			width: auto;
		}
	}
	.avtImg {
		position: absolute;
		bottom: 0;
		// left: 0;
	}
	.textContainer {
		padding-left: 70px;
		@media (max-width: 767px) {
			padding-left: 0;
		}
	}
	.avtImg2 {
		width: 246px;
		transform: translateX(-20px);
		margin-top: 10px;
	}
`

const SubIntro = styled.div`
	position: relative;
	background: rgba(255, 255, 255, 0.1);
`

const ArrowNum = styled.div`
	position: relative;
	height: 23px;
	background: url(${Arr}) no-repeat 0 calc(100% - 5px);
	span {
		background: #000;
		padding-right: 20px;
	}
`

const JobView = () => {
	const navigate = useNavigate()
	const language = useSelector(selectLanguage)
	const { t, i18n } = useTranslation()

	const [width, height] = useWindowSize({ fps: 60 })
	const [isXs, setIsXs] = useState(false)

	useEffect(() => {
		setDefaultLanguage(language ? language : 'ko')
		if (width < 767) {
			setIsXs(true)
		} else {
			setIsXs(false)
		}
	}, [language, width])
	return (
		<>
			<div className="container mt-32 lg:mt-72">
				<JobHeader className="mb-14 md:mb-56 px-10 md:px-0">
					<div>
						<div className="block md:flex md:justify-between mb-4">
							<h2 className="text-2xl md:text-6xl mb-5">마케팅/콘텐츠 디자이너</h2>
							<p className="hidden md:block text-5xl">신입 / 경력 무관</p>
						</div>
						<p className="text-xs md:text-3xl font-light dt">
							갤럭시코퍼레이션 | 인턴쉽 | 2023. 06. 13. ~ 08. 29
						</p>
						<p className="block md:hidden text-lg mt-8">신입 / 경력 무관</p>
					</div>
				</JobHeader>
			</div>
			<Intro className="mb-36 pt-9 pr-9 md:p-0">
				<div className="wrapper block md:flex">
					<div className="basis-5/12">
						<img
							src={JobImg1}
							alt=""
							className="avtImg max-w-full hidden md:block"
						/>
					</div>
					<div className="basis-7/12 items-center flex pl-9 md:pl-0">
						<div className="textContainer ">
							<h3 className="text-lg md:text-3xl mb-5 md:mb-10">조직소개</h3>
							<p className="text-xs md:text-lg leading-6 md:leading-10 font-light m-0">
								브랜드디자인팀은 쏘카다운 비주얼이란 무엇인지 고민하고,
								<br />
								가장 효과적으로 나타낼 방법을 찾아 실행합니다.
								<br />
								쏘카 브랜드의 비주얼 기조를 제안하고, 다양한 비주얼 자산(asset)을
								디자인합니다.
								<br />
								서비스 브랜드, 오프라인 행사, 프로모션, 공간을 위한 아이덴티티 디자인
								<br />
								일러스트레이션, 패턴 등의 2D/3D 그래픽 작업
								<br />
								브랜드 및 서비스를 위한 사진 촬영 기획 및 디렉팅
							</p>
						</div>
					</div>
					<img
						src={JobImg1}
						alt=""
						className="block md:hidden avtImg2"
					/>
				</div>
			</Intro>
			<div className="container px-9 md:px-0">
				<div className="block md:flex md:flex-row mb-16 md:mb-24">
					<h4 className="text-lg md:text-3xl basis-4/12 mb-6 md:mb-0">
						팀 소개(문화)
					</h4>
					<ul className="basis-8/12 leading-7 md:leading-10 font-light text-xs md:text-lg">
						<li>고객 접점에 필요한 재료(material)를 디자인하고 구현합니다.</li>
						<li>
							브랜드 활동의 재료 : 쏘카존 사이니지 디자인, 굿즈, 패키지, 브랜드 리플렛,
							브랜드 웹페이지 등 마케팅과 세일즈 활동 재료 : 온/오프라인 광고, 프로모션
							및 이벤트 이미지, 서비스 소개서 등 브랜드 그 자체를 체험할 수 있는 경험을
							디자인합니다.
						</li>
					</ul>
				</div>
				<div className="block md:flex md:flex-row mb-16 md:mb-24">
					<h4 className="text-lg md:text-3xl basis-4/12 mb-6 md:mb-0">
						팀 소개(업무)
					</h4>
					<ul className="basis-8/12 leading-7 md:leading-10 font-light text-xs md:text-lg">
						<li>자유롭게 의견을 제시하고, 서로를 존중하는 수평적인 소통 문화</li>
						<li>개개인이 아닌 팀워크로 업무를 하고 성과를 달성하는 조직</li>
						<li>단체 활동을 통해 팀워크를 향상시킬 수 있도록 분기별 워크샵 운영</li>
						<li>회사에서 추진하는 프로젝트를 전 임직원이 공유하는 문화</li>
						<li>신나는 음악과 함께하는 즐거운 사무공간</li>
					</ul>
				</div>
				<div className="block md:flex md:flex-row mb-16 md:mb-24">
					<h4 className="text-lg md:text-3xl basis-4/12 mb-6 md:mb-0">업무 소개</h4>
					<ul className="basis-8/12 leading-7 md:leading-10 font-light text-xs md:text-lg">
						<li>담당하시게 될 업무를 소개합니다</li>
						<li>마케팅 성과에 도움이 되는 디자인 구현</li>
						<li>이벤트, 프로모션 관련 온라인 이미지 디자인</li>
						<li>대고객 커뮤니케이션 콘텐츠 디자인 (소셜미디어, 이메일 등)</li>
						<li>온라인 광고 이미지 디자인 (디스플레이 Ads, 온라인 배너 등)</li>
					</ul>
				</div>
				<div className="block md:flex md:flex-row mb-16 md:mb-24">
					<h4 className="text-lg md:text-3xl basis-4/12 mb-6 md:mb-0">지원자격</h4>
					<ul className="basis-8/12 leading-7 md:leading-10 font-light text-xs md:text-lg">
						<li>온라인 랜딩 페이지 제작</li>
						<li>쏘카의 브랜드 비주얼 개선 및 개발</li>
						<li>쏘카의 비주얼 자산 개발 (BI, 일러스트레이션, 사진 등)</li>
						<li>신규 서비스 및 캠페인, 브랜딩 프로젝트의 비주얼 아이덴티티 디자인</li>
						<li>브랜드/콘텐츠 웹페이지 기획 및 디자인</li>
					</ul>
				</div>
				<div className="block md:flex md:flex-row mb-16 md:mb-24">
					<h4 className="text-lg md:text-3xl basis-4/12 mb-6 md:mb-0">우대사항</h4>
					<ul className="basis-8/12 leading-7 md:leading-10 font-light text-xs md:text-lg">
						<li>온라인 랜딩 페이지 제작</li>
						<li>제휴사 제작 온라인 이미지 검수</li>
						<li>쏘카의 브랜드 비주얼 개선 및 개발</li>
					</ul>
				</div>
			</div>
			<SubIntro className="pt-20">
				<div className="container px-9 md:px-0">
					<h4 className="text-lg md:text-3xl">복리후생</h4>
					<h5 className="mb-10 mt-24">
						<img
							src={TitleJob}
							alt="life"
							className="title"
							style={{ width: isXs ? 66 : 'auto' }}
						/>
					</h5>
					<div className="flex flex-row items-start md:items-center mb-10 md:mb-1">
						<h4 className="text-xs md:text-lg basis-4/12">경조사지원</h4>
						<p className="basis-8/12 leading-4 md:leading-10 font-light text-xs md:text-lg">
							구성원들의 경조사에 축하와 조의를 담아 휴가와 비용, 용품을 지원합니다.
						</p>
					</div>
					<div className="flex flex-row items-center mb-10 md:mb-1">
						<h4 className="text-xs md:text-lg basis-4/12">기념일선물</h4>
						<p className="basis-8/12 leading-4 md:leading-10 font-light text-xs md:text-lg">
							기념일 마다 감사한 마음을 담아 선물을 제공합니다.
						</p>
					</div>
					<div className="flex flex-row items-center mb-10 md:mb-1">
						<h4 className="text-xs md:text-lg basis-4/12">가족사랑지원</h4>
						<p className="basis-8/12 leading-4 md:leading-10 font-light text-xs md:text-lg">
							엄마, 아빠가 되고싶은 구성원들에게 휴가와 비용을 지원합니다.
						</p>
					</div>
					<div className="flex flex-row items-center mb-10 md:mb-1">
						<h4 className="text-xs md:text-lg basis-4/12">문화생활지원</h4>
						<p className="basis-8/12 leading-4 md:leading-10 font-light text-xs md:text-lg">
							즐거운 문화생활을 위해 영화, 뮤지컬, 운동경기 등 단체 관람을 지원합니다.
						</p>
					</div>
					<h5 className="mb-10 mt-24">
						<img
							src={TitleWork}
							alt="life"
							className="title"
							style={{ width: isXs ? 87 : 'auto' }}
						/>
					</h5>
					<div className="flex flex-row items-start md:items-center mb-10 md:mb-1">
						<h4 className="text-xs md:text-lg basis-4/12">음료&스낵바</h4>
						<p className="basis-8/12 leading-4 md:leading-10 font-light text-xs md:text-lg">
							구성원들이 출출하지 않도록 스낵과 음료를 제공하고 있습니다.
						</p>
					</div>
					<div className="flex flex-row items-start md:items-center mb-10 md:mb-1">
						<h4 className="text-xs md:text-lg basis-4/12">근무 장비 지원</h4>
						<p className="basis-8/12 leading-4 md:leading-10 font-light text-xs md:text-lg">
							직무별 최적화된 장비와 소프트웨어를 제공하고 있습니다.
						</p>
					</div>
					<div className="flex flex-row items-start md:items-center mb-10 md:mb-1">
						<h4 className="text-xs md:text-lg basis-4/12">동호회</h4>
						<p className="basis-8/12 leading-4 md:leading-10 font-light text-xs md:text-lg">
							구성원들의 취미활동과 상호 친목도모를 위해 사내동호회를 운영하고
							있습니다.
						</p>
					</div>
					<h5 className="mb-10 mt-24">
						<img
							src={TitleHealth}
							alt="life"
							className="title"
							style={{ width: isXs ? 116 : 'auto' }}
						/>
					</h5>
					<div className="flex flex-row items-start md:items-center mb-10 md:mb-1">
						<h4 className="text-xs md:text-lg basis-4/12">단체상해보험</h4>
						<p className="basis-8/12 leading-4 md:leading-10 font-light text-xs md:text-lg">
							구성원들의 의료비 부담을 줄이고자, 보장성 보험료와 실손의료비를
							지원해드립니다.
						</p>
					</div>
					<div className="flex flex-row items-start md:items-center mb-10 md:mb-1">
						<h4 className="text-xs md:text-lg basis-4/12">종합건강검진</h4>
						<p className="basis-8/12 leading-4 md:leading-10 font-light text-xs md:text-lg">
							구성원의 건강을 위해 매년 1회 무료로 검사하고, 휴가도 제공합니다.
						</p>
					</div>
					<div className="flex flex-row items-start md:items-center mb-10 md:mb-1 pb-20 md:pb-0">
						<h4 className="text-xs md:text-lg basis-4/12">마인드케어</h4>
						<p className="basis-8/12 leading-4 md:leading-10 font-light text-xs md:text-lg">
							부정적인 마음 상태를 긍정적으로 회복할 수 있도록 전문 상담을 지원하고
							있습니다.
						</p>
					</div>
				</div>
			</SubIntro>
			<div className="container px-9 md:px-0">
				<h4 className="text-lg md:text-3xl mb-28">채용절차</h4>
				<div className="block md:flex md:flex-row mb-36">
					<div className="basis-1/2 md:px-32 mb-20 md:mb-0">
						<ArrowNum className="text-xl md:text-2xl">
							<span>01</span>
						</ArrowNum>
						<h5 className="text-lg md:text-2xl my-7 md:my-8">서류 심사</h5>
						<p className="text-sm md:text-lg font-light leading-7 md:leading-10">
							구성원들의 의료비 부담을 줄이고자, 보장성 보험료와 실손의료비를
							지원해드립니다. 구성원의 건강을 위해 매년 1회 무료로 검사하고, 휴가도
							제공합니다.
						</p>
					</div>
					<div className="basis-1/2 md:px-32 mb-20 md:mb-0">
						<ArrowNum className="text-xl md:ext-2xl">
							<span>02</span>
						</ArrowNum>
						<h5 className="text-lg md:text-2xl my-7 md:my-8">1차 면접</h5>
						<p className="text-sm md:text-lg font-light leading-7 md:leading-10">
							구성원들의 의료비 부담을 줄이고자, 보장성 보험료와 실손의료비를
							지원해드립니다. 구성원의 건강을 위해 매년 1회 무료로 검사하고, 휴가도
							제공합니다.
						</p>
					</div>
				</div>
				<div className="block md:flex md:flex-row mb-36">
					<div className="basis-1/2 md:px-32 mb-20 md:mb-0">
						<ArrowNum className="text-xl md:text-2xl">
							<span>03</span>
						</ArrowNum>
						<h5 className="text-lg md:text-2xl my-7 md:my-8">2차 면접</h5>
						<p className="text-sm md:text-lg font-light leading-7 md:leading-10">
							구성원들의 의료비 부담을 줄이고자, 보장성 보험료와 실손의료비를
							지원해드립니다. 구성원의 건강을 위해 매년 1회 무료로 검사하고, 휴가도
							제공합니다.
						</p>
					</div>
					<div className="basis-1/2 md:px-32 mb-20 md:mb-0">
						<ArrowNum className="text-xl md:text-2xl">
							<span>04</span>
						</ArrowNum>
						<h5 className="text-lg md:text-2xl my-7 md:my-8">최종 합격</h5>
						<p className="text-sm md:text-lg font-light leading-7 md:leading-10">
							구성원들의 의료비 부담을 줄이고자, 보장성 보험료와 실손의료비를
							지원해드립니다. 구성원의 건강을 위해 매년 1회 무료로 검사하고, 휴가도
							제공합니다.
						</p>
					</div>
				</div>
			</div>
			<div className="container flex justify-center mb-96">
				<Link to="/page/job/apply/1">
					<div className="linkButton">
						<div className="tp" />
						<div className="lt" />
						<div className="lb" />
						<span className="text-3xl kor">지원하기</span>
						<div className="rt" />
						<div className="rb" />
						<div className="bt" />
					</div>
				</Link>
			</div>
		</>
	)
}

export default JobView
