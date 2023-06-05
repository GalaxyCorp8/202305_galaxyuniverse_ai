import { createGlobalStyle } from 'styled-components'
import galaxy from '../assets/fonts/galaxy.woff'
import BoardNext from '../assets/image/common/board_next.svg'
import BoardNextInvert from '../assets/image/common/board_next_invert.svg'
import ArrPrev from '../assets/image/common/arr_prev.svg'
import ArrNext from '../assets/image/common/arr_next.svg'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'galaxy';
        src: url(${galaxy}) format('woff');
    }
    ::selection {
        background-color: #fff;
        color: #000;
    }
    html, body {
        background-color: #000;
        color: #fff;
        font-family: 'Noto Sans KR', sans-serif;
    }
    .text-notosans {
        font-family: 'Noto Sans KR', sans-serif;
    }
    .eng {
        font-family: 'galaxy', sans-serif;
        letter-spacing: -0.05em;
    }
    .main-visual {
        position: relative;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        .main-visual-inner {
            z-index: 1;
        }
        .arrow-container {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 100px;
            animation: arrow 1.5s ease-in-out infinite;
            @keyframes arrow {
                0% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(10px);
                }
                100% {
                    transform: translateY(0);
                }
            }
        }
    }
    .sub-visual {
        position: relative;
        height: 680px;
        background-color: rgba(255,255,255,0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        &::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100px;
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        }
        @media (max-width: 767px) {
            height: 475px;
        }
    }
    .sub-split {
        position: relative;
        height: 380px;
        background-color: rgba(255,255,255,0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    .table {
        border-bottom: 2px solid #fff;
        thead {
            tr {
                th {

                }
            }
        }
        tbody {
            tr {
                border-bottom: 1px solid rgba(255,255,255,0.2);
            }
        }
    }
    .dropdown {
        position: absolute;
        background: #000;
        top: calc(100% + 40px);
        left: 0;
        right: 0;
        border: 1px solid rgba(255, 255, 255, 0.2);
        visibility: hidden;
        transition: all 0.15s ease-in-out;
        opacity: 0;
        &.active {
            visibility: visible;
            top: calc(100% + 10px);
            opacity: 1;
        }
        li {
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            &:last-child {
                border-bottom: none;
            }
            button {
                padding: 10px;
                transition: all 0.15s ease-in-out;
                display: block;
                width: 100%;
                &:focus,
                &:hover {
                    color: #000;
                    background: rgba(255, 255, 255, 0.8);
                }
            }
        }
    }
    .paging {
        li {
            button {
                color: rgba(255,255,255,0.5);
                &.active, &:focus, &:hover {
                    color: #fff;
                }
            }
        }
    }
    .boardView {
        .boardView__header {
            border-bottom: 2px solid rgba(255,255,255,0.2);
        }
        .boardView__section {
            border-bottom: 1px solid #fff;
            img {
                max-width: 100%;
            }
        }
        .boardView__section__file {
            background: #333333;
            color: #939393;
        }
        .boardView__footer {
            .btnPrev {
                display: block;
                width: 34px;
                line-height: 33px;
                background-image: url(${ArrPrev});
                background-repeat: no-repeat;
                background-position: center;
                text-indent: -9999px;
                transition: all 0.15s ease-in-out;
                &:focus, &:hover {
                    color: #000;
                    background: url(${BoardNextInvert}), #fff;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            }
            .btnNext {
                display: block;
                width: 34px;
                line-height: 33px;
                background-image: url(${ArrNext});
                background-repeat: no-repeat;
                background-position: center;
                text-indent: -9999px;
                transition: all 0.15s ease-in-out;
                &:focus, &:hover {
                    color: #000;
                    background: url(${BoardNextInvert}), #fff;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            }
            .btnList {
                width: 100px;
                line-height: 33px;
                transition: all 0.15s ease-in-out;
                &:focus, &:hover {
                    color: #000;
                    background: #fff;
                }
            }
        }
    }
    .tabBtns {
        li {
		button, a {
			color: rgba(255, 255, 255, 0.5);
			&.active {
				color: #fff;
			}
		}
	}
`

export default GlobalStyles
