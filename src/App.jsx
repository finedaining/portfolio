import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { TbBrandReact, TbBrandCss3, TbBrandJavascript } from 'react-icons/tb'
import ToggleButtonGroup from './components/ToggleButtonGroup'
import DonghaeWebsite from './projects/DonghaeWebsite'
import CathKidstonWebsite from './projects/CathKidstonWebsite'
import JiguJavaWebsite from './projects/JiguJavaWebsite'
import InobelWebsite from './projects/InobelWebsite'
import DodreamWebsite from './projects/DodreamWebsite'
import VintageHouseWebsite from './projects/VintageHouseWebsite'
import './App.css'

const PROJECTS = [
  {
    id: 1, cat: 'redesign', catLabel: 'Re-design',
    title: '동해관광',
    desc: '복잡했던 동해관광 웹사이트 리뉴얼. \n 많은 정보량을 정리하여 한눈에 찾아볼 수 있도록 바꾸고, 동해 바다를 연상시키는 블루 컬러 위주의 디자인으로 깔끔하고 청량한 분위기의 웹으로 재탄생시켰습니다.',
    tags: ['메인 Web', '서브 Web'],
    thumb: '/images/about/ovdh.svg',
    year: '2024.05-2024.06',
    images: ['/images/donghae.png'],
    overview: [
      { label: 'Client', value: '동해관광' },
      { label: 'Role', value: 'Web Design · Publishing' },
      { label: 'Tool', value: 'Figma · Photoshop' },
    ],
  },
  {
    id: 2, cat: 'redesign', catLabel: 'Re-design',
    title: '캐스키드슨',
    desc: '라이프스타일 브랜드의 온라인 상세페이지 리뉴얼 프로젝트. 오프라인 패키지가 가진 독창적인 감성을 온라인 화면에도 동일하게 녹여내어 톤앤매너를 맞췄습니다. 브랜드 특유의 아늑한 분위기를 살려 몰입감을 높이고 한층 매끄러운 구매 플로우를 구축했습니다.',
    tags: ['상세페이지'],
    thumb: '/images/about/ovct.svg',
    year: '2024.03-2024.04',
    images: [],
    overview: [
      { label: 'Role', value: 'Web Design · Publishing' },
      { label: 'Tool', value: 'Figma · Photoshop' },
    ],
  },
  {
    id: 3, cat: 'branding', catLabel: 'Branding',
    title: '지구자바',
    desc: '친환경 제로웨이스트 브랜드 지구자바의 디지털 플랫폼 구축 프로젝트. 플로깅과 챌린지에 참여해 혜택을 얻는 순환형 리워드 시스템과 함께 웹 및 앱 서비스를 설계했습니다. 싱그럽고 자연 친화적인 컬러 톤과 캐릭터 요소를 활용해 누구나 쉽게 다가갈 수 있는 친근한 브랜드 경험을 완성했습니다.',
    tags: ['PC Web', '모바일 Web', '모바일 App'],
    thumb: '/images/about/ovzg.svg',
    year: '2024.11-2024.12',
    images: [],
    overview: [
      { label: 'Role', value: 'Brand Design · UI/UX' },
      { label: 'Tool', value: 'Figma · Illustrator' },
    ],
  },
  {
    id: 4, cat: 'branding', catLabel: 'Branding',
    title: '이노벨',
    desc: '클린 뷰티 브랜드 이노벨의 졸업 전시 팀 프로젝트. 웹 UI/UX 설계부터 친환경 패키지 및 굿즈까지 브랜딩 전 과정을 완수했습니다. 맑고 깨끗한 무드의 디자인으로 지속 가능한 가치를 투명하게 담아내어 진정성 있는 브랜드 경험을 전합니다.',
    tags: ['PC Web', '모바일 Web', '굿즈 디자인'],
    thumb: '/images/about/ovin.svg',
    year: '2024.08-2024.11',
    images: [],
    overview: [
      { label: 'Role', value: 'Brand Design · UI/UX · Goods' },
      { label: 'Tool', value: 'Figma · Illustrator' },
    ],
  },
  {
    id: 5, cat: 'frontend', catLabel: 'Branding · Frontend Dev',
    title: '두드림',
    desc: '기계부품 제조 기술력을 바탕으로 한 두드림 브랜드 런칭 프로젝트. 단단한 금속과 미래를 두드린다는 의미를 담아 견고한 아이덴티티를 구축했습니다. 차분하고 무게감 있는 컬러 톤으로 기술적 신뢰감을 더하고, 정돈된 레이아웃으로 사용성과 개발 효율성을 함께 확보했습니다.',
    tags: ['Frontend', 'Branding'],
    thumb: '/images/about/ovdr.svg',
    year: '2025.09-2025.10',
    images: [],
    overview: [
      { label: 'Role', value: 'Brand Design · Frontend Dev' },
      { label: 'Tool', value: 'Figma · React' },
    ],
  },
  {
    id: 6, cat: 'frontend', catLabel: 'Branding · Frontend Dev',
    title: '빈티지하우스',
    desc: '프리미엄 빈티지 가구 브랜드 빈티지 하우스의 이커머스 구축 프로젝트. 브랜드 감성을 살린 UI 디자인과 반응형 퍼블리싱을 진행했습니다. 따뜻하고 클래식한 톤 위주의 디자인과 세련된 폰트 조화로 빈티지 하우스만의 코지한 분위기를 전달합니다.',
    tags: ['Frontend', 'Branding'],
    thumb: '/images/about/ovvh.svg',
    year: '2025.05-2025.06',
    images: [],
    overview: [
      { label: 'Role', value: 'UI Design · Frontend Dev' },
      { label: 'Tool', value: 'Figma · HTML/CSS' },
    ],
  },
]

