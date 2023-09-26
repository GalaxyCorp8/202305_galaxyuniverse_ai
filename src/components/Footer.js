import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FooterLogo from '../assets/image/common/footer-logo.svg'
import FooterYoutube from '../assets/image/common/footerYoutube.svg'
import FooterBlog from '../assets/image/common/footerBlog.svg'

const Container = styled.footer`
	position: relative;
	border-top: 1px solid #fff;
`
const PrivacyList = styled.ul`
  li {
    position: relative;
    &:first-of-type {
      margin-right: 40px;
      &::after {
        // position: absolute;
        // top: 50%;
        // right: -20px;
        // transform: translateY(-50%);
        // content: '';
        // display: block;
        // width: 1px;
        // height: 13px;
        // background-color: #fff;
        // opacity: 0.2;
      }
	  @media (max-width: 919px) {
		margin-bottom: 0.5rem !important;
	  }
  }
`

const OutlinkList = styled.ul``

const MiscContainer = styled.div`
	@media (max-width: 919px) {
		position: absolute;
		left: 0;
		top: 1rem;
		right: 0;
	}
`

const FooterInfo = styled.div`
	@media (max-width: 919px) {
		position: relative;
		margin-top: 90px;
	}
`

const Footer = () => {
	return (
		<div className="container px-7 py-4 lg:px-0">
			<Container className="container text-center flex justify-between align-top md:text-left mb-20 pt-4">
				<FooterInfo>
					<img
						src={FooterLogo}
						className="footer-logo mb-3"
						alt="GALAXY CORP."
					/>
					<p
						className="text-xs font-extralight"
						style={{ fontSize: 10 }}
					>
						2023 GALAXY corporation. CO., LTD. All rights reserved.
					</p>
				</FooterInfo>
				<MiscContainer className="flex justify-between md:justify-normal">
					<PrivacyList className="text-sm lg:flex md:mr-20 text-left">
						<li>
							<Link
								to="/"
								className="font-extralight"
							>
								개인정보처리방침
							</Link>
						</li>
						<li>
							<Link
								to="/"
								className="font-extralight"
							>
								문의하기
							</Link>
						</li>
					</PrivacyList>
					<OutlinkList className="flex">
						<li className="mr-6">
							<a
								href="https://www.youtube.com"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={FooterYoutube}
									alt="youtube"
								/>
							</a>
						</li>
						<li>
							<a
								href="https://www.youtube.com"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={FooterBlog}
									alt="youblog"
								/>
							</a>
						</li>
					</OutlinkList>
				</MiscContainer>
			</Container>
		</div>
	)
}

export default Footer
