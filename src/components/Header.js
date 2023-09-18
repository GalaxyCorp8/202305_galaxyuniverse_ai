import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoNormal from '../assets/image/common/logo_normal.svg'
import LogoInvert from '../assets/image/common/logo_invert.svg'
import MNavLogo from '../assets/image/common/m-nav-logo.svg'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../hooks/language'
import { setCurrentLanguage, getCurrentLanguage } from '../helpers/storage'

import { useTranslation } from 'react-i18next'

const Container = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 100;
	padding: 25px 35px;
	transition: background 0.3s ease-in-out;
	&.scrolled {
		background: rgba(0, 0, 0, 0.9);
		backdrop-filter: blur(5px);
	}
	.nav {
		li {
		}
	}
	.lang {
		li {
			display: inline-block;
			position: relative;
			&:nth-child(2) {
				margin-left: 10px;
				margin-right: 10px;
				&::before,
				&::after {
					position: absolute;
					top: 2px;
				}
				&::before {
					content: '/';
					left: -7px;
				}
				&::after {
					content: '/';
					right: -8px;
				}
			}
			button {
				fontsize: 15px;
				transition: all 0.3s ease-in-out;
				&:hover,
				&:focus {
					transform: scale(1.1);
				}
			}
		}
	}
	@media (max-width: 1023px) {
		padding: 15px;
		.logo {
			width: 26px;
		}
	}
`

const MobileMenu = styled.button`
	width: 20px;
	text-indent: -9999px;
	span {
		display: block;
		width: 100%;
		height: 2px;
		background: #fff;
		margin-bottom: 3px;
		&::last-child {
			margin-bottom: 0;
		}
	}
`

const MobileOverlay = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 100;
	background: rgba(0, 0, 0, 0.7);
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
	&.active {
		opacity: 1;
		visibility: visible;
		.overlay-inner {
			right: 0;
		}
	}

	.overlay-inner {
		overflow-y: scroll;

		position: absolute;
		top: 0;
		right: -260px;
		bottom: 0;
		width: 260px;
		background: #000;
		transition: right 0.3s ease-in-out;
		.overlay-button {
			position: absolute;
			top: 15px;
			right: 15px;
			width: 20px;
			text-indent: -9999px;
			span {
				display: block;
				width: 100%;
				height: 2px;
				background: #fff;
				margin-bottom: 3px;
				&::last-child {
					margin-bottom: 0;
				}
			}
		}
		.overlay-logo {
			position: absolute;
			top: 120px;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.nav-list {
		position: absolute;
		top: 250px;
		right: 0;
		width: 80%;
		border-top: 1px solid #fff;
		li {
			border-bottom: 1px solid #fff;
		}
	}

	.mobile-lang {
		position: absolute;
		top: 10px;
		right: 0;
		width: 90%;
		li {
			display: inline-block;
			position: relative;
			&:nth-child(2) {
				margin-left: 10px;
				margin-right: 10px;
				&::before,
				&::after {
					position: absolute;
					top: 2px;
				}
				&::before {
					content: '/';
					left: -7px;
				}
				&::after {
					content: '/';
					right: -8px;
				}
			}
			button {
				fontsize: 15px;
				transition: all 0.3s ease-in-out;
				&:hover,
				&:focus {
					transform: scale(1.1);
				}
			}
		}
	}
`

const Header = ({ isScroll }) => {
	const language = useSelector(selectLanguage)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { t, i18n } = useTranslation()

	const [overlay, setOverlay] = useState(false)

	// 언어 변경
	const handleLanguage = (lang) => {
		if (lang) {
			setCurrentLanguage(lang)
			dispatch(setLang(lang))
			// console.log(lang)
			i18n.changeLanguage(lang)
			handleOverlay()
		}
	}

	// 모바일 메뉴
	const handleOverlay = () => {
		setOverlay(!overlay)
		document.body.style.overflow = overlay ? 'auto' : 'hidden'
	}

	// 모바일 메뉴 클릭 처리
	const handleOverlayClick = (link) => {
		setOverlay(false)
		document.body.style.overflow = 'auto'
		navigate(link)
	}

	useEffect(() => {
		// 언어 설정
		// storage에 언어가 없으면 한국어로 설정
		const currentLanguate = getCurrentLanguage()
		if (!currentLanguate) {
			setCurrentLanguage('ko')
			dispatch(setLang('ko'))
		} else {
			dispatch(setLang(currentLanguate))
		}
	}, [])

	return (
		<>
			<Container
				className={
					isScroll
						? 'flex items-center justify-between eng scrolled'
						: 'flex items-center justify-between eng'
				}
				id="headerContainer"
			>
				<h1>
					<Link to="/">
						<img
							src={LogoNormal}
							alt="로고"
							className="logo"
						/>
					</Link>
				</h1>
				<MobileMenu
					type="button"
					className="block lg:hidden"
					onClick={handleOverlay}
				>
					<span></span>
					<span></span>
					<span></span>
				</MobileMenu>
				<ul className="container lg:flex items-center justify-center text-xl nav hidden">
					<li className="lg:mr-8">
						<Link to="/page/company">COMPANY</Link>
					</li>
					<li className="lg:ml-8 lg:mr-8">
						<Link to="/page/business">BUSINESS</Link>
					</li>
					<li className="lg:ml-8 lg:mr-8">
						<Link to="/page/career">CAREER</Link>
					</li>
					<li className="lg:ml-8 lg:mr-8">
						<Link to="/page/news">NEWS</Link>
					</li>
					<li className="lg:ml-8">
						<Link to="/page/investors">INVESTORS</Link>
					</li>
					<li className="lg:ml-8">
						<Link to="/page/contact">CONTACT</Link>
					</li>
				</ul>
				<ul className="lang hidden lg:block">
					<li>
						<button
							type="button"
							onClick={() => handleLanguage('ko')}
						>
							KO
						</button>
					</li>
					<li>
						<button
							type="button"
							onClick={() => handleLanguage('en')}
						>
							EN
						</button>
					</li>
					<li>
						<button
							type="button"
							onClick={() => handleLanguage('jp')}
						>
							JP
						</button>
					</li>
				</ul>
			</Container>
			<MobileOverlay className={overlay ? 'active' : ''}>
				<div className="overlay-inner">
					<button
						type="button"
						className="overlay-button"
						onClick={handleOverlay}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>

					<img
						src={MNavLogo}
						alt="GALAXY corp"
						className="overlay-logo"
					/>

					<ul className="nav-list eng text-xl">
						<li>
							<button
								type="button"
								className="pt-5 pb-8 block"
								onClick={() => handleOverlayClick('/page/company')}
							>
								COMPANY
							</button>
						</li>
						<li>
							<button
								type="button"
								className="pt-5 pb-8 block"
								onClick={() => handleOverlayClick('/page/business')}
							>
								BUSINESS
							</button>
						</li>
						<li>
							<button
								type="button"
								className="pt-5 pb-8 block"
								onClick={() => handleOverlayClick('/page/career')}
							>
								CAREER
							</button>
						</li>
						<li>
							<button
								type="button"
								className="pt-5 pb-8 block"
								onClick={() => handleOverlayClick('/page/news')}
							>
								NEWS
							</button>
						</li>
						<li>
							<button
								type="button"
								className="pt-5 pb-8 block"
								onClick={() => handleOverlayClick('/page/investors')}
							>
								INVESTORS
							</button>
						</li>
						<li>
							<button
								type="button"
								className="pt-5 pb-8 block"
								onClick={() => handleOverlayClick('/page/contact')}
							>
								CONTACT
							</button>
						</li>
					</ul>

					<ul className="mobile-lang eng text-xl lg:block">
						<li>
							<button
								type="button"
								onClick={() => handleLanguage('ko')}
							>
								KO
							</button>
						</li>
						<li>
							<button
								type="button"
								onClick={() => handleLanguage('en')}
							>
								EN
							</button>
						</li>
						<li>
							<button
								type="button"
								onClick={() => handleLanguage('jp')}
							>
								JP
							</button>
						</li>
					</ul>
				</div>
			</MobileOverlay>
		</>
	)
}

export default Header