const FILTER_OPTIONS = [
  { value: 'all', label: 'All', count: 6 },
  { value: 'redesign', label: 'Re-design', count: 2 },
  { value: 'branding', label: 'Branding', count: 2 },
  { value: 'frontend', label: 'Frontend dev', count: 2 },
]

const EDUCATION = [
  { year: '2018', desc: '나루고등학교 졸업' },
  { year: '2019', desc: '영산대학교 문화콘텐츠 학부 영상콘텐츠 학과' },
  { year: '2020', desc: '오산대학교 디지털콘텐츠디자인 학과 입학' },
  { year: '2024', desc: '2024 캡스톤 졸업 전시회' },
  { year: '2024', desc: '산학연협력 EXPO 수상' },
  { year: '2024', desc: '지역문화기반 로컬콘텐츠 아이디어톤 수상' },
  { year: '2025', desc: '오산대학교 디지털콘텐츠디자인 학과 UI/UX 웹 전공 졸업' },
  { year: '2025', desc: '글로벌 아카데미 부트캠프 수료' }
]

const SKILLS = [
  { name: 'Figma', icon: '/images/about/figma.svg', level: 90 },
  { name: 'Photoshop', icon: '/images/about/photoshop.svg', level: 80 },
  { name: 'Illustrator', icon: '/images/about/illustor.svg', level: 80 },
  { name: 'InDesign', icon: '/images/about/indesign.svg', level: 40 },
  { name: 'Premiere Pro', icon: '/images/about/ppro.svg', level: 70 },
  { name: 'After Effects', icon: '/images/about/aftereffect.svg', level: 40 },
  { name: '3ds Max', icon: '/images/about/3dsmax.svg', level: 50 },
  { name: 'HTML5', icon: '/images/about/html.png', level: 50 },
  { name: 'CSS3', icon: '/images/about/css3.png', level: 60 },
  { name: 'JavaScript', icon: '/images/about/javascript.png', level: 40 },
  { name: 'React', icon: '/images/about/react.png', level: 40 },
  { name: 'Notion', icon: '/images/about/notion.svg', level: 40 }
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

    <image href="/images/about/object-blue.svg" className="obj-blue" />



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
  return (
    <section className="section-outer" id="about">
      <div className="card">
        <div className="about__layout">
          <div className="about__sticky">
            <div className="about__top-row">
              <h2 className="about__title">About<br />me</h2>
              <div className="about__photo">
                <span className="about__photo-frame">
                  <img src="/images/about/profile.svg" alt="김다인 프로필 사진" />
                </span>
                <span className="about__photo-badge">
                  <span></span>
                  <small>Contact Me</small>
                </span>
              </div>
            </div>
            <p className="about__body">
              안녕하세요, <strong>김다인</strong>입니다.<br /><br />
              웹 디자인부터 퍼블리싱, 프론트엔드 개발까지 <br />
              디자인과 개발의 경계를 넘나드는 작업을 합니다.<br />
              브랜딩의 시각적 완성도와 실제 구현 사이의 <br />
              간극을 좁히는 것에 관심이 있습니다.<br /><br />
              사용자 경험을 중심에 두고 세심한 디테일로
              완성도 높은 결과물을 만듭니다.
            </p>
          </div>

          <div className="about__content">
            <div className="about__block">
              <p className="about__block-heading">Profile</p>
              <ul className="profile__list">
                <li className="profile__item">
                  <span className="profile__bullet" />
                  <span className="profile__text">
                    <span className="profile__label">Name</span>
                    <span className="profile__value">김다인 Kim Dain</span>
                  </span>
                </li>
                <li className="profile__item">
                  <span className="profile__bullet" />
                  <span className="profile__text">
                    <span className="profile__label">Birth</span>
                    <span className="profile__value">2000.12.11</span>
                  </span>
                </li>
                <li className="profile__item">
                  <span className="profile__bullet" />
                  <span className="profile__text">
                    <span className="profile__label">Contact</span>
                    <span className="profile__value">
                      e-mail. kmm0012@gmail.com<br />
                      phone. 010-2388-4241
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="about__block about__block--education">
              <p className="about__block-heading">Education</p>
              <ul className="profile__list">
                {EDUCATION.map((e, i) => (
                  <li key={i} className="profile__item">
                    <span className="profile__bullet" />
                    <span className="profile__text">
                      <span className="profile__label">{e.year}</span>
                      <span className="profile__value">{e.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="about__block about__block--skill">
              <p className="about__block-heading">Skill</p>
              <ul className="skill__list">
                {SKILLS.map((s) => (
                  <li key={s.name} className="skill__item">
                    {s.icon ? (
                      <img src={s.icon} alt={s.name} className="skill__badge" />
                    ) : (
                      <span className="skill__badge skill__badge--icon" style={{ background: s.color }}>
                        <s.Icon />
                      </span>
                    )}
                    <span className="skill__body">
                      <span className="skill__track">
                        <span className="skill__fill" style={{ width: `${s.level}%` }} />
                        <span className="skill__thumb" style={{ left: `${s.level}%` }} />
                      </span>
                      <span className="skill__name">{s.name}</span>
                    </span>
                  </li>
                ))}
              </ul>
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
                <img src={p.thumb} alt="" className="wcard__thumb-img" />
              </div>
              <div className="wcard__body">
                <span className="wcard__cat">{p.catLabel}</span>
                <div className="wcard__title-row">
                  <h3 className="wcard__title">{p.title}</h3>
                  
                </div>
                <p className="wcard__desc">{p.desc}</p>
                <div className="wcard__tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="wcard__tag">{tag}</span>
                  ))}
                </div>
                <span className="wcard__year">{p.year}</span>
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
          </div>
        </div>
      </div>
    </section>
  )
}

const PROJECT_PAGE_MAP = {
  1: (back) => <DonghaeWebsite onBack={back} />,
  2: (back) => <CathKidstonWebsite onBack={back} />,
  3: (back) => <JiguJavaWebsite onBack={back} />,
  4: (back) => <InobelWebsite onBack={back} />,
  5: (back) => <DodreamWebsite onBack={back} />,
  6: (back) => <VintageHouseWebsite onBack={back} />,
}

if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

const PAGE_IDS = Object.keys(PROJECT_PAGE_MAP).map(Number)

export default function App() {
  const [page, setPage] = useState(null)
  const savedScrollY = useRef(0)
  const touchStartX = useRef(0)
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const openPage = (id) => {
    if (!PROJECT_PAGE_MAP[id]) return
    savedScrollY.current = window.scrollY
    setPage(id)
  }

  const back = () => {
    setPage(null)
  }

  useLayoutEffect(() => {
    if (page !== null) {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    } else {
      window.scrollTo(0, savedScrollY.current)
    }
  }, [page])

  // 페이지 끝 스크롤 시 다음 프로젝트로 이동 (순환)
  useEffect(() => {
    if (page === null) return
    const idx = PAGE_IDS.indexOf(page)
    const nextId = PAGE_IDS[(idx + 1) % PAGE_IDS.length]

    let overScrollDelta = 0
    const THRESHOLD = 800

    const onWheel = (e) => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      if (atBottom && e.deltaY > 0) {
        overScrollDelta += e.deltaY
        if (overScrollDelta >= THRESHOLD) {
          openPage(nextId)
        }
      } else {
        overScrollDelta = 0
      }
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [page])

  if (page !== null && PROJECT_PAGE_MAP[page]) {
    const idx = PAGE_IDS.indexOf(page)
    const prevId = PAGE_IDS[(idx - 1 + PAGE_IDS.length) % PAGE_IDS.length]
    const nextId = PAGE_IDS[(idx + 1) % PAGE_IDS.length]
    return (
      <>
        {PROJECT_PAGE_MAP[page](back)}
        <button className="proj-nav proj-nav--prev" onClick={() => openPage(prevId)}>
          <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="20,4 4,24 20,44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="proj-nav proj-nav--next" onClick={() => openPage(nextId)}>
          <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="4,4 20,24 4,44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works onSelect={(id) => openPage(id)} />
        <Contact />
      </main>
      <button className="contact__top contact__top--floating" onClick={scrollTop}>Back to top ↑</button>
    </>
  )
}