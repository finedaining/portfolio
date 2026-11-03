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

const REVIEW_INFO = [
  { label: '기간', value: '2025.09 - 2025.10' },
  { label: '인원', value: '4명 (백엔드 / RPA·OCR / 프론트엔드 2)' },
  { label: '기술', value: 'React · Spring Boot · MariaDB · Python OCR · Brity RPA · Figma' },
];

const REVIEW = [
  {
    title: '성과',
    items: [
      '판매 사이트와 관리자 대시보드와 OCR과 RPA까지 이어지는 재고·판매 관리 시스템을 팀원들과 완성했습니다',
      '발주서 사진을 올리면 OCR로 글자를 읽어 제품 정보가 자동으로 입력되고 RPA로 매출 분석 보고서를 만들어 메일로 보내는 흐름을 만들었습니다',
      '기업 사용자와 관리자 화면을 나눠 로그인과 상품 주문부터 매출 대시보드와 제품 관리와 고객 관리까지 구현했습니다',
      '실제 재무 흐름을 반영한 목업 데이터를 써서 대시보드가 현실적인 수치를 보여주도록 했습니다',
    ],
  },
  {
    title: '배운 점',
    items: [
      '재무제표와 손익계산서를 DB로 관리하는 시스템까지 발전시키지 못한 점이 아쉬웠습니다',
      '회사와 상품 정보를 충분히 담지 못해서 실제 서비스처럼 만들려면 데이터 설계를 처음부터 더 꼼꼼히 해야 한다는 걸 배웠습니다',
    ],
  },
];

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
                <p className="ddream__role-item">두드림 로고 디자인</p>
                <p className="ddream__role-item">브랜드 컬러와 폰트를 정하고 피그마로 화면 레이아웃 설계</p>
                <p className="ddream__role-item">CSS로 전체 페이지 스타일과 레이아웃 정리</p>
                <p className="ddream__role-item">다양한 화면 크기에 맞춘 반응형 UI 구현</p>
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

      {/* ── 4. 성과 / 배운 점 ── */}
      <section className="ddream__review">
        <img src={logoSvg} alt="두드림" className="ddream__wf-logo" />

        <ul className="ddream__review-info">
          {REVIEW_INFO.map(({ label, value }) => (
            <li key={label} className="ddream__review-info-item">
              <span className="ddream__review-info-label">{label}</span>
              <span className="ddream__review-info-value">{value}</span>
            </li>
          ))}
        </ul>

        <div className="ddream__review-grid">
          {REVIEW.map(({ title, items }) => (
            <div key={title} className="ddream__review-block">
              <h2 className="ddream__section-title">{title}</h2>
              <ul className="ddream__review-list">
                {items.map((t) => (
                  <li key={t} className="ddream__review-item">{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <TopButton />
    </div>
  );
}
