import React from 'react';
import './JiguJavaWebsite.css';

const logo         = "/images/jigujava/logo.svg";
const coverCircles= "/images/jigujava/cover.svg";
const psIcon      = "/images/jigujava/ps-icon.png";
const figmaIcon   = "/images/jigujava/Figma-app.png";

/* PC 섹션 */
const pcBase      = "/images/jigujava/pc-mockup.svg";
const pcWin1      = "/images/jigujava/zigu-web-pc1.svg";
const pcWin2      = "/images/jigujava/zigu-web-pc2.svg";
const pcWin3      = "/images/jigujava/zigu-web-pc3.svg";
const pcWin4      = "/images/jigujava/zigu-web-pc4.svg";

/* 모바일 웹 섹션 */
const mobileBg1   = "/images/jigujava/bg1.svg";
const mobileBg2   = "/images/jigujava/bg2.svg";
const phoneFull   = "/images/jigujava/zigu-web-phone-long.png";
const phone1      = "/images/jigujava/zigu-web-phone1.png";
const phone2      = "/images/jigujava/zigu-web-phone2.svg";

/* 모바일 앱 섹션 */
const appPhone1   = "/images/jigujava/zigu-app-1.png";
const appPhone2   = "/images/jigujava/zigu-app-2.png";
const appPhone3   = "/images/jigujava/zigu-app-3.png";
const appPhone4   = "/images/jigujava/zigu-app-4.png";
const appIcon     = "/images/jigujava/zigu-app-icon.svg";
const appIos      = "/images/jigujava/zigu-app-ios.svg";

export default function JiguJavaWebsite({ onBack }) {
  return (
    <div className="jigu">
      <button className="jigu__back" onClick={onBack}>← 포트폴리오로</button>

      {/* ── 1. 표지 / 브랜딩 ── */}
      <section className="jigu__cover">
        <img src={logo} alt="지구자바" className="jigu__logo" />

        <div className="jigu__cover-left">
          <h1 className="jigu__cover-title">Branding</h1>
          <div className="jigu__cover-info">
            <p className="jigu__cover-subtitle">지구자바 (zigu zava) 브랜드 런칭</p>
            <p className="jigu__cover-desc">
              지구자바는 지구를 위한 지속 가능한 삶을 지향하는 친환경 제로 웨이스트 브랜드입니다.
              윤리적인 소비와 환경 보호를 핵심 가치로 삼아, 일상에서 쉽게 실천할 수 있는 친환경 굿즈를 제공하고,
              다양한 캠페인을 통해 제로 웨이스트 문화를 확산시킵니다. 지구자바는 작은 변화가 큰 변화를 만든다는 믿음으로,
              함께 더 나은 지구를 만들어가는 여정을 이어가고 있습니다.
            </p>
          </div>
        </div>

        <div className="jigu__cover-right">
          <img src={coverCircles} alt="" className="jigu__cover-circles" />
        </div>

        <div className="jigu__badge">
          <div className="jigu__badge-bar-wrap">
            <div className="jigu__badge-bar">
              <div className="jigu__badge-fill" />
              <div className="jigu__badge-dot" />
            </div>
            <span className="jigu__badge-label">팀 작업, 전체 기여도 75%</span>
          </div>
        </div>
      </section>

      {/* ── 2. PC 웹 (레이어 순서 변경 반영 완료) ── */}
      <section className="jigu__pc">
        <img src={logo} alt="지구자바" className="jigu__logo jigu__logo--dark" />

        <div className="jigu__pc-stage">
          {/* 각 요소의 겹침 관계는 CSS의 z-index에 설정되어 통제됩니다 */}
          <img src={pcWin1} alt="" className="jigu__pc-win jigu__pc-win--1" />
          <img src={pcBase} alt="" className="jigu__pc-base" />
          <img src={pcWin4} alt="" className="jigu__pc-win jigu__pc-win--4" />
          <img src={pcWin3} alt="" className="jigu__pc-win jigu__pc-win--3" />
          <img src={pcWin2} alt="" className="jigu__pc-win jigu__pc-win--2" />
        </div>

        <p className="jigu__pc-label">지구자바 pc web</p>

        <div className="jigu__badge">
          <img src={psIcon} alt="Photoshop" className="jigu__badge-icon" />
          <div className="jigu__badge-bar-wrap">
            <div className="jigu__badge-bar">
              <div className="jigu__badge-fill" />
              <div className="jigu__badge-dot" />
            </div>
            <span className="jigu__badge-label">포토샵, 개인작업 100%</span>
          </div>
        </div>
      </section>

      {/* ── 3. 모바일 웹 ── */}
      <section className="jigu__mobile">
        <img src={logo} alt="지구자바" className="jigu__logo jigu__logo--dark" />

        <div className="jigu__mobile-stage">
          <img src={mobileBg2} alt="" className="jigu__mobile-bg jigu__mobile-bg--2" />
          <img src={mobileBg1} alt="" className="jigu__mobile-bg jigu__mobile-bg--1" />
          <img src={phone2} alt="" className="jigu__mobile-phone jigu__mobile-phone--back" />
          <div className="jigu__mobile-scroll-wrap">
            <img src={phoneFull} alt="" className="jigu__mobile-phone--full" />
          </div>
          <img src={phone1} alt="" className="jigu__mobile-phone jigu__mobile-phone--front" />
        </div>


        <div className="jigu__mobile-right">
          <h2 className="jigu__section-title">지구자바 mobile web</h2>
          <p className="jigu__section-desc">
            지구자바는 환경 보호 메시지를 담기 위해 초록색을 메인 컬러로 활용하여
            자연과 지속 가능성을 시각적으로 강조했습니다.
            브랜드만의 정체성을 더욱 강화하기 위해 3D 로고 그래픽과 귀여운 캐릭터 디자인을 적용해
            전체적인 톤앤매너의 통일성을 높였습니다.
            이러한 그래픽 요소들은 친근하고 재미있는 분위기를 주면서도,
            브랜드의 전문성과 신뢰도를 유지하는 데에 중요한 역할을 합니다.
          </p>
          <p className="jigu__section-desc">
            또한 모바일 환경에서도 시선이 잘 머물 수 있도록 직관적이고 독창적인 비주얼 구조를 설계했습니다.
            전체적으로 깔끔하고 정돈된 레이아웃을 유지해 사용자들이 브랜드의 메시지와 감성을
            명확하게 경험할 수 있도록 디자인하였습니다.
          </p>

          <div className="jigu__badge">
            <img src={psIcon} alt="Photoshop" className="jigu__badge-icon" />
            <div className="jigu__badge-bar-wrap">
              <div className="jigu__badge-bar">
                <div className="jigu__badge-fill" />
                <div className="jigu__badge-dot" />
              </div>
              <span className="jigu__badge-label">포토샵, 개인작업 100%</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. 모바일 앱 ── */}
      <section className="jigu__app">
        <img src={logo} alt="지구자바" className="jigu__logo" />

        <img src={appIos} alt="" className="jigu__app-ios-bg" />

        <div className="jigu__app-stage">
          <img src={appPhone4} alt="" className="jigu__app-phone jigu__app-phone--4" />
          <img src={appPhone3} alt="" className="jigu__app-phone jigu__app-phone--3" />
          <img src={appPhone2} alt="" className="jigu__app-phone jigu__app-phone--2" />
          <img src={appPhone1} alt="" className="jigu__app-phone jigu__app-phone--1" />
        </div>

        <div className="jigu__app-right">
          <img src={appIcon} alt="지구자바 앱 아이콘" className="jigu__app-icon" />
          <h2 className="jigu__section-title jigu__section-title--white">지구자바 mobile app</h2>
          <p className="jigu__section-desc jigu__section-desc--white">
            지구자바는 직관적인 UI·UX 구조와 사용자 중심 인터페이스로 설계하여
            사용자가 앱을 통해 일상 속에서 친환경 라이프를 실천할 수 있도록 했습니다.
            플로깅과 제로 웨이스트 챌린지에 참여해 리워드를 적립할 수 있도록 service 흐름을 구성했으며,
            적립된 포인트는 지구자바 제품 구매 및 할인에 사용할 수 있도록 리워드 시스템으로 설계했습니다.
            또한 자연 친화적인 이미지를 전달하기 위해 딥 그린 컬러(#178A3B)를 메인 컬러로 적용하고,
            지구자바 캐릭터 디자인을 더해 브랜드 아이덴티티와 개성을 살렸습니다.
          </p>

          <div className="jigu__badge">
            <img src={figmaIcon} alt="Figma" className="jigu__badge-icon" />
            <div className="jigu__badge-bar-wrap">
              <div className="jigu__badge-bar">
                <div className="jigu__badge-fill" />
                <div className="jigu__badge-dot" />
              </div>
              <span className="jigu__badge-label">피그마, 개인작업 100%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}