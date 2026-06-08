import './DonghaeWebsite.css'

const macWeb = "https://www.figma.com/api/mcp/asset/76a43c6c-c81f-40eb-bece-39c1a004534e"
const bgSheet = "/images/donghae/browser/main-Safari.png"
const mobileWeb = "https://www.figma.com/api/mcp/asset/3e0ed64e-057e-4e69-be14-53a1ec4b8cdc"
const laptopFrame = "https://www.figma.com/api/mcp/asset/7229e62a-9fc0-4c91-835e-440be9680689"
const phoneFrame = "https://www.figma.com/api/mcp/asset/d7e12ad9-afd5-481d-a1da-3b4ca511fc92"

const subWeb = "https://www.figma.com/api/mcp/asset/8e510992-23f6-4160-80cd-e87acbf9b2dd"
const subMobile = "https://www.figma.com/api/mcp/asset/c0268ba2-7069-41bc-b426-033de58e2fbb"
const subPhoneFrame = "https://www.figma.com/api/mcp/asset/d20c8788-4879-4894-b948-58b10cb3701d"

export default function DonghaeWebsite({ onBack }) {
  return (
    <div className="dongw">
      <button className="dongw__back" onClick={onBack}>← 포트폴리오로</button>

<div className="dongw__cover-bg">
  <img src={bgSheet} alt="" className="dongw__bg-sheet dongw__bg-sheet--1" />
  <img src={bgSheet} alt="" className="dongw__bg-sheet dongw__bg-sheet--2" />
  <img src={bgSheet} alt="" className="dongw__bg-sheet dongw__bg-sheet--3" />
</div>  
      {/* ── 표지 프레임 ── */}
      <section className="dongw__cover">
        <div className="dongw__cover-text">
          <h1 className="dongw__cover-title">Web<br/>Design</h1>
          <p className="dongw__cover-sub">동해관광 메인 pc/mobile web</p>
        </div>
        <div className="dongw__cover-mockups">
          <div className="dongw__cover-laptop">
            <img src={laptopFrame} alt="laptop" className="dongw__laptop-frame" />
            <img src={macWeb} alt="동해관광 PC 메인" className="dongw__laptop-screen" />
          </div>
          <div className="dongw__cover-phone">
            <img src={phoneFrame} alt="phone frame" className="dongw__phone-frame" />
            <img src={mobileWeb} alt="동해관광 모바일 메인" className="dongw__phone-screen" />
          </div>
        </div>
      </section>

      {/* ── 설명 프레임 ── */}
      <section className="dongw__desc">
        <div className="dongw__desc-bg">
  <div className="dongw__desc-panel dongw__desc-panel--1" />
  <div className="dongw__desc-panel dongw__desc-panel--2" />
</div>
        <div className="dongw__desc-left">
          <div className="dongw__par">
            <h3 className="dongw__par-title">Problem</h3>
            <p className="dongw__par-body">화면 내 요소들이 밀집되어 있고 시각적 위계가 불분명해 사용자가 정보를 빠르게 인지하기 어렵습니다. 정보량이 많음에도 불구하고 구조적인 정리가 부족해 전체적으로 복잡하고 정신없는 인상을 주었습니다.</p>
          </div>
          <div className="dongw__par">
            <h3 className="dongw__par-title">Action</h3>
            <p className="dongw__par-body">동해 관광의 시원한 이미지를 표현하기 위해 바다를 연상시키는 컬러(#0072BB)를 메인 컬러로 사용했습니다. 전체적으로 깔끔한 인상을 주기 위해 여백과 사진 배치, 타이포그래피의 균형에 신경썼습니다.</p>
          </div>
          <div className="dongw__par">
            <h3 className="dongw__par-title">Result</h3>
            <p className="dongw__par-body">정돈된 레이아웃과 시원한 컬러 톤으로, 사용자가 정보를 한눈에 파악할 수 있게 되었습니다. 스카이 블루 컬러(#0072BB)를 중심으로 통일감을 주어 동해의 청량한 분위기를 효과적으로 전달할 수 있습니다.</p>
          </div>
          <p className="dongw__credit">포토샵, 개인작업 100%</p>
          <p className="dongw__label">동해관광 서브<br/>pc web 리디자인</p>
        </div>
        <div className="dongw__desc-right">
          <img src={subWeb} alt="동해관광 서브 PC" className="dongw__sub-mac" />
          <div className="dongw__sub-phone-wrap">
            <img src={subPhoneFrame} alt="phone frame" className="dongw__sub-phone-frame" />
            <img src={subMobile} alt="동해관광 서브 모바일" className="dongw__sub-phone-screen" />
          </div>
        </div>
      </section>
    </div>
  )
}