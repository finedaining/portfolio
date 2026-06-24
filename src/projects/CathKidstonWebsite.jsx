import React from 'react';
import './CathKidstonWebsite.css';

const phone1         = "/images/cathkidston/phone-1.png";
const phone2         = "/images/cathkidston/phone-2.png";
const bgEllipse      = "/images/cathkidston/bg-ellipse.png";
const iphoneFrame    = "/images/cathkidston/iphone-frame.png";
const phoneScreen    = "/images/cathkidston/phone-screen.png";
const detailVelvetBg = "/images/cathkidston/desc-velvet-bg.png";
const detailSection  = "/images/cathkidston/desc-section.png";
const detailPhoneSc  = "/images/cathkidston/desc-phone-screen.png";
const detailToolBar  = "/images/cathkidston/desc-tool-bar.png";

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

        {/* 왼쪽 - 폰 목업 두 개 */}
        <div className="cath__cover-mockups">
          <img src={phone1} alt="캐스키드슨 첫번째 폰" className="cath__phone-1" />
          <img src={phone2} alt="캐스키드슨 두번째 폰" className="cath__phone-2" />
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

      {/* ── 상세 프레임 ── */}
      <section className="cath__detail">
        <div className="cath__detail-bg">
          <img src={detailVelvetBg} alt="" className="cath__detail-velvet" />
        </div>

        {/* 왼쪽: 텍스트 */}
        <div className="cath__detail-left">
          <img src={detailToolBar} alt="피그마, 개인작업 100%" className="cath__detail-toolbar" />
          <p className="cath__detail-desc">
            PC 버전과의 시각적 일관성을 유지하는 것을 기본 방향으로 설정하면서,
            모바일 환경에서는 불필요한 여백을 줄이고 주요 콘텐츠가 한눈에 들어올 수 있도록
            인터페이스 변수를 세밀하게 조정했습니다. 이를 통해 화면 크기와 사용 맥락이
            달라져도 동일한 브랜드 경험을 유지할 수 있도록 하였으며, 핵심 요소를 쉽게
            파악할 수 있는 구조를 구현했습니다.
          </p>
          <h2 className="cath__detail-title">캐스키드슨 상세<br />페이지 리디자인</h2>
        </div>

        {/* 오른쪽: 폰 + 카드 섹션 이미지 */}
        <div className="cath__detail-right">
          <img src={detailSection} alt="캐스키드슨 상세페이지 섹션" className="cath__detail-section" />
        </div>
      </section>

  
    </div>
  );
}
