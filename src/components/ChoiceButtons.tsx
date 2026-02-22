import type React from "react";
import styles from "../styles.module.css";
import type { Section } from "../types";

interface ChoiceButtonsProps {
  section: Section;
  questionIndex: number;
  onChoiceSelect: (choice: string, questionIndex: number) => void;
}

// ChoiceButtons.tsx
const ChoiceButtons: React.FC<ChoiceButtonsProps> = ({ section, questionIndex, onChoiceSelect }) => {
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
          className={styles.choiceButton}
          data-color={index % 4}
          onClick={() => onChoiceSelect(choice, questionIndex)}
        >
          {choice}
        </button>
      ))}
    </div>
  );
};

export default ChoiceButtons;
