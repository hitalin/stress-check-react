import React from 'react';
import { Section } from './AppTypes';

interface ShowQuestionProps {
  section: Section;
  questionIndex: number;
}

const ShowQuestion: React.FC<ShowQuestionProps> = ({ section, questionIndex }) => {
  const question = section.questions[questionIndex];

  let color: string;
  switch (section.step) {
    case 0:
      color = '#FF69B4'; // HotPink
      break;
    case 1:
      color = '#32CD32'; // LimeGreen
      break;
    case 2:
      color = '#00FFFF'; // Cyan
      break;
    case 3:
      color = '#0000CD'; // MediumBlue
      break;
    case 4:
      color = '#800080'; // Purple
      break;
    default:
      color = 'black';
  }

  return (
    <div>
      <h3 style={{ whiteSpace: 'pre-line', textAlign: 'center', color: color, fontSize: '2em' }}>{question.text}</h3>
    </div>
  );
};

export default ShowQuestion;