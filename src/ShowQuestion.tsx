// ShowQuestion.tsx
import React from 'react';
import { Section } from './types';
import { dynamicQuestionColor } from './styles';

interface ShowQuestionProps {
  section: Section;
  questionIndex: number;
}

// ShowQuestion.tsx
const ShowQuestion: React.FC<ShowQuestionProps> = ({ section, questionIndex }) => {
  const question = section.questions?.[questionIndex];
  const questionStyle = dynamicQuestionColor(section.step);

  if (!question) {
    return null;
  }

  return (
    <div>
      <h3 css={questionStyle}>{question.text}</h3>
    </div>
  );
};

export default ShowQuestion;
