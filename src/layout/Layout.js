import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

const Layout = ({ children }) => {
	const [isScroll, setIsScroll] = useState(false)

	// if scroll height over 200 then setIsScroll true
	const handleScroll = () => {
		if (window.scrollY > 200) {
			setIsScroll(true)
		} else {
			setIsScroll(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<Header isScroll={isScroll} />
			{children}
			<Footer />
		</>
	)
}

export default Layout
