// ProgressDots.tsx
import type React from "react";
import { dotStyle, lightSalmonPink, progressDotsStyle, SalmonPink } from "../styles";

interface ProgressDotsProps {
  questionIndex: number;
  totalQuestions: number;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({ questionIndex, totalQuestions }) => {
  return (
    <div css={progressDotsStyle}>
      {Array.from({ length: totalQuestions }, (_, i) => `dot-${i + totalQuestions}`).map((key, index) => (
        <div
          key={key}
          css={dotStyle}
          style={{ backgroundColor: index <= questionIndex ? SalmonPink : lightSalmonPink }}
        />
      ))}
    </div>
  );
};

export default ProgressDots;
