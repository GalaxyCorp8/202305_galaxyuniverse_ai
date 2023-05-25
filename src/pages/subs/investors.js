import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ParallaxBanner } from 'react-scroll-parallax'
import styled from 'styled-components'
import Bg from '../../assets/image/WEB_image/x1/4_investors/INVESTORS_1.jpg'
import BgXs from '../../assets/image/MOBILE_image/x1/8_investor/investor.jpg'
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

const Investors = () => {
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
			<div className="sub-visual">
				{/* <ParallaxBanner
					layers={[background, headline, foreground, gradientOverlay]}
					className="aspect-[2/1] bg-gray-900"
				/> */}
				<ParallaxBanner
					layers={[
						{
							image: isXs ? BgXs : Bg,
							speed: -5,
						},
					]}
					style={{ height: 680 }}
				/>
			</div>
			<div className="container p-4 lg:p-0 mt-0 lg:mt-56">
				<h2 className="text-2xl lg:text-5xl eng text-center mt-14 mb-5 tracking-tighter lg:leading-tight">
					metaverse company leaping
					<br />
					into the world
				</h2>
				<p className="text-lg lg:text-4xl text-center mb-8 lg:mb-40">
					{t('invest1')}
				</p>
				<h2 className="text-2xl lg:text-4xl eng text-center mt-0 md:mt-14 mb-10">
					INVESTORS
				</h2>
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
							IR
						</button>
					</li>
					<li>
						<button
							type="button"
							className={
								activeTab === 1
									? 'active text-base md:text-3xl'
									: 'text-base md:text-3xl'
							}
							onClick={() => setActiveTab(1)}
						>
							{t('invest2')}
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
							{t('invest3')}
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
							{t('invest4')}
						</button>
					</li>
					<li>
						<button
							type="button"
							className={
								activeTab === 4
									? 'active text-base md:text-3xl'
									: 'text-base md:text-3xl'
							}
							onClick={() => setActiveTab(4)}
						>
							{t('invest5')}
						</button>
					</li>
				</ul>
				<table className="table table-auto w-full mb-9 border-t-2">
					<colgroup>
						<col />
						<col className="w-44" />
					</colgroup>
					<tbody>
						<tr className="">
							<td className="p-5 text-base">
								<Link
									to="/page/investors/1"
									className="text-base"
								>
									{t('invest6')}
								</Link>
								<p className="text-xs">2022.01.01</p>
							</td>
							<td className="text-right p-5 text-base">Galaxy Corp</td>
						</tr>
					</tbody>
				</table>
				<ol className="paging flex items-center justify-center gap-3.5 text-lg">
					<li>
						<button
							type="button"
							className="active"
						>
							1
						</button>
					</li>
					<li>
						<button type="button">2</button>
					</li>
					<li>
						<button type="button">3</button>
					</li>
				</ol>
			</div>
		</>
	)
}

export default Investors
