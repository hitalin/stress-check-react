import { css, keyframes } from '@emotion/react';

const nextSlideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-25%);
    opacity: 0;
  }
`;

const nextSlideIn = keyframes`
  0% {
    transform: translateX(25%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const nextSlideOutTextStyle = css`
  animation: ${nextSlideOut} 0.2s ease-in-out forwards;
`;

export const nextSlideInTextStyle = css`
  animation: ${nextSlideIn} 0.2s ease-in-out forwards;
`;

const prevSlideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(25%);
    opacity: 0;
  }
`;

const prevSlideIn = keyframes`
  0% {
    transform: translateX(-25%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const prevSlideOutTextStyle = css`
  animation: ${prevSlideOut} 0.2s ease-in-out forwards;
`;

export const prevSlideInTextStyle = css`
  animation: ${prevSlideIn} 0.2s ease-in-out forwards;
`;

export const friendlyFont = '"新丸ゴ M", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif';
export const softBlack = '#555555';
export const lightSalmonPink = '#FFD1DC';
export const SalmonPink = '#FF9999';

export const questionColors = [
  '#555555', // セクション0: より淡い黒、読みやすさを保持
  '#AED581', // セクション1: より濃い黄緑、でもまだ淡い色調
  '#92CAFF', // セクション2: より濃い水色、でも淡い色調を保持
  '#9FC3F7', // セクション3: より濃い青、淡い色調を保持しつつ読みやすく
  '#C7A4FF', // セクション4: より濃い紫、淡い色調を保持しつつ視認性を高める
];

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: url("/bg.png");
    color: ${softBlack};
    font-family: ${friendlyFont};
    font-size: 18px;
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
  }
  @media (max-width: 767px) {
    body {
      font-size: 14px;
      line-height: 1.8;
    }
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    font-size: 100%;
    line-height: 1.5;
  }
  p {
    margin: 0;
  }
  ul {
    list-style: none;
  }
`;

export const bodyStyle = css`
  margin: 0;
  padding: 0;
  font-family: ${friendlyFont};
`;

export const linkStyle = css`
  text-decoration: none;
  color: ${softBlack};
`;

export const appStyle = css`
  position  : relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

export const appHeaderStyle = css`
  overflow: hidden;
  padding: 0.5rem 0rem;

  @media (min-width: 640px) {
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    border: 1px solid ${lightSalmonPink};
    border-radius: 25px;
    padding: 0;
    width: 70vw;
    height: 80vh;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const sectionDescriptionStyle = css`
  font-size: 1.2rem;
  margin: 7% auto 1rem;
  text-align: center;
  white-space: pre-line;

  @media (max-width: 767px) {
    margin-top: 7%;
    margin-bottom: 50px;
  }
`;

export const titleAndProgressStyle = css`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${lightSalmonPink};
  min-height: 80px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0 1rem;
  margin-top: 0.5rem;
  font-weight: bold;

  @media (min-width: 768px) {
    min-height: 45px;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const appTitleStyle = css`
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  flex-grow: 1;
`;

export const progressStyle = css`
  @media (min-width: 768px) {
    align-self: center;
  }
`;

export const aggregationDateStyle = css`
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  flex-grow: 1;

  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`;

export const sectionTitleStyle = css`
  font-size: 0.9rem;
`;

export const nextButtonStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const dynamicQuestionColor = (colorIndex: number) => css`
  color: ${questionColors[colorIndex % questionColors.length]};
`;

export const questionTextStyle = css`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin: 10% auto 1rem;
  white-space: pre-line;
  padding: 0 1rem;

  @media (max-width: 767px) {
    font-size: 1.5rem;
    margin-top: 10%;
    margin-bottom: 50px;
  }
`;

export const baseButton = css`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: color 0.3s;
  margin: 0.5rem;
`;

export const backButtonClass = css`
  ${baseButton};
  background-color: transparent;
  border: none;
  &:hover {
    background-color: transparent;
  }

  @media (max-width: 767px) {
    flex: 1;
    margin: 0.25rem;
  }
`;


export const blueButton = css`
  background-color: #cce5ff;
  color: #004085;
  border: 2px solid #b8daff;
  &:hover {
    background-color: #e6f7ff;
  }
`;

export const transitionButton = css`
  transition: all 0.5s;
`;

export const choiceColors = [
  css`
    background-color: #FFEDD5; // Softer orange
    color: #805300;
    border: 2px solid #FFCBA4; // Softer border
    &:hover {
      background-color: #FFE8C2;
      color: #997A52;
      border: 2px solid #FFE8C2; // Softer border
    }
  `,
  css`
    background-color: #E1F2D8; // Softer green
    color: #1E4D2B;
    border: 2px solid #C1E2B3; // Softer border
    &:hover {
      background-color: #D1E8C4;
      color: #507F60;
      border: 2px solid #D1E8C4; // Softer border
    }
  `,
  css`
    background-color: #E6F7FF; // Softer blue
    color: #004085;
    border: 2px solid #CCE9FF; // Softer border
    &:hover {
      background-color: #F1FAFF;
      color: #336699;
      border: 2px solid #F1FAFF; // Softer border
    }
  `,
  css`
    background-color: #E9D8FD; // Softer purple
    color: #4A1D6E;
    border: 2px solid #D6BCFA; // Softer border
    &:hover {
      background-color: #F3EBFF; // Lighter color on hover
      color: #7C4DFF;
      border: 2px solid #F3EBFF; // Lighter border on hover
    }
  `,
];

// choiceButtonClass を更新して色を動的に適用できるように変更
export const dynamicChoiceButton = (colorIndex: number) => css`
  ${baseButton};
  ${choiceColors[colorIndex % choiceColors.length]};
  ${transitionButton};
  width: 22%;
  font-size: 1.2rem;
  flex: 1 1 0%;
  box-sizing: border-box;
  margin: 8px;

  @media (max-width: 767px) {
    width: 80%;
  }
`;

export const choiceButtonsStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  width: 100%;
  margin: auto 2rem;
  padding: 0 2rem;
  white-space: pre-line;
  position: fixed;
  top: 50%;
  justify-content: center;

  @media (min-width: 768px) {
    top: 75%;
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;


export const nextButtonClass = css`
  ${baseButton};
  ${blueButton};
  ${transitionButton};

  font-size: 1rem;
  height: 50px;
  width: 22%;
  margin-top: 10%;

  @media (max-width: 767px) {
    width: 50%;
    margin-top: 50%;
  }
`;

// styles.ts
export const dotStyle = css`
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 50%;
  margin: 0.2rem;

  @media (max-width: 767px) {
    height: 0.3rem;
    width: 0.3rem;
    border-radius: 50%;
    margin: 0.15rem;
  }
`;

export const progressDotsStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end; // default to right alignment for larger screens
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  @media (max-width: 767px) {
    justify-content: flex-start; // align left on mobile screens
  }
`;

// styles.ts
export const emojiColor = css`
  color: ${SalmonPink};
`;

export const backButtonsStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  position: fixed;
  bottom: 0;

  @media (max-width: 767px) {
    border-top: 1px solid ${lightSalmonPink};
    background-color: rgba(255, 255, 255, 0.8);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 0;
  }
`;

export const levelResult = (level: 'high' | 'low') => css`
  font-size: 1.5rem;
  text-align: center;
  color: ${level === 'high' ? '#721c24' : '#004085'}; // blueButton color
  background-color: ${level === 'high' ? 'rgba(255, 99, 132, 0.5)' : 'rgba(100, 149, 237, 0.5)'}; // RaderChart backgroundColor
  border: 2px solid ${level === 'high' ? '#f5c6cb' : '#b8daff'}; // blueButton border
  border-radius: 5px;
  margin: 1rem;
`;

export const sectionResult = css`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const aggregatedTotal = css`
  font-size: 0.8rem;
`;

export const sectionGroup = css`
  font-size: 0.9rem;
  font-weight: bold;
`;