import React from 'react';
import './VintageHouseWebsite.css';

/* ── 표지 ── */
const coverPhoto1   = "/images/vintagehouse/cover-photo1.png";
const coverPhoto2   = "/images/vintagehouse/cover-photo2.png";
const coverPhoto3   = "/images/vintagehouse/cover-photo3.png";
const coverPhoto4   = "/images/vintagehouse/cover-photo4.png";
const coverLogoBox  = "/images/vintagehouse/cover-logo-box.png";
const coverPalette  = "/images/vintagehouse/cover-palette.png";
const VhausBg  = "/images/vintagehouse/bg.svg";

/* ── 와이어프레임 / 역할 ── */
const wireframeMain     = "/images/vintagehouse/wireframe-main.png";
const wireframeCategory = "/images/vintagehouse/wireframe-category.png";
const wireframeEvent    = "/images/vintagehouse/wireframe-event.png";

/* ── 웹 목업 ── */
const webMockupMain  = "/images/vintagehouse/web-mockup-main.png";
const webMockupEvent = "/images/vintagehouse/web-mockup-event.png";
const decoRose       = "/images/vintagehouse/deco-rose.png";
const decoPastry     = "/images/vintagehouse/deco-pastry.png";
const decoPlant      = "/images/vintagehouse/deco-plant.png";
const decoLeaf       = "/images/vintagehouse/deco-leaf.png";
const decoTeacup     = "/images/vintagehouse/deco-teacup.png";
const figmaIcon      = "/images/vintagehouse/Figma-app.png";

