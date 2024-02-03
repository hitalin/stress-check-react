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

export const textContainerStyle = css`
  white-space: pre-line;
  text-align: center;
  font-size: 1.125rem;
  width: 100%;
  height: auto;
  overflow: auto;
  color: #333;
`;

export const appStyle = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.5rem 0;
  @media (min-width: 640px) {
    padding: 1rem 0;
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
    justify-content: center;
    align-items: center;
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

export const titleStyle = css`
  @media (min-width: 1024px) {
    position: absolute;
    top: 0px;
    left: 0px;
    transform: translate(10px, 10px);
  }
`;

export const sectionTitleStyle = css`
  @media (min-width: 1024px) {
    position: absolute;
    top: 20px;
    left: 3px;
    transform: translate(10px, 10px);
  }
`;

export const baseButton = css`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: color 0.3s;
  margin: 0.5rem;
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

export const buttonClass = css`
  ${baseButton};
  ${blueButton};
  ${transitionButton};
`;

export const flexCenterWrap = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const baseDot = css`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  margin: 0.25rem;
`;

export const smDot = css`
  @media (min-width: 640px) {
    height: 0.6rem;
    width: 0.6rem;
    margin: 0.3rem;
  }
`;

export const dotStyle = css`
  ${baseDot};
  ${smDot};
`;

export const backButtonClass = css`
  margin: 0.5rem;
  &:hover {
    opacity: 0.5;
  }
`;

export const flexColumnRowClass = css`
  display: flex;
  flex-direction: column;
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const marginStyle = css`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`;