import { useState } from "react";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import styled from "styled-components";
import Bg from "../../assets/image/investors/bg.png";

const Banner = styled.div`
    height: 464px;
    background-color: rgba(255, 255, 255, 0.5);
`;

const Investors = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeDropdown, setActiveDropdown] = useState(false);
    return (
        <>
            <div className="sub-visual">
                {/* <ParallaxBanner
					layers={[background, headline, foreground, gradientOverlay]}
					className="aspect-[2/1] bg-gray-900"
				/> */}
                <ParallaxBanner
                    layers={[
                        {
                            image: Bg,
                            speed: -5,
                        },
                    ]}
                    style={{ height: 680 }}
                />
            </div>
            <div className="container p-4 lg:p-0 mt-56">
                <h2 className="text-2xl lg:text-5xl eng text-center mt-14 mb-5 tracking-tighter lg:leading-tight">
                    metaverse company leaping
                    <br />
                    into the world
                </h2>
                <p className="text-lg lg:text-4xl text-center mb-20 md:mb-40">
                    갤럭시 IR
                </p>
                <h2 className="text-2xl lg:text-4xl eng text-center mt-0 md:mt-14 mb-10">
                    INVESTORS
                </h2>
                <ul className="tabBtns text-center flex items-center justify-center gap-10 mb-28">
                    <li>
                        <button
                            type="button"
                            className={
                                activeTab === 0
                                    ? "active text-base md:text-3xl"
                                    : "text-base md:text-3xl"
                            }
                            onClick={() => setActiveTab(0)}
                        >
                            IR
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className={
                                activeTab === 1
                                    ? "active text-base md:text-3xl"
                                    : "text-base md:text-3xl"
                            }
                            onClick={() => setActiveTab(1)}
                        >
                            자료실
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className={
                                activeTab === 2
                                    ? "active text-base md:text-3xl"
                                    : "text-base md:text-3xl"
                            }
                            onClick={() => setActiveTab(2)}
                        >
                            재무정보
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className={
                                activeTab === 3
                                    ? "active text-base md:text-3xl"
                                    : "text-base md:text-3xl"
                            }
                            onClick={() => setActiveTab(3)}
                        >
                            공시정보
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className={
                                activeTab === 4
                                    ? "active text-base md:text-3xl"
                                    : "text-base md:text-3xl"
                            }
                            onClick={() => setActiveTab(4)}
                        >
                            공고
                        </button>
                    </li>
                </ul>
                <table className="table table-auto w-full mb-9 border-t-2">
                    <colgroup>
                        <col />
                        <col className="w-44" />
                    </colgroup>
                    <tbody>
                        <tr className="">
                            <td className="p-5 text-base">
                                <Link
                                    to="/page/investors/1"
                                    className="text-base"
                                >
                                    2022 3분기 실적보고서
                                </Link>
                                <p className="text-xs">2022.01.01</p>
                            </td>
                            <td className="text-right p-5 text-base">
                                Galaxy Corp
                            </td>
                        </tr>
                    </tbody>
                </table>
                <ol className="paging flex items-center justify-center gap-3.5 text-lg">
                    <li>
                        <button type="button" className="active">
                            1
                        </button>
                    </li>
                    <li>
                        <button type="button">2</button>
                    </li>
                    <li>
                        <button type="button">3</button>
                    </li>
                </ol>
            </div>
        </>
    );
};

export default Investors;
