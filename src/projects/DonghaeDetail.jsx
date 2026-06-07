import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './DonghaeDetail.css'

export default function DonghaeDetail() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="dh">

      {/* ── Nav ── */}
      <nav className="dh__nav">
        <button className="dh__back" onClick={() => navigate('/')}>← Back</button>
        <span className="dh__nav-logo">Kim Dain</span>
        <div className="dh__nav-arrows">
          <button onClick={() => navigate('/works/6')}>←</button>
          <button onClick={() => navigate('/works/2')}>→</button>
        </div>
      </nav>

      {/* ── 메인 쇼케이스 ── */}
      <section className="dh__showcase">

        {/* 배경: Figma 스타일 사선 기울기 스크린샷 */}
        <div className="dh__bg-cards" aria-hidden>
          {/* 상단 레이어 */}
          <div className="dh__bg-tilt dh__bg-tilt--top">
            <div className="dh__bg-tilt-inner">
              <div className="dh__bg-tilt-img">
                <img src="/images/donghae/slide1.png" alt="" />
              </div>
            </div>
          </div>
          {/* 하단 레이어 */}
          <div className="dh__bg-tilt dh__bg-tilt--bot">
            <div className="dh__bg-tilt-inner">
              <div className="dh__bg-tilt-img">
                <img src="/images/donghae/slide2.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* 왼쪽 하단: 타이포 */}
        <div className="dh__left">
          <h1 className="dh__type-title">Web<br />Design</h1>
          <p className="dh__type-sub">동해관광 메인 pc/mobile web</p>
        </div>

        {/* 가운데: 레이어 합성 목업 */}
        <div className="dh__center">
          <div className="dh__mockup">
            {/* z-index 1: 웹사이트 콘텐츠 (맥 화면 뒤에) */}
            <div className="dh__layer-web-wrap">
              <img src="/images/donghae/browser/main-web-pc.png" alt="메인 웹사이트" />
            </div>
            {/* z-index 2: Safari 툴바 */}
            <div className="dh__layer-safari-wrap">
              <img src="/images/donghae/browser/main-Safari.png" alt="Safari" />
            </div>
            {/* z-index 3: 맥북 프레임 (투명 화면 PNG) */}
            <img
              className="dh__layer-mac"
              src="/images/donghae/browser/mac.png"
              alt="MacBook"
            />
          </div>
        </div>

        {/* 오른쪽: iPhone 목업 */}
        <div className="dh__right">
          <img className="dh__iphone-img" src="/images/donghae/iphone.png" alt="동해관광 모바일 웹" />
        </div>

      </section>

      {/* ── 서브페이지 케이스스터디 ── */}
      <section className="dh__case">

        {/* 왼쪽: PAR + 툴 + 제목 */}
        <div className="dh__case-left">
          <div className="dh__par">
            <div className="dh__par-item">
              <h3 className="dh__par-heading">Problem</h3>
              <p className="dh__par-text">
                화면 내 요소들이 밀집되어 있고 시각적 위계가 불분명해
                사용자가 정보를 빠르게 인지하기 어렵습니다.
                정보량이 많음에도 불구하고 구조적인 정리가 부족해
                전체적으로 복잡하고 정신없는 인상을 주었습니다.
              </p>
            </div>
            <div className="dh__par-item">
              <h3 className="dh__par-heading">Action</h3>
              <p className="dh__par-text">
                동해 관광의 시원한 이미지를 표현하기 위해
                바다를 연상시키는 컬러(#0072BB)를 메인 컬러로 사용했습니다.
                전체적으로 깔끔한 인상을 주기 위해
                여백과 사진 배치, 타이포그래피의 균형에 신경썼습니다.
              </p>
            </div>
            <div className="dh__par-item">
              <h3 className="dh__par-heading">Result</h3>
              <p className="dh__par-text">
                정돈된 레이아웃과 시원한 컬러 톤으로,
                사용자가 정보를 한눈에 파악할 수 있게 되었습니다.
                스카이 블루 컬러 (#0072BB)를 중심으로 통일감을 주어
                동해의 청량한 분위기를 효과적으로 전달할 수 있습니다.
              </p>
            </div>
          </div>

          {/* 툴 뱃지 + 진행 바 */}
          <div className="dh__case-tool">
            <div className="dh__case-tool-left">
              <div className="dh__case-tool-badge">Ps</div>
              <div className="dh__case-tool-bar">
                <div className="dh__case-tool-track">
                  <div className="dh__case-tool-fill" />
                </div>
                <div className="dh__case-tool-thumb" />
              </div>
            </div>
            <span>포토샵, 개인작업 100%</span>
          </div>

          <div className="dh__case-title-block">
            <p className="dh__case-title-main">동해관광 서브</p>
            <p className="dh__case-title-main">pc web 리디자인</p>
          </div>
        </div>

        {/* 오른쪽: 배경 패널 + 맥 브라우저 + iPhone */}
        <div className="dh__case-right">

          {/* 배경 그라디언트 패널 */}
          <div className="dh__case-panel dh__case-panel--1" />
          <div className="dh__case-panel dh__case-panel--2" />

          {/* 서브페이지 슬라이드 카드 */}
          <img className="dh__case-slide dh__case-slide--1" src="/images/donghae/slide1.png" alt="" />
          <img className="dh__case-slide dh__case-slide--2" src="/images/donghae/slide2.png" alt="" />

          {/* 맥 브라우저 목업 */}
          <div className="dh__case-browser">
            <div className="dh__case-browser-bar">
              <div className="dh__case-browser-lights">
                <span className="dh__dot dh__dot--r" />
                <span className="dh__dot dh__dot--y" />
                <span className="dh__dot dh__dot--g" />
              </div>
              <div className="dh__case-browser-addr">dh.go.kr</div>
            </div>
            <div className="dh__case-browser-screen">
              <img src="/images/donghae/slide1.png" alt="동해관광 서브페이지" />
            </div>
          </div>

          {/* iPhone 목업 */}
          <div className="dh__case-iphone">
            <img src="/images/donghae/iphone.png" alt="동해관광 모바일 서브" />
          </div>

        </div>

      </section>

      {/* ── 프로젝트 정보 ── */}
      <div className="dh__con dh__con--pad">
        <div className="dh__overview">
          <div className="dh__overview-desc">
            <span className="dh__eyebrow">Overview</span>
            <p className="dh__overview-text">
              노후화된 동해 관광 공식 사이트를 전면 재설계한 프로젝트입니다.
              동해의 광활한 바다와 자연경관을 담은 블루 컬러 시스템을 구축하고,
              <strong> 해안코스, 트레킹코스, 인생샷코스, 알정봉코스</strong> 등
              주요 관광 루트를 직관적으로 탐색할 수 있도록 정보 구조를 전면 개편했습니다.
            </p>
          </div>
          <ul className="dh__meta">
            {[
              { label: 'Year',     value: '2024' },
              { label: 'Category', value: '웹 리디자인' },
              { label: 'Role',     value: 'Web Design · Publishing' },
              { label: 'Tool',     value: 'Figma · Photoshop' },
              { label: 'Platform', value: 'PC Web · Mobile Web' },
            ].map(m => (
              <li key={m.label} className="dh__meta-item">
                <span className="dh__meta-label">{m.label}</span>
                <span className="dh__meta-val">{m.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Next */}
      <div className="dh__con dh__con--bot">
        <div className="dh__next" onClick={() => navigate('/works/2')}>
          <span className="dh__next-label">Next Project</span>
          <div className="dh__next-info">
            <span className="dh__next-cat">리디자인</span>
            <span className="dh__next-title">캐스키드슨 →</span>
          </div>
        </div>
      </div>

    </div>
  )
}
