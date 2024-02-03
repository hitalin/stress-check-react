// NextButton.tsx
import React from 'react';
import { nextButtonClass } from './styles';

interface NextButtonProps {
  onNext: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onNext }) => {
  return (
    <button type="button" onClick={onNext} css={nextButtonClass}>次へ</button>
  );
};

export default NextButton;