import React from 'react';
import './DonghaeWebsite.css';

const macWeb = "https://www.figma.com/api/mcp/asset/76a43c6c-c81f-40eb-bece-39c1a004534e";
const bgLeft = "/images/donghae/browser/2020280070-김다인-웹-pc-메인시안 4.png";
const bgRight = "/images/donghae/browser/2020280070-김다인-웹-pc-메인시안 5.png";
const laptopFrame = "/images/donghae/browser/mac.png";
const phoneFrame = "/images/donghae/iphone.png";

// 피그마에서 가져온 새 아이폰 목업 에셋 (표지 섹션)
const figmaPhoneFrame = "https://www.figma.com/api/mcp/asset/2fc0eae4-ba85-447d-b9f1-a36dcf12e9f8";
const figmaPhoneScreen = "https://www.figma.com/api/mcp/asset/5f450d2c-20c0-4437-84b6-1aa0a4e787e0";
const figmaCamera = "https://www.figma.com/api/mcp/asset/b0977398-9d85-454c-921c-ecb58ea4f34f";

// 피그마 설명 섹션 에셋
const subPcPage = "https://www.figma.com/api/mcp/asset/be16f47f-8752-427d-919b-b24956488daa";
const subMobilePage = "https://www.figma.com/api/mcp/asset/13697420-bab5-4d12-8e8a-634f782839d0";
const subIphoneFrame = "https://www.figma.com/api/mcp/asset/2f6434e3-d13c-4d6f-9460-a3cc8ceec2cc";
const subCamera = "https://www.figma.com/api/mcp/asset/d825226e-5ce2-4ceb-9f6d-5e25279d9702";
const psIconBg = "https://www.figma.com/api/mcp/asset/11414a26-a93c-44f1-b9ff-a69231a033cf";
const psIconVec = "https://www.figma.com/api/mcp/asset/6b1c3f16-8c57-4dc8-9269-a9001fa62605";

