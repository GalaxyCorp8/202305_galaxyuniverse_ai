import styled from 'styled-components'
import { ParallaxBanner } from 'react-scroll-parallax'
import SubVisualImage from '../../assets/image/business/tech/bg.png'
import Img1 from '../../assets/image/business/tech/img1.png'
import Img2 from '../../assets/image/business/tech/img2.png'

import Txt1 from '../../assets/image/business/tech/txt1.svg'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'

import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../../hooks/language'

const MContainer = styled.div`
	position: relative;
	margin-top: 30px;
	height: 330px;
`

const Tech = () => {
	const language = useSelector(selectLanguage)
	const { t, i18n } = useTranslation()

	useEffect(() => {
		setDefaultLanguage(language ? language : 'ko')
	}, [language])
	return (
		<>
			<div className="sub-visual">
				<ParallaxBanner
					layers={[
						{
							image: SubVisualImage,
							speed: -5,
						},
					]}
					style={{ height: 680 }}
				/>
			</div>
			<div className="container p-4 lg:p-0">
				<h2 className="flex justify-center mt-14 mb-5">
					<img
						src={Txt1}
						alt=""
					/>
				</h2>
				<h3 className="lg:text-3xl text-center  font-bold lg:font-light mb-20">
					{t('tech1_1')}
				</h3>
				<div className="w-auto md:w-3/5 mx-auto">
					<p
						className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 break-keep"
						style={{ marginBottom: '600px' }}
					>
						{t('tech1_2')}
					</p>
				</div>
				<h2 className="text-2xl lg:text-5xl eng text-center mt-14 mb-5">
					Avatar Creation Tech
				</h2>
				<p className="text-lg lg:text-2xl text-center  font-bold lg:font-extralight lg:leading-9 mt-3 mb-20">
					{t('tech1_3')}
				</p>
			</div>
			<MContainer>
				<ParallaxBanner
					layers={[
						{
							image: Img1,
							speed: -5,
						},
					]}
					className="bg-gray-900"
					style={{ height: '330px' }}
				/>
			</MContainer>
			<div className="container p-4 lg:p-0">
				<div className="w-auto md:w-3/5 mx-auto">
					<p
						className="text-lg lg:text-xl text-center font-extralight lg:leading-9 mt-14 break-keep"
						style={{ marginBottom: '470px' }}
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
			<h2 className="text-2xl lg:text-5xl eng text-center eng mb-5">
				Avatar Portal Platform
			</h2>
			<p className="text-lg lg:text-2xl text-center mb-14">
				One Avatar - Multi Platform(OAMP)
			</p>
			<ParallaxBanner
				layers={[
					{
						image: Img2,
						speed: -5,
					},
				]}
				style={{ height: 330 }}
			/>
			<div className="container p-4 lg:p-0">
				<div className="w-auto md:w-3/5 mx-auto">
					<p className="text-lg lg:text-xl text-center font-extralight lg:leading-9 mt-16 break-keep">
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
