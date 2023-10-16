import Studio27Header from '../components/Studio27Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Container = styled.div`
	padding-top: 100px;
	@media (max-width: 767px) {
		padding-top: 60px;
	}
`

const Studeio27HeaderLayout = ({ children }) => {
	return (
		<div>
			<Studio27Header />
			<Container>{children}</Container>
			<Footer />
		</div>
	)
}

export default Studeio27HeaderLayout
