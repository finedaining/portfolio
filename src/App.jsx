import { useState, useEffect, useRef } from 'react'
import ToggleButtonGroup from './components/ToggleButtonGroup'
import DonghaeWebsite from './projects/DonghaeWebsite'
import CathKidstonWebsite from './projects/CathKidstonWebsite'
import JigujabaWebsite from './projects/JigujabaWebsite'
import InobelWebsite from './projects/InobelWebsite'
import DodreamWebsite from './projects/DodreamWebsite'
import VintageHouseWebsite from './projects/VintageHouseWebsite'
import './App.css'

const PROJECTS = [
  {
    id: 1, cat: 'redesign', catLabel: '리디자인',
    title: '동해관광',
    desc: '노후화된 동해 관광 정보 사이트를 전면 재설계한 프로젝트. 동해의 자연경관을 살린 블루 컬러 시스템으로 브랜드를 재정립하고, 해안코스·트레킹코스·한정생코스 등 주요 관광 루트를 직관적으로 탐색할 수 있도록 IA를 개편했습니다. PC 메인과 모바일 반응형 서브 페이지까지 완성했습니다.',
    tags: ['메인 Web', '서브 Web'],
    color: 'linear-gradient(145deg, #4A8FBB 0%, #2B6A96 100%)',
    year: '2024',
    images: ['/images/donghae.png'],
    overview: [
      { label: 'Client', value: '동해관광' },
      { label: 'Role', value: 'Web Design · Publishing' },
      { label: 'Tool', value: 'Figma · Photoshop' },
    ],
  },
  {
    id: 2, cat: 'redesign', catLabel: '리디자인',
    title: '캐스키드슨',
    desc: '라이프스타일 브랜드의 상세페이지 리뉴얼. 브랜드 아이덴티티에 맞는 비주얼과 구매 플로우를 개선했습니다.',
    tags: ['상세페이지'],
    color: 'linear-gradient(145deg, #A87B5E 0%, #7A5840 100%)',
    year: '2024',
    images: [],
    overview: [
      { label: 'Role', value: 'Web Design · Publishing' },
      { label: 'Tool', value: 'Figma · Photoshop' },
    ],
  },
  {
    id: 3, cat: 'branding', catLabel: '브랜딩',
    title: '지구자바',
    desc: '로컬 카페 브랜드의 디지털 확장. PC웹, 모바일 웹, 앱 3개 플랫폼에 걸쳐 일관된 브랜드 경험을 구축했습니다.',
    tags: ['PC Web', '모바일 Web', '모바일 App'],
    color: 'linear-gradient(145deg, #5A8A62 0%, #3A6A42 100%)',
    year: '2024',
    images: [],
    overview: [
      { label: 'Role', value: 'Brand Design · UI/UX' },
      { label: 'Tool', value: 'Figma · Illustrator' },
    ],
  },
  {
    id: 4, cat: 'branding', catLabel: '브랜딩',
    title: '이노벨',
    desc: 'B2B 스타트업의 브랜드 구축 프로젝트. PC웹, 모바일 웹 설계부터 굿즈 디자인까지 전 과정을 단독 진행했습니다.',
    tags: ['PC Web', '모바일 Web', '굿즈 디자인'],
    color: 'linear-gradient(145deg, #5E7B9A 0%, #3D5C7A 100%)',
    year: '2024',
    images: [],
    overview: [
      { label: 'Role', value: 'Brand Design · UI/UX · Goods' },
      { label: 'Tool', value: 'Figma · Illustrator' },
    ],
  },
  {
    id: 5, cat: 'frontend', catLabel: '프론트엔드 브랜딩',
    title: '두드림',
    desc: '청년 창업 지원 플랫폼. 브랜드 아이덴티티 수립부터 React 기반 프론트엔드 구현까지 디자인·개발 전 과정을 담당했습니다.',
    tags: ['Frontend', 'Branding'],
    color: 'linear-gradient(145deg, #7A60A8 0%, #5A4088 100%)',
    year: '2024',
    images: [],
    overview: [
      { label: 'Role', value: 'Brand Design · Frontend Dev' },
      { label: 'Tool', value: 'Figma · React' },
    ],
  },
  {
    id: 6, cat: 'frontend', catLabel: '프론트엔드 브랜딩',
    title: '빈티지하우스',
    desc: '빈티지 라이프스타일 브랜드의 이커머스 구축. 브랜드 감성을 살린 UI 디자인과 HTML/CSS 퍼블리싱을 담당했습니다.',
    tags: ['Frontend', 'Branding'],
    color: 'linear-gradient(145deg, #9A7060 0%, #7A5040 100%)',
    year: '2024',
    images: [],
    overview: [
      { label: 'Role', value: 'UI Design · Frontend Dev' },
      { label: 'Tool', value: 'Figma · HTML/CSS' },
    ],
  },
]

const FILTER_OPTIONS = [
  { value: 'all',      label: '전체',              count: 6 },
  { value: 'redesign', label: '리디자인',           count: 2 },
  { value: 'branding', label: '브랜딩',             count: 2 },
  { value: 'frontend', label: '프론트엔드 브랜딩',  count: 2 },
]

const CAPABILITIES = [
  { name: 'Web Design',   detail: 'UI/UX 설계 · 반응형 · 퍼블리싱' },
  { name: 'Branding',     detail: 'BI 개발 · 굿즈 · 인쇄물' },
  { name: 'Frontend Dev', detail: 'React · HTML/CSS · JS' },
]

const TOOLS = [
  'Figma', 'Photoshop', 'Illustrator',
  'React', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Zeplin', 'Notion',
]

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => el.classList.add('visible'), delay) },
      { threshold: 0.08 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
}

function HeroDeco() {
  return (
    <svg className="hero__deco" viewBox="0 0 200 200" fill="none">
      <ellipse cx="98" cy="82" rx="76" ry="26" stroke="#8CC4E8" strokeWidth="4"
        transform="rotate(-18 98 82)" opacity="0.85" />
      <ellipse cx="98" cy="82" rx="62" ry="20" stroke="#A8D8F5" strokeWidth="2.5"
        transform="rotate(-24 98 82)" opacity="0.6" />
      <ellipse cx="98" cy="82" rx="86" ry="18" stroke="#7AB8DE" strokeWidth="2"
        transform="rotate(-10 98 82)" opacity="0.5" />
      <ellipse cx="110" cy="118" rx="52" ry="18" stroke="#EE8860" strokeWidth="4"
        transform="rotate(10 110 118)" opacity="0.9" />
      <ellipse cx="110" cy="118" rx="44" ry="13" stroke="#F5A880" strokeWidth="2.5"
        transform="rotate(18 110 118)" opacity="0.65" />
      <ellipse cx="96" cy="134" rx="68" ry="20" stroke="#9AC4E0" strokeWidth="2.5"
        transform="rotate(-4 96 134)" opacity="0.5" />
    </svg>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <span className="nav__logo">Kim Dain</span>
        <div className="nav__menu">
          <button className="nav__link" onClick={() => scrollTo('about')}>About</button>
          <button className="nav__link" onClick={() => scrollTo('works')}>Works</button>
          <button className="nav__link" onClick={() => scrollTo('contact')}>Contact</button>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const ref = useRef(null)
  useReveal(ref)
  return (
    <section className="section-outer" id="hero">
      <div className="card" ref={ref} data-reveal>
        <div className="hero__grid">
          <div className="hero__left">
            <h1 className="hero__title">
              2026<br />portfolio
            </h1>
            <ul className="hero__skills">
              <li><a className="hero__skill" href="#works">web-design</a></li>
              <li><a className="hero__skill" href="#works">branding</a></li>
              <li><a className="hero__skill" href="#works">front-end</a></li>
            </ul>
          </div>
          <div className="hero__right">
            <HeroDeco />
            <div className="hero__name-block">
              <span className="hero__name-label">about me</span>
              <p className="hero__name">KIM DAIN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const leftRef  = useRef(null)
  const rightRef = useRef(null)
  useReveal(leftRef)
  useReveal(rightRef, 100)
  return (
    <section className="section-outer" id="about">
      <div className="card">
        <div className="about__grid">
          <div ref={leftRef} data-reveal>
            <h2 className="about__title">About<br />me</h2>
            <p className="about__body">
              안녕하세요, <strong>김다인</strong>입니다.<br /><br />
              웹 디자인부터 퍼블리싱, 프론트엔드 개발까지
              디자인과 개발의 경계를 넘나드는 작업을 합니다.
              브랜딩의 시각적 완성도와 실제 구현 사이의
              간극을 좁히는 것에 관심이 있습니다.<br /><br />
              사용자 경험을 중심에 두고, 세심한 디테일로
              완성도 높은 결과물을 만듭니다.
            </p>
          </div>
          <div className="about__right" ref={rightRef} data-reveal>
            <div>
              <p className="cap__heading">Capabilities</p>
              <ul className="cap__list">
                {CAPABILITIES.map((c) => (
                  <li key={c.name} className="cap__item">
                    <span className="cap__name">{c.name}</span>
                    <span className="cap__detail">{c.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="tools__heading">Tools &amp; Stack</p>
              <div className="tools__tags">
                {TOOLS.map((t) => (
                  <span key={t} className="tool__tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Works({ onSelect }) {
  const [active, setActive] = useState('all')
  const headRef = useRef(null)
  useReveal(headRef)

  const visible = active === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.cat === active)

  return (
    <section className="section-outer" id="works">
      <div className="card">
        <div className="works__head" ref={headRef} data-reveal>
          <h2 className="works__title">Works</h2>
          <p className="works__count-txt">{PROJECTS.length} projects</p>
        </div>
        <div className="works__filter">
          <ToggleButtonGroup
            options={FILTER_OPTIONS}
            value={active}
            onChange={setActive}
          />
        </div>
        <div className="works__grid">
          {visible.map((p) => (
            <article
              key={p.id}
              className="wcard"
              onClick={() => onSelect(p.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="wcard__thumb" style={{ background: p.color }}>
                <span className="wcard__num">{String(p.id).padStart(2, '0')}</span>
                <span className="wcard__year">{p.year}</span>
              </div>
              <div className="wcard__body">
                <span className="wcard__cat">{p.catLabel}</span>
                <h3 className="wcard__title">{p.title}</h3>
                <p className="wcard__desc">{p.desc}</p>
                <div className="wcard__tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="wcard__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const ref = useRef(null)
  useReveal(ref)
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <section className="section-outer" id="contact">
      <div className="card" ref={ref} data-reveal>
        <div className="contact__body">
          <div>
            <h2 className="contact__title">
              Let's<br />work<br />together
            </h2>
            <p className="contact__tagline">
              새로운 프로젝트, 협업 제안, 또는 궁금한 점이<br />
              있으시면 편하게 연락 주세요.
            </p>
          </div>
          <div className="contact__links">
            <a href="mailto:kmm0012@gmail.com" className="contact__link">
              kmm0012@gmail.com
              <span className="contact__link-arrow">↗</span>
            </a>
          </div>
          <div className="contact__bottom">
            <span className="contact__copy">© 2026 Kim Dain. All rights reserved.</span>
            <button className="contact__top" onClick={scrollTop}>Back to top ↑</button>
          </div>
        </div>
      </div>
    </section>
  )
}

const PROJECT_PAGE_MAP = {
  1: (back) => <DonghaeWebsite onBack={back} />,
  2: (back) => <CathKidstonWebsite onBack={back} />,
  3: (back) => <JigujabaWebsite onBack={back} />,
  4: (back) => <InobelWebsite onBack={back} />,
  5: (back) => <DodreamWebsite onBack={back} />,
  6: (back) => <VintageHouseWebsite onBack={back} />,
}

export default function App() {
  const [page, setPage] = useState(null)
  const back = () => setPage(null)

  if (page !== null && PROJECT_PAGE_MAP[page]) {
    return PROJECT_PAGE_MAP[page](back)
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works onSelect={(id) => { if (PROJECT_PAGE_MAP[id]) setPage(id) }} />
        <Contact />
      </main>
    </>
  )
}