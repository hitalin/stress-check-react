import React, { useEffect, useState, useCallback } from 'react';
import { Question, Section } from './AppTypes'; // Import the Question and Section types

type Props = {
  sections: Section[];
};

const ShowResult: React.FC<Props> = ({ sections }) => {
  const [stressLevel, setStressLevel] = useState<string>('');

  const calculateScore = useCallback((questions: Question[]) => {
    return questions.reduce((total, question) => {
      let score = question.score;
      if (question.reverse) {
        score = 5 - score;
      }
      return total + score;
    }, 0);
  }, []);

  useEffect(() => {
    const scores = sections.slice(1).map(section => calculateScore(section.questions));
    const isHighStress = scores[1] >= 77 || (scores[0] + scores[2] + scores[3] === 76 && scores[1] >= 63);
    setStressLevel(isHighStress ? 'high' : 'low');
  }, [sections, calculateScore]);

  return (
    <div>
      <h2>判定</h2>
      <p>{stressLevel === 'high' ? '高ストレス者です' : '低ストレス者です'}</p>
      {sections.slice(1).map((section) => (
        <div key={section.step}>
          <h3>{section.name}</h3>
          <p>合計点: {calculateScore(section.questions)}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowResult;