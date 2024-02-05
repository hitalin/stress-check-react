import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: url("../public/bg.png");
    color: #333;
    font-family: "新丸ゴ M", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
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
    font-weight: normal;
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
  font-family: "新丸ゴ M", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
`;

export const linkStyle = css`
  text-decoration: none;
  color: #333;
`;

export const appStyle = css`
  position  : relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  padding: 0.5rem 0;

  @media (max-width: 767px) {
    padding: 0.25rem 0;
  }
`;

export const appHeaderStyle = css`
  padding: 2rem 1rem;
  @media (min-width: 640px) {
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    border: 2px solid #FF9999;
    border-radius: 25px;
    padding: 20px;
    width: 70vw;
    height: 80vh;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const sectionDescriptionStyle = css`
  font-size: 1.5rem;
  margin: 10vh auto 1rem;
  white-space: pre-line;
  padding: 0 1rem;

  @media (max-width: 767px) {
    font-size: 1.5rem;
    margin-top: 5vh;
  }
`;

export const titleAndProgressStyle = css`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #FF9999;
  min-height: 70px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const titleStyle = css`
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

export const sectionTitleStyle = css`
`;

export const showNextButton = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const questionColors = [
  '#000000', // セクション0: 黒（このままで良い）
  '#AED581', // セクション1: より濃い黄緑、でもまだ淡い色調
  '#92CAFF', // セクション2: より濃い水色、でも淡い色調を保持
  '#9FC3F7', // セクション3: より濃い青、淡い色調を保持しつつ読みやすく
  '#C7A4FF', // セクション4: より濃い紫、淡い色調を保持しつつ視認性を高める
];

export const dynamicQuestionColor = (colorIndex: number) => css`
  color: ${questionColors[colorIndex % questionColors.length]};
`;

export const showQuestionText = css`
  font-size: 2rem;
  text-align: center;
  margin: 10vh auto 1rem;
  white-space: pre-line;
  padding: 0 1rem;

  @media (max-width: 767px) {
    font-size: 1.5rem;
    margin-top: 5vh;
  }
`;

export const baseButton = css`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: color 0.3s;
  margin: 0.5rem;
`;

export const baseColor = css`
  color: #FF9999;
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
    background-color: #FFD1A4; // 淡いオレンジ
    color: #805300; // オレンジに合わせたテキスト色
    border: 2px solid #FFD1A4; // 枠線も同色で
    &:hover {
      background-color: #FFB073;
    }
  `,
  css`
    background-color: #B7E1CD; // 淡い緑
    color: #1E4D2B; // 緑に合わせたテキスト色
    border: 2px solid #B7E1CD;
    &:hover {
      background-color: #9FD3B1;
    }
  `,
  css`
    background-color: #cce5ff;
    color: #004085;
    border: 2px solid #b8daff;
    &:hover {
      background-color: #e6f7ff;
    }
  `,
  css`
    background-color: #BDD7EE; // 淡い青
    color: #003C8F; // 青に合わせたテキスト色
    border: 2px solid #BDD7EE;
    &:hover {
      background-color: #A6C8E1;
    }
  `
];

// choiceButtonClass を更新して色を動的に適用できるように変更
export const dynamicChoiceButton = (colorIndex: number) => css`
  ${baseButton};
  ${choiceColors[colorIndex % choiceColors.length]}; // 色の循環を保証
  ${transitionButton};

  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const ShowChoiceButtons = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  bottom: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: auto;
    margin-bottom: 1rem;
  }
`;

export const nextButtonClass = css`
  ${baseButton};
  ${blueButton};
  ${transitionButton};

  position: fixed;
  bottom: 50px;
  margin-top: auto;
  margin-bottom: 1rem;
  width: auto;
`;

// styles.ts
export const dotStyle = css`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  margin: 0.25rem;
`;

export const showProgress = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end; // default to right alignment for larger screens

  @media (max-width: 767px) {
    justify-content: flex-start; // align left on mobile screens
  }
`;

export const showBackButtons = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: auto;
  position: fixed;
  bottom: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    position: static;
  }
`;