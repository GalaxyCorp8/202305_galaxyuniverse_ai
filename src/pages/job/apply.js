import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useEffect, useState, useCallback } from 'react'
import { setDefaultLanguage } from 'react-multi-lang'
import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage, setLang } from '../../hooks/language'
import { useWindowSize } from '@react-hook/window-size'
import { useNavigate } from 'react-router-dom'

import { useDropzone } from 'react-dropzone'

import BtnBack from '../../assets/image/WEB_image/x1/job/btnBack.png'
import FileIcon from '../../assets/image/WEB_image/x1/job/fileIcon.png'

const BackButton = styled.button`
	width: 62px;
	height: 62px;
	background: url(${BtnBack}) no-repeat;
	@media (max-width: 767px) {
		width: 28px;
		height: 28px;
		background-size: 28px 28px;
	}
`

const ApplyHeader = styled.div`
	.dt {
		color: rgba(255, 255, 255, 0.4);
	}
`

const Form = styled.div`
	.at {
		color: #ff4545;
	}
	input[type='text'],
	input[type='mail'],
	input[type='phone'] {
		color: rgba(255, 255, 255, 0.4);
		background: transparent;
		border: 0;
		outline: 0;
		padding-top: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.4);
		width: 100%;
		margin-top: 1.8rem;
		margin-bottom: 1.8rem;
		&::placeholder {
			color: rgba(255, 255, 255, 0.4);
		}
		@media (max-width: 767px) {
			margin-top: 1rem;
			margin-bottom: 0rem;
			padding-top: 1rem;
			padding-bottom: 1rem;
		}
	}
	.fileContainer {
		height: 128px;
		width: 100%;
		background: rgba(255, 255, 255, 0.1);
		padding-left: 50px;
		@media (max-width: 767px) {
			padding-left: 23px;
			height: 55px;
			.fileIcon {
				width: 18px;
			}
		}
	}
	.inputColor {
		color: rgba(, 255, 255, 255, 0.4);
	}
`

const LinkInput = styled.div`
	background: rgba(255, 255, 255, 0.1);
	padding-left: 50px;
	padding-top: 30px;
	padding-bottom: 30px;
	height: 127px;
	@media (max-width: 767px) {
		height: 56px;
		padding-left: 23px;
	}
	label {
		color: rgba(, 255, 255, 255, 0.4);
		font-size: 2rem;
		line-height: 1;
		@media (max-width: 767px) {
			font-size: 12px;
		}
	}
	input {
		width: 100%;
		color: rgba(255, 255, 255, 0.4);
		background: transparent;
		border: 0;
		outline: 0;
		padding-left: 30px;
		line-height: 1;
		&::placeholder {
			color: rgba(255, 255, 255, 0.4);
			font-size: 24px;
			font-weight: 300;
		}
		@media (max-width: 767px) {
			font-size: 12px;
			&::placeholder {
				font-size: 12px;
			}
		}
	}
`

const Textarea = styled.textarea`
	width: 100%;
	height: 240px;
	color: rgba(255, 255, 255, 0.4);
	background: rgba(255, 255, 255, 0.1);
	border: 0;
	outline: 0;
	padding: 20px 30px;
	line-height: 1;
	&::placeholder {
		color: rgba(255, 255, 255, 0.4);
		font-size: 24px;
		font-weight: 300;
	}
	@media (max-width: 767px) {
		font-size: 12px;
		height: 120px;
		&::placeholder {
			font-size: 12px;
		}
	}
`

const AgreeForm = styled.div`
	border: 1px solid #838383;
	label {
		margin-left: 20px;
		sub {
			color: #ff4545;
			margin-left: 13px;
		}
	}
	input[type='checkbox'] {
	}
	.allRow,
	.itemRow {
		position: relative;
	}
	.bar {
		border-top: 1px solid #838383;
		border-bottom: 1px solid #838383;
	}
`

