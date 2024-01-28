import React, { useEffect, useState } from 'react';
import { Section } from './AppTypes'; // Import the Section type

interface Props {
  sections: Section[];
  scores: number[];
}

const ShowResult: React.FC<Props> = ({ sections, scores }) => {
  const [stressLevel, setStressLevel] = useState<string>('');

  useEffect(() => {
    const scoresWithDefaults = scores.map(score => score || 0); // Replace undefined or NaN with 0
    const isHighStress = scoresWithDefaults[2] >= 77 || (scoresWithDefaults[1] + scoresWithDefaults[3] === 76 && scoresWithDefaults[2] >= 63);
    setStressLevel(isHighStress ? 'high' : 'low');
  }, [scores]);

  return (
    <div>
      <h2>判定</h2>
      <p>{stressLevel === 'high' ? '高ストレス者です' : '低ストレス者です'}</p>
      {sections.slice(1).map((section, index) => (
        <div key={section.step}>
          <h3>{section.name}</h3>
          <p>合計点: {scores[index + 1]}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowResult;