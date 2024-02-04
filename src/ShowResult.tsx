// ShowResult.tsx
import React, { useEffect, useState } from 'react';
import { Section, Question } from './types';
import { calculateStressLevel } from './calculateStressLevel';
import { calculateValue } from './calculateValue';

interface Props {
  sections: Section[];
  scores: number[];
}

const ShowResult: React.FC<Props> = ({ sections, scores }) => {
  const [values, setValues] = useState<number[][]>([]);
  const [method1Result, setMethod1Result] = useState<boolean>(false);
  const [method2Result, setMethod2Result] = useState<boolean>(false);
  const [totals, setTotals] = useState<number[]>([]);

  useEffect(() => {
    const { method1, method2, totals } = calculateStressLevel(scores, values);
    setMethod1Result(method1);
    setMethod2Result(method2);
    setTotals(totals);
  }, [scores, values]);

  useEffect(() => {
    setValues(sections.map((section) => {
      const questions: Question[] = section.questions;
      return section.factors.map(factor => calculateValue(questions, factor));
    }));
  }, [sections]);

  return (
    <div>
      <h2>判定</h2>
      <p>１ 合計点数を使う方法: {method1Result ? '高ストレス者です' : '低ストレス者です'}</p>
      <p>２ 素点換算表を使う方法: {method2Result ? '高ストレス者です' : '低ストレス者です'}</p>
      {sections.map((section, index) => {
        // Skip section0 and section4
        if (index === 0 || index === 4) return null;

        return (
          <div key={section.step}>
            <p>STEP{section.step} {section.name}の合計点: {scores[index]}</p>
            <p>このセクションの評価点の合計: {totals[index]}</p>
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