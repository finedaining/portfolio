import React from 'react';
import './DonghaeWebsite.css';

const macWeb = "https://www.figma.com/api/mcp/asset/76a43c6c-c81f-40eb-bece-39c1a004534e";
const bgLeft = "/images/donghae/browser/2020280070-김다인-웹-pc-메인시안 4.png";
const bgRight = "/images/donghae/browser/2020280070-김다인-웹-pc-메인시안 5.png";
const laptopFrame = "/images/donghae/browser/mac.png";
const phoneFrame = "/images/donghae/iphone.png";

// 피그마에서 가져온 새 아이폰 목업 에셋
const figmaPhoneFrame = "https://www.figma.com/api/mcp/asset/2fc0eae4-ba85-447d-b9f1-a36dcf12e9f8";
const figmaPhoneScreen = "https://www.figma.com/api/mcp/asset/5f450d2c-20c0-4437-84b6-1aa0a4e787e0";
const figmaCamera = "https://www.figma.com/api/mcp/asset/b0977398-9d85-454c-921c-ecb58ea4f34f";

const subWeb = "https://www.figma.com/api/mcp/asset/8e510992-23f6-4160-80cd-e87acbf9b2dd";
const subMobile = "https://www.figma.com/api/mcp/asset/c0268ba2-7069-41bc-b426-033de58e2fbb";
const subPhoneFrame = phoneFrame;

export default function DonghaeWebsite({ onBack }) {
  const phoneContainerRef = React.useRef(null);
  const outerContainerRef = React.useRef(null);
  const outerImageRef = React.useRef(null);
  const scrollYRef = React.useRef(0);

  // 마우스 휠 이벤트를 직접 감지하여 자연스럽게 이미지를 변형(Transform)시킵니다.
  React.useEffect(() => {
    const phoneArea = phoneContainerRef.current;
    if (!phoneArea) return;

    const handleWheel = (e) => {
      // 폰 영역 위에서 휠을 굴릴 때 브라우저 전체 페이지가 함께 스크롤되는 현상을 막아줍니다.
      e.preventDefault();

      const outerContainer = outerContainerRef.current;
      const outerImage = outerImageRef.current;
      if (!outerContainer || !outerImage) return;

      // 움직일 수 있는 최대 범위 계산
      const maxOuterScroll = outerImage.offsetHeight - outerContainer.clientHeight;
      if (maxOuterScroll <= 0) return;

      // 휠 방향과 속도에 따라 좌표 업데이트 (e.deltaY 가 양수면 아래로, 음수면 위로)
      scrollYRef.current += e.deltaY;

      // 최소/최대 범위 제한 (Clamping)
      if (scrollYRef.current < 0) scrollYRef.current = 0;
      if (scrollYRef.current > maxOuterScroll) scrollYRef.current = maxOuterScroll;

      // 움직임 반영
      outerImage.style.transform = `translateY(-${scrollYRef.current}px)`;
    };

    // 브라우저 튕김 방지를 위해 passive: false 옵션을 인스턴스에 직접 바인딩합니다.
    phoneArea.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      phoneArea.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="dongw">
      <button className="dongw__back" onClick={onBack}>← 포트폴리오로</button>

      {/* ── 표지 프레임 ── */}
      <section className="dongw__cover">
        <div className="dongw__cover-bg">
        </div>

        <div className="dongw__cover-text">
          <h1 className="dongw__cover-title">Web<br />Design</h1>
          <p className="dongw__cover-sub">동해관광 메인 pc/mobile web</p>
        </div>

        {/* ── 표지 메인 목업 컨테이너 ── */}
        <div className="dongw__cover-mockups">

          {/* 💻 맥북 목업 */}
          <div className="dongw__cover-laptop">
            <img src={laptopFrame} alt="Macbook Frame" className="dongw__laptop-frame" />
            <div className="dongw__laptop-body">
              <img src={macWeb} alt="동해관광 PC 메인" className="dongw__laptop-screen" />
            </div>
          </div>

          {/* 📱 피그마 아이폰 목업 */}
          <div className="dongw__cover-phone">
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

      {/* ── 설명 프레임 (유지) ── */}
      <section className="dongw__desc">
        <div className="dongw__desc-bg">
          <div className="dongw__desc-panel dongw__desc-panel--1" />
          <div className="dongw__desc-panel dongw__desc-panel--2" />
        </div>

        <div className="dongw__desc-left">
          <div className="dongw__par">
            <h3 className="dongw__par-title">Problem</h3>
            <p className="dongw__par-body">화면 내 요소들이 밀집되어 있고 시각적 위계가 불분명해 사용자가 정보를 빠르게 인지하기 어렵습니다. 정보량이 많음에도 불구하고 구조적인 정리가 부족해 전체적으로 복잡하고 정신없는 인상을 주었습니다.</p>
          </div>
          <div className="dongw__par">
            <h3 className="dongw__par-title">Action</h3>
            <p className="dongw__par-body">동해 관광의 시원한 이미지를 표현하기 위해 바다를 연상시키는 컬러(#0072BB)를 메인 컬러로 사용했습니다. 전체적으로 깔끔한 인상을 주기 위해 여백과 사진 배치, 타이포그래피의 균형에 신경썼습니다.</p>
          </div>
          <div className="dongw__par">
            <h3 className="dongw__par-title">Result</h3>
            <p className="dongw__par-body">정돈된 레이아웃과 시원한 컬러 톤으로, 사용자가 정보를 한눈에 파악할 수 있게 되었습니다. 스카이 블루 컬러(#0072BB)를 중심으로 통일감을 주어 동해의 청량한 분위기를 효과적으로 전달할 수 있습니다.</p>
          </div>
          <p className="dongw__credit">포토샵, 개인작업 100%</p>
          <p className="dongw__label">동해관광 서브<br />pc web 리디자인</p>
        </div>

        <div className="dongw__desc-right">
          <img src={subWeb} alt="동해관광 서브 PC" className="dongw__sub-mac" />
          <div className="dongw__sub-phone-wrap">
            <img src={subPhoneFrame} alt="phone frame" className="dongw__sub-phone-frame" />
            <div className="dongw__sub-phone-body">
              <img src={subMobile} alt="동해관광 서브 모바일" className="dongw__sub-phone-screen" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}