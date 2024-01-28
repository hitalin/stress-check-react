import React from 'react';

interface BackButtonsProps {
  onBack: () => void;
  onBackToTitle: () => void;
}

const BackButtons: React.FC<BackButtonsProps> = ({ onBack, onBackToTitle }) => {
  return (
    <div>
      <button type="button" onClick={onBackToTitle}>タイトル画面に戻る</button>
      <button type="button" onClick={onBack}>一つ前の画面に戻る</button>
    </div>
  );
}

export default BackButtons;