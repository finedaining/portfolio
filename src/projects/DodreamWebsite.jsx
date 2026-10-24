import React from 'react';
import './DodreamWebsite.css';
import TopButton from '../components/TopButton';

const logoSvg        = "/images/dodream/logo.svg";
const moodboard      = "/images/dodream/moodboard.svg";
const sparkle        = "/images/dodream/sparkle.svg";

const figmaIcon       = "/images/dodream/figma-icon.png";

const wfWeb          = "/images/dodream/wireframe-web.svg";
const wfLogin        = "/images/dodream/wireframe-login.svg";
const wfShop         = "/images/dodream/wireframe-shop.svg";
const wfPurchase     = "/images/dodream/wireframe-purchase.svg";
const wfMy           = "/images/dodream/wireframe-my.svg";
const wfDashboard    = "/images/dodream/wireframe-dashboard.svg";

const browserMain   = "/images/dodream/ddr_web1.svg";
const browserShop   = "/images/dodream/ddr_web2.svg";
const browserDetail = "/images/dodream/ddr_web3.svg";

export default function DodreamWebsite({ onBack }) {
  return (
    <div className="ddream">
      <button className="ddream__back" onClick={onBack}>← Back to portfolio</button>

      {/* ── 1. 표지 ── */}
      <section className="ddream__cover">
        <img src={sparkle} alt="" className="ddream__sparkle" />
        <img src={logoSvg} alt="두드림" className="ddream__logo-svg" />

        <div className="ddream__cover-left">
          <h1 className="ddream__cover-title">
            Code <br />&amp; Development
          </h1>
          <div className="ddream__cover-info">
            <p className="ddream__cover-subtitle">두드림 (Doo-Dream)&nbsp; 브랜드 런칭</p>
            <p className="ddream__cover-desc">
              두드림은 기계·부품 제조 분야의 기술력을 바탕으로 미래를 지향하는 브랜드입니다.<br />
              로고는 ‘단단하게 두드린 금속’과 ‘미래를 두드림’의 의미를 담아 견고함과 발전적인 이미지를 표현하였습니다.<br />
              컬러는 산업적 특성을 반영해 딥 블루 그레이(#2C3E50)와 라이트 실버 그레이(#C0C5CB) 컬러를 사용하여
              신뢰감 있는 기술력과 금속 전문 브랜드의 이미지를 강조하였습니다.<br />
              정보가 자연스럽게 읽히도록 화면 구성을 정리하여 사용성과 개발 효율을 함께 고려해 설계하였습니다.
            </p>
          </div>
          <div className="ddream__badge">
            <div className="ddream__badge-bar-wrap">
              <div className="ddream__badge-bar">
                <div className="ddream__badge-fill ddream__badge-fill--40" />
                <div className="ddream__badge-dot ddream__badge-dot--40" />
              </div>
              <span className="ddream__badge-label">팀 작업, 전체 기여도 40%</span>
            </div>
          </div>
        </div>

        <div className="ddream__moodboard">
          <img src={moodboard} alt="무드보드" className="ddream__moodboard-img" />
        </div>
      </section>

      {/* ── 2. 맡은 역할 / 와이어프레임 ── */}
      <section className="ddream__wireframe">
        <img src={logoSvg} alt="두드림" className="ddream__wf-logo" />

        <div className="ddream__wireframe-left">
          <div className="ddream__wireframe-block">
            <h2 className="ddream__section-title">맡은 역할</h2>
            <div className="ddream__role-info">
              <p className="ddream__role-tag">[프론트엔드 및 디자인 전반 담당]</p>
              <div className="ddream__role-items">
                <p className="ddream__role-item">CSS 기반 스타일링과 레이아웃 정리</p>
                <p className="ddream__role-item">디바이스 환경을 고려한 반응형 UI 구현</p>
              </div>
            </div>
          </div>

          <div className="ddream__wireframe-block">
            <h2 className="ddream__section-title">와이어 프레임</h2>
            <p className="ddream__section-desc">
              와이어프레임은 흐름을 쉽게 이해할 수 있도록 최대한 단순하게 구성하였습니다.<br />
              정보는 한눈에 들어오도록 정리하고 개발 환경에서도 컴포넌트 단위로 분리하기 쉬운 구조를 고려하여 설계하였습니다.<br />
              각 페이지는 작업 효율과 데이터 가독성을 우선으로 구성하였으며 브랜드가 지향하는 ‘미래를 두드리는 기술’의 이미지를 부담 없이 전달되도록 표현하였습니다.
            </p>
          </div>

          <div className="ddream__badge">
            <img src={figmaIcon} alt="Figma" className="ddream__badge-icon" />
            <div className="ddream__badge-bar-wrap">
              <div className="ddream__badge-bar">
                <div className="ddream__badge-fill ddream__badge-fill--100" />
                <div className="ddream__badge-dot ddream__badge-dot--100" />
              </div>
              <span className="ddream__badge-label">피그마, 개인작업 100%</span>
            </div>
          </div>
        </div>

        <div className="ddream__wireframe-grid">
          <img src={wfWeb}       alt="메인 와이어프레임"     className="ddream__wf-img" />
          <img src={wfLogin}     alt="로그인 와이어프레임"   className="ddream__wf-img" />
          <img src={wfShop}      alt="쇼핑 와이어프레임"     className="ddream__wf-img" />
          <img src={wfPurchase}  alt="구매 와이어프레임"     className="ddream__wf-img" />
          <img src={wfMy}        alt="마이페이지 와이어프레임" className="ddream__wf-img" />
          <img src={wfDashboard} alt="대시보드 와이어프레임" className="ddream__wf-img" />
        </div>
      </section>

      {/* ── 3. 코드 구현 페이지 ── */}
      <section className="ddream__mockup">
        <img src={logoSvg} alt="두드림" className="ddream__wf-logo" />
        <p className="ddream__mockup-label">코드 구현 페이지</p>

        {/* 메인 브라우저 (좌측 크게) */}
        <div className="ddream__mockup-tag ddream__mockup-tag--main">
          <span className="ddream__mockup-tag-dot" />
          <div className="ddream__mockup-tag-text">
            <span>두드림 pc web</span>
            <span>[메인 페이지]</span>
          </div>
        </div>
        <div className="ddream__mockup-item ddream__mockup-item--main">
          <img src={browserMain} alt="두드림 메인 페이지" className="ddream__mockup-web" />
        </div>

        {/* 장바구니 브라우저 (우측 상단) */}
        <div className="ddream__mockup-tag ddream__mockup-tag--shop">
          <span className="ddream__mockup-tag-dot" />
          <div className="ddream__mockup-tag-text">
            <span>두드림 pc web</span>
            <span>[장바구니 페이지]</span>
          </div>
        </div>
        <div className="ddream__mockup-item ddream__mockup-item--shop">
          <img src={browserShop} alt="두드림 장바구니" className="ddream__mockup-web" />
        </div>

        {/* 구매상세 브라우저 (우측 하단) */}
        <div className="ddream__mockup-tag ddream__mockup-tag--detail">
          <span className="ddream__mockup-tag-dot" />
          <div className="ddream__mockup-tag-text">
            <span>두드림 pc web</span>
            <span>[구매 상세 페이지]</span>
          </div>
        </div>
        <div className="ddream__mockup-item ddream__mockup-item--detail">
          <img src={browserDetail} alt="두드림 구매 상세" className="ddream__mockup-web" />
        </div>

        <div className="ddream__badge ddream__badge--mockup">
          <img src={figmaIcon} alt="Figma" className="ddream__badge-icon" />
          <div className="ddream__badge-bar-wrap">
            <div className="ddream__badge-bar">
              <div className="ddream__badge-fill ddream__badge-fill--40" />
              <div className="ddream__badge-dot ddream__badge-dot--40" />
            </div>
            <span className="ddream__badge-label">피그마, 팀 작업 40%</span>
          </div>
        </div>
      </section>
      <TopButton />
    </div>
  );
}
