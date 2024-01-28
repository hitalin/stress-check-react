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
      {section.choices.map((choice, index) => {
        let buttonColor = '';
        let borderColor = '';
        let hoverColor = '';
        switch (index % 4) {
          case 0:
            buttonColor = 'bg-orange-100';
            borderColor = 'text-orange-500 border-orange-500';
            hoverColor = 'hover:bg-orange-50';
            break;
          case 1:
            buttonColor = 'bg-green-100';
            borderColor = 'text-green-500 border-green-500';
            hoverColor = 'hover:bg-green-50';
            break;
          case 2:
            buttonColor = 'bg-teal-100';
            borderColor = 'text-teal-500 border-teal-500';
            hoverColor = 'hover:bg-teal-50';
            break;
          case 3:
            buttonColor = 'bg-blue-100';
            borderColor = 'text-blue-500 border-blue-500';
            hoverColor = 'hover:bg-blue-50';
            break;
          default:
            break;
        }
        return (
          <button
            key={`${question.id}-${index}`}
            type="button"
            className={`px-4 py-2 rounded shadow-lg transition-colors duration-300 border-2 m-2 ${buttonColor} ${borderColor} ${hoverColor}`}
            onClick={() => onChoiceSelect(choice)}
          >
            {choice}
          </button>
        );
      })}
    </div>
  );
};

export default ShowQuestion;