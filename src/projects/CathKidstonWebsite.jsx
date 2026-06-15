import './ProjectPage.css'

const PAR = [
  {
    label: 'Problem',
    text: '캐스키드슨 카카오 쇼핑 라이브 상세페이지의 비주얼 완성도가 낮아 브랜드 아이덴티티를 효과적으로 전달하지 못했습니다. 혜택 정보의 시각적 위계가 불분명해 소비자가 핵심 혜택을 한눈에 파악하기 어려웠습니다.',
  },
  {
    label: 'Action',
    text: '크리스마스 시즌 감성에 맞는 딥레드 벨벳 컬러 팔레트와 고급스러운 타이포그래피를 적용했습니다. 인형의 집 컨셉의 스노우 글로브 일러스트와 편지 형식 섹션으로 스토리텔링을 강화했습니다.',
  },
  {
    label: 'Result',
    text: '브랜드 아이덴티티를 반영한 일관된 비주얼 언어로 크리스마스 시즌 한정 상품의 프리미엄 이미지를 강화하였습니다. 혜택 정보의 체계적인 구조화로 소비자 이해도를 높였습니다.',
  },
]

export default function CathKidstonWebsite({ onBack }) {
  return (
    <div className="pp">
      <button className="pp__back" onClick={onBack}>← 포트폴리오로</button>

      {/* ── 표지 ── */}
      <section
        className="pp__cover"
        style={{ '--cover-from': '#2B080A', '--cover-to': '#5A1218' }}
      >
        <div className="pp__cover-bg" />

        <div className="pp__cover-title-area">
          <h1 className="pp__cover-h1">Web<br />Design</h1>
          <p className="pp__cover-sub">캐스키드슨 상세페이지 리디자인</p>
        </div>

        <div className="pp__cover-mocks">
          <div className="pp__mock pp__mock--phone" />
          <div className="pp__mock pp__mock--phone-offset" />
        </div>

        <div className="pp__cover-par">
          {PAR.map(({ label, text }) => (
            <div key={label} className="pp__par-block">
              <h3 className="pp__par-label">{label}</h3>
              <p className="pp__par-text">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 설명 ── */}
      <section
        className="pp__desc"
        style={{
          '--desc-panel1': '#ede0dc',
          '--desc-panel2': '#d9c4be',
        }}
      >
        <div className="pp__desc-left">
          <p className="pp__credit">피그마 · 포토샵, 개인작업 100%</p>
          <p className="pp__label">캐스키드슨<br />상세페이지 리디자인</p>
        </div>
        <div className="pp__desc-right">
          <div className="pp__mock pp__mock--wide" />
          <div className="pp__mock pp__mock--phone-sm" />
        </div>
      </section>
    </div>
  )
}
