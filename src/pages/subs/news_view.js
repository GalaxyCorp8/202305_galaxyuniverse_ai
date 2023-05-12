import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Arr from "../../assets/image/common/dropdown_arr.svg";
import TempImg from "../../assets/image/news/temp2.png";

const Banner = styled.div`
    height: 464px;
    background-color: rgba(255, 255, 255, 0.5);
`;

const NewView = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeDropdown, setActiveDropdown] = useState(false);
    return (
        <>
            <div className="container p-4 lg:p-0 mt-30 md:mt-60">
                {/* <h2 className="text-2xl lg:text-4xl eng text-center mt-0 md:mt-14 mb-10">
					GALAXY NEWS
				</h2>
				<p className="text-lg lg:text-4xl text-center mb-20 md:mb-40">
					갤럭시 뉴스
				</p>
				<ul className="tabBtns text-center flex items-center justify-center gap-10 mb-9 md:mb-28">
					<li>
						<button
							type="button"
							className={
								activeTab === 0
									? 'active text-base md:text-3xl'
									: 'text-base md:text-3xl'
							}
							onClick={() => setActiveTab(0)}
						>
							보도자료
						</button>
					</li>
					<li>
						<button
							type="button"
							className={
								activeTab === 1
									? 'active text-base md:text-3xl'
									: 'text-base md:text-3xl'
							}
							onClick={() => setActiveTab(1)}
						>
							소식
						</button>
					</li>
					<li>
						<button
							type="button"
							className={
								activeTab === 2
									? 'active text-base md:text-3xl'
									: 'text-base md:text-3xl'
							}
							onClick={() => setActiveTab(2)}
						>
							공지사항
						</button>
					</li>
					<li>
						<button
							type="button"
							className={
								activeTab === 3
									? 'active text-base md:text-3xl'
									: 'text-base md:text-3xl'
							}
							onClick={() => setActiveTab(3)}
						>
							IR
						</button>
					</li>
				</ul> */}
                <article className="relative boardView border-t-4">
                    <header className="boardView__header text-center p-4 mb-14">
                        <h2 className="text-sm md:text-3xl mb-4">
                            갤럭시코퍼레이션, ‘규제혁신대상 중기부 장관상’ 수상
                            영예
                        </h2>
                        <p className="text-xs md:text-xl font-light flex justify-center gap-x-10">
                            <span>발행일 : 2022.12.20</span>
                            <span>매일안전신문</span>
                        </p>
                    </header>
                    <section className="boardView__section pb-10 mb-5">
                        <div className="flex justify-center">
                            <img src={TempImg} alt="" />
                        </div>
                        <p className="text-right text-base mt-5 font-light">
                            출처 : 매일안전신문(https://idsn.co.kr)
                        </p>
                        <p className="text-left text-base font-light mt-32">
                            갤럭시코퍼레이션이 한국발 아바타 열풍에 일조한
                            것으로 인정받았다.
                            <br />
                            <br />
                            갤럭시코퍼레이션은 지난 19일 서울시 여의도
                            중소기업중앙회에서 개최된 ‘2022 대한민국 중소기업
                            규제혁신 대상’에서 ‘중소벤처기업부 장관상’을
                            수상했다고 밝혔다.
                            <br />
                            <br />
                            이번 시상은 올해 규제혁신에 앞장선 유공자 등의
                            성과를 격려하기 위해 마련된 것이다. 규제혁신과
                            적극행정을 펼친 우수 공무원, 공공기관·단체 관계자
                            54명과 사회공헌·지역발전 등에 앞장선 중소기업인 21명
                            등 총 75명이 수상했다.
                            <br />
                            <br />
                            갤럭시코퍼레이션은 한국남동발전과 강원랜드와 함께
                            중소벤처기업부 장관상(장관 이영)을 수상하는 영예를
                            안았다.
                            <br />
                            <br />
                            ㈜갤럭시코퍼레이션은 메타버스 퍼스트무버 기업으로
                            국내외 아티스트 아바타(AVA) IP 200개 이상을 보유하고
                            이를 메타버스 아바타로 활용하고 있는 국내 최초의
                            메타버스 아바타 포탈 플랫폼 기업이기도 하다.
                            <br />
                            <br />
                            앞으로 디즈니 마블처럼 고유의 메타버스 세계관을
                            구축하여 메타버스 아바타 기반의 방송, 음원, 커머스,
                            콘서트 등 메타버스의 A-Z 포탈 전략을 선보일
                            예정이다.
                            <br />
                            <br />
                            최근에는 TV조선 메타버스 AI음악쇼 ‘아바드림’을
                            선보여 화제를 모으기도 했다. 특히 듀스의 故 김성재,
                            배우 故 김자옥, 가수 故서지원 등 하늘의 별이 된
                            스타들을 아바타로 만날 수 있는 ‘트리뷰트’ 무대가
                            특별한 감동을 안겼으며, 영화 ‘아바타2’ 개봉과
                            맞물리면서 2022 하반기 메타버스와 아바타 열풍에
                            일조했다는 평을 받았다.
                            <br />
                            <br />
                            이외에도 KAIST 및 연세대 메타버스 최고위 과정 개설
                            및 운영, 항공우주연구원과 협력한 ‘누리호 및 다누리
                            발사’, 메타버스 생중계, 메타버스 언론미디어
                            ‘메타리즘’ 설립 등 콘텐츠, 교육, 미디어, 우주산업 등
                            다방면으로 메타버스 산업 전반을 아우르며 활동
                            중이다.
                            <br />
                            <br />
                            갤럭시코퍼레이션 최용호 최고행복책임자는 “장관상을
                            수상하게 되어 영광”이라며 “내년을 목표로 코스닥
                            상장을 추진하는 등 전 세계 메타버스 업계가 함께
                            성장할 수 있도록 매진할 것”이라고 소감을 말했다.
                        </p>
                    </section>
                    <div className="boardView__footer md:flex justify-between items-center">
                        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                            <div className="flex text-center md:text-left">
                                <Link
                                    to="/page/news"
                                    className="btnPrev border text-center mr-6"
                                >
                                    이전
                                </Link>
                                <Link
                                    to="/page/news"
                                    className="btnNext border text-center"
                                >
                                    다음
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-right mt-10 md:mt-0">
                            <Link
                                to="/page/news"
                                className="btnList text-sm md:text-xl py-3 px-12 md:py-1.5 md:px-9 border text-center"
                            >
                                목록
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
};

export default NewView;
