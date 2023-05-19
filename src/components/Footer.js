import styled from 'styled-components'
import { Link } from 'react-router-dom'
import IconFb from '../assets/image/common/ico-fb.svg'
import IconYoutube from '../assets/image/common/ico-youtube.svg'
import IconInsta from '../assets/image/common/ico-insta.svg'
import IconIn from '../assets/image/common/ico-in.svg'
import IconTw from '../assets/image/common/ico-tw.svg'
import FooterLogo from '../assets/image/common/footer-logo.svg'

const Container = styled.footer`
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
  }
`

const Footer = () => {
	return (
		<div className="container p-4">
			<div className="md:flex md:flex-row md:justify-end md:items-center mt-40">
				<ul className="mb-3.5 gap-x-8 flex mt-5 md:mt-0 justify-end">
					<li>
						<Link
							to="/"
							target="_blank"
						>
							<img
								src={IconFb}
								alt="페이스북"
							/>
						</Link>
					</li>
					<li>
						<Link
							to="/"
							target="_blank"
						>
							<img
								src={IconYoutube}
								alt="유튜브"
							/>
						</Link>
					</li>
					<li>
						<Link
							to="/"
							target="_blank"
						>
							<img
								src={IconIn}
								alt="링크드인"
							/>
						</Link>
					</li>
					<li>
						<Link
							to="/"
							target="_blank"
						>
							<img
								src={IconInsta}
								alt="인스타그램"
							/>
						</Link>
					</li>
					<li>
						<Link
							to="/"
							target="_blank"
						>
							<img
								src={IconTw}
								alt="트위터"
							/>
						</Link>
					</li>
				</ul>
			</div>
			<Container className="container text-center flex justify-between align-top md:text-left mb-20 pt-4">
				<div>
					<img
						src={FooterLogo}
						className="footer-logo mb-3.5"
						alt="GALAXY CORP."
					/>
					<p className="text-xs font-extralight">
						2023 GALAXY corporation. CO., LTD. All rights reserved.
					</p>
				</div>
				<PrivacyList className="text-sm flex md:justify-end">
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
			</Container>
		</div>
	)
}

export default Footer