export default function VintageHouseWebsite({ onBack }) {
  return (
    <div className="vhaus">
      <button className="vhaus__back" onClick={onBack}>← 포트폴리오로</button>

      {/* ── 1. 표지 / 브랜딩 ── */}
      <section className="vhaus__cover">
        <img src={VhausBg} alt="" className="vhaus__bg" />
        <span className="vhaus__cover-logo">vintage haus</span>

        <div className="vhaus__cover-left">
          <h1 className="vhaus__cover-title">
            Code
            <br /> &amp; Development
          </h1>
          <div className="vhaus__cover-info">
            <p className="vhaus__cover-subtitle">빈티지 하우스 (vintage haus)&nbsp; 브랜드 런칭</p>
            <p className="vhaus__cover-desc">
              빈티지 하우스(Vintage Haus)는 시간의 흔적이 담긴 따뜻한 아름다움을 전하는 프리미엄 빈티지 가구 브랜드입니다.<br />
              베이지 컬러(#F1EADA)와 딥 브라운 컬러(#584738)를 중심으로 구성하여 차분하고 코지한 무드를 표현하고자 하였습니다.<br />
              폰트는 Zen Old Mincho와 Noto Sans를 사용해 고풍스러운 감성을 유지하면서도 가독성을 고려해 구성하였습니다.<br />
              직관적인 화면 구성과 반응형 레이아웃을 적용해 사용 편의성을 높였으며,<br />
              감성적인 이미지와 톤앤매너를 통해 빈티지 하우스의 브랜드 아이덴티티를 전달하고자 하였습니다.
            </p>
          </div>

          <div className="vhaus__badge">
            <div className="vhaus__badge-bar-wrap">
              <div className="vhaus__badge-bar">
                <div className="vhaus__badge-fill" />
                <div className="vhaus__badge-dot" />
              </div>
              <span className="vhaus__badge-label">팀 작업, 전체 기여도 40%</span>
            </div>
          </div>
        </div>

        <div className="vhaus__cover-right">
          <img src={coverPhoto1} alt="" className="vhaus__cover-photo vhaus__cover-photo--1" />
          <img src={coverPhoto2} alt="" className="vhaus__cover-photo vhaus__cover-photo--2" />
          <img src={coverPhoto3} alt="" className="vhaus__cover-photo vhaus__cover-photo--3" />
          <img src={coverPhoto4} alt="" className="vhaus__cover-photo vhaus__cover-photo--4" />
          <img src={coverLogoBox}  alt="VINTAGE HAUS" className="vhaus__cover-logo-box" />
          <img src={coverPalette}  alt="Color Palette" className="vhaus__cover-palette" />
        </div>
      </section>

      {/* ── 2. 맡은 역할 / 와이어프레임 ── */}
      <section className="vhaus__wireframe">
        <span className="vhaus__wireframe-logo">vintage haus</span>

        <div className="vhaus__wireframe-stage">
          <img src={wireframeMain}     alt="" className="vhaus__wf-img vhaus__wf-img--main" />
          <img src={wireframeCategory} alt="" className="vhaus__wf-img vhaus__wf-img--category" />
          <img src={wireframeEvent}    alt="" className="vhaus__wf-img vhaus__wf-img--event" />
        </div>

        <div className="vhaus__wireframe-right">
          <div className="vhaus__wireframe-block">
            <h2 className="vhaus__section-title">맡은 역할</h2>
            <div className="vhaus__role-info">
              <p className="vhaus__role-tag">[프론트엔드 및 디자인 전반 담당]</p>
              <div className="vhaus__role-items">
                <p className="vhaus__role-item">인터랙션 요소 구현</p>
                <p className="vhaus__role-item">메인 및 이벤트 페이지 UI 설계</p>
              </div>
            </div>
          </div>

          <div className="vhaus__wireframe-block">
            <h2 className="vhaus__section-title">와이어 프레임</h2>
            <p className="vhaus__section-desc">
              빈티지 하우스의 와이어프레임은 사용자 흐름을 중심으로 핵심 콘텐츠가
              자연스럽게 이어지도록 설계했습니다.<br />
              UI/UX 관점에서 반응형 레이아웃과 간결한 화면 구조를 적용해 정보 탐색이 쉽도록 구성했으며,<br />
              개발 측면에서는 기능별로 구조를 나누어 구성해 유지보수와 확장이 용이하도록 고려했습니다.<br />
              카테고리, 이벤트, 쿠폰 등 주요 요소를 명확하게 배치해 정보 접근성을 높이고,<br />
              이후 디자인 적용 시 브랜드 무드를 표현할 수 있는 구조로 잡아 보았습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. 코드 구현 페이지 (웹 목업) ── */}
      <section className="vhaus__mockup">
        <span className="vhaus__mockup-logo">vintage haus</span>
        <p className="vhaus__mockup-label">코드 구현 페이지</p>

        <img src={decoRose}    alt="" className="vhaus__deco vhaus__deco--rose" />
        <img src={decoPastry}  alt="" className="vhaus__deco vhaus__deco--pastry" />
        <img src={decoPlant}   alt="" className="vhaus__deco vhaus__deco--plant" />
        <img src={decoLeaf}    alt="" className="vhaus__deco vhaus__deco--leaf" />
        <img src={decoTeacup}  alt="" className="vhaus__deco vhaus__deco--teacup" />

        <div className="vhaus__mockup-item vhaus__mockup-item--main">
          <div className="vhaus__mockup-tag">
            <p className="vhaus__mockup-tag-text">빈티지 하우스 pc web<br />[메인 페이지]</p>
          </div>
          <img src={webMockupMain} alt="빈티지하우스 메인 페이지" className="vhaus__mockup-browser" />
        </div>

        <div className="vhaus__mockup-item vhaus__mockup-item--event">
          <div className="vhaus__mockup-tag">
            <p className="vhaus__mockup-tag-text">빈티지 하우스 pc web<br />[상세 페이지]</p>
          </div>
          <img src={webMockupEvent} alt="빈티지하우스 상세 페이지" className="vhaus__mockup-browser" />
        </div>

        <div className="vhaus__badge vhaus__badge--mockup">
          <img src={figmaIcon} alt="Figma" className="vhaus__badge-icon" />
          <div className="vhaus__badge-bar-wrap">
            <div className="vhaus__badge-bar">
              <div className="vhaus__badge-fill" />
              <div className="vhaus__badge-dot" />
            </div>
            <span className="vhaus__badge-label">피그마, 개인작업 100%</span>
          </div>
        </div>
      </section>
    </div>
  );
}
