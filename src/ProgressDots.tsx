// ProgressDots.tsx
import React from 'react';
import { flexCenterWrap, dotStyle } from './styles';

interface ProgressDotsProps {
  questionIndex: number;
  totalQuestions: number;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({ questionIndex, totalQuestions }) => {
  return (
    <div css={flexCenterWrap}>
      {Array.from({ length: totalQuestions }, (_, i) => `dot-${i + totalQuestions}`).map((key, index) => (
        <div css={dotStyle} style={{backgroundColor: index <= questionIndex ? '#008CBA' : '#bbb'}} />
      ))}
    </div>
  );
};

export default ProgressDots;