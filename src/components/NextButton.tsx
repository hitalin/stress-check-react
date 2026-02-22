// NextButton.tsx
import type React from "react";
import styles from "../styles.module.css";

interface NextButtonProps {
  onNext: () => void;
  nextText: string;
  isLastSection: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ onNext, nextText, isLastSection }) => {
  return (
    <button type="button" onClick={onNext} className={styles.nextButton} data-last-section={isLastSection}>
      {nextText}
    </button>
  );
};

export default NextButton;
