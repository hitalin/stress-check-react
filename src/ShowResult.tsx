// ShowResult.tsx
import React, { useEffect, useState } from 'react';
import { Section, Question } from './types';
import { calculateStressLevel } from './calculateStressLevel';
import { calcScoreFromQuestions } from './calculateValue';

interface Props {
  sections: Section[];
  scores: number[];
}

const ShowResult: React.FC<Props> = ({ sections, scores }) => {
  const [stressLevel, setStressLevel] = useState<string>('');
  const [values, setValues] = useState<number[][]>([]);

  useEffect(() => {
    const level = calculateStressLevel(scores);
    setStressLevel(level);
  }, [scores]);

  useEffect(() => {
    setValues(sections.map((section) => {
      const questions: Question[] = section.questions;
      return section.factors.map(factor => calcScoreFromQuestions(questions, factor));
    }));
  }, [sections]);

  return (
    <div>
      <h2>判定</h2>
      <p>{stressLevel === 'high' ? '高ストレス者です' : '低ストレス者です'}</p>
      {sections.map((section, index) => {
        // Skip section0 and section4
        if (index === 0 || index === 4) return null;

        return (
          <div key={section.step}>
            <p>STEP{section.step} {section.name}の合計点: {scores[index]}</p>
            {section.factors.map((factor, factorIndex) => (
              <p key={factor.scale}>
                {factor.scale}の評価点: {values[index]?.[factorIndex]}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ShowResult;