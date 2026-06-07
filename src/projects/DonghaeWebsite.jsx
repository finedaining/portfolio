import './DonghaeWebsite.css'

const COURSES = [
  { id: 1, title: '해안코스', sub: '동해 바다의 정취', desc: '망상해수욕장부터 추암 촛대바위까지 동해안의 절경을 따라 걷는 코스', color: '#3A7FBB', icon: '🌊' },
  { id: 2, title: '트레킹코스', sub: '천혜의 자연 속으로', desc: '두타산 무릉계곡과 청옥산을 잇는 숲길 트레킹 코스', color: '#4A8A5A', icon: '🌲' },
  { id: 3, title: '인생샷코스', sub: '남해성 가르치다', desc: '논골담길 벽화마을, 묵호등대, 어달해변 포토스팟 모음', color: '#B06A8A', icon: '📷' },
  { id: 4, title: '알정봉코스', sub: '하늘과 맞닿은 곳', desc: '두타산 알정봉에서 동해 전경을 한눈에 바라보는 파노라마 코스', color: '#7A6ABB', icon: '⛰️' },
]

const SUNRISE_SPOTS = [
  { title: '추암 촛대바위', sub: '일출 명소', color: '#2A6EA8' },
  { title: '망상해수욕장', sub: '에메랄드 바다', color: '#3A8FCC' },
  { title: '무릉계곡', sub: '계곡 트레킹', color: '#1A5C8A' },
  { title: '논골담길', sub: '감성 골목', color: '#4AACCC' },
]

export default function DonghaeWebsite({ onBack }) {
  return (
    <div className="dongw">

      {/* ── Nav ── */}
      <nav className="dongw__nav">
        <div className="dongw__nav-inner">
          <button onClick={onBack} style={{marginRight:'16px', background:'none', border:'none', cursor:'pointer', fontSize:'14px'}}>← 포트폴리오로</button>
          <div className="dongw__logo">
            <span className="dongw__logo-mark">관광</span>
            <span className="dongw__logo-text">동해시</span>
          </div>
          <ul className="dongw__menu">
            <li>관광지</li>
            <li>관광코스</li>
            <li>관광안내</li>
            <li>여행정보</li>
          </ul>
          <div className="dongw__nav-right">
            <button className="dongw__nav-btn">로그인</button>
            <button className="dongw__nav-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="dongw__hero">
        <div className="dongw__hero-bg" />
        <div className="dongw__hero-content">
          <p className="dongw__hero-eyebrow">DONGHAESI · GANGWON · KOREA</p>
          <h1 className="dongw__hero-title">SEA<br/>EXPERIENCE</h1>
          <p className="dongw__hero-desc">
            동해의 모든 바다 활동과 웅장한 산에서<br/>
            잊지 못할 추억을 만들러 오세요.
          </p>
          <button className="dongw__hero-cta">동해 여행 시작하기</button>
        </div>
        <div className="dongw__hero-scroll">
          <span>SCROLL</span>
          <div className="dongw__hero-scroll-line" />
        </div>
        <div className="dongw__hero-number">2</div>
      </section>

      {/* ── OUR DEEP AND BLUE ── */}
      <section className="dongw__eastsea">
        <div className="dongw__eastsea-inner">
          <div className="dongw__eastsea-left">
            <p className="dongw__eastsea-sub">OUR DEEP AND BLUE</p>
            <h2 className="dongw__eastsea-title">EAST SEA</h2>
            <p className="dongw__eastsea-desc">
              대한민국의 동쪽 끝, 맑고 투명한 바다와<br/>
              웅장한 백두대간이 만나는 곳.<br/>
              동해에서만 느낄 수 있는 특별한 경험을 전합니다.
            </p>
            <button className="dongw__eastsea-btn">더 알아보기 →</button>
          </div>
          <div className="dongw__eastsea-right">
            <div className="dongw__eastsea-img dongw__eastsea-img--main" />
            <div className="dongw__eastsea-img dongw__eastsea-img--sub" />
          </div>
        </div>
      </section>

      {/* ── SUNRISE CITY ── */}
      <section className="dongw__sunrise">
        <div className="dongw__sunrise-inner">
          <div className="dongw__sunrise-header">
            <p className="dongw__sunrise-eyebrow">EXPLORE DONGHAE</p>
            <h2 className="dongw__sunrise-title">SUNRISE CITY</h2>
            <p className="dongw__sunrise-sub">해가 가장 먼저 뜨는 도시, 동해의 대표 명소</p>
          </div>
          <div className="dongw__sunrise-grid">
            {SUNRISE_SPOTS.map((s, i) => (
              <div key={i} className="dongw__spot" style={{ '--spot-color': s.color }}>
                <div className="dongw__spot-img" />
                <div className="dongw__spot-info">
                  <p className="dongw__spot-sub">{s.sub}</p>
                  <h3 className="dongw__spot-title">{s.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 관광 코스 ── */}
      <section className="dongw__courses">
        <div className="dongw__courses-inner">
          <div className="dongw__courses-header">
            <p className="dongw__courses-eyebrow">TRAVEL COURSE</p>
            <h2 className="dongw__courses-title">동해 여행코스</h2>
          </div>
          <div className="dongw__courses-list">
            {COURSES.map((c) => (
              <div key={c.id} className="dongw__course">
                <div className="dongw__course-thumb" style={{ background: c.color }}>
                  <span className="dongw__course-icon">{c.icon}</span>
                  <span className="dongw__course-num">0{c.id}</span>
                </div>
                <div className="dongw__course-body">
                  <p className="dongw__course-sub">{c.sub}</p>
                  <h3 className="dongw__course-title">{c.title}</h3>
                  <p className="dongw__course-desc">{c.desc}</p>
                  <button className="dongw__course-btn">코스 보기 →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="dongw__footer">
        <div className="dongw__footer-inner">
          <div className="dongw__footer-logo">
            <span className="dongw__logo-mark">관광</span>
            <span>동해시 문화관광</span>
          </div>
          <p className="dongw__footer-copy">© 2024 동해시청. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}