import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ParallaxBanner } from 'react-scroll-parallax'
import Pysical1 from '../../assets/image/WEB_image/x1/studio27/pys1.png'

import Img1 from '../../assets/image/WEB_image/x1/studio27/phy1.png'
import Img2 from '../../assets/image/WEB_image/x1/studio27/phy2.png'
import Img3 from '../../assets/image/WEB_image/x1/studio27/phy3.png'
import Img4 from '../../assets/image/WEB_image/x1/studio27/phy4.png'
import Img5 from '../../assets/image/WEB_image/x1/studio27/phy5.png'
import Img6 from '../../assets/image/WEB_image/x1/studio27/phy6.png'
import Img7 from '../../assets/image/WEB_image/x1/studio27/phy7.png'

import { useTranslation } from 'react-i18next'
import { useEffect, useState, useRef } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'

import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../../hooks/language'

import { useWindowSize } from '@react-hook/window-size'

const BarText = styled.div`
	position: relative;
	h2 {
		position: relative;
		padding-left: 120px;
		width: 50%;
		.dummy {
			display: block;
			height: 50px;
			background: rgba(255, 255, 255, 0.5);
			position: absolute;
			top: 0;
			right: 0;
		}
	}
	&:after {
		position: absolute;
		bottom: -5px;
		width: 50%;
		content: '';
		display: block;
		border-bottom: 1px solid #ff0000;
	}
	@media (max-width: 767px) {
		h2 {
			padding-left: 0;
		}
		&:after {
			width: 50%;
		}
	}
	@media (min-width: 768px) and (max-width: 1199px) {
		&:after {
			width: 50%;
		}
	}
`

const Images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7]

const Pysical100 = () => {
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
			<div className="sub-visual2 mb-12 lg:mb-36">
				<ParallaxBanner
					layers={[
						{
							image: isXs ? Pysical1 : Pysical1,
							speed: -5,
						},
					]}
					style={{ height: 680 }}
				/>
			</div>
			<div className="container">
				{Images.map((item, index) => (
					<img
						src={item}
						alt=""
						key={index}
						className={Images.length - 1 === index ? 'mb-32 mx-auto' : 'mb-7 mx-auto'}
					/>
				))}
			</div>
		</>
	)
}

export default Pysical100
