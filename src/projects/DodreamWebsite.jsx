import './ProjectPage.css'

const PAR = [
  {
    label: 'Problem',
    text: '청년 창업 지원 플랫폼 두드림은 타겟 사용자인 청년들에게 서비스 가치를 직관적으로 전달하는 브랜드 경험이 부재했습니다. 디자인과 개발이 분리되어 구현 과정에서 비효율이 발생하고 있었습니다.',
  },
  {
    label: 'Action',
    text: '청년의 에너지를 표현하는 퍼플 계열 컬러로 브랜드 아이덴티티를 수립했습니다. Figma 디자인을 직접 React로 구현하여 디자인-개발 간 갭을 최소화하고 완성도 높은 결과물을 제작했습니다.',
  },
  {
    label: 'Result',
    text: '브랜드 아이덴티티 수립부터 프론트엔드 개발까지 전 과정을 단독으로 완성했습니다. 디자이너와 개발자의 역할을 동시에 수행하여 빠른 프로토타입 검증과 높은 구현 충실도를 달성하였습니다.',
  },
]

export default function DodreamWebsite({ onBack }) {
  return (
    <div className="pp">
      <button className="pp__back" onClick={onBack}>← 포트폴리오로</button>

      {/* ── 표지 ── */}
      <section
        className="pp__cover"
        style={{ '--cover-from': '#1E0E33', '--cover-to': '#4A3080' }}
      >
        <div className="pp__cover-bg" />

        <div className="pp__cover-title-area">
          <h1 className="pp__cover-h1">Front<br />end</h1>
          <p className="pp__cover-sub">두드림 청년창업 플랫폼</p>
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
          '--desc-panel1': '#e3dcee',
          '--desc-panel2': '#d0c4df',
        }}
      >
        <div className="pp__desc-left">
          <p className="pp__credit">피그마 · React, 개인작업 100%</p>
          <p className="pp__label">두드림<br />프론트엔드 개발</p>
        </div>
        <div className="pp__desc-right">
          <div className="pp__mock pp__mock--wide" />
          <div className="pp__mock pp__mock--phone-sm" />
        </div>
      </section>
    </div>
  )
}
