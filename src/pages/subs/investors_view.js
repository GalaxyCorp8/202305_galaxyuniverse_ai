import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Arr from "../../assets/image/common/dropdown_arr.svg";

const Banner = styled.div`
    height: 464px;
    background-color: rgba(255, 255, 255, 0.5);
`;

const InvestorsView = () => {
    return (
        <>
            <div className="mb-28 mt-44" />
            <div className="container">
                <h2 className="text-5xl text-center eng mb-5">Investors</h2>
                <ul className="tabBtns text-center flex items-center justify-center gap-10 mb-28">
                    <li>
                        <Link to="/investors" className="active text-3xl">
                            IR
                        </Link>
                    </li>
                    <li>
                        <Link to="/investors" className="text-3xl">
                            자료실
                        </Link>
                    </li>
                    <li>
                        <Link to="/investors" className="text-3xl">
                            재무정보
                        </Link>
                    </li>
                    <li>
                        <Link to="/investors" className="text-3xl">
                            공시정보
                        </Link>
                    </li>
                    <li>
                        <Link to="/investors" className="text-3xl">
                            공고
                        </Link>
                    </li>
                </ul>
                <article className="relative boardView border-t-4">
                    <header className="boardView__header text-center p-4 mb-14">
                        <h2 className="text-xl mb-4">
                            韓 최초 메타버스 AI 음악쇼 ‘아바드림’ 관전 포인트
                            셋, #페스티벌 #드림캐처 #트리뷰트
                        </h2>
                        <p className="text-xl flex justify-center gap-x-10">
                            <span>발행일 : 2023.01.19</span>
                            <span>갤럭시 코퍼레이션</span>
                        </p>
                    </header>
                    <section className="boardView__section pb-10 mb-5">
                        <div className="boardView__section__file py-5 px-6 mb-12 flex">
                            <h3>첨부파일</h3>
                            <ul className="flex flex-col pl-20">
                                <li>
                                    <a href="#">2022 Q3: FACT SHEET.xlsx</a>
                                </li>
                                <li>
                                    <a href="#">[GALAXY] IR ppt_2023.PDF</a>
                                </li>
                            </ul>
                        </div>
                        <div>111</div>
                    </section>
                    <div className="boardView__footer flex justify-between items-center">
                        <Link
                            to="/page/news"
                            className="btnNext border text-center"
                        >
                            다음
                        </Link>
                        <Link
                            to="/page/news"
                            className="btnList text-lg border text-center"
                        >
                            목록
                        </Link>
                    </div>
                </article>
            </div>
        </>
    );
};

export default InvestorsView;
