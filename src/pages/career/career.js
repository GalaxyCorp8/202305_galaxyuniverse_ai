import Box from '../../assets/image/career/box.png'
import BtnInq from '../../assets/image/career/btn_inq.svg'
import BtnInqM from '../../assets/image/career/btn_inq_m.svg'
import Dot from '../../assets/image/career/dot.svg'
import Slash from '../../assets/image/career/slash.svg'
import Step from '../../assets/image/career/step.svg'
import StepM from '../../assets/image/career/step_m.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'

import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../../hooks/language'

import Tmp1 from '../../assets/image/WEB_image/x1/3_career/career_tmp1.png'
import Tmp2 from '../../assets/image/WEB_image/x1/3_career/career_tmp2.png'
import Tmp3 from '../../assets/image/WEB_image/x1/3_career/career_tmp3.png'

import StepKoXs from '../../assets/image/MOBILE_image/x1/7_career/career_kr.png'
import StepJpXs from '../../assets/image/MOBILE_image/x1/7_career/career_jp.png'
import StepEnXs from '../../assets/image/MOBILE_image/x1/7_career/career_eng.png'

import C1 from '../../assets/image/WEB_image/x1/3_career/c1.png'
import C2 from '../../assets/image/WEB_image/x1/3_career/c2.png'
import C3 from '../../assets/image/WEB_image/x1/3_career/c3.png'
import BoxImg from '../../assets/image/WEB_image/x1/3_career/box.png'

import BtnKo from '../../assets/image/career/btn-ko.png'
import BtnJp from '../../assets/image/career/btn-jp.png'
import BtnEn from '../../assets/image/career/btn-en.png'

import { useWindowSize } from '@react-hook/window-size'

const Injesang = styled.div`
	position: relative;
    width: 33.333%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    float: left;
	padding-left: 20px;
	padding-right: 10px;
	flex-wrap: wrap;
    @media (max-width: 767px) {
        float: none;
        width: 100% !important;
        justify-content: flex-start;
        padding-left: 3rem;
		margin-bottom: 45px;
        // &.slash {
        //     &::before,
        //     &::after {
        //         display: none;
        //     }
        // }
    }
	h4 {
        position: relative;
		font-size: 2.9rem;
		line-height: 1;
		width: 135px;
		margin-bottom: 1.5rem;
        .dot {
            position: absolute;
            top: -20px;
            left: 0;
            width: 13px;
            height: 15px;
            background: url(${Dot}) no-repeat;
            @media (max-width: 767px) {
                width: 8px;
                height: 10px;
				top: -5px;
				left: -10px;
                background-size: 8px 10px;
            }
        }
        @media (max-width: 767px) {
            font-size: 2.4rem;
            font-weight: 300;
        }
	}
	p {
        // padding-left: 25px;
		// border: 1px solid red;
        @media (max-width: 767px) {
            font-size: 1rem;
            line-height: 1.2;
        }
	}
	}
	// &.slash {
    //     &::before {
    //         content: '';
    //         position: absolute;
    //         top: 0;
    //         left: -36px;
    //         width: 36px;
    //         height: 58px;
    //         background: url(${Slash}) no-repeat;
    //     }
    //     &::after {
    //         content: '';
    //         position: absolute;
    //         top: 0;
    //         right: -36px;
    //         width: 36px;
    //         height: 58px;
    //         background: url(${Slash}) no-repeat;
    //     }
    //     @media (max-width: 767px) {
    //         margin-top: 2.25rem;
    //         margin-bottom: 2.25rem;
    //     }
	// }
`

