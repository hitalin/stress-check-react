import React from 'react';
import { sections } from './LoadSections';

interface ShowQuestionProps {
  onChoiceSelect: (choice: string) => void;
}

const ShowQuestion: React.FC<ShowQuestionProps> = ({ onChoiceSelect }) => {
  const section = sections[0];

  return (
    <div>
      {section.questions.map((question) => (
        <div key={question.id}>
          <h3>{question.text}</h3>
          {section.choices.map((choice, index) => (
            <button key={`${question.id}-${index}`} type="button" onClick={() => onChoiceSelect(choice)}>
              {choice}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShowQuestion;