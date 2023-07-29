import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'
import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../../hooks/language'
import { useWindowSize } from '@react-hook/window-size'
import { useNavigate } from 'react-router-dom'

const Sidebar = styled.aside`
	ul {
		li {
			button {
				background: rgba(255, 255, 255, 0.1);
				color: #bebebe;
				display: block;
				padding: 20px;
				border-radius: 100px;
				width: 100%;
				&.active {
					background: #fff;
					color: #000000;
				}
			}
		}
		@media (max-width: 767px) {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			li {
				margin-right: 10px;
				margin-bottom: 17px;
				width: 90px;
				button {
					font-size: 0.75rem;
					padding: 0;
					line-heught: 29px;
				}
			}
		}
	}
`

const JobList = styled.ul`
	li {
		position: relative;
		padding: 40px 50px;
		background: rgba(255, 255, 255, 0.1);
		transition: all 0.15s ease-in-out;
		border: 1px solid transparent;
		.dt {
			color: rgba(255, 255, 255, 0.4);
		}
		.type {
			color: #bebebe;
		}
		button {
			border: 0;
			outline: 0;
			padding: 0;
			margin: 0;
			width: 100%;
			text-align: left;
		}
		&:hover {
			border: 1px solid #fff;
			background: #000;
		}
		@media (max-width: 767px) {
			padding: 25px;
		}
	}
`

const Job = () => {
	const navigate = useNavigate()
	const language = useSelector(selectLanguage)
	const { t, i18n } = useTranslation()

	const [width, height] = useWindowSize({ fps: 60 })
	const [isXs, setIsXs] = useState(false)

	const [activeTabNumbrer, setActiveTabNumber] = useState(0)

	const movePage = () => {
		navigate(`/page/job/${1}`)
	}

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
			<div className="container">
				<h2 className="text-2xl md:text-6xl text-center mt-36 md:mt-80 mb-20 md:mb-44">
					<b>채용 공고</b>
				</h2>
				<div className="block lg:flex lg:flex-row px-6 lg:px-0">
					<div className="md:basis-1/4 mb-16">
						<Sidebar className="pr-0 lg:pr-28">
							<ul>
								<li className="mb-8">
									<button
										type="button"
										className={activeTabNumbrer === 0 ? 'active text-2xl' : 'text-2xl'}
										onClick={() => setActiveTabNumber(0)}
									>
										전체보기
									</button>
								</li>
								<li className="mb-8">
									<button
										type="button"
										className={activeTabNumbrer === 1 ? 'active text-2xl' : 'text-2xl'}
										onClick={() => setActiveTabNumber(1)}
									>
										경영 / 전략
									</button>
								</li>
								<li className="mb-8">
									<button
										type="button"
										className={activeTabNumbrer === 2 ? 'active text-2xl' : 'text-2xl'}
										onClick={() => setActiveTabNumber(2)}
									>
										개발 / 테크
									</button>
								</li>
								<li className="mb-8">
									<button
										type="button"
										className={activeTabNumbrer === 3 ? 'active text-2xl' : 'text-2xl'}
										onClick={() => setActiveTabNumber(3)}
									>
										디자인
									</button>
								</li>
								<li className="mb-8">
									<button
										type="button"
										className={activeTabNumbrer === 4 ? 'active text-2xl' : 'text-2xl'}
										onClick={() => setActiveTabNumber(4)}
									>
										커머스
									</button>
								</li>
							</ul>
						</Sidebar>
					</div>
					<div className="lg:basis-3/4 px-6 lg:px-0">
						<JobList className="mb-44">
							<li className="mb-16">
								<button
									type="button"
									onClick={() => movePage()}
								>
									<h3 className="text-2xl lg:text-5xl mb-4 lg:mb-5">
										마케팅/콘텐츠 디자이너
									</h3>
									<p className="text-sm lg:text-2xl dt font-light">
										갤럭시코퍼레이션 | 인턴쉽 | 2023. 06. 13. ~ 08. 29
									</p>
									<div className="flex flex-row justify-between mt-10 lg:mt-20">
										<p className="text-sm lg:text-3xl font-light type">
											신입 / 경력 무관
										</p>
										<p className="text-sm lg:text-3xl font-light">GX / 지식경영팀</p>
									</div>
								</button>
							</li>
						</JobList>
					</div>
				</div>
			</div>
		</>
	)
}

export default Job
