import { useState } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import Arr from '../../assets/image/common/dropdown_arr.svg'
import TempImg from '../../assets/image/news/temp2.png'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'

import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../../hooks/language'

import { useWindowSize } from '@react-hook/window-size'

const Banner = styled.div`
	height: 464px;
	background-color: rgba(255, 255, 255, 0.5);
`

const NewView = () => {
	const [activeTab, setActiveTab] = useState(0)
	const [activeDropdown, setActiveDropdown] = useState(false)
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
			<div className="container p-4 lg:p-0 mt-24 lg:mt-60">
				<h2 className="text-2xl lg:text-4xl eng text-center mt-0 md:mt-14 mb-10">
					GALAXY NEWS
				</h2>
				<p className="text-lg lg:text-4xl text-center mb-8 lg:mb-40">
					{t('news1')}
				</p>
				<ul className="tabBtns text-center flex items-center justify-center gap-5 lg:gap-10 mb-20 lg:mb-28">
					<li>
						<button
							type="button"
							className={
								activeTab === 0
									? 'active text-base md:text-3xl'
									: 'text-base md:text-3xl'
							}
							onClick={() => setActiveTab(0)}
						>
							보도자료
						</button>
					</li>
					{/* <li>
						<button
							type="button"
							className={
								activeTab === 1
									? 'active text-base md:text-3xl'
									: 'text-base md:text-3xl'
							}
							onClick={() => setActiveTab(1)}
						>
							소식
						</button>
					</li>
					<li>
						<button
							type="button"
							className={
								activeTab === 2
									? 'active text-base md:text-3xl'
									: 'text-base md:text-3xl'
							}
							onClick={() => setActiveTab(2)}
						>
							공지사항
						</button>
					</li>
					<li>
						<button
							type="button"
							className={
								activeTab === 3
									? 'active text-base md:text-3xl'
									: 'text-base md:text-3xl'
							}
							onClick={() => setActiveTab(3)}
						>
							IR
						</button>
					</li> */}
				</ul>
				<article className="relative boardView border-t-4">
					<header className="boardView__header text-center p-4 mb-14">
						<h2 className="text-sm md:text-3xl mb-4">{t('news13')}</h2>
						<p className="text-xs md:text-xl font-light flex justify-center gap-x-10">
							<span>{t('news14')}</span>
							<span>{t('news14_1')}</span>
						</p>
					</header>
					<section className="boardView__section pb-10 mb-5">
						<div className="flex justify-center">
							<img
								src={TempImg}
								alt=""
							/>
						</div>
						<p className="text-right text-base mt-5 font-light">{t('news15')}</p>
						<p
							className="text-left text-base font-light mt-32"
							dangerouslySetInnerHTML={{ __html: t('news16') }}
						></p>
					</section>
					<div className="boardView__footer md:flex justify-between items-center">
						<div className="w-full md:w-1/2 flex justify-center md:justify-start">
							<div className="flex text-center md:text-left">
								<Link
									to="/page/news"
									className="btnPrev border text-center mr-6"
								>
									이전
								</Link>
								<Link
									to="/page/news"
									className="btnNext border text-center"
								>
									다음
								</Link>
							</div>
						</div>
						<div className="w-full md:w-1/2 text-center md:text-right mt-10 md:mt-0">
							<Link
								to="/page/news"
								className="btnList text-sm md:text-xl py-3 px-12 md:py-1.5 md:px-9 border text-center"
							>
								목록
							</Link>
						</div>
					</div>
				</article>
			</div>
		</>
	)
}

export default NewView
