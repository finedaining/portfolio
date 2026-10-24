import React from 'react';
import './KanuWebsite.css';
import TopButton from '../components/TopButton';

const coverBg     = "/images/kanu/cover-bg.jpg";
const logo        = "/images/kanu/logo.png";
const laptopFrame = "/images/kanu/laptop-frame.png";
const safari      = "/images/kanu/safari.png";
const webFull     = "/images/kanu/web-full.svg";
const mobileFull  = "/images/kanu/mobile-full.svg";
const bezel       = "/images/kanu/bezel.png";
const island      = "/images/kanu/island.png";
const figmaIcon   = "/images/donghae/figma-icon.png";

const PAR = [
  {
    label: 'Problem',
    text: '기존 웹사이트는 카누의 시그니처인 블랙&레드 컬러가 충분히 드러나지 않아 브랜드의 개성이 약하게 느껴졌습니다. 헤더의 불필요한 요소와 여러 컬러가 사용된 아이콘형 카테고리 영역은 완성도가 떨어진다고 생각되었습니다. 카누의 브랜드 이미지를 살리기에 전체적인 콘텐츠 길이도 짧았습니다.',
  },
  {
    label: 'Action',
    text: '블랙과 레드를 메인 컬러로 잡아 카누의 시그니처 이미지를 강조했습니다. 가독성을 방해하던 헤더 요소와 카테고리 아이콘을 단순화하여 핵심 콘텐츠가 들어오도록 레이아웃을 정리했습니다. 또한 border-radius 를 줄여 모던한 인상을 주고, 레시피 및 브랜드 감성 이미지를 추가해 사용자에게 더 다양한 브랜드 경험을 제공합니다.',
  },
  {
    label: 'Result',
    text: '불필요한 요소를 정리하고 콘텐츠를 확장하면서 웹사이트의 완성도를 높였습니다. 블랙&레드 컬러를 확실하게 잡아 모던하고 깔끔한 카누만의 감성을 즐길 수 있는 브랜드 디자인으로 개선하였습니다.',
  },
];

export default function KanuWebsite({ onBack }) {
  const pcRef = React.useRef(null);
  const mobileRef = React.useRef(null);

  // PC / 모바일 화면 위에서의 휠은 해당 화면 스크롤로만 쓰고,
  // 페이지 끝 도달 시 다음 프로젝트로 넘어가는 동작(App)에는 전달하지 않는다
  React.useEffect(() => {
    const els = [pcRef.current, mobileRef.current].filter(Boolean);
    const stop = (e) => e.stopPropagation();
    els.forEach((el) => el.addEventListener('wheel', stop, { passive: true }));
    return () => els.forEach((el) => el.removeEventListener('wheel', stop));
  }, []);

  return (
    <div className="knu">
      <button className="knu__back" onClick={onBack}>← Back to portfolio</button>

      {/* ── 표지 프레임 ── */}
      <section className="knu__section">
        <div className="knu__stage">
          <img src={coverBg} alt="" className="knu__cover-bg" />
          <div className="knu__cover-overlay" />
          <img src={logo} alt="KANU" className="knu__logo" />

          <div className="knu__cover-text">
            <h1 className="knu__title">Web<br />Design</h1>
            <p className="knu__sub">카누 메인 pc/mobile web</p>
          </div>

          <div className="knu__par">
            {PAR.map(({ label, text }) => (
              <div key={label} className="knu__par-item">
                <h3 className="knu__par-title">{label}</h3>
                <p className="knu__par-body">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 상세 프레임 ── */}
      <section className="knu__section knu__section--detail">
        <div className="knu__stage">
          {/* 노트북: 사파리 바 → 스크롤되는 PC 화면 → 노트북 프레임(화면 부분은 투명) 순서 */}
          <div className="knu__laptop">
            <img src={safari} alt="" className="knu__safari" />
            <div className="knu__pc-screen" ref={pcRef}>
              <img src={webFull} alt="카누 PC 메인" />
            </div>
            <img src={laptopFrame} alt="" className="knu__laptop-frame" />
          </div>

          {/* 모바일 시안: 휠/터치로 스크롤 (자동 스크롤 없음). 화면은 폰 아래까지 이어진다 */}
          <div className="knu__phone">
            <div className="knu__screen" ref={mobileRef}>
              <img src={mobileFull} alt="카누 모바일 메인" />
            </div>
            <img src={bezel} alt="" className="knu__bezel" />
            <img src={island} alt="" className="knu__island" />
          </div>

          <div className="knu__info">
            {/* 툴 / 기여도 */}
            <div className="knu__tool">
              <img src={figmaIcon} alt="Figma" className="knu__figma-icon" />
              <div className="knu__tool-bar-wrap">
                <div className="knu__tool-bar-track">
                  <div className="knu__tool-bar-fill" />
                  <div className="knu__tool-bar-dot" />
                </div>
                <span className="knu__tool-label">피그마, 개인작업 100%</span>
              </div>
            </div>

            <p className="knu__desc">
              PC 버전에서 구성한 카누의 메인 컬러와 모던한 디자인 방향을 유지하면서 모바일 환경에 맞게 폰트 크기와 화면 배열, 요소 간 간격을 조정하였습니다.
              모바일에서도 카누의 브랜드 이미지와 주요 콘텐츠가 자연스럽게 전달될 수 있도록 최적화하였습니다.
            </p>
            <p className="knu__caption">카누 메인 pc/mobile web 리디자인</p>
          </div>
        </div>
      </section>

      <TopButton />
    </div>
  );
}
