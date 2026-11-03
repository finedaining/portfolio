import './SubwayWebsite.css';
import TopButton from '../components/TopButton';

const logo = "/images/subway/logo.png";
const map = "/images/subway/map.png";
const appMain = "/images/subway/app-main.png";
const appRoute = "/images/subway/app-route.png";
const appResult = "/images/subway/app-result.png";
const appSearch = "/images/subway/app-search.png";

const INFO = [
  { label: '기간', value: '2025.07.07 - 2025.07.15 (9일)' },
  { label: '인원', value: '4명 (프론트엔드 2 / 백엔드 2)' },
  { label: '기술', value: 'Python · Tkinter · Tkinter Designer' },
];

const PAR = [
  {
    label: '맡은 역할',
    text: '프론트엔드를 맡아 Tkinter로 대구 지하철 1, 2, 3호선 노선도를 직접 찍어서 만들었습니다. 역마다 위치를 좌표로 잡고 노선을 이어서 앱의 메인 화면을 만들었고 팀원과 함께 다듬어 완성했습니다. 발표 PPT 디자인도 맡았고 팀원과 같이 발표했습니다.',
  },
  {
    label: '성과',
    text: '9일 동안 기획부터 디자인과 개발까지 마치고 실제로 돌아가는 앱을 완성했습니다. 제가 만든 노선도는 앱의 메인 화면이 되었고 사용자는 여기서 역을 눌러 출발지와 도착지를 정한 뒤 가장 빠른 경로와 도착 시간을 확인할 수 있습니다.',
  },
  {
    label: '배운 점',
    text: 'Tkinter는 처음 써보는 도구였는데 화면 요소를 좌표로 하나하나 배치해야 해서 생각보다 손이 많이 갔습니다. 웹과 다른 환경에서 UI를 만들어 보면서 상황에 맞는 도구를 고르는 게 중요하다는 걸 배웠습니다.',
  },
];

const SCREENS = [
  { src: appMain, title: '메인', text: '노선도를 확대하고 옮겨 보면서 역을 눌러 출발지와 도착지를 정합니다' },
  { src: appRoute, title: '길찾기', text: '출발지와 도착지를 정하고 즐겨찾기와 최근 검색을 볼 수 있습니다' },
  { src: appResult, title: '경로 결과', text: '가장 빠른 열차와 걸리는 시간과 환승역을 한눈에 보여줍니다' },
  { src: appSearch, title: '역 검색', text: '역 이름을 두 글자 이상 입력하면 비슷한 역을 찾아줍니다' },
];

export default function SubwayWebsite({ onBack }) {
  return (
    <div className="sbw">
      <button className="sbw__back" onClick={onBack}>← Back to portfolio</button>

      {/* ── 표지 ── */}
      <section className="sbw__section sbw__section--cover">
        <div className="sbw__stage">
          <div className="sbw__line" />
          <span className="sbw__station sbw__station--1" />
          <span className="sbw__station sbw__station--2" />
          <span className="sbw__station sbw__station--3" />

          <img src={logo} alt="대구 지하철 노선도 앱 로고" className="sbw__logo" />

          <ul className="sbw__info">
            {INFO.map(({ label, value }) => (
              <li key={label} className="sbw__info-item">
                <span className="sbw__info-label">{label}</span>
                <span className="sbw__info-value">{value}</span>
              </li>
            ))}
          </ul>

          <div className="sbw__cover-text">
            <h1 className="sbw__title">Python<br />GUI App</h1>
            <p className="sbw__sub">대구 지하철 노선도 데스크톱 앱</p>
          </div>

          <div className="sbw__par">
            {PAR.map(({ label, text }) => (
              <div key={label} className="sbw__par-item">
                <h3 className="sbw__par-title">{label}</h3>
                <p className="sbw__par-body">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 노선도 ── */}
      <section className="sbw__section sbw__section--map">
        <div className="sbw__stage">
          <div className="sbw__map-text">
            <p className="sbw__eyebrow">Tkinter Canvas</p>
            <h2 className="sbw__h2">노선도 구현</h2>
            <p className="sbw__desc">
              대구 지하철 1, 2, 3호선의 역 위치를 좌표로 하나하나 찍어서 Tkinter 캔버스 위에 노선도를 그렸습니다.
              노선도는 확대와 축소와 이동이 가능하고 역을 누르면 출발지와 도착지와 즐겨찾기를 설정하는 팝업이 뜹니다.
              처음 만든 초안은 팀원과 함께 다듬어서 완성했습니다.
            </p>
            <div className="sbw__chips">
              <span className="sbw__chip">Python</span>
              <span className="sbw__chip">Tkinter</span>
              <span className="sbw__chip">팀 작업</span>
            </div>
          </div>
          <div className="sbw__map-wrap">
            <img src={map} alt="대구 지하철 1, 2, 3호선 노선도" className="sbw__map" />
          </div>
        </div>
      </section>

      {/* ── 실행 화면 ── */}
      <section className="sbw__section sbw__section--screens">
        <div className="sbw__stage">
          <div className="sbw__screens-head">
            <p className="sbw__eyebrow sbw__eyebrow--light">Screens</p>
            <h2 className="sbw__h2 sbw__h2--light">실행 화면</h2>
          </div>
          <div className="sbw__screens">
            {SCREENS.map(({ src, title, text }) => (
              <figure key={title} className="sbw__screen">
                <img src={src} alt={`${title} 화면`} className="sbw__screen-img" />
                <figcaption className="sbw__screen-cap">
                  <span className="sbw__screen-title">{title}</span>
                  <span className="sbw__screen-text">{text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <TopButton />
    </div>
  );
}
