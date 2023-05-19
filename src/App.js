import { Suspense, useEffect } from 'react'
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
import News from './pages/subs/news'
import NewView from './pages/subs/news_view'
import Investors from './pages/subs/investors'
import InvestorsView from './pages/subs/investors_view'
// import AvaIp from './pages/subs/avaip'
import Company from './pages/company/company'
import Avatar from './pages/business/Avatar'

import Business from './pages/business/business'
import Career from './pages/career/career'
import Commerce from './pages/commerce/commerce'
import Media from './pages/media/media'
import Tech from './pages/tech/tech'
import Ip from './pages/ip/ip'

import NotFound from './pages/notfound/notFound'

function App() {
	return (
		<ParallaxProvider>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route
						path="/"
						element={
							<HeaderLayout>
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
