import React from 'react';
import './SaveTheChildrenWebsite.css';
import TopButton from '../components/TopButton';

const pcPage       = "/images/savethechildren/pc-page.png";
const ipad         = "/images/savethechildren/ipad.png";
const phones       = "/images/savethechildren/phones.png";
const mobileScroll = "/images/savethechildren/mobile-scroll.png";

const detailPc    = "/images/savethechildren/detail-pc.png";
const detailPhone = "/images/savethechildren/detail-phone.png";
const figmaIcon   = "/images/donghae/figma-icon.png";

const PAR = [
  {
    label: 'Problem',
    text: '배너 부분의 문구가 단조로워 기관 고유의 감성적인 분위기가 와닿지 않았습니다. 또한 후원 참여를 유도하는 메시지와 전문적인 인상을 주기 위한 비주얼 요소들이 부족하다고 느껴졌습니다.',
  },
  {
    label: 'Action',
    text: '신뢰감과 따뜻함을 동시에 주기 위해 베이비블루 컬러(#B4C5CC)를 메인 컬러, 로고 컬러를 서브 컬러로 선정하였습니다. 아이들과 기관의 생생한 모습을 담은 이미지를 적극적으로 배치하고, 후원을 독려하는 메시지를 더해 전문적이면서도 감성적인 느낌을 주고자 했습니다.',
  },
  {
    label: 'Result',
    text: '아이들의 순수한 모습과 신뢰감을 주는 기관의 이미지가 조화롭게 어우러져 후원자들에게 따뜻한 진정성을 효과적으로 전달할 수 있게 되었습니다. 그리고 정돈된 타이포그래피와 베이비블루 톤앤매너를 통해 한눈에 메시지가 읽히는 디자인을 완성했습니다.',
  },
];

// 모바일 긴 이미지의 기준 높이(디자인 단위). 폰 화면 / 아래로 번져 보이는 영역이
// 같은 페이지의 다른 위치를 보여주도록 스크롤 비율로 동기화한다.
const PAGE_U = 3034;

// 폰 화면마다: 시작 스크롤 위치(u), 번짐 영역과의 오프셋(u)
// 상세 폰의 시작 위치(u): 캠페인 섹션
const DETAIL_START_U = 2615;

const PHONES = [
  { key: 'l', startU: 50,   spillDelta: 398 },
  { key: 'r', startU: 1417, spillDelta: 43 },
];

export default function SaveTheChildrenWebsite({ onBack }) {
  const screens = React.useRef({});
  const spills = React.useRef({});

  const syncSpill = React.useCallback((key, delta) => {
    const s = screens.current[key];
    const sp = spills.current[key];
    if (!s || !sp) return;
    const phoneU = (s.scrollTop / s.scrollHeight) * PAGE_U;
    sp.scrollTop = ((phoneU + delta) / PAGE_U) * sp.scrollHeight;
  }, []);

  React.useLayoutEffect(() => {
    const setStart = () => {
      PHONES.forEach(({ key, startU, spillDelta }) => {
        const s = screens.current[key];
        if (!s || !s.scrollHeight) return;
        s.scrollTop = (startU / PAGE_U) * s.scrollHeight;
        syncSpill(key, spillDelta);
      });
      // 상세 폰은 캠페인 섹션에서 시작
      const d = screens.current.d;
      if (d && d.scrollHeight) d.scrollTop = (DETAIL_START_U / PAGE_U) * d.scrollHeight;
    };
    setStart();
    // 이미지가 늦게 로드돼도 시작 위치를 다시 맞춘다
    const imgs = Object.values(screens.current)
      .filter(Boolean)
      .map((el) => el.querySelector('img'));
    imgs.forEach((img) => img && !img.complete && img.addEventListener('load', setStart, { once: true }));
    return () => imgs.forEach((img) => img && img.removeEventListener('load', setStart));
  }, [syncSpill]);

  // 상세 폰 화면 위에서의 휠은 화면 스크롤로만 쓰고, 페이지 끝 도달 시 다음 프로젝트로 넘어가는 동작(App)에는 전달하지 않는다
  React.useEffect(() => {
    const els = [screens.current.d].filter(Boolean);
    const stop = (e) => e.stopPropagation();
    els.forEach((el) => el.addEventListener('wheel', stop, { passive: true }));
    return () => els.forEach((el) => el.removeEventListener('wheel', stop));
  }, []);

  return (
    <div className="stc">
      <button className="stc__back" onClick={onBack}>← Back to portfolio</button>

      {/* ── 표지 프레임 ── */}
      <section className="stc__cover">
        <div className="stc__stage">
          {/* PC 상세페이지 + 아이패드 (정적) */}
          <img src={pcPage} alt="" className="stc__pc-page" />
          <img src={ipad} alt="세이브 더 칠드런 PC 메인" className="stc__ipad" />

          {/* 폰 아래로 이어지는 번짐 영역 */}
          <div className="stc__spill stc__spill--l" ref={(el) => (spills.current.l = el)}>
            <img src={mobileScroll} alt="" />
          </div>
          <div className="stc__spill stc__spill--r" ref={(el) => (spills.current.r = el)}>
            <img src={mobileScroll} alt="" />
          </div>

          {/* 폰 화면 (표지는 스크롤 없이 시안 그대로) */}
          {PHONES.map(({ key }) => (
            <div
              key={key}
              className={`stc__screen stc__screen--${key}`}
              ref={(el) => (screens.current[key] = el)}
            >
              <img src={mobileScroll} alt="세이브 더 칠드런 모바일 메인" />
            </div>
          ))}

          {/* 폰 베젤 (화면 부분은 뚫려 있음) */}
          <img src={phones} alt="" className="stc__phones" />

          {/* 타이틀 */}
          <div className="stc__cover-text">
            <h1 className="stc__title">Web<br />Design</h1>
            <p className="stc__sub">세이브 더 칠드런 메인<br />pc, mobile web 리디자인</p>
          </div>
        </div>
      </section>

      {/* ── 상세 프레임 ── */}
      <section className="stc__cover stc__detail">
        <div className="stc__stage">
          <img src={detailPc} alt="세이브 더 칠드런 PC 상세" className="stc__d-pc" />

          <div className="stc__par">
            {PAR.map(({ label, text }) => (
              <div key={label} className="stc__par-item">
                <h3 className="stc__par-title">{label}</h3>
                <p className="stc__par-body">{text}</p>
              </div>
            ))}
          </div>

          {/* 모바일 시안: 휠/터치로 스크롤 (자동 스크롤 없음) */}
          <div className="stc__d-phone">
            <div className="stc__d-screen" ref={(el) => (screens.current.d = el)}>
              <img src={mobileScroll} alt="세이브 더 칠드런 모바일" />
            </div>
            <img src={detailPhone} alt="" className="stc__d-phone-frame" />
          </div>

          {/* 툴 / 기여도 */}
          <div className="stc__tool">
            <img src={figmaIcon} alt="Figma" className="stc__figma-icon" />
            <div className="stc__tool-bar-wrap">
              <div className="stc__tool-bar-track">
                <div className="stc__tool-bar-fill" />
                <div className="stc__tool-bar-dot" />
              </div>
              <span className="stc__tool-label">피그마, 개인작업 100%</span>
            </div>
          </div>
          <p className="stc__d-caption">세이브 더 칠드런 pc, mobile web 리디자인</p>
        </div>
      </section>

      <TopButton />
    </div>
  );
}
