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

import StepKo from '../../assets/image/WEB_image/x1/3_career/CAREER_2_kr.png'
import StepJp from '../../assets/image/WEB_image/x1/3_career/CAREER_2_jp.png'
import StepEn from '../../assets/image/WEB_image/x1/3_career/CAREER_2_eng.png'

import StepKoXs from '../../assets/image/MOBILE_image/x1/7_career/career_kr.png'
import StepJpXs from '../../assets/image/MOBILE_image/x1/7_career/career_jp.png'
import StepEnXs from '../../assets/image/MOBILE_image/x1/7_career/career_eng.png'

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
			<div className="container p-4 lg:p-0">
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
			</div>
			<div className="p-6 lg:p-0">
				<div
					className="container p-4 lg:p-0 mb-16"
					style={{ borderTop: '1px solid #fff' }}
				>
					<h3 className="text-base md:text-3xl mt-0 md:mt-5 mb-16 font-bold">
						{t('care1_2')}
					</h3>
					<Injesang className="">
						<h4>
							<span className="dot"></span>
							{t('care1_3')}
						</h4>
						<p className="text-lg font-light">{t('care1_4')}</p>
					</Injesang>
					<Injesang className="slash">
						<h4>
							<span className="dot"></span>
							{t('care1_5')}
						</h4>
						<p className="text-lg font-light">{t('care1_6')}</p>
					</Injesang>
					<Injesang className="">
						<h4>
							<span className="dot"></span>
							{t('care1_7')}
						</h4>
						<p className="text-lg font-light">{t('care1_8')}</p>
					</Injesang>
					<div className="clear-both"></div>
				</div>
				<div
					className="container p-4 lg:p-0 mt-16"
					style={{ borderTop: '1px solid #fff' }}
				>
					<div className="block md:flex">
						<h3 className="text-base md:text-3xl mt-0 md:mt-5 md:w-2/5 w-full font-bold">
							{t('care1_9')}
						</h3>
						<ul className="md:w-3/5 mt-6 md:mt-12 list-disc w-full pl-6 md:pl-0">
							<li className="text-base md:text-lg font-light mb-7 md:mb-3">
								{t('care1_10')}
							</li>
							<li className="text-base md:text-lg font-light mb-7 md:mb-3">
								{t('care1_10_1')}
							</li>
							<li className="text-base md:text-lg font-light mb-7 md:mb-3">
								{t('care1_10_2')}
							</li>
							<li className="text-base md:text-lg font-light mb-7 md:mb-3">
								{t('care1_10_3')}
							</li>
							<li className="text-base md:text-lg font-light">{t('care1_10_4')}</li>
						</ul>
					</div>
				</div>
				<div
					className="container p-4 lg:p-0 mt-16 hidden md:block"
					style={{ borderTop: '1px solid #fff' }}
				>
					<h3 className="text-3xl mt-5 mb-16">{t('care1_11')}</h3>
					<div className="flex mb-20">
						<h4 className="text-4xl w-1/4 font-thin eng">LIFE</h4>
						<div className="w-3/4">
							<table className="table-auto text-lg font-light">
								<colgroup>
									<col style={{ width: 200 }} />
									<col />
								</colgroup>
								<tbody>
									<tr>
										<td className="p-2">
											<b className="font-bold">{t('care1_12')}</b>
										</td>
										<td className="p-2">{t('care1_13')}</td>
									</tr>
									<tr>
										<td className="p-2">
											<b className="font-bold">{t('care1_14')}</b>
										</td>
										<td className="p-2">{t('care1_15')}</td>
									</tr>
									<tr>
										<td className="p-2">
											<b className="font-bold">{t('care1_16')}</b>
										</td>
										<td className="p-2">{t('care1_17')}</td>
									</tr>
									<tr>
										<td className="p-2">
											<b className="font-bold">{t('care1_18')}</b>
										</td>
										<td className="p-2">{t('care1_19')}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div className="flex relative">
						<h4
							className="text-4xl w-1/4 font-thin eng"
							style={{ transform: 'translateY(-20px)' }}
						>
							WORK
						</h4>
						<div
							className="w-3/4  border-white"
							style={{ borderTop: '1px solid #fff' }}
						>
							<table className="table-auto text-lg font-light my-20">
								<colgroup>
									<col style={{ width: 200 }} />
									<col />
								</colgroup>
								<tbody>
									<tr>
										<td className="p-2">
											<b className="font-bold">{t('care1_20')}</b>
										</td>
										<td className="p-2">{t('care1_21')}</td>
									</tr>
									<tr>
										<td className="p-2">
											<b className="font-bold">{t('care1_22')}</b>
										</td>
										<td className="p-2">{t('care1_23')}</td>
									</tr>
									<tr>
										<td className="p-2">
											<b className="font-bold">{t('care1_24')}</b>
										</td>
										<td className="p-2">{t('care1_25')}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="flex relative">
						<h4
							className="text-4xl w-1/4 font-thin eng"
							style={{ transform: 'translateY(-20px)' }}
						>
							HEALTH
						</h4>
						<div
							className="w-3/4 border-white"
							style={{ borderTop: '1px solid #fff' }}
						>
							<table className="table-auto text-lg font-light my-20">
								<colgroup>
									<col style={{ width: 200 }} />
									<col />
								</colgroup>
								<tbody>
									<tr>
										<td className="p-2">
											<b className="font-bold">{t('care1_26')}</b>
										</td>
										<td className="p-2">{t('care1_27')}</td>
									</tr>
									<tr>
										<td className="p-2">
											<b className="font-bold">{t('care1_28')}</b>
										</td>
										<td className="p-2">{t('care1_29')}</td>
									</tr>
									<tr>
										<td className="p-2">
											<b className="font-bold">{t('care1_30')}</b>
										</td>
										<td className="p-2">{t('care1_31')}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div
					className="container p-4 lg:p-0 mt-16 block md:hidden"
					style={{ borderTop: '1px solid #fff' }}
				>
					<h3 className="text-base font-bold">{t('care1_11')}</h3>
					<h4 className="text-3xl eng my-16">LIFE</h4>
					<h3 className="text-base font-bold">{t('care1_12')}</h3>
					<p className="text-base font-light mb-16">{t('care1_13')}</p>
					<h3 className="text-base font-bold">{t('care1_14')}</h3>
					<p className="text-base font-light mb-16">{t('care1_15')}</p>
					<h3 className="text-base font-bold">{t('care1_16')}</h3>
					<p className="text-base font-light mb-16">{t('care1_17')}</p>
					<h3 className="text-base font-bold">{t('care1_18')}</h3>
					<p className="text-base font-light mb-48">{t('care1_19')}</p>

					<h4 className="text-3xl eng my-16">WORK</h4>
					<h3 className="text-base font-bold">{t('care1_20')}</h3>
					<p className="text-base font-light mb-16">{t('care1_21')}</p>
					<h3 className="text-base font-bold">{t('care1_22')}</h3>
					<p className="text-base font-light mb-16">{t('care1_23')}</p>
					<h3 className="text-base font-bold">{t('care1_24')}</h3>
					<p className="text-base font-light mb-48">{t('care1_25')}</p>

					<h4 className="text-3xl eng my-16">HEALTH</h4>
					<h3 className="text-base font-bold">{t('care1_26')}</h3>
					<p className="text-base font-light mb-16">{t('care1_27')}</p>
					<h3 className="text-base font-bold">{t('care1_28')}</h3>
					<p className="text-base font-light mb-16">{t('care1_29')}</p>
					<h3 className="text-base font-bold">{t('care1_30')}</h3>
					<p className="text-base font-light mb-48">{t('care1_31')}</p>
				</div>
				<div
					className="container p-4 lg:p-0"
					style={{ borderTop: '1px solid #fff' }}
				>
					<h3 className="text-base font-bold md:text-3xl mt-0 md:mt-5 mb-16">
						{t('care1_32')}
					</h3>
					{i18n.language === 'jp' ? (
						<>
							<img
								src={StepJp}
								alt="채용절차"
								className="hidden md:block lg:block"
							/>
							<div className="md:hidden lg:hidden flex justify-center">
								<img
									src={StepJpXs}
									alt="채용절차"
								/>
							</div>
						</>
					) : i18n.language === 'en' ? (
						<>
							<img
								src={StepEn}
								alt="채용절차"
								className="hidden md:block lg:block"
							/>
							<div className="md:hidden lg:hidden flex justify-center">
								<img
									src={StepEnXs}
									alt="채용절차"
								/>
							</div>
						</>
					) : (
						<>
							<img
								src={StepKo}
								alt="채용절차"
								className="hidden md:block lg:block"
							/>
							<div className="md:hidden lg:hidden flex justify-center">
								<img
									src={StepKoXs}
									alt="채용절차"
								/>
							</div>
						</>
					)}
				</div>
				{/* <div className="container p-4 lg:p-0 flex justify-center align-center mb-96 mt-32">
					<Link to="/">
						{i18n.language === 'jp' ? (
							<>
								<img
									src={BtnJp}
									alt="지원하기"
									className="hidden md:block lg:block"
								/>
								<img
									src={BtnJp}
									alt="지원하기"
									className="block md:hidden lg:hidden"
								/>
							</>
						) : i18n.language === 'en' ? (
							<>
								<img
									src={BtnEn}
									alt="지원하기"
									className="hidden md:block lg:block"
								/>
								<img
									src={BtnEn}
									alt="지원하기"
									className="block md:hidden lg:hidden"
								/>
							</>
						) : (
							<>
								<img
									src={BtnKo}
									alt="지원하기"
									className="hidden md:block lg:block"
								/>
								<img
									src={BtnKo}
									alt="지원하기"
									className="block md:hidden lg:hidden"
								/>
							</>
						)}
					</Link>
				</div> */}
			</div>
		</>
	)
}

export default Career