export default function DonghaeWebsite({ onBack }) {
  const phoneContainerRef = React.useRef(null);
  const outerContainerRef = React.useRef(null);
  const outerImageRef = React.useRef(null);
  const scrollYRef = React.useRef(0);

  const browserContainerRef = React.useRef(null);
  const browserImageRef = React.useRef(null);
  const browserScrollYRef = React.useRef(0);

  // 1. 폰 영역 휠 이벤트
  React.useEffect(() => {
    const phoneArea = phoneContainerRef.current;
    if (!phoneArea) return;

    const handleWheel = (e) => {
      e.preventDefault();

      const outerContainer = outerContainerRef.current;
      const outerImage = outerImageRef.current;

      if (!outerContainer || !outerImage) return;

      const maxOuterScroll = outerImage.offsetHeight - outerContainer.clientHeight;

      if (maxOuterScroll <= 0) return;

      scrollYRef.current += e.deltaY;

      if (scrollYRef.current < 0) scrollYRef.current = 0;
      if (scrollYRef.current > maxOuterScroll) scrollYRef.current = maxOuterScroll;

      outerImage.style.transform = `translateY(-${scrollYRef.current}px)`;
    };

    phoneArea.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      phoneArea.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // 2. 브라우저 영역 휠 이벤트
  React.useEffect(() => {
    const browser = browserContainerRef.current;
    const image = browserImageRef.current;

    if (!browser || !image) return;

    const handleWheel = (e) => {
      e.preventDefault();

      const maxScroll = image.offsetHeight - browser.clientHeight;

      if (maxScroll <= 0) return;

      browserScrollYRef.current += e.deltaY;

      if (browserScrollYRef.current < 0) browserScrollYRef.current = 0;
      if (browserScrollYRef.current > maxScroll) browserScrollYRef.current = maxScroll;

      image.style.transform = `translateY(-${browserScrollYRef.current}px)`;
    };

    browser.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      browser.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="dongw">
      <button className="dongw__back" onClick={onBack}>← 포트폴리오로</button>

      {/* ── 표지 프레임 ── */}
      <section className="dongw__cover">
        <div className="dongw__cover-bg"></div>

        <div className="dongw__cover-text">
          <h1 className="dongw__cover-title">Web<br />Design</h1>
          <p className="dongw__cover-sub">동해관광 메인 pc/mobile web</p>
        </div>

        {/* ── 표지 메인 목업 컨테이너 ── */}
        <div className="dongw__cover-mockups">
          {/* 💻 맥북 목업 */}
          <div className="dongw__cover-laptop">
            <img src={laptopFrame} alt="Macbook Frame" className="dongw__laptop-frame" />
            <div className="dongw__laptop-body" ref={outerContainerRef}>
              <img src={macWeb} alt="동해관광 PC 메인" className="dongw__laptop-screen" ref={outerImageRef} />
            </div>
          </div>

          {/* 📱 피그마 아이폰 목업 */}
          <div className="dongw__cover-phone" ref={phoneContainerRef}>
            <img src={figmaPhoneFrame} alt="iPhone frame" className="dongw__phone-frame" />
            <div className="dongw__island">
              <div className="dongw__island-bar" />
              <img src={figmaCamera} alt="" className="dongw__island-camera" />
            </div>
            <div className="dongw__phone-content">
              <img src={figmaPhoneScreen} alt="동해관광 모바일 메인" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 설명 프레임 (피그마 리디자인) ── */}
      <section className="dongw__desc">
        <div className="dongw__desc-bg">
          <div className="dongw__desc-panel dongw__desc-panel--1" />
          <div className="dongw__desc-panel dongw__desc-panel--2" />
        </div>

        {/* 왼쪽: PAR + 툴 + 타이틀 */}
        <div className="dongw__desc-left">
          <div className="dongw__par">
            <h3 className="dongw__par-title">Problem</h3>
            <p className="dongw__par-body">
              화면 내 요소들이 밀집되어 있고 시각적 위계가 불분명해<br />
              사용자가 정보를 빠르게 인지하기 어렵습니다.<br />
              정보량이 많음에도 불구하고 구조적인 정리가 부족해<br />
              전체적으로 복잡하고 정신없는 인상을 주었습니다.
            </p>
          </div>
          <div className="dongw__par">
            <h3 className="dongw__par-title">Action</h3>
            <p className="dongw__par-body">
              동해 관광의 시원한 이미지를 표현하기 위해<br />
              바다를 연상시키는 컬러(#0072BB)를 메인 컬러로 사용했습니다.<br />
              전체적으로 깔끔한 인상을 주기 위해<br />
              여백과 사진 배치, 타이포그래피의 균형에 신경썼습니다.
            </p>
          </div>
          <div className="dongw__par">
            <h3 className="dongw__par-title">Result</h3>
            <p className="dongw__par-body">
              정돈된 레이아웃과 시원한 컬러 톤으로,<br />
              사용자가 정보를 한눈에 파악할 수 있게 되었습니다.<br />
              스카이 블루 컬러 (#0072BB) 를 중심으로 통일감을 주어<br />
              동해의 청량한 분위기를 효과적으로 전달할 수 있습니다.
            </p>
          </div>

          {/* 툴 / 기여도 */}
          <div className="dongw__tool">
            <div className="dongw__tool-icon">
              <img src={psIconBg} alt="" className="dongw__ps-bg" />
              <img src={psIconVec} alt="" className="dongw__ps-vec" />
            </div>
            <div className="dongw__tool-bar-wrap">
              <div className="dongw__tool-bar-track">
                <div className="dongw__tool-bar-fill" />
              </div>
              <span className="dongw__tool-label">포토샵, 개인작업 100%</span>
            </div>
          </div>

          <p className="dongw__label">동해관광 서브<br />pc web 리디자인</p>
        </div>

        {/* 오른쪽: 브라우저 + 아이폰 목업 */}
        <div className="dongw__desc-right">
          {/* 사파리 브라우저 목업 */}
          <div className="dongw__screen-browser">
            <div className="dongw__browser-bar">
              <div className="dongw__browser-dots">
                <span className="dongw__dot dongw__dot--close" />
                <span className="dongw__dot dongw__dot--min" />
                <span className="dongw__dot dongw__dot--full" />
              </div>
              <div className="dongw__browser-url">
                donghae.go.kr
              </div>
            </div>

            <div className="dongw__screen-browser-body" ref={browserContainerRef}>
              <img
                ref={browserImageRef}
                src={subPcPage}
                alt="동해관광 서브 PC"
                className="dongw__screen-browser-image"
              />
            </div>
          </div>

          {/* 📱 아이폰 */}
          <div className="dongw__screen-phone">
            <img src={subIphoneFrame} alt="iPhone frame" className="dongw__screen-phone-frame" />
            <div className="dongw__screen-island">
              <div className="dongw__screen-island-bar" />
              <img src={subCamera} alt="" className="dongw__screen-island-camera" />
            </div>
            <div className="dongw__screen-phone-content">
              <img src={subMobilePage} alt="동해관광 서브 모바일" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}