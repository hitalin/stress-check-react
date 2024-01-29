// ProgressDots.tsx
import React from 'react';
import { flexCenterClass } from './styles';

interface ProgressDotsProps {
  questionIndex: number;
  totalQuestions: number;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({ questionIndex, totalQuestions }) => {
  return (
    <div className={flexCenterClass}>
      {Array.from({ length: totalQuestions }, (_, i) => `dot-${i + totalQuestions}`).map((key, index) => (
        <div
          key={key}
          style={{
            height: '10px',
            width: '10px',
            borderRadius: '50%',
            backgroundColor: index <= questionIndex ? '#008CBA' : '#bbb',
            margin: '5px',
          }}
        />
      ))}
    </div>
  );
};

export default ProgressDots;