import React from 'react';
import { Section } from './AppTypes';

interface ShowQuestionProps {
  section: Section;
  questionIndex: number;
}

const ShowQuestion: React.FC<ShowQuestionProps> = ({ section, questionIndex }) => {
  const question = section.questions[questionIndex];

  return (
    <div>
      <h3 style={{ whiteSpace: 'pre-line', textAlign: 'center', fontSize: '2em' }}>{question.text}</h3>
    </div>
  );
};

export default ShowQuestion;