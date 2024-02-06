// BackButtons.tsx
import React from 'react';
import { backButtonClass, baseColor } from './styles';

interface BackButtonsProps {
  onBack: () => void;
  onBackToTitle: () => void;
  showOnlyTitleButton?: boolean;
}

const BackButtons: React.FC<BackButtonsProps> = ({ onBack, onBackToTitle, showOnlyTitleButton = false }) => {
  return (
    <div>
      <button type="button" css={backButtonClass} onClick={onBackToTitle}>
        <span css={baseColor}>◀</span> タイトル画面に戻る
      </button>
      {!showOnlyTitleButton && (
        <button type="button" css={backButtonClass} onClick={onBack}>
          <span css={baseColor}>◀</span> 一つ前の画面に戻る
        </button>
      )}
    </div>
  );
}

export default BackButtons;