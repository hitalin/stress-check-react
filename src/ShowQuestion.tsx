// ShowQuestion.tsx
import React from 'react';
import { Section } from './types';
import { dynamicQuestionColor } from './styles';

interface ShowQuestionProps {
  section: Section;
  questionIndex: number;
}

const ShowQuestion: React.FC<ShowQuestionProps> = ({ section, questionIndex }) => {
  const question = section.questions[questionIndex];
  // セクションインデックスに基づいて動的にスタイルを適用
  const questionStyle = dynamicQuestionColor(section.step);

  return (
    <div>
      <h3 css={questionStyle}>{question.text}</h3>
    </div>
  );
};

export default ShowQuestion;
