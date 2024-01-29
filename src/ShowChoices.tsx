import React from 'react';
import { Section } from './AppTypes';
import { flexColumnRowClass, buttonClass } from './styles';

interface ShowChoicesProps {
  section: Section;
  questionIndex: number;
  onChoiceSelect: (choice: string) => void;
}

const ShowChoices: React.FC<ShowChoicesProps> = ({ section, questionIndex, onChoiceSelect }) => {
  const question = section.questions[questionIndex];

  return (
    <div className={flexColumnRowClass}>
      {section.choices.map((choice, index) => {
        return (
          <button
            key={`${question.id}-${index}`}
            type="button"
            className={buttonClass}
            onClick={() => onChoiceSelect(choice)}
          >
            {choice}
          </button>
        );
      })}
    </div>
  );
};

export default ShowChoices;