// BackButtons.tsx
import type React from "react";
import styles from "../styles.module.css";

interface BackButtonsProps {
  onBack: () => void;
  onBackToTitle: () => void;
  showOnlyTitleButton?: boolean;
}

const BackButtons: React.FC<BackButtonsProps> = ({ onBack, onBackToTitle, showOnlyTitleButton = false }) => {
  return (
    <div>
      <button type="button" className={styles.backButton} onClick={onBackToTitle}>
        <span className={styles.emojiColor}>◀</span> タイトル画面に戻る
      </button>
      {!showOnlyTitleButton && (
        <button type="button" className={styles.backButton} onClick={onBack}>
          <span className={styles.emojiColor}>◀</span> 一つ前の画面に戻る
        </button>
      )}
    </div>
  );
};

export default BackButtons;
