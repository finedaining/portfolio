import React from 'react';
import './JiguJavaWebsite.css';

const logo        = "/images/jigujava/logo.svg";
const coverCircles= "/images/jigujava/cover-circles.png";
const pcMockup    = "/images/jigujava/pc-mockup.png";
const mobileMock  = "/images/jigujava/mobile-mockup.png";
const appMockup   = "/images/jigujava/app-mockup.png";
const appIcon     = "/images/jigujava/app-icon.svg";
const psIcon      = "/images/jigujava/ps-icon.png";
const figmaIcon   = "/images/jigujava/Figma-app.png";

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

      {/* ── 2. PC 웹 ── */}
      <section className="jigu__pc">
        <img src={logo} alt="지구자바" className="jigu__logo jigu__logo--dark" />

        <div className="jigu__pc-mockup-wrap">
          <img src={pcMockup} alt="지구자바 pc 웹 목업" className="jigu__pc-mockup" />
        </div>

        <p className="jigu__pc-label">지구자바 pc web</p>

        <div className="jigu__badge jigu__badge--bottom-left">
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

        <div className="jigu__mobile-left">
          <img src={mobileMock} alt="지구자바 모바일 웹 목업" className="jigu__mobile-mockup" />
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

          <div className="jigu__badge jigu__badge--inline">
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

        <div className="jigu__app-left">
          <img src={appMockup} alt="지구자바 앱 목업" className="jigu__app-mockup" />
        </div>

        <div className="jigu__app-right">
          <img src={appIcon} alt="지구자바 앱 아이콘" className="jigu__app-icon" />
          <h2 className="jigu__section-title jigu__section-title--white">지구자바 mobile app</h2>
          <p className="jigu__section-desc jigu__section-desc--white">
            지구자바는 직관적인 UI·UX 구조와 사용자 중심 인터페이스로 설계하여
            사용자가 앱을 통해 일상 속에서 친환경 라이프를 실천할 수 있도록 했습니다.
            플로깅과 제로 웨이스트 챌린지에 참여해 리워드를 적립할 수 있도록 서비스 흐름을 구성했으며,
            적립된 포인트는 지구자바 제품 구매 및 할인에 사용할 수 있도록 리워드 시스템으로 설계했습니다.
            또한 자연 친화적인 이미지를 전달하기 위해 딥 그린 컬러(#178A3B)를 메인 컬러로 적용하고,
            지구자바 캐릭터 디자인을 더해 브랜드 아이덴티티와 개성을 살렸습니다.
          </p>

          <div className="jigu__badge jigu__badge--inline">
            <img src={figmaIcon} alt="Figma" className="jigu__badge-icon" />
            <div className="jigu__badge-bar-wrap">
              <div className="jigu__badge-bar">
                <div className="jigu__badge-fill" />
                <div className="jigu__badge-dot" />
              </div>
              <span className="jigu__badge-label jigu__badge-label--white">피그마, 개인작업 100%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
