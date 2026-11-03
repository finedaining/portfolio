import React from 'react';
import './VintageHouseWebsite.css';
import TopButton from '../components/TopButton';

/* ── 표지 ── */
const coverPhoto1   = "/images/vintagehouse/cover-photo1.png";
const coverPhoto2   = "/images/vintagehouse/cover-photo2.png";
const coverPhoto3   = "/images/vintagehouse/cover-photo3.png";
const coverPhoto4   = "/images/vintagehouse/cover-photo4.png";
const coverLogoBox  = "/images/vintagehouse/cover-logo-box.png";
const coverPalette  = "/images/vintagehouse/cover-palette.png";
const VhausBg  = "/images/vintagehouse/bg.svg";

/* ── 와이어프레임 / 역할 ── */
const wireframeMain  = "/images/vintagehouse/wireframe-main.svg";
const wireframeEvent = "/images/vintagehouse/wireframe-event.svg";

/* ── 웹 목업 ── */
const cursorTop    = "/images/vintagehouse/cursor-top.png";
const cursorBottom = "/images/vintagehouse/cursor-bottom.png";
const webMain        = "/images/vintagehouse/web-main.svg";
const webEvent       = "/images/vintagehouse/web-event.svg";
const webMainMockup  = "/images/vintagehouse/web-main-mockup.svg";
const webEventMockup = "/images/vintagehouse/web-event-mockup.svg";
const decoRose       = "/images/vintagehouse/deco-rose.png";
const decoPastry     = "/images/vintagehouse/deco-pastry.png";
const decoPlant      = "/images/vintagehouse/deco-plant.png";
const decoLeaf       = "/images/vintagehouse/deco-leaf.png";
const decoTeacup     = "/images/vintagehouse/deco-teacup.png";
const decoChair      = "/images/vintagehouse/deco-chair.png";
const figmaIcon      = "/images/vintagehouse/Figma-app.png";

const REVIEW_INFO = [
  { label: '기간', value: '2025.05.26 - 2025.06.18' },
  { label: '인원', value: '4명 (프론트엔드 2 / 백엔드 2)' },
  { label: '기술', value: 'React · Node.js · MariaDB · Figma · GitHub' },
];

const REVIEW = [
  {
    title: '성과',
    items: [
      '기획부터 디자인과 개발과 DB 연동까지 실제 쇼핑몰처럼 돌아가는 사이트를 팀원들과 완성했습니다',
      '매일 작업이 끝나면 진행 상황을 공유하면서 일정을 조정했고 덕분에 협업이 원활했습니다',
      'React와 GitHub와 데이터베이스를 처음 써보면서 각각의 역할과 흐름을 직접 익혔습니다',
    ],
  },
  {
    title: '배운 점',
    items: [
      '처음 디자인할 때 넣고 싶던 기능이 많았는데 시간이 부족해 여러 개를 빼야 했습니다',
      '공통 디자인을 먼저 정하지 않고 각자 작업해서 나중에 수정할 때 어려움이 있었습니다',
      'GitHub를 처음 써서 충돌을 해결하는 데 시간이 많이 들었고 다음엔 브랜치 관리부터 제대로 익히고 싶습니다',
    ],
  },
];

