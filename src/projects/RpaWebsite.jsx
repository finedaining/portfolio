import './RpaWebsite.css';
import TopButton from '../components/TopButton';

const dataTable = "/images/rpa/data-table.jpg";
const chartCompare = "/images/rpa/chart-compare.png";
const chartImprove = "/images/rpa/chart-improve.png";
const tableFinal = "/images/rpa/table-final.png";
const mail = "/images/rpa/mail.png";

const INFO = [
  { label: '기간', value: '2025.08.18 - 2025.08.26' },
  { label: '인원', value: '3명 (RPA / Python / 데이터 관리)' },
  { label: '기술', value: 'Brity RPA · Python · Excel · Jira · GitHub' },
];

const PAR = [
  {
    label: '맡은 역할',
    text: '데이터 관리를 맡아 DART API로 받아온 재무 데이터를 엑셀 표로 정리하고 분석에 맞게 가공했습니다. 매출액과 영업이익률과 영업비용률을 기업별 분기별로 비교할 수 있게 피벗 테이블과 차트로 만들었고 LG전자 2025년 데이터를 넣어 개선 전후를 비교하는 표를 만들었습니다.',
  },
  {
    label: '성과',
    text: '데이터 수집부터 가공과 시각화와 메일 발송까지 한 번에 돌아가는 자동화 흐름을 완성했습니다. LG전자와 삼성전자의 2020년부터 2024년까지 분기별 수익성을 한눈에 비교할 수 있게 만들었고 개선안을 적용하면 LG전자 영업비용률이 94.8%에서 88.6%로 줄어 절감률 6.63%라는 결과를 냈습니다.',
  },
  {
    label: '배운 점',
    text: 'API에서 받을 수 있는 데이터가 한정적이라 분석을 더 깊게 하지 못한 게 아쉬웠습니다. 피벗 테이블은 클릭으로만 처리해야 하는 부분이 많아서 RPA 반복 기능을 충분히 쓰기 어려웠고 자동화하기 좋은 작업을 고르는 눈이 중요하다는 걸 배웠습니다.',
  },
];

const STEPS = [
  { no: '01', title: '데이터 수집', text: 'Python으로 DART API에서 업종별 기업 재무 데이터를 받아 엑셀 파일로 만듭니다' },
  { no: '02', title: '데이터 가공', text: 'RPA로 표를 정리하고 영업이익률과 영업비용률 같은 지표를 계산합니다' },
  { no: '03', title: '시각화', text: '피벗 테이블과 차트로 기업별 분기별 수익성을 비교하고 개선안을 만듭니다' },
  { no: '04', title: '메일링', text: '완성된 분석 파일을 메일로 자동 발송합니다' },
];

export default function RpaWebsite({ onBack }) {
  return (
    <div className="rpa">
      <button className="rpa__back" onClick={onBack}>← Back to portfolio</button>

      {/* ── 표지 ── */}
      <section className="rpa__cover">
        <span className="rpa__logo">RPA · 5팀</span>

        <div className="rpa__cover-grid">
          <div className="rpa__cover-left">
            <ul className="rpa__info">
              {INFO.map(({ label, value }) => (
                <li key={label} className="rpa__info-item">
                  <span className="rpa__info-label">{label}</span>
                  <span className="rpa__info-value">{value}</span>
                </li>
              ))}
            </ul>
            <div>
              <h1 className="rpa__title">RPA<br />Automation</h1>
              <p className="rpa__sub">수익성 개선 자동 분석 시스템</p>
            </div>
          </div>

          <div className="rpa__par">
            {PAR.map(({ label, text }) => (
              <div key={label} className="rpa__par-item">
                <h3 className="rpa__par-title">{label}</h3>
                <p className="rpa__par-body">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 자동화 흐름 / 데이터 가공 ── */}
      <section className="rpa__flow">
        <p className="rpa__eyebrow">Process</p>
        <h2 className="rpa__h2">자동화 흐름</h2>

        <ol className="rpa__steps">
          {STEPS.map(({ no, title, text }) => (
            <li key={no} className="rpa__step">
              <span className="rpa__step-no">{no}</span>
              <span className="rpa__step-title">{title}</span>
              <span className="rpa__step-text">{text}</span>
            </li>
          ))}
        </ol>

        <figure className="rpa__figure">
          <img src={dataTable} alt="LG전자와 삼성전자 분기별 재무 데이터 표" className="rpa__img" />
          <figcaption className="rpa__cap">가공한 재무 데이터 표 (LG전자 · 삼성전자 2020 - 2025)</figcaption>
        </figure>
      </section>

      {/* ── 분석 결과 ── */}
      <section className="rpa__result">
        <p className="rpa__eyebrow rpa__eyebrow--light">Result</p>
        <h2 className="rpa__h2 rpa__h2--light">분석 결과</h2>

        <figure className="rpa__card rpa__card--wide">
          <img src={chartCompare} alt="LG전자와 삼성전자 매출액 영업이익률 영업비용률 비교 차트" className="rpa__img" />
          <figcaption className="rpa__cap">LG전자와 삼성전자의 매출액과 영업이익률과 영업비용률 비교</figcaption>
        </figure>

        <div className="rpa__result-row">
          <figure className="rpa__card">
            <img src={chartImprove} alt="LG전자 영업비용률 개선 전후 차트" className="rpa__img" />
            <figcaption className="rpa__cap">LG전자 영업비용률 개선 전후</figcaption>
          </figure>
          <div className="rpa__result-side">
            <div className="rpa__stat">
              <span className="rpa__stat-num">6.63%</span>
              <span className="rpa__stat-label">영업비용률 절감률 (94.8% → 88.6%)</span>
            </div>
            <figure className="rpa__card">
              <img src={tableFinal} alt="최종 개선안 표" className="rpa__img" />
              <figcaption className="rpa__cap">최종 개선안 표</figcaption>
            </figure>
          </div>
        </div>

        <div className="rpa__mail-row">
          <div className="rpa__mail-text">
            <h3 className="rpa__mail-title">메일 자동 발송</h3>
            <p className="rpa__mail-desc">
              받는 사람과 제목과 내용을 입력하면 분석이 끝난 엑셀 파일을 첨부해서 메일로 자동으로 보내줍니다.
              데이터 수집부터 보고까지 사람이 따로 손대지 않아도 한 번에 끝나도록 만들었습니다.
            </p>
          </div>
          <figure className="rpa__card rpa__card--mail">
            <img src={mail} alt="분석 결과 메일 자동 발송 화면" className="rpa__img" />
            <figcaption className="rpa__cap">분석 파일 메일 자동 발송</figcaption>
          </figure>
        </div>
      </section>

      <TopButton />
    </div>
  );
}
