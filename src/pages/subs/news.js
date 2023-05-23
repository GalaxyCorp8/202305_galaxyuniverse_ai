import { useState } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import Arr from '../../assets/image/common/dropdown_arr.svg'
import TempImg from '../../assets/image/news/temp.png'
import Txt1 from '../../assets/image/news/txt1.svg'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'

import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../../hooks/language'

const Banner = styled.div`
	height: 464px;
	background-color: rgba(255, 255, 255, 0.5);
`

const GallItem = styled.li`
	background-color: rgba(255, 255, 255, 0.08);
	.img {
		position: relative;
		height: 200px;
		overflow: hidden;
		img {
			object-fit: cover;
			width: 850px;
			height: 300px;
		}
	}
`

const News = () => {
	const [activeTab, setActiveTab] = useState(0)
	const [activeDropdown, setActiveDropdown] = useState(false)
	const language = useSelector(selectLanguage)
	const { t, i18n } = useTranslation()

	useEffect(() => {
		setDefaultLanguage(language ? language : 'ko')
	}, [language])
	return (
		<>
			<div className="container p-4 lg:p-0 mt-24 md:mt-60">
				<h2 className="flex justify-center mt-0 md:mt-14 mb-10">
					<img
						src={Txt1}
						alt=""
					/>
				</h2>
				<p className="text-lg lg:text-4xl text-center mb-20 md:mb-40">
					{t('news1')}
				</p>
				<ul className="tabBtns text-center flex items-center justify-center gap-10 mb-9 md:mb-28">
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
							{t('news2')}
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
				<ul className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 xs:grid-col-2">
					<GallItem className="p-5">
						<div className="img mb-5">
							<img
								src={TempImg}
								alt=""
							/>
						</div>
						<div className="mb-4">
							<Link
								to="/page/news/1"
								className="text-base font-light"
							>
								{t('news3')}
							</Link>
						</div>
						<div className="flex items-center justify-between">
							<p className="text-base"></p>
							<p className="text-base font-extralight">2023.01.01</p>
						</div>
					</GallItem>
				</ul>
			</div>
		</>
	)
}

export default News
