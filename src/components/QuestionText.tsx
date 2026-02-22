// QuestionText.tsx
import type React from "react";
import styles from "../styles.module.css";
import type { Section } from "../types";

interface QuestionTextProps {
  section: Section;
  questionIndex: number;
}

const QuestionText: React.FC<QuestionTextProps> = ({ section, questionIndex }) => {
  const question = section.questions?.[questionIndex];

  if (!question) {
    return null;
  }

  return (
    <div>
      <h3 className={styles.questionColor} data-section={section.step}>
        {question.text}
      </h3>
    </div>
  );
};

export default QuestionText;
