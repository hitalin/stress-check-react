// QuestionText.tsx
import type React from "react";
import { dynamicQuestionColor } from "../styles";
import type { Section } from "../types";

interface QuestionTextProps {
  section: Section;
  questionIndex: number;
}

const QuestionText: React.FC<QuestionTextProps> = ({ section, questionIndex }) => {
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

export default QuestionText;
