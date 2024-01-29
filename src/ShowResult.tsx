// ShowResult.tsx
import React, { useEffect, useState } from 'react';
import { Section } from './types';
import { calculateStressLevel } from './calculateStressLevel';

interface Props {
  sections: Section[];
  scores: number[];
}

const ShowResult: React.FC<Props> = ({ sections, scores }) => {
  const [stressLevel, setStressLevel] = useState<string>('');

  useEffect(() => {
    const level = calculateStressLevel(scores);
    setStressLevel(level);
  }, [scores]);

  return (
    <div>
      <h2>判定</h2>
      <p>{stressLevel === 'high' ? '高ストレス者です' : '低ストレス者です'}</p>
      <p>STEP{sections[1].step} {sections[1].name}の合計点: {scores[1]}</p>
      <p>STEP{sections[2].step} {sections[2].name}の合計点: {scores[2]}</p>
      <p>STEP{sections[3].step} {sections[3].name}の合計点: {scores[3]}</p>
    </div>
  );
};

export default ShowResult;