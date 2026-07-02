import React from 'react';
import './DodreamWebsite.css';

const logoSvg        = "/images/dodream/logo.svg";
const moodboard      = "/images/dodream/moodboard.svg";
const toolBar        = "/images/dodream/tool-bar.svg";
const sparkle        = "/images/dodream/sparkle.svg";

const wfWeb          = "/images/dodream/wireframe-web.svg";
const wfLogin        = "/images/dodream/wireframe-login.svg";
const wfShop         = "/images/dodream/wireframe-shop.svg";
const wfPurchase     = "/images/dodream/wireframe-purchase.svg";
const wfMy           = "/images/dodream/wireframe-my.svg";
const wfDashboard    = "/images/dodream/wireframe-dashboard.svg";

const webMain        = "/images/dodream/web-main.svg";
const webShop        = "/images/dodream/web-shop.svg";
const webShopdetail  = "/images/dodream/web-shopdetail.svg";

export default function DodreamWebsite({ onBack }) {
  return (
    <div className="ddream">
      <button className="ddream__back" onClick={onBack}>← 포트폴리오로</button>

      {/* ── 1. 표지 ── */}
      <section className="ddream__cover">
        <img src={sparkle} alt="" className="ddream__sparkle" />
        <img src={logoSvg} alt="두드림" className="ddream__logo-svg" />

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
                <p className="ddream__role-item">브랜드 아이덴티티 수립 및 UI 설계</p>
                <p className="ddream__role-item">메인 및 제품 상세 페이지 디자인</p>
                <p className="ddream__role-item">반응형 레이아웃 구현</p>
              </div>
            </div>
          </div>

          <div className="ddream__wireframe-block">
            <h2 className="ddream__section-title">와이어 프레임</h2>
            <p className="ddream__section-desc">
              두드림의 와이어프레임은 기계부품 전문 브랜드로서 신뢰감과 기술력을 직관적으로 전달하는 것을 목표로 설계했습니다.<br />
              UI/UX 관점에서 제품 탐색 흐름을 중심으로 핵심 정보가 자연스럽게 이어지도록 구성하였으며,<br />
              개발 측면에서는 컴포넌트 기반 구조로 나누어 유지보수와 확장이 용이하도록 고려했습니다.
            </p>
          </div>

          <div className="ddream__badge">
            <img src={toolBar} alt="" className="ddream__badge-bar-img" />
            <span className="ddream__badge-label">피그마, 개인작업 100%</span>
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

        <div className="ddream__mockup-content">
          <div className="ddream__mockup-main-wrap">
            <div className="ddream__mockup-tag-box">
              <span className="ddream__mockup-tag-line">두드림 pc web</span>
              <span className="ddream__mockup-tag-line">[메인 페이지]</span>
            </div>
            <img src={webMain} alt="두드림 메인 페이지" className="ddream__mockup-web" />
          </div>

          <div className="ddream__mockup-sub-wrap">
            <div className="ddream__mockup-sub-item">
              <div className="ddream__mockup-tag-box">
                <span className="ddream__mockup-tag-line">두드림 pc web</span>
                <span className="ddream__mockup-tag-line">[장바구니 페이지]</span>
              </div>
              <img src={webShop} alt="두드림 장바구니" className="ddream__mockup-web" />
            </div>
            <div className="ddream__mockup-sub-item">
              <div className="ddream__mockup-tag-box">
                <span className="ddream__mockup-tag-line">두드림 pc web</span>
                <span className="ddream__mockup-tag-line">[구매 상세 페이지]</span>
              </div>
              <img src={webShopdetail} alt="두드림 구매 상세" className="ddream__mockup-web" />
            </div>
          </div>
        </div>

        <div className="ddream__badge ddream__badge--mockup">
          <img src={toolBar} alt="" className="ddream__badge-bar-img" />
          <span className="ddream__badge-label">피그마, 팀 작업 40%</span>
        </div>
      </section>
    </div>
  );
}
