import React from 'react';
import { Section } from './AppTypes';

interface ShowQuestionProps {
  section: Section;
  questionIndex: number;
  onChoiceSelect: (choice: string) => void;
}

const ShowQuestion: React.FC<ShowQuestionProps> = ({ section, questionIndex, onChoiceSelect }) => {
  const question = section.questions[questionIndex];

  return (
    <div>
      <h3>{question.text}</h3>
      {section.choices.map((choice, index) => (
        <button key={`${question.id}-${index}`} type="button" onClick={() => onChoiceSelect(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
};

export default ShowQuestion;