import React from 'react';
import './InobelWebsite.css';

const logo        = "/images/inovel/logo.svg";
const s2Phones    = "/images/inovel/s2-phones.png";
const s2Web       = "/images/inovel/s2-web.png";
const s2Bestseller = "/images/inovel/s2-bestseller.png";
const bgEclipse = "/images/inovel/bg-eclipse.svg";
const glassBig  = "/images/inovel/glass-big.svg";
const glassMini = "/images/inovel/glass-mini.svg";
const board1    = "/images/inovel/board1.svg";
const board2    = "/images/inovel/board2.svg";
const sunscreen = "/images/inovel/sunscreen.svg";

export default function InobelWebsite({ onBack }) {
  return (
    <div className="inov">
      <button className="inov__back" onClick={onBack}>← 포트폴리오로</button>

      <section className="inov__cover">

        <div className="inov__cover-left">
          <img src={bgEclipse} alt="" className="inov__bg-eclipse" />
          <img src={board1}    alt="" className="inov__board1" />
          <img src={board2}    alt="" className="inov__board2" />
          <img src={sunscreen} alt="" className="inov__sunscreen" />
          <img src={glassBig}  alt="" className="inov__glass-big" />
          <img src={glassMini} alt="" className="inov__glass-mini" />
          <img src={logo}      alt="innovelle" className="inov__logo" />
        </div>

        <div className="inov__cover-right">
          <h1 className="inov__cover-title">Branding</h1>
          <p className="inov__cover-sub">이노벨 (Innovelle) 브랜드 런칭</p>
          <p className="inov__cover-desc">
            이노벨(InnoVelle)은 클린 뷰티와 퓨어 뷰티의 가치를 지키며,<br />
            피부와 지구를 위한 건강한 뷰티 솔루션을 제공합니다.<br />
            깨끗한 성분과 투명한 제조 과정을 통해 인체에 유해한 성분을 배제하고,<br />
            친환경 패키지와 윤리적 원료 사용으로 환경을 고려한 제품을 선보입니다.<br />
            브랜드는 고객에게 진정성 있는 뷰티 경험을 제공하며, 지속 가능한 라이프스타일을 추구합니다.<br />
            다양한 제품 라인과 맞춤형 경험을 통해 피부에 최적화된 솔루션을 제공하며,<br />
            아름다움과 환경을 동시에 생각하는 브랜드를 만들고자 합니다.
          </p>
          <div className="inov__badge">
            <div className="inov__badge-bar-wrap">
              <div className="inov__badge-bar">
                <div className="inov__badge-fill" />
                <div className="inov__badge-dot" />
              </div>
              <span className="inov__badge-label">팀 작업, 전체 기여도 60%</span>
            </div>
          </div>
        </div>

      </section>

      {/* ── 2. 웹 디자인 ── */}
      <section className="inov__s2">
        <div className="inov__s2-left">
          <img src={logo} alt="innovelle" className="inov__s2-logo" />
          <img src={s2Phones} alt="" className="inov__s2-phones" />
          <div className="inov__s2-text">
            <h2 className="inov__s2-title">이노벨 pc/mobile web</h2>
            <p className="inov__cover-desc">
              메인 컬러인 주황색을 적극 활용해 브랜드 아이덴티티를 확고히 했으며,<br />
              '이노벨' 브랜드에 걸맞은 혁신적이고 에너제틱한 이미지를 표현하고자 했습니다.<br />
              또한 깔끔하고 모던한 느낌을 강조하고, '클린 뷰티, 퓨어 뷰티'에 어울리는 분위기에<br />
              맞춰 이노벨 패키지 목업 이미지를 함께 활용해 전체 디자인의 완성도를 높였습니다.
            </p>
            <p className="inov__cover-desc">
              모바일에서는 PC 버전의 구성을 유지하되, 작은 화면에서도 가독성과 사용 편의성을<br />
              높이기 위해 보다 직관적이고 터치 중심의 사용성을 반영한 UI로 구성하였습니다.
            </p>
            <div className="inov__badge">
              <div className="inov__badge-bar-wrap">
                <div className="inov__badge-bar">
                  <div className="inov__badge-fill inov__badge-fill--30" />
                  <div className="inov__badge-dot inov__badge-dot--30" />
                </div>
                <span className="inov__badge-label">피그마, 기여도 30%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="inov__s2-web">
          <img src={s2Web} alt="이노벨 pc 웹" />
        </div>

        <div className="inov__s2-right">
          <img src={s2Bestseller} alt="이노벨 베스트셀러" />
        </div>
      </section>
    </div>
  );
}
