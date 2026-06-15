import './ProjectPage.css'

const PAR = [
  {
    label: 'Problem',
    text: '빈티지하우스는 감성적인 오프라인 매장 경험을 온라인으로 확장하지 못하고 있었습니다. 빈티지 브랜드 특유의 따뜻한 감성을 디지털 채널에서 일관되게 전달하는 것이 과제였습니다.',
  },
  {
    label: 'Action',
    text: '빈티지 감성을 살린 웜브라운 톤의 UI 디자인으로 브랜드 경험을 구현했습니다. Figma 디자인을 HTML/CSS로 직접 퍼블리싱하여 섬세한 감성 표현과 픽셀 퍼펙트 구현에 집중했습니다.',
  },
  {
    label: 'Result',
    text: '브랜드 감성과 사용성을 모두 만족시키는 이커머스 UI를 완성했습니다. 감성적인 비주얼과 직관적인 쇼핑 플로우가 결합되어 브랜드 충성도 높은 온라인 채널을 구축하였습니다.',
  },
]

export default function VintageHouseWebsite({ onBack }) {
  return (
    <div className="pp">
      <button className="pp__back" onClick={onBack}>← 포트폴리오로</button>

      {/* ── 표지 ── */}
      <section
        className="pp__cover"
        style={{ '--cover-from': '#2A1408', '--cover-to': '#6B3E22' }}
      >
        <div className="pp__cover-bg" />

        <div className="pp__cover-title-area">
          <h1 className="pp__cover-h1">Front<br />end</h1>
          <p className="pp__cover-sub">빈티지하우스 이커머스 구축</p>
        </div>

        <div className="pp__cover-mocks">
          <div className="pp__mock pp__mock--browser" />
          <div className="pp__mock pp__mock--phone" />
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
          '--desc-panel1': '#ede3d8',
          '--desc-panel2': '#ddd0c0',
        }}
      >
        <div className="pp__desc-left">
          <p className="pp__credit">피그마 · HTML/CSS, 개인작업 100%</p>
          <p className="pp__label">빈티지하우스<br />이커머스 구축</p>
        </div>
        <div className="pp__desc-right">
          <div className="pp__mock pp__mock--wide" />
          <div className="pp__mock pp__mock--phone-sm" />
        </div>
      </section>
    </div>
  )
}
