import styled from 'styled-components'
import { ParallaxBanner } from 'react-scroll-parallax'
import SubVisualImage from '../../assets/image/business/commerce/bg.png'
import Img1 from '../../assets/image/business/commerce/img1.png'
import Img2 from '../../assets/image/business/commerce/img2.png'

import Lg1 from '../../assets/image/business/commerce/lg1.png'
import Lg2 from '../../assets/image/business/commerce/lg2.png'
import Lg3 from '../../assets/image/business/commerce/lg3.png'
import Lg4 from '../../assets/image/business/commerce/lg4.png'
import Lg5 from '../../assets/image/business/commerce/lg5.png'
import Lg6 from '../../assets/image/business/commerce/lg6.png'
import Lg7 from '../../assets/image/business/commerce/lg7.png'
import Lg8 from '../../assets/image/business/commerce/lg8.png'
import Lg9 from '../../assets/image/business/commerce/lg9.png'
import Lg10 from '../../assets/image/business/commerce/lg10.png'
import Lg11 from '../../assets/image/business/commerce/lg11.png'
import Lg12 from '../../assets/image/business/commerce/lg12.png'
import Lg13 from '../../assets/image/business/commerce/lg13.png'
import Lg14 from '../../assets/image/business/commerce/lg14.png'
import Lg15 from '../../assets/image/business/commerce/lg15.png'
import Lg16 from '../../assets/image/business/commerce/lg16.png'

import Txt1 from '../../assets/image/business/commerce/txt1.svg'
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

const Commerce = () => {
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
				<h3 className="text-lg lg:text-3xl text-center font-bold lg:font-light mb-36">
					{t('cms1_1')}
				</h3>
				<div className="w-auto md:w-3/5 mx-auto">
					<p
						className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 break-keep"
						style={{ marginBottom: '600px' }}
					>
						{t('cms1_2')}
					</p>
				</div>
				<h2 className="text-2xl lg:text-5xl lg:leading-snug eng text-center mb-4">
					meta commerce
				</h2>

				<p className="text-lg lg:text-2xl text-center mt-3 mb-20">{t('cms1_3')}</p>
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
					<p className="text-lg text-center font-extralight lg:leading-9 mt-14 mb-80 break-keep">
						{t('cms1_4')}
					</p>
				</div>
			</div>
			<h2 className="text-2xl lg:text-5xl lg:leading-snug eng text-center mb-4">
				REAL COMMERCE
			</h2>
			<p className="text-lg lg:text-2xl text-center mb-20">{t('cms1_5')}</p>
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
					<p className="text-lg text-center font-extralight lg:leading-9 mt-16 break-keep">
						{t('cms1_6')}
					</p>
				</div>
			</div>
			<div className="container mb-10 mt-52">
				<h3 className="text-3xl mb-2">{t('cms1_7')}</h3>
				<div className="flex flex-row flex-wrap">
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg1}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg2}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg3}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg4}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg5}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg6}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg7}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg8}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg9}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg10}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg11}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg12}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg13}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg14}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg15}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: 200 }}
						>
							<img
								src={Lg16}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Commerce
