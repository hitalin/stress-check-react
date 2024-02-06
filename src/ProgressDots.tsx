// ProgressDots.tsx
import React from 'react';
import { showProgress, dotStyle, SalmonPink, lightSalmonPink } from './styles';

interface ProgressDotsProps {
  questionIndex: number;
  totalQuestions: number;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({ questionIndex, totalQuestions }) => {
  return (
    <div css={showProgress}>
      {Array.from({ length: totalQuestions }, (_, i) => `dot-${i + totalQuestions}`).map((key, index) => (
        <div css={dotStyle} style={{backgroundColor: index <= questionIndex ? SalmonPink : lightSalmonPink}} />
      ))}
    </div>
  );
};

export default ProgressDots;