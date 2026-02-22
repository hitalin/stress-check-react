// ProgressDots.tsx
import type React from "react";
import styles from "../styles.module.css";

interface ProgressDotsProps {
  questionIndex: number;
  totalQuestions: number;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({ questionIndex, totalQuestions }) => {
  return (
    <div className={styles.progressDots}>
      {Array.from({ length: totalQuestions }, (_, i) => `dot-${i + totalQuestions}`).map((key, index) => (
        <div
          key={key}
          className={styles.dot}
          style={{
            backgroundColor: index <= questionIndex ? "var(--salmon-pink)" : "var(--light-salmon-pink)",
          }}
        />
      ))}
    </div>
  );
};

export default ProgressDots;
