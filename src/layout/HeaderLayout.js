import Header from '../components/Header'

const HeaderLayout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default HeaderLayout
