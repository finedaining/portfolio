import React from 'react';
import './InobelWebsite.css';

const logo      = "/images/inovel/logo.svg";
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
    </div>
  );
}
