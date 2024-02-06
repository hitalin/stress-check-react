// NextButton.tsx
import React from 'react';
import { nextButtonClass } from './styles';

interface NextButtonProps {
  onNext: () => void;
  nextText: string;
}

const NextButton: React.FC<NextButtonProps> = ({ onNext }) => {
  return (
    <button type="button" onClick={onNext} css={nextButtonClass}>{nextText}</button>
  );
};

export default NextButton;