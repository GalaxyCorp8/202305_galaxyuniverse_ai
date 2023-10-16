import styled from 'styled-components'
import { ParallaxBanner } from 'react-scroll-parallax'
import SubVisualImage from '../../assets/image/WEB_image/x1/2_4tech/tech_1.jpg'
import SubVisualImageXs from '../../assets/image/MOBILE_image/x1/6_business-tech/business-tech_1.jpg'
import Img1 from '../../assets/image/WEB_image/x1/2_4tech/tech_2.jpg'
import Img1Xs from '../../assets/image/MOBILE_image/x1/6_business-tech/business-tech_2.jpg'
import Img2 from '../../assets/image/WEB_image/x1/2_4tech/tech_3.jpg'
import Img2Xs from '../../assets/image/MOBILE_image/x1/6_business-tech/business-tech_3.jpg'

import Txt1 from '../../assets/image/business/tech/txt1.svg'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'

import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../../hooks/language'

import { useWindowSize } from '@react-hook/window-size'

const MContainer = styled.div`
	position: relative;
	margin-top: 30px;
	height: 330px;
`

const Tech = () => {
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
				<ParallaxBanner
					layers={[
						{
							image: isXs ? SubVisualImageXs : SubVisualImage,
							speed: -5,
						},
					]}
					style={{ height: 680 }}
				/>
			</div>
			<div className="container px-7 lg:p-0">
				<h2 className="flex justify-center mt-14 mb-12 lg:mb-10 ">
					<img
						src={Txt1}
						alt=""
					/>
				</h2>
				<h3 className="text-lg lg:text-3xl text-center font-light lg:mb-36 mb-10">
					{t('tech1_1')}
				</h3>
				<div className="w-auto md:w-3/5 mx-auto">
					<p
						className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 break-keep"
						style={{ marginBottom: isXs ? 287 : 600 }}
					>
						{t('tech1_2')}
					</p>
				</div>
				<h2 className="text-2xl lg:text-6xl eng text-center mt-14 mb-1 lg:mb-10">
					Avatar <br className="block md:hidden" />
					Creation Tech
				</h2>
				<div className="w-auto md:w-3/5 mx-auto">
					<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 mb-5 lg:mb-16 break-keep">
						{t('tech1_3')}
					</p>
				</div>
			</div>
			<ParallaxBanner
				layers={[
					{
						image: isXs ? Img1Xs : Img1,
						speed: -5,
					},
				]}
				className="bg-gray-900"
				style={{ height: isXs ? '235px' : '300px' }}
			/>
			<div className="container px-7 lg:p-0">
				<div className="w-auto md:w-3/5 mx-auto">
					<p
						className="text-lg lg:text-xl text-center font-extralight leading-8 lg:leading-9 mt-5 lg:mt-14 break-keep"
						style={{ marginBottom: isXs ? 260 : 470 }}
					>
						{t('tech1_4')}
						<br />
						<br />
						{t('tech1_4_1')}
						<br />
						<br />
						{t('tech1_4_2')}
					</p>
				</div>
			</div>
			<h2 className="text-2xl lg:text-6xl eng text-center mb-1 lg:mb-10">
				Avatar Portal Platform
			</h2>
			<p className="text-lg lg:text-2xl text-center mb-8 lg:mb-16">
				One Avatar - Multi Platform(OAMP)
			</p>
			<ParallaxBanner
				layers={[
					{
						image: isXs ? Img2Xs : Img2,
						speed: -5,
					},
				]}
				style={{ height: isXs ? '235px' : '300px' }}
			/>
			<div className="container px-7 lg:p-0">
				<div className="w-auto md:w-3/5 mx-auto">
					<p className="text-lg lg:text-xl text-center font-extralight leading-8 lg:leading-9 mb-5 lg:mb-32 lg:mt-14 break-keep">
						{t('tech1_5')}
						<br />
						<br />
						{t('test1_5_1')}
						<br />
						<br />
						{t('test1_5_2')}
					</p>
				</div>
			</div>
		</>
	)
}

export default Tech
