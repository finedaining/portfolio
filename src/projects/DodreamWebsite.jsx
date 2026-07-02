import React from 'react';
import './DodreamWebsite.css';

/* ── 표지 ── */
const gearIcon      = "/images/dodream/gear-icon.png";
const logoTextSm    = "/images/dodream/logo-text-sm.svg";
const vectorLineSm  = "/images/dodream/vector-line-sm.svg";
const moonShape     = "/images/dodream/moon-shape.png";
const sparkle       = "/images/dodream/sparkle.svg";
const toolBar       = "/images/dodream/tool-bar.svg";

/* ── 무드보드 ── */
const logoTextLg    = "/images/dodream/logo-text-lg.svg";
const vectorLineLg  = "/images/dodream/vector-line-lg.svg";
const screwPhoto    = "/images/dodream/screw-photo.png";
const spinningPhoto = "/images/dodream/spinning-photo.png";
const moodboardBg   = "/images/dodream/moodboard-bg.png";

/* ── 섹션 2, 3 Figma 이미지 ── */
const page2Wireframe = "/images/dodream/page2-wireframe.png";
const page3Mockup    = "/images/dodream/page3-mockup.png";

export default function DodreamWebsite({ onBack }) {
  return (
    <div className="ddream">
      <button className="ddream__back" onClick={onBack}>← 포트폴리오로</button>

      {/* ── 1. 표지 ── */}
      <section className="ddream__cover">
        {/* 반짝 장식 */}
        <img src={sparkle} alt="" className="ddream__sparkle" />

        {/* 로고 (top-left) */}
        <div className="ddream__logo">
          <div className="ddream__logo-gear">
            <img src={gearIcon} alt="" className="ddream__gear ddream__gear--back" />
            <img src={gearIcon} alt="" className="ddream__gear ddream__gear--front" />
          </div>
          <div className="ddream__logo-text-wrap">
            <img src={logoTextSm} alt="두드림" className="ddream__logo-text" />
            <img src={vectorLineSm} alt="" className="ddream__logo-line" />
            <span className="ddream__logo-doodream">DOODREAM</span>
          </div>
          <img src={moonShape} alt="" className="ddream__moon" />
        </div>

        {/* 왼쪽 텍스트 */}
        <div className="ddream__cover-left">
          <h1 className="ddream__cover-title">
            Code /<br />&amp; Development
          </h1>
          <div className="ddream__cover-info">
            <p className="ddream__cover-subtitle">두드림 (Doo-Dream)&nbsp; 브랜드 런칭</p>
            <p className="ddream__cover-desc">
              두드림은 기계부품 제조 분야의 기술력을 바탕으로 미래를 지향하는 브랜드입니다.<br />
              로고는 '단단하게 두드린 금속'과 '미래를 두드림'의 의미를 담아, 견고함과 발전적인 이미지를 표현하였습니다.<br />
              컬러는 산업적 특성을 반영해 딥 블루 그레이(#2C3E50)와 라이트 실버 그레이(#C0C5CB)를 사용하여<br />
              신뢰감 있는 기술력과 금속 전문 브랜드의 이미지를 강조하였습니다.<br />
              정보가 자연스럽게 읽히도록 화면 구성을 정리하여, 사용성과 개발 효율을 함께 고려해 설계하였습니다.
            </p>
          </div>
          <div className="ddream__badge">
            <img src={toolBar} alt="" className="ddream__badge-bar-img" />
            <span className="ddream__badge-label">팀 작업, 전체 기여도 40%</span>
          </div>
        </div>

        {/* 오른쪽 무드보드 */}
        <div className="ddream__moodboard">
          <img src={moodboardBg} alt="" className="ddream__moodboard-bg" />

          {/* 컬러 팔레트 블록 */}
          <div className="ddream__palette">
            <div className="ddream__palette-col ddream__palette-col--main">
              <div className="ddream__palette-swatch ddream__palette-swatch--1" />
              <p className="ddream__palette-name">MAIN COLOR #465565</p>
            </div>
            <div className="ddream__palette-col ddream__palette-col--sub">
              <div className="ddream__palette-swatch ddream__palette-swatch--2" />
              <p className="ddream__palette-name">sub color #afb7bf</p>
              <div className="ddream__palette-swatch ddream__palette-swatch--3" />
              <p className="ddream__palette-name">sub color #7e8a94</p>
              <div className="ddream__palette-swatch ddream__palette-swatch--4" />
              <p className="ddream__palette-name">sub color #e9edf2</p>
            </div>
          </div>

          {/* 큰 로고 */}
          <div className="ddream__moodboard-logo">
            <img src={gearIcon} alt="" className="ddream__moodboard-gear ddream__moodboard-gear--back" />
            <img src={gearIcon} alt="" className="ddream__moodboard-gear ddream__moodboard-gear--front" />
            <div className="ddream__moodboard-logo-text">
              <img src={logoTextLg} alt="두드림" className="ddream__moodboard-text-img" />
              <img src={vectorLineLg} alt="" className="ddream__moodboard-line-img" />
              <span className="ddream__moodboard-doodream">DOODREAM</span>
            </div>
          </div>

          {/* 타입페이스 */}
          <div className="ddream__typeface">
            <p className="ddream__typeface-aa">Aa</p>
            <p className="ddream__typeface-sub">Noto Sans</p>
            <p className="ddream__typeface-chars">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn<br />Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
          </div>

          {/* 사진들 */}
          <img src={screwPhoto} alt="" className="ddream__moodboard-screw" />
          <img src={spinningPhoto} alt="" className="ddream__moodboard-spinning" />

          {/* 작은 컬러 블록들 */}
          <div className="ddream__deco-rect ddream__deco-rect--1" />
          <div className="ddream__deco-rect ddream__deco-rect--2" />
          <div className="ddream__deco-rect ddream__deco-rect--3" />
        </div>
      </section>

      {/* ── 2. 맡은 역할 / 와이어프레임 ── */}
      <section className="ddream__wireframe">
        <img src={page2Wireframe} alt="맡은 역할 및 와이어프레임" className="ddream__section-img" />
      </section>

      {/* ── 3. 코드 구현 페이지 ── */}
      <section className="ddream__mockup">
        <img src={page3Mockup} alt="코드 구현 페이지" className="ddream__section-img" />
      </section>
    </div>
  );
}
