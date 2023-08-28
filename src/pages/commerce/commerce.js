import styled from 'styled-components'
import { ParallaxBanner } from 'react-scroll-parallax'
import SubVisualImage from '../../assets/image/WEB_image/x1/2_2commerce/commerce_1_1.png'
import SubVisualImageXs from '../../assets/image/MOBILE_image/x1/5_business_commerce/business-commerce_1_1.png'
import Img1 from '../../assets/image/WEB_image/x1/2_2commerce/commerce_2.jpg'
import Img1Xs from '../../assets/image/MOBILE_image/x1/5_business_commerce/business-commerce_2.jpg'
import Img2 from '../../assets/image/WEB_image/x1/2_2commerce/commerce_3.png'
import Img2Xs from '../../assets/image/MOBILE_image/x1/5_business_commerce/business-commerce_3.png'

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
import Txt1Xs from '../../assets/image/MOBILE_image/x1/5_business_commerce/txt1xs.svg'

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

const Commerce = () => {
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
			<div className="container p-4 lg:p-0">
				<h2 className="flex justify-center mt-14 mb-12 lg:mb-10 ">
					<img
						src={isXs ? Txt1Xs : Txt1}
						alt=""
					/>
				</h2>
				<h3 className="text-lg lg:text-3xl text-center font-light lg:mb-36 mb-10">
					{t('cms1_1')}
				</h3>
				<div className="w-auto md:w-3/5 mx-auto">
					<p
						className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 break-keep"
						style={{ marginBottom: isXs ? 300 : 600 }}
					>
						{t('cms1_2')}
					</p>
				</div>
				<h2 className="text-3xl lg:text-6xl eng text-center mt-14 mb-1 lg:mb-10">
					meta commerce
				</h2>

				<div className="w-auto md:w-3/5 mx-auto">
					<p className="text-lg lg:text-2xl text-center font-extralight lg:leading-9 mb-5 lg:mb-32 break-keep">
						{t('cms1_3')}
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
			<div className="container p-4 lg:p-0">
				<div className="w-auto md:w-3/5 mx-auto">
					<p className="text-lg text-center font-extralight leading-8 lg:leading-9 mt-5 lg:mt-14 mb-80 break-keep">
						{t('cms1_4')}
					</p>
				</div>
			</div>
			<h2 className="text-3xl lg:text-5xl lg:leading-snug eng text-center mb-1 lg:mb-4">
				REAL COMMERCE
			</h2>
			<p className="text-lg lg:text-2xl text-center mb-5 lg:mb-20">
				{t('cms1_5')}
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
			<div className="container p-4 lg:p-0">
				<div className="w-auto md:w-3/5 mx-auto">
					<p className="text-lg text-center font-extralight leading-8 lg:leading-9 mt-5 lg:mt-14 mb-60 lg:mb-80 break-keep">
						{t('cms1_6')}
					</p>
				</div>
			</div>
			<div className="container mb-10 lg:mt-52">
				<h3 className="text-lg lg:text-3xl lg:mb-2 text-center lg:text-left">
					{t('cms1_7')}
				</h3>
				<div className="flex flex-row flex-wrap">
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
						>
							<img
								src={Lg1}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
						>
							<img
								src={Lg2}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
						>
							<img
								src={Lg3}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
						>
							<img
								src={Lg4}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
						>
							<img
								src={Lg5}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
						>
							<img
								src={Lg6}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
						>
							<img
								src={Lg7}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
						>
							<img
								src={Lg8}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
						>
							<img
								src={Lg9}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
						>
							<img
								src={Lg10}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
						>
							<img
								src={Lg11}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
						>
							<img
								src={Lg12}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
						>
							<img
								src={Lg13}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
						>
							<img
								src={Lg14}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
						>
							<img
								src={Lg15}
								alt=""
							/>
						</div>
					</div>
					<div className="basis-1/3 px-6 md:p-2">
						<div
							className="flex justify-center items-center"
							style={{ height: isXs ? 100 : 200 }}
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
