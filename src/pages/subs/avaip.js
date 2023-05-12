import styled from 'styled-components'

const AvaList = styled.ul`
	margin-left: auto;
	margin-right: auto;
	width: 850px;
	li {
		.img {
			height: 364px;
			background: #fff;
		}
	}
`

const AvaIp = () => {
	return (
		<div className="container">
			<h2 className="text-5xl eng text-center mt-80 mb-24">AVA IP</h2>
			<AvaList className="grid gap-4 grid-cols-3">
				<li className="mb-24">
					<div className="img mb-5">111</div>
					<div className="flex items-center justify-between text-xl">
						<h3 className="">AVA</h3>
						<p className="">매니 파퀴아오</p>
					</div>
				</li>
				<li className="mb-24">
					<div className="img mb-5">111</div>
					<div className="flex items-center justify-between text-xl">
						<h3 className="">AVA</h3>
						<p className="">매니 파퀴아오</p>
					</div>
				</li>
				<li className="mb-24">
					<div className="img mb-5">111</div>
					<div className="flex items-center justify-between text-xl">
						<h3 className="">AVA</h3>
						<p className="">매니 파퀴아오</p>
					</div>
				</li>
				<li className="mb-24">
					<div className="img mb-5">111</div>
					<div className="flex items-center justify-between text-xl">
						<h3 className="">AVA</h3>
						<p className="">매니 파퀴아오</p>
					</div>
				</li>
			</AvaList>
		</div>
	)
}

export default AvaIp
