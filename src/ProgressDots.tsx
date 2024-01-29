// ProgressDots.tsx
import React from 'react';
import { flexCenterClass, dotStyle } from './styles';

interface ProgressDotsProps {
  questionIndex: number;
  totalQuestions: number;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({ questionIndex, totalQuestions }) => {
  return (
    <div className={flexCenterClass}>
      {Array.from({ length: totalQuestions }, (_, i) => `dot-${i + totalQuestions}`).map((key, index) => (
        <div className={dotStyle} style={{backgroundColor: index <= questionIndex ? '#008CBA' : '#bbb'}} />
      ))}
    </div>
  );
};

export default ProgressDots;