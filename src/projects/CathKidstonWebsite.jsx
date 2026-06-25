import React from 'react';
import './CathKidstonWebsite.css';

const phone1         = "/images/cathkidston/phone-red.svg";
const phone2         = "/images/cathkidston/phone-green.svg";
const bgEllipse      = "/images/cathkidston/bg-ellipse.png";
const iphoneFrame    = "/images/cathkidston/iphone-frame.png";
const phoneScreen    = "/images/cathkidston/phone-screen.svg";
const bgEllipseSvg      = "/images/cathkidston/bg-ellipse.svg";
const detailVelvetBg    = "/images/cathkidston/desc-velvet-bg.svg";
const detailPhoneScreen = "/images/cathkidston/desc-phone-screen.svg";
const detailLetter      = "/images/cathkidston/desc-letter.svg";
const detailCards1      = "/images/cathkidston/desc-cards-1.svg";
const detailCards2      = "/images/cathkidston/desc-cards-2.svg";
const detailCards3      = "/images/cathkidston/desc-cards-3.svg";
const figmaApp       = "/images/cathkidston/Figma-app.png";

const PAR = [
  {
    label: 'Problem',
    text: '포근하고 따뜻한 연말 감성을 담은 패키지 디자인과 달리, 상세 페이지는 전반적으로 심플한 인상이 강해 두 요소 간의 분위기 차이가 느껴졌습니다. 크리스마스 시즌에 어울리는 연말 무드를 상세 페이지에서 전달할 필요가 있다고 판단하였습니다.',
  },
  {
    label: 'Action',
    text: '크리스마스 무드를 강조하기 위해 와인 레드(#630003)와 포레스트 그린(#0C2A10) 컬러를 사용하였습니다. 필기체 타이포그래피를 활용해 크리스마스 트리 형태가 연상되도록 하였으며, 눈이 내리는 듯한 효과를 더해 시즌감을 나타내고자 하였습니다. 또한 편지지 형태의 오브젝트를 활용해 크리스마스를 기다리는 경험으로 초대하는 구성을 연출하였습니다.',
  },
  {
    label: 'Result',
    text: '크리스마스 컬러와 타이포그래피, 시각적 효과를 활용해 상세 페이지의 연말 시즌 무드를 자연스럽게 강조할 수 있었습니다. 이를 통해 패키지 디자인의 분위기와도 잘 어우러지고, 따뜻한 연말 감성을 시각적으로 느낄 수 있는 디자인으로 완성되었습니다.',
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
          <img src={bgEllipseSvg} alt="" className="cath__bg-ellipse" />
        </div>

        {/* 왼쪽 - 폰 목업 두 개 */}
        <div className="cath__cover-mockups">
          <img src={phone1} alt="캐스키드슨 첫번째 폰" className="cath__phone-red" />
          <img src={phone2} alt="캐스키드슨 두번째 폰" className="cath__phone-green" />
        </div>

        {/* 오른쪽 - PAR + 타이틀 */}
        <div className="cath__cover-right">
  <div className="cath__par-list">
    {PAR.map(({ label, text }) => (
      <div
        key={label}
        className={`cath__par ${
          label === 'Problem' ? 'cath__par--problem' : ''
        }`}
      >
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
          <div className="cath__detail-toolbar">
            <img src={figmaApp} alt="Figma" className="cath__detail-toolbar-icon" />
            <div className="cath__detail-toolbar-bar-wrap">
              <div className="cath__detail-toolbar-bar">
                <div className="cath__detail-toolbar-fill" />
                <div className="cath__detail-toolbar-dot" />
              </div>
              <span className="cath__detail-toolbar-label">피그마, 개인작업 100%</span>
            </div>
          </div>
          <p className="cath__detail-desc">
            PC 버전과의 시각적 일관성을 유지하는 것을 기본 방향으로 설정하면서,
            모바일 환경에서는 불필요한 여백을 줄이고 주요 콘텐츠가 한눈에 들어올 수 있도록
            인터페이스 변수를 세밀하게 조정했습니다. 이를 통해 화면 크기와 사용 맥락이
            달라져도 동일한 브랜드 경험을 유지할 수 있도록 하였으며, 핵심 요소를 쉽게
            파악할 수 있는 구조를 구현했습니다.
          </p>
          <p className="cath__detail-title">캐스키드슨 상세 페이지 리디자인</p>
        </div>

        {/* 오른쪽: 레이어별 조합 */}
        <div className="cath__detail-right">
          <div className="cath__detail-layers">
            <img src={detailPhoneScreen} alt="폰 화면" className="cath__detail-layer-phone" />
            <img src={detailLetter} alt="편지" className="cath__detail-layer-letter" />
            <div className="cath__detail-cards-stack">
              <img src={detailCards1} alt="카드1" className="cath__detail-layer-cards" />
              <img src={detailCards2} alt="카드2" className="cath__detail-layer-cards" />
              <img src={detailCards3} alt="카드3" className="cath__detail-layer-cards" />
            </div>
          </div>
        </div>
      </section>

  
    </div>
  );
}