export default function VintageHouseWebsite({ onBack }) {
  return (
    <div className="vhaus">
      <button className="vhaus__back" onClick={onBack}>← Back to portfolio</button>

      {/* ── 1. 표지 / 브랜딩 ── */}
      <section className="vhaus__cover">
        <img src={VhausBg} alt="" className="vhaus__bg" />
        <span className="vhaus__cover-logo">vintage haus</span>

        <div className="vhaus__cover-left">
          <h1 className="vhaus__cover-title">
            Code <br/> &amp; Development
          </h1>
          <div className="vhaus__cover-info">
            <p className="vhaus__cover-subtitle">빈티지 하우스 (vintage haus)&nbsp; 브랜드 런칭</p>
            <p className="vhaus__cover-desc">
              빈티지 하우스(Vintage Haus)는 시간의 흔적이 담긴 따뜻한 아름다움을 전하는 프리미엄 빈티지 가구 브랜드입니다.<br />
              베이지 컬러(#F1EADA)와 딥 브라운 컬러(#584738)를 중심으로 차분하고 코지한 무드를 전달하고자 하였습니다.
              폰트는 Zen Old Mincho와 Noto Sans를 사용해 고풍스러운 감성을 유지하고, 가독성도 신경썼습니다.<br />
              직관적인 화면 구성과 인터랙션을 적용해 어렵지 않게 접근할 수 있게 하였으며<br />
              감성적인 이미지들로 빈티지 하우스의 브랜드 아이덴티티를 채우고자 하였습니다.
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
          <p className="vhaus__cover-caption vhaus__cover-caption--1">VINTAGE &amp; COZY<br />DESIGN CONCEPT</p>
          <p className="vhaus__cover-caption vhaus__cover-caption--2">WEB DESIGN<br />CODING PROJECT</p>
          <p className="vhaus__cover-caption vhaus__cover-caption--3">BRAND<br />LUNCHING</p>
          <p className="vhaus__cover-caption vhaus__cover-caption--4">(color palette)</p>
          <p className="vhaus__cover-caption vhaus__cover-caption--5">(logo system)</p>
        </div>
      </section>

      {/* ── 2. 맡은 역할 / 와이어프레임 ── */}
      <section className="vhaus__wireframe">
        <span className="vhaus__wireframe-logo">vintage haus</span>

        <div className="vhaus__wireframe-stage">
          <img src={wireframeMain}  alt="" className="vhaus__wf-img vhaus__wf-img--main" />
          <img src={wireframeEvent} alt="" className="vhaus__wf-img vhaus__wf-img--event" />
        </div>

        <div className="vhaus__wireframe-right">
          <div className="vhaus__wireframe-block">
            <h2 className="vhaus__section-title">맡은 역할</h2>
            <div className="vhaus__role-info">
              <p className="vhaus__role-tag">[프론트엔드 및 디자인 전반 담당]</p>
              <div className="vhaus__role-items">
                <p className="vhaus__role-item">메인 페이지와 이벤트 페이지 디자인 및 React 구현</p>
                <p className="vhaus__role-item">자동 슬라이드와 캐로셀과 텍스트 마키 같은 인터랙션 구현</p>
                <p className="vhaus__role-item">마우스를 올리면 사진이 바뀌는 효과와 가로 스크롤 구현</p>
                <p className="vhaus__role-item">이벤트 팝업 디자인 및 이벤트 페이지 연결</p>
              </div>
            </div>
          </div>

          <div className="vhaus__wireframe-block">
            <h2 className="vhaus__section-title">와이어 프레임</h2>
            <p className="vhaus__section-desc">
              빈티지 하우스의 와이어프레임은 사용자 흐름을 중심으로 핵심 콘텐츠가 자연스럽게 이어지도록 설계했습니다.
              UI UX 관점에서 인터랙션과 간결한 화면 구조를 적용해 필요한 정보를 찾기 편하게끔 구성했으며
              개발 측면에서는 기능별로 구조를 나누어 구성해 유지보수와 확장이 용이하도록 고려했습니다.
              카테고리, 이벤트, 쿠폰 등 주요 요소를 명확하게 배치해 정보 접근성을 높이고<br />
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
        <img src={decoChair}   alt="" className="vhaus__deco vhaus__deco--chair" />

        {/* 메인 텍스트 레이블 — 브라우저와 독립 */}
        <div className="vhaus__mockup-tag vhaus__mockup-tag--main">
          <div className="vhaus__mockup-tag-inner">
            <img src={cursorTop} alt="" className="vhaus__cursor-img vhaus__cursor-img--tl" />
            <div className="vhaus__mockup-tag-lines">
              <span className="vhaus__mockup-tag-line">빈티지 하우스 pc web</span>
              <span className="vhaus__mockup-tag-line">[메인 페이지]</span>
            </div>
            <img src={cursorBottom} alt="" className="vhaus__cursor-img vhaus__cursor-img--br" />
          </div>
        </div>

        {/* 메인 브라우저 목업 */}
        <div className="vhaus__mockup-item vhaus__mockup-item--main">
          <img src={webMainMockup} alt="빈티지하우스 메인 브라우저" className="vhaus__mockup-browser" />
        </div>

        {/* 메인 스크롤 (긴 페이지) */}
        <div className="vhaus__mockup-scroll-wrap vhaus__mockup-scroll-wrap--main">
          <img src={webMain} alt="빈티지하우스 메인 페이지" className="vhaus__mockup-scroll" />
        </div>

        {/* 상세 텍스트 레이블 — 브라우저와 독립 */}
        <div className="vhaus__mockup-tag vhaus__mockup-tag--event">
          <div className="vhaus__mockup-tag-inner">
            <img src={cursorTop} alt="" className="vhaus__cursor-img vhaus__cursor-img--tl" />
            <div className="vhaus__mockup-tag-lines">
              <span className="vhaus__mockup-tag-line">빈티지 하우스 pc web</span>
              <span className="vhaus__mockup-tag-line">[이벤트 페이지]</span>
            </div>
            <img src={cursorBottom} alt="" className="vhaus__cursor-img vhaus__cursor-img--br" />
          </div>
        </div>

        {/* 상세 브라우저 목업 */}
        <div className="vhaus__mockup-item vhaus__mockup-item--event">
          <img src={webEventMockup} alt="빈티지하우스 이벤트 브라우저" className="vhaus__mockup-browser" />
        </div>

        {/* 상세 스크롤 (긴 페이지) */}
        <div className="vhaus__mockup-scroll-wrap vhaus__mockup-scroll-wrap--event">
          <img src={webEvent} alt="빈티지하우스 이벤트 페이지" className="vhaus__mockup-scroll" />
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

      {/* ── 4. 성과 / 배운 점 ── */}
      <section className="vhaus__review">
        <span className="vhaus__wireframe-logo">vintage haus</span>

        <ul className="vhaus__review-info">
          {REVIEW_INFO.map(({ label, value }) => (
            <li key={label} className="vhaus__review-info-item">
              <span className="vhaus__review-info-label">{label}</span>
              <span className="vhaus__review-info-value">{value}</span>
            </li>
          ))}
        </ul>

        <div className="vhaus__review-grid">
          {REVIEW.map(({ title, items }) => (
            <div key={title} className="vhaus__review-block">
              <h2 className="vhaus__section-title">{title}</h2>
              <ul className="vhaus__review-list">
                {items.map((t) => (
                  <li key={t} className="vhaus__review-item">{t}</li>
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
