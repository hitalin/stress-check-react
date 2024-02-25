// NextButton.tsx
import React from 'react';
import { nextButtonClass } from './styles';

interface NextButtonProps {
  onNext: () => void;
  nextText: string;
  isLastSection: boolean; // 新しい prop を追加
}

const NextButton: React.FC<NextButtonProps> = ({ onNext, nextText, isLastSection }) => {
  return (
    <button type="button" onClick={onNext} css={nextButtonClass(isLastSection)}>{nextText}</button>
  );
};

export default NextButton;