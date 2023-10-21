import React, { Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import HeaderLayout from './layout/HeaderLayout'

import { ParallaxProvider } from 'react-scroll-parallax'

import Loader from './components/Loader'

import Landing from './pages/Landing'
// import Main from './pages/Main'
// sub pages
// import Sub02 from './pages/subs/p_02'
// import Sub03 from './pages/subs/p_03'
// import Sub06 from './pages/subs/p_06'
// import Sub08 from './pages/subs/p_08'
// import Recruit from './pages/subs/recruit'
// import Contact from './pages/subs/contact'
// import News from './pages/subs/news'
// import NewsView from './pages/subs/news_view'
// import Investors from './pages/subs/investors'
// import InvestorsView from './pages/subs/investors_view'
// import AvaIp from './pages/subs/avaip'
// import Company from './pages/company/company'
// import Avatar from './pages/business/Avatar'

// import Business from './pages/business/business'
// import Career from './pages/career/career'
// import Commerce from './pages/commerce/commerce'
// import Media from './pages/media/media'
// import Tech from './pages/tech/tech'
// import Ip from './pages/ip/ip'
// import Human from './pages/human/human'

import NotFound from './pages/notfound/notFound'
import PdfNoticePopup from './pages/PdfNoticePopup'
import Apply from './pages/job/apply'
import Studeio27HeaderLayout from './layout/Studeio27HeaderLayout'

const Company = React.lazy(() => import('./pages/company/company'))
const Business = React.lazy(() => import('./pages/business/business'))
const Career = React.lazy(() => import('./pages/career/career'))
const Commerce = React.lazy(() => import('./pages/commerce/commerce'))
const Media = React.lazy(() => import('./pages/media/media'))
const Tech = React.lazy(() => import('./pages/tech/tech'))
const Ip = React.lazy(() => import('./pages/ip/ip'))
const Human = React.lazy(() => import('./pages/human/human'))
const Avatar = React.lazy(() => import('./pages/business/Avatar'))
const News = React.lazy(() => import('./pages/subs/news'))
const NewsView = React.lazy(() => import('./pages/subs/news_view'))
const Investors = React.lazy(() => import('./pages/subs/investors'))
const InvestorsView = React.lazy(() => import('./pages/subs/investors_view'))
const Job = React.lazy(() => import('./pages/job/job'))
const JobView = React.lazy(() => import('./pages/job/jobView'))
const JobApply = React.lazy(() => import('./pages/job/apply'))
const Contact = React.lazy(() => import('./pages/contact/contact'))

const Studio27Main = React.lazy(() => import('./pages/studio27/studio27Main'))
const Physical100 = React.lazy(() => import('./pages/studio27/physical100'))
const Pd = React.lazy(() => import('./pages/studio27/pd'))

function App() {
	return (
		<ParallaxProvider>
			{/* <Suspense fallback={<Loader />}> */}
			<Suspense>
				<Routes>
					<Route
						path="/"
						element={
							<HeaderLayout>
								{/* 팝업 컴포넌트 */}
								<PdfNoticePopup />
								<Landing />
							</HeaderLayout>
						}
					/>
					<Route
						path="/page/ip"
						element={
							<HeaderLayout>
								<Ip />
							</HeaderLayout>
						}
					/>
					<Route
						path="/page/human"
						element={
							<HeaderLayout>
								<Human />
							</HeaderLayout>
						}
					/>
					<Route
						path="/page/company"
						element={
							<Layout>
								<Company />
							</Layout>
						}
					/>
					<Route
						path="/page/business"
						element={
							<Layout>
								<Business />
							</Layout>
						}
					/>
					<Route
						path="/page/business/commerce"
						element={
							<Layout>
								<Commerce />
							</Layout>
						}
					/>
					<Route
						path="/page/business/avatar"
						element={
							<Layout>
								<Avatar />
							</Layout>
						}
					/>
					<Route
						path="/page/business/media"
						element={
							<Layout>
								<Media />
							</Layout>
						}
					/>
					<Route
						path="/page/business/tech"
						element={
							<Layout>
								<Tech />
							</Layout>
						}
					/>
					<Route
						path="/page/career"
						element={
							<Layout>
								<Career />
							</Layout>
						}
					/>
					<Route
						path="/page/news"
						element={
							<Layout>
								<News />
							</Layout>
						}
					/>
					<Route
						path="/page/news/:id"
						element={
							<Layout>
								<NewsView />
							</Layout>
						}
					/>
					<Route
						path="/page/investors"
						element={
							<Layout>
								<Investors />
							</Layout>
						}
					/>
					<Route
						path="/page/investors/:id"
						element={
							<Layout>
								<InvestorsView />
							</Layout>
						}
					/>
					<Route
						path="/page/job"
						element={
							<Layout>
								<Job />
							</Layout>
						}
					/>
					<Route
						path="/page/job/:id"
						element={
							<Layout>
								<JobView />
							</Layout>
						}
					/>
					<Route
						path="/page/job/apply/:id"
						element={
							<Layout>
								<Apply />
							</Layout>
						}
					/>
					<Route
						path="/page/contact"
						element={
							<HeaderLayout>
								<Contact />
							</HeaderLayout>
						}
					/>
					<Route
						path="/studio27"
						element={
							<Studeio27HeaderLayout>
								<Studio27Main />
							</Studeio27HeaderLayout>
						}
					/>
					<Route
						path="/studio27/physical100"
						element={
							<Studeio27HeaderLayout>
								<Physical100 />
							</Studeio27HeaderLayout>
						}
					/>
					<Route
						path="/studio27/pd"
						element={
							<Studeio27HeaderLayout>
								<Pd />
							</Studeio27HeaderLayout>
						}
					/>
					{/* <Route
						path="/page/main"
						element={<Main />}
					/>
					<Route
						path="/page/02"
						element={<Sub02 />}
					/>
					<Route
						path="/page/03"
						element={<Sub03 />}
					/>
					<Route
						path="/page/06"
						element={<Sub06 />}
					/>
					<Route
						path="/page/08"
						element={<Sub08 />}
					/>
					<Route
						path="/page/recruit"
						element={<Recruit />}
					/>
					<Route
						path="/page/contact"
						element={<Contact />}
					/>
					<Route
						path="/page/news"
						element={
							<Layout>
								<News />
							</Layout>
						}
					/>
					<Route
						path="/page/news/:id"
						element={
							<Layout>
								<NewView />
							</Layout>
						}
					/>
					<Route
						path="/page/investors"
						element={
							<Layout>
								<Investors />
							</Layout>
						}
					/>
					<Route
						path="/page/investors/:id"
						element={
							<Layout>
								<InvestorsView />
							</Layout>
						}
					/>
					<Route
						path="/page/avaip"
						element={<AvaIp />}
					/> */}
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Routes>
			</Suspense>
		</ParallaxProvider>
	)
}

export default App
