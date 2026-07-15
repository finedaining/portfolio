import React from 'react';
import './InobelWebsite.css';

const logo        = "/images/inovel/logo.svg";
const s2Phones    = "/images/inovel/s2-phones.png";
const s2Web       = "/images/inovel/s2-web.svg";
const s2Bestseller = "/images/inovel/s2-bestseller.png";

/* ── 섹션 3 에셋 ── */
const xbanner1    = "/images/inovel/xbanner1.svg";
const xbanner2    = "/images/inovel/xbanner2.svg";
const xbanner1M   = "/images/inovel/xbanner1-mockup.svg";
const xbanner2M   = "/images/inovel/xbanner2-mockup.svg";
const photoDark   = "/images/inovel/photo-dark.svg";
const photoDrive  = "/images/inovel/photo-drive.svg";
const photoJapan  = "/images/inovel/photo-japan.svg";
const photoPink   = "/images/inovel/photo-pink.svg";
const photoTang   = "/images/inovel/photo-tang.svg";
const photoTree   = "/images/inovel/photo-tree.svg";
const cardFront   = "/images/inovel/card-front.svg";
const cardBack    = "/images/inovel/card-back.svg";
const diary       = "/images/inovel/diary.svg";
const diaryThings = "/images/inovel/diary-things.svg";
const sticker     = "/images/inovel/sticker.svg";
const fish        = "/images/inovel/fish.svg";
const orange      = "/images/inovel/orange.svg";
const figmaIcon   = "/images/inovel/figma.svg";
const gnIcon      = "/images/inovel/goodnote-icon.svg";
const s3Model     = "/images/inovel/model-main.svg";
const s3Image     = "/images/inovel/s3-image.png";

const bgEclipse = "/images/inovel/bg-eclipse.svg";
const glassBig  = "/images/inovel/glass-big.svg";
const glassMini = "/images/inovel/glass-mini.svg";
const board1    = "/images/inovel/board1.svg";
const board2    = "/images/inovel/board2.svg";
const sunscreen = "/images/inovel/sunscreen.svg";

export default function InobelWebsite({ onBack }) {
  return (
    <div className="inov">
      <button className="inov__back" onClick={onBack}>← 포트폴리오로</button>

      <section className="inov__cover">

        <div className="inov__cover-left">
          <img src={bgEclipse} alt="" className="inov__bg-eclipse" />
          <img src={board1}    alt="" className="inov__board1" />
          <img src={board2}    alt="" className="inov__board2" />
          <img src={sunscreen} alt="" className="inov__sunscreen" />
          <img src={glassBig}  alt="" className="inov__glass-big" />
          <img src={glassMini} alt="" className="inov__glass-mini" />
          <img src={logo}      alt="innovelle" className="inov__logo" />
        </div>

        <div className="inov__cover-right">
          <h1 className="inov__cover-title">Branding</h1>
          <p className="inov__cover-sub">이노벨 (Innovelle) 브랜드 런칭</p>
          <p className="inov__cover-desc">
            이노벨(InnoVelle)은 클린 뷰티와 퓨어 뷰티의 가치를 지키며,<br />
            피부와 지구를 위한 건강한 뷰티 솔루션을 제공합니다.<br />
            깨끗한 성분과 투명한 제조 과정을 통해 인체에 유해한 성분을 배제하고,<br />
            친환경 패키지와 윤리적 원료 사용으로 환경을 고려한 제품을 선보입니다.<br />
            브랜드는 고객에게 진정성 있는 뷰티 경험을 제공하며, 지속 가능한 라이프스타일을 추구합니다.<br />
            다양한 제품 라인과 맞춤형 경험을 통해 피부에 최적화된 솔루션을 제공하며,<br />
            아름다움과 환경을 동시에 생각하는 브랜드를 만들고자 합니다.
          </p>
          <div className="inov__badge">
            <div className="inov__badge-bar-wrap">
              <div className="inov__badge-bar">
                <div className="inov__badge-fill" />
                <div className="inov__badge-dot" />
              </div>
              <span className="inov__badge-label">팀 작업, 전체 기여도 60%</span>
            </div>
          </div>
        </div>

      </section>

      {/* ── 2. 웹 디자인 ── */}
      <section className="inov__s2">
        <div className="inov__s2-left">
          <img src={logo} alt="innovelle" className="inov__s2-logo" />
          <img src={s2Phones} alt="" className="inov__s2-phones" />
          <div className="inov__s2-text">
            <h2 className="inov__s2-title">이노벨 pc/mobile web</h2>
            <p className="inov__cover-desc">
              메인 컬러인 주황색을 적극 활용해 브랜드 아이덴티티를 확고히 했으며,
              '이노벨' 브랜드에 걸맞은 혁신적이고 에너제틱한 이미지를 표현하고자 했습니다.
              또한 깔끔하고 모던한 느낌을 강조하고, '클린 뷰티, 퓨어 뷰티'에 어울리는 분위기에
              맞춰 이노벨 패키지 목업 이미지를 함께 활용해 전체 디자인의 완성도를 높였습니다.
            </p>
            <p className="inov__cover-desc">
              모바일에서는 PC 버전의 구성을 유지하되, 작은 화면에서도 가독성과 사용 편의성을
              높이기 위해 보다 직관적이고 터치 중심의 사용성을 반영한 UI로 구성하였습니다.
            </p>
          </div>
        </div>

        <div className="inov__s2-web">
          <img src={s2Web} alt="이노벨 pc 웹" />
        </div>

        <div className="inov__s2-right">
          <img src={s2Bestseller} alt="이노벨 베스트셀러" />
          <div className="inov__badge inov__s2-badge">
            <img src={figmaIcon} alt="" className="inov__s2-badge-icon" />
            <div className="inov__badge-bar-wrap">
              <div className="inov__badge-bar">
                <div className="inov__badge-fill inov__badge-fill--30" />
                <div className="inov__badge-dot inov__badge-dot--30" />
              </div>
              <span className="inov__badge-label">피그마, 기여도 30%</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 굿즈 제작 ── */}
      <section className="inov__s3">
        <img src={logo} alt="innovelle" className="inov__s3-logo" />

        {/* X BANNER — physical banners behind, mockups in front */}
        <img src={xbanner2}  alt="" className="inov__s3-xb2" />
        <img src={xbanner1}  alt="" className="inov__s3-xb1" />
        <img src={xbanner2M} alt="" className="inov__s3-xb2m" />
        <img src={xbanner1M} alt="" className="inov__s3-xb1m" />
        <div className="inov__s3-label inov__s3-label--xb">
          <span className="inov__s3-dot" />
          <div className="inov__s3-label-text">
            <p className="inov__s3-label-title">X BANNER</p>
            <p className="inov__s3-label-desc">'Innovelle Archive' 라는<br />메인 타이틀을 활용한 X 배너 디자인</p>
          </div>
        </div>

        {/* image 129 (배경 레이어) */}
        <img src={s3Image} alt="" className="inov__s3-img129" />

        {/* BUSINESS CARD */}
        <img src={cardBack}  alt="" className="inov__s3-card-back" />
        <img src={cardFront} alt="" className="inov__s3-card-front" />

        {/* image 126 — model photo */}
        <img src={s3Model} alt="" className="inov__s3-model" />

        {/* POST CARD */}
        <img src={photoJapan} alt="" className="inov__s3-pc inov__s3-pc--japan" />
        <img src={photoTree}  alt="" className="inov__s3-pc inov__s3-pc--tree" />
        <img src={photoDark}  alt="" className="inov__s3-pc inov__s3-pc--dark" />
        <img src={photoTang}  alt="" className="inov__s3-pc inov__s3-pc--tang" />
        <img src={photoPink}  alt="" className="inov__s3-pc inov__s3-pc--pink" />
        <img src={photoDrive} alt="" className="inov__s3-pc inov__s3-pc--drive" />
        <div className="inov__s3-label inov__s3-label--pc">
          <span className="inov__s3-dot" />
          <div className="inov__s3-label-text">
            <p className="inov__s3-label-title">POST CARD</p>
            <p className="inov__s3-label-desc">직접 촬영한 사진과 손그림, 손글씨를 활용한<br />감성적인 엽서 디자인</p>
          </div>
        </div>

        <div className="inov__s3-label inov__s3-label--bc">
          <span className="inov__s3-dot" />
          <div className="inov__s3-label-text">
            <p className="inov__s3-label-title">BUSINESS CARD</p>
            <p className="inov__s3-label-desc">심플한 도형 모티프와<br />브랜드 이념 메시지를 담은 명함 디자인</p>
          </div>
        </div>

        {/* DIARY */}
        <img src={diaryThings} alt="" className="inov__s3-diary-things" />
        <img src={diary}       alt="" className="inov__s3-diary" />
        <div className="inov__s3-label inov__s3-label--diary">
          <span className="inov__s3-dot" />
          <div className="inov__s3-label-text">
            <p className="inov__s3-label-title">DIARY</p>
            <p className="inov__s3-label-desc">엽서 디자인에서 사용한 색감을 기반으로 구성한<br />파스텔톤 다이어리 디자인</p>
          </div>
        </div>

        {/* STICKER — sticker.svg = full group (fish + panel + orange) */}
        <img src={sticker} alt="" className="inov__s3-sticker" />
        <div className="inov__s3-label inov__s3-label--sticker">
          <span className="inov__s3-dot" />
          <div className="inov__s3-label-text">
            <p className="inov__s3-label-title">STICKER</p>
            <p className="inov__s3-label-desc">메인 컬러(#F68827)에서 영감을 받아 제작한<br />손그림 스티커 디자인</p>
          </div>
        </div>

        {/* 하단 */}
        <h2 className="inov__s3-title">이노벨 굿즈 제작</h2>
        <div className="inov__s3-badge">
          <img src={gnIcon}    alt="" className="inov__s3-badge-icon" />
          <img src={figmaIcon} alt="" className="inov__s3-badge-icon" />
          <div className="inov__badge-bar-wrap">
            <div className="inov__badge-bar">
              <div className="inov__badge-fill inov__badge-fill--100" />
              <div className="inov__badge-dot inov__badge-dot--100" />
            </div>
            <span className="inov__badge-label">굿노트/피그마, 기여도 100%</span>
          </div>
        </div>
      </section>
    </div>
  );
}
