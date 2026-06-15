import './ProjectPage.css'

const PAR = [
  {
    label: 'Problem',
    text: 'B2B 스타트업 이노벨은 서비스의 신뢰성과 전문성을 전달할 수 있는 온라인 채널이 없었습니다. 기업 대상 서비스임에도 브랜드 아이덴티티가 부재하여 시장 내 포지셔닝이 어려웠습니다.',
  },
  {
    label: 'Action',
    text: '신뢰감을 주는 딥블루 컬러 시스템으로 기업 브랜드를 구축했습니다. PC 웹과 모바일 웹 설계부터 굿즈 디자인까지 브랜드 경험 전반을 단독으로 기획·제작하였습니다.',
  },
  {
    label: 'Result',
    text: '전문성과 신뢰감을 갖춘 일관된 B2B 브랜드 아이덴티티를 완성했습니다. 웹 채널부터 오프라인 굿즈까지 확장된 브랜드 접점으로 기업 인지도 향상에 기여하였습니다.',
  },
]

export default function InobelWebsite({ onBack }) {
  return (
    <div className="pp">
      <button className="pp__back" onClick={onBack}>← 포트폴리오로</button>

      {/* ── 표지 ── */}
      <section
        className="pp__cover"
        style={{ '--cover-from': '#0E1F33', '--cover-to': '#1E4070' }}
      >
        <div className="pp__cover-bg" />

        <div className="pp__cover-title-area">
          <h1 className="pp__cover-h1">Brand<br />ing</h1>
          <p className="pp__cover-sub">이노벨 B2B 브랜드 구축</p>
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
          '--desc-panel1': '#dce3ed',
          '--desc-panel2': '#c4d0e0',
        }}
      >
        <div className="pp__desc-left">
          <p className="pp__credit">피그마 · 일러스트레이터, 개인작업 100%</p>
          <p className="pp__label">이노벨<br />B2B 브랜드 디자인</p>
        </div>
        <div className="pp__desc-right">
          <div className="pp__mock pp__mock--wide" />
          <div className="pp__mock pp__mock--phone-sm" />
        </div>
      </section>
    </div>
  )
}