const Career = () => {
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
			<div className="container px-7 lg:p-0">
				<img
					src={Box}
					alt=""
					className="mt-20 block md:hidden lg:hidden"
				/>
				<h2 className="text-2xl lg:text-5xl eng text-center mt-20 lg:mt-80 mb-10 lg:mb-9">
					Galaxy
					<br />
					growing together
				</h2>
				<p className="text-lg lg:text-4xl text-center font-bold lg:font-light mb-10 lg:mb-40">
					{t('care1_1')}
				</p>
				<img
					src={Box}
					alt=""
					className="mt-20 hidden md:block lg:block"
				/>
				<h3 className="text-xl md:text-5xl mt-28 md:mt-40 font-medium pb-6 md:pb-12 border-b-2 border-slate-700 md:border-white">
					갤럭시 DNA
				</h3>
				<div className="column-1 md:columns-2 border-b-2 border-white">
					<div className="w-full">
						<h4 className="text-3xl md:text-6xl font-light mt-14 md:pt-20">탐험</h4>
						<p
							className="mt-7 md:mt-16"
							style={{ fontSize: isXs ? 22 : 41, lineHeight: isXs ? 1.5 : 1.3 }}
						>
							열정과 호기심으로
						</p>
						<p
							className=""
							style={{ fontSize: isXs ? 22 : 41, lineHeight: isXs ? 1.5 : 1.3 }}
						>
							무한 세상을 탐험하는 인재
						</p>
						<p className="md:text-2xl font-light leading-7 md:leading-9 mt-5 md:mt-16 pb-20">
							우리는 탐험을 통한 성장을 추구합니다.
							<br className="hidden md:block" />
							독특한 사고와 창의력을 발휘하여 무한한
							<br className="hidden md:block" />
							아이디어를 실행하고 도전합니다.
							<br className="hidden md:block" />
							실패를 두려워하지 않고 끊임없는
							<br className="hidden md:block" />
							탐험을 통해 더 나은 결과와 성과를
							<br className="hidden md:block" />
							이끌어냅니다.
						</p>
					</div>
					<div className="w-full">
						<img
							src={Tmp1}
							alt=""
						/>
					</div>
				</div>
				<div className="column-1 md:columns-2 border-b-2 border-white">
					<div className="w-full">
						<h4 className="text-3xl md:text-6xl font-light mt-14 md:pt-20">실행</h4>
						<p
							className="mt-7 md:mt-16"
							style={{ fontSize: isXs ? 22 : 41, lineHeight: isXs ? 1.5 : 1.3 }}
						>
							불가능을 창의적
						</p>
						<p
							className=""
							style={{ fontSize: isXs ? 22 : 41, lineHeight: isXs ? 1.5 : 1.3 }}
						>
							도전으로 실행하는 인재
						</p>
						<p className="md:text-2xl font-light leading-7 md:leading-9 mt-5 md:mt-16 pb-20">
							우리는 끊임없는 실행으로 가치를 증명합니다.
							<br className="hidden md:block" />
							스스로 몰입하고 주도적으로 일하며,
							<br className="hidden md:block" />
							일의 원동력을 자체적으로 만들어냅니다.
							<br className="hidden md:block" />
							일에 끌려다니지 않고 주도적으로 움직여
							<br className="hidden md:block" />
							실행하고 나아갑니다.
						</p>
					</div>
					<div className="w-full">
						<img
							src={Tmp2}
							alt=""
						/>
					</div>
				</div>
				<div className="column-1 md:columns-2 border-b-2 border-slate-700 md:border-white">
					<div className="w-full">
						<h4 className="text-3xl md:text-6xl font-light mt-14 md:pt-20">행복</h4>
						<p
							className="mt-7 md:mt-16"
							style={{ fontSize: isXs ? 22 : 41, lineHeight: isXs ? 1.5 : 1.3 }}
						>
							선한 마음으로 세상을
						</p>
						<p
							className=""
							style={{ fontSize: isXs ? 22 : 41, lineHeight: isXs ? 1.5 : 1.3 }}
						>
							행복하게 지어가는 인재
						</p>
						<p className="md:text-2xl font-light leading-7 md:leading-9 mt-5 md:mt-16 pb-20">
							우리는 더 나은 행복을 위해 노력합니다.
							<br className="hidden md:block" />
							자신의 일에 열정을 가지고 즐거움을 느끼며,
							<br className="hidden md:block" />
							긍정적인 시각으로 더 나은 변화를 추구합니다.
							<br className="hidden md:block" />
							오늘보다 더 행복한 나와 세상을 만들어갑니다.
						</p>
					</div>
					<div className="w-full">
						<img
							src={Tmp3}
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="container flex justify-center mb-96 mt-24 md:mt-40">
				<Link to="/page/job">
					<div className="linkButton">
						<div className="tp" />
						<div className="lt" />
						<div className="lb" />
						<span className="text-3xl kor">채용공고 보러가기</span>
						<div className="rt" />
						<div className="rb" />
						<div className="bt" />
					</div>
				</Link>
			</div>
		</>
	)
}

export default Career