const Apply = () => {
	const navigate = useNavigate()
	const language = useSelector(selectLanguage)
	const { t, i18n } = useTranslation()

	const [width, height] = useWindowSize({ fps: 60 })
	const [isXs, setIsXs] = useState(false)

	const onDrop = useCallback((acceptedFiles) => {
		console.log(acceptedFiles)
	}, [])

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			'application/pdf': ['.pdf'],
		},
	})

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
			<ApplyHeader className="container mt-36 md:mt-52 mb-10 md:mb-72 px-9 md:px-0">
				<BackButton onClick={() => navigate(-1)} />
				<h2 className="text-3xl md:text-7xl mt-6 md:mt-32">
					마케팅/콘텐츠 디자이너
				</h2>
				<p className="text-xs md:text-3xl mt-8 dt font-light">
					갤럭시코퍼레이션 | 디자인 GX지식경영팀 | 경력(3~5년차) | 정규직
				</p>
			</ApplyHeader>
			<Form className="container px-9 md:px-0">
				<h3 className="text-xl md:text-4xl">지원자 정보</h3>
				<h4 className="text-sm md:text-3xl mt-8 md:mt-20">
					기본정보 <span className="at ml-2 md:ml-10">*</span>
				</h4>
				<input
					type="text"
					className="text-sm md:text-3xl"
					placeholder="Full Name"
				/>
				<input
					type="mail"
					className="text-sm md:text-3xl"
					placeholder="E-mail"
				/>
				<input
					type="phone"
					className="text-sm md:text-3xl"
					placeholder="Phone('-' 없이 입력해 주세요)"
				/>
				<h3 className="text-xl md:text-4xl mt-14 md:mt-72">제출 서류</h3>
				<h4 className="text-sm md:text-3xl mt-14 md:mt-20">
					Resume/CV <span className="at ml-2 md:ml-10">*</span>
				</h4>
				<div
					className="fileContainer flex items-center mt-5"
					{...getRootProps()}
				>
					<img
						src={FileIcon}
						alt=""
						className="mr-4 md:mr-10 fileIcon"
					/>
					<input {...getInputProps()} />
					{isDragActive ? (
						<p className="text-xs md:text-2xl inputColor">이곳에 파일을 올려주세요</p>
					) : (
						<p className="text-xs md:text-2xl inputColor">이곳에 파일을 올려주세요</p>
					)}
				</div>
				<p
					className="text-xl font-light inputColor mt-4"
					style={{ fontSize: isXs ? 7 : '1.125rem' }}
				>
					* PDF 형식으로 올려주세요.
				</p>
				<h4 className="text-sm md:text-3xl mt-16 md:mt-36">Portfolio</h4>
				<div
					className="fileContainer flex items-center mt-5"
					{...getRootProps()}
				>
					<img
						src={FileIcon}
						alt=""
						className="mr-4 md:mr-10 fileIcon"
					/>
					<input {...getInputProps()} />
					{isDragActive ? (
						<p className="text-xs md:text-2xl inputColor">이곳에 파일을 올려주세요</p>
					) : (
						<p className="text-xs md:text-2xl inputColor">이곳에 파일을 올려주세요</p>
					)}
				</div>
				<p
					className="text-xl font-light inputColor mt-4"
					style={{ fontSize: isXs ? 7 : '1.125rem' }}
				>
					* PDF 형식으로 올려주세요.
				</p>
			</Form>
			<div className="container px-9 md:px-0">
				<h4 className="text-sm md:text-3xl mt-16 md:mt-36">Links</h4>
				<LinkInput className="flex items-center justify-start mt-5">
					<label htmlFor="">URL</label>
					<input
						type="text"
						placeholder="http://"
					/>
				</LinkInput>
				<p
					className="text-xl font-light mt-4"
					style={{
						color: 'rgba(, 255, 255, 255, 0.4)',
						fontSize: isXs ? 7 : '1.125rem',
					}}
				>
					* 추가적으로 어필할 수 있는 url이 있다면 남겨주세요.
				</p>
				<h4 className="text-sm md:text-3xl mt-14 md:mt-36 mb-5">
					Additional Information
				</h4>
				<Textarea
					className="mb-24 md:mb-80"
					placeholder="Add a cover letter or anything else you want to share."
				></Textarea>
				<h4 className="text-sm md:text-4xl mb-5 md:mb-16">
					지원을 위해 다음 사항을 확인해 주세요.
				</h4>
				<AgreeForm>
					<div className="allRow p-6 md:p-11">
						<input
							type="checkbox"
							id="agreeAll"
						/>
						<label
							htmlFor="agreeAll"
							className="text-xs md:text-2xl"
						>
							전체 동의
						</label>
					</div>
					<div className="itemRow p-6 md:p-11 bar">
						<input
							type="checkbox"
							id="privacy"
						/>
						<label
							htmlFor="privacy"
							className="text-xs md:text-2xl"
						>
							개인정보 필수항목 수집 및 이용 동의<sub>*</sub>
						</label>
					</div>
					<div className="itemRow p-6 md:p-11">
						<input
							type="checkbox"
							id="privacyOption"
						/>
						<label
							htmlFor="privacyOption"
							className="text-xs md:text-2xl"
						>
							개인정보 선택항목 수집 및 이용 동의
						</label>
					</div>
				</AgreeForm>
			</div>
			<div className="container flex justify-center mt-14 md:mt-40 mb-96">
				<button type="button">
					<div className="linkButton">
						<div className="tp" />
						<div className="lt" />
						<div className="lb" />
						<span className="text-3xl kor">제출하기</span>
						<div className="rt" />
						<div className="rb" />
						<div className="bt" />
					</div>
				</button>
			</div>
		</>
	)
}

export default Apply
