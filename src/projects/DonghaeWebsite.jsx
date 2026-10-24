import React from 'react';
import './DonghaeWebsite.css';
import TopButton from '../components/TopButton';

const macWeb = "/images/donghae/pc_main.svg";
const bgLeft = "/images/donghae/browser/2020280070-김다인-웹-pc-메인시안 4.png";
const bgRight = "/images/donghae/browser/2020280070-김다인-웹-pc-메인시안 5.png";
const laptopFrame = "/images/donghae/browser/mac.png";
const phoneFrame = "/images/donghae/iphone.png";

// 표지 섹션 아이폰 목업
const figmaPhoneFrame = "/images/donghae/iphone-frame.png";
const figmaPhoneScreen = "/images/donghae/mob_main.svg";
const figmaCamera = "/images/donghae/camera.png";

// 설명 섹션 에셋
const subPcPage = "/images/donghae/sub-pc.png";
const subMobilePage = "/images/donghae/sub-mobile.png";
const subIphoneFrame = "/images/donghae/sub-iphone.png";
const subCamera = "/images/donghae/sub-camera.png";
const psIcon = "/images/donghae/ps-icon.png";

export default function DonghaeWebsite({ onBack }) {
  const phoneContainerRef = React.useRef(null);
  const phoneScreenRef = React.useRef(null);
  const phoneScrollYRef = React.useRef(0);

  const outerContainerRef = React.useRef(null);
  const outerImageRef = React.useRef(null);

  const browserContainerRef = React.useRef(null);
  const browserImageRef = React.useRef(null);
  const browserScrollYRef = React.useRef(0);

  // 1. 폰 영역 휠 이벤트 → 폰 이미지 translateY 스크롤
  React.useEffect(() => {
    const phoneArea = phoneContainerRef.current;
    if (!phoneArea) return;

    const handleWheel = (e) => {
      e.preventDefault();

      const phoneScreen = phoneScreenRef.current;
      if (!phoneScreen) return;

      const maxScroll = phoneScreen.offsetHeight - phoneArea.clientHeight;
      if (maxScroll <= 0) return;

      phoneScrollYRef.current += e.deltaY;
      if (phoneScrollYRef.current < 0) phoneScrollYRef.current = 0;
      if (phoneScrollYRef.current > maxScroll) phoneScrollYRef.current = maxScroll;

      phoneScreen.style.transform = `translateY(-${phoneScrollYRef.current}px)`;
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
      <button className="dongw__back" onClick={onBack}>← Back to portfolio</button>

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
              <img src={figmaPhoneScreen} alt="동해관광 모바일 메인" ref={phoneScreenRef} />
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
              한 화면에 정보량이 많아 전체적으로 복잡한 인상을 주었습니다.
              전체적으로 깔끔한 레이아웃으로 구성하고 동해관광만의 아이덴티티가 한 눈에 보일 수 있도록 개선할 필요가 있다고 느꼈습니다.
            </p>
          </div>
          <div className="dongw__par">
            <h3 className="dongw__par-title">Action</h3>
            <p className="dongw__par-body">
              동해 고유의 청량하고 시원한 이미지를 직관적으로 전달하고자 바다를 연상시키는 블루 컬러(#0072BB)를 메인 컬러로 선정하여 브랜드 아이덴티티를 확립했습니다.
              또한 여백을 살려 시각적 피로도를 낮추고자 하였고, 이미지 배치와 타이포그래피를 신경썼습니다.
            </p>
          </div>
          <div className="dongw__par">
            <h3 className="dongw__par-title">Result</h3>
            <p className="dongw__par-body">
              보다 깔끔한 레이아웃으로 인해 사용자가 정보를 한눈에 파악할 수 있게 되었습니다.
              블루 컬러 (#0072BB) 를 중심으로 통일감을 주어 동해의 청량한 분위기를 효과적으로 전달하고자 하였습니다.
            </p>
          </div>

          {/* 툴 / 기여도 */}
          <div className="dongw__tool">
            <img src={psIcon} alt="Photoshop" className="dongw__figma-icon" />
            <div className="dongw__tool-bar-wrap">
              <div className="dongw__tool-bar-track">
                <div className="dongw__tool-bar-fill" />
                <div className="dongw__tool-bar-dot" />
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
      <TopButton />
    </div>
  );
}