import './ProjectPage.css'

const PAR = [
  {
    label: 'Problem',
    text: '지구자바는 로컬 카페 브랜드로서 온라인 채널이 전무하여 잠재 고객과의 접점이 부족했습니다. 브랜드 아이덴티티 또한 명확하지 않아 경쟁 브랜드와 차별화가 어려웠습니다.',
  },
  {
    label: 'Action',
    text: '지구와 커피의 감성을 연결하는 그린 컬러 시스템으로 브랜드 아이덴티티를 구축했습니다. PC 웹, 모바일 웹, 앱 3개 플랫폼에 걸쳐 일관된 사용자 경험을 설계하였습니다.',
  },
  {
    label: 'Result',
    text: '로컬 카페의 따뜻한 감성과 지속가능한 브랜드 가치를 시각적으로 표현하는 통합 브랜드 시스템을 완성했습니다. 3개 플랫폼 모두 동일한 브랜드 경험을 제공합니다.',
  },
]

export default function JigujabaWebsite({ onBack }) {
  return (
    <div className="pp">
      <button className="pp__back" onClick={onBack}>← 포트폴리오로</button>

      {/* ── 표지 ── */}
      <section
        className="pp__cover"
        style={{ '--cover-from': '#112211', '--cover-to': '#2B5C2B' }}
      >
        <div className="pp__cover-bg" />

        <div className="pp__cover-title-area">
          <h1 className="pp__cover-h1">Brand<br />ing</h1>
          <p className="pp__cover-sub">지구자바 브랜드 디자인</p>
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
          '--desc-panel1': '#dce8dc',
          '--desc-panel2': '#c4d9c4',
        }}
      >
        <div className="pp__desc-left">
          <p className="pp__credit">피그마 · 일러스트레이터, 개인작업 100%</p>
          <p className="pp__label">지구자바<br />PC / 모바일 / 앱 브랜딩</p>
        </div>
        <div className="pp__desc-right">
          <div className="pp__mock pp__mock--wide" />
          <div className="pp__mock pp__mock--phone-sm" />
        </div>
      </section>
    </div>
  )
}
