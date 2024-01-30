import { css } from '@emotion/react';

export const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export const bodyStyle = css`
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif; // Tailwind CSS default font
`;

export const linkStyle = css`
  text-decoration: none;
  color: #1a202c; // Tailwind CSS default text color
`;

export const textContainerStyle = css`
  white-space: pre-line;
  text-align: center;
  font-size: 1.25rem; // Tailwind CSS default font size
  width: 100%;
  height: auto;
  overflow: auto;
  color: #1a202c; // Tailwind CSS default text color
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
  padding: 1rem;
  @media (min-width: 640px) {
    padding: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

export const pt6Style = css`
  padding-top: 1.5rem;
`;

export const baseButton = css`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15);
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

export const hoverButton = css`
  &:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
  }
`;

export const transitionButton = css`
  transition: all 0.5s;
`;

export const buttonClass = css`
  ${baseButton};
  ${blueButton};
  ${hoverButton};
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
  margin: 0.05rem;
`;

export const smDot = css`
  @media (min-width: 640px) {
    height: 0.6rem;
    width: 0.6rem;
    margin: 0.075rem;
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

export const flexCenterGrow = css`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;