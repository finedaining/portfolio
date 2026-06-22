import React from 'react';
import './CathKidstonWebsite.css';

const phoneMockup  = "/images/cathkidston/phone-mockup.png";
const bgEllipse    = "/images/cathkidston/bg-ellipse.png";
const iphoneFrame  = "/images/cathkidston/iphone-frame.png";
const phoneScreen  = "/images/cathkidston/phone-screen.png";

const PAR = [
  {
    label: 'Problem',
    text: '캐스키드슨 카카오 쇼핑 라이브 상세페이지의 비주얼 완성도가 낮아 브랜드 아이덴티티를 효과적으로 전달하지 못했습니다. 혜택 정보의 시각적 위계가 불분명해 소비자가 핵심 혜택을 한눈에 파악하기 어려웠습니다.',
  },
  {
    label: 'Action',
    text: '크리스마스 시즌 감성에 맞는 딥레드 벨벳 컬러 팔레트와 고급스러운 타이포그래피를 적용했습니다. 인형의 집 컨셉의 스노우 글로브 일러스트와 편지 형식 섹션으로 스토리텔링을 강화했습니다.',
  },
  {
    label: 'Result',
    text: '브랜드 아이덴티티를 반영한 일관된 비주얼 언어로 크리스마스 시즌 한정 상품의 프리미엄 이미지를 강화하였습니다. 혜택 정보의 체계적인 구조화로 소비자 이해도를 높였습니다.',
  },
];

export default function CathKidstonWebsite({ onBack }) {
  return (
    <div className="cath">
      <button className="cath__back" onClick={onBack}>← 포트폴리오로</button>

      {/* ── 표지 프레임 ── */}
      <section className="cath__cover">

        {/* 배경 */}
        <div className="cath__cover-bg">
          <img src={bgEllipse} alt="" className="cath__bg-ellipse" />
        </div>

        {/* 왼쪽 - 폰 목업 */}
        <div className="cath__cover-mockups">
          <img src={phoneMockup} alt="캐스키드슨 폰 목업" className="cath__phone-mockup" />
        </div>

        {/* 오른쪽 - PAR + 타이틀 */}
        <div className="cath__cover-right">
          <div className="cath__par-list">
            {PAR.map(({ label, text }) => (
              <div key={label} className="cath__par">
                <h3 className="cath__par-title">{label}</h3>
                <p className="cath__par-body">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 타이틀 */}
        <div className="cath__cover-title-area">
          <h1 className="cath__cover-title">Web<br />Design</h1>
          <p className="cath__cover-sub">캐스키드슨 상세페이지 리디자인</p>
        </div>

      </section>

      {/* ── 설명 프레임 ── */}
      <section className="cath__desc">
        <div className="cath__desc-bg">
          <div className="cath__desc-panel cath__desc-panel--1" />
          <div className="cath__desc-panel cath__desc-panel--2" />
        </div>

        {/* 왼쪽 */}
        <div className="cath__desc-left">
          <p className="cath__credit">피그마 · 포토샵, 개인작업 100%</p>
          <p className="cath__label">캐스키드슨<br />상세페이지 리디자인</p>
        </div>

        {/* 오른쪽 - 아이폰 목업 */}
        <div className="cath__desc-right">
          <div className="cath__sub-phone">
            <img src={iphoneFrame} alt="iPhone frame" className="cath__sub-phone-frame" />
            <div className="cath__sub-island">
              <div className="cath__sub-island-bar" />
            </div>
            <div className="cath__sub-phone-screen">
              <img src={phoneScreen} alt="캐스키드슨 화면" />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
