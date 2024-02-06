import React from 'react';
import { Section } from './types';
import { dynamicChoiceButton } from './styles';

interface ShowChoicesProps {
  section: Section;
  questionIndex: number;
  onChoiceSelect: (choice: string, questionIndex: number) => void;
}

// ShowChoices.tsx
const ShowChoices: React.FC<ShowChoicesProps> = ({ section, questionIndex, onChoiceSelect }) => {
  const question = section.questions?.[questionIndex];

  if (!section.choices) {
    return null;
  }

  return (
    <div>
      {section.choices.map((choice, index) => (
        <button
          key={`${question?.id}-${index}`}
          type="button"
          css={dynamicChoiceButton(index)}
          onClick={() => onChoiceSelect(choice, questionIndex)}
        >
          {choice}
        </button>
      ))}
    </div>
  );
};

export default ShowChoices;