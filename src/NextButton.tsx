// NextButton.tsx
import React from 'react';
import { buttonClass } from './styles';

interface NextButtonProps {
  onNext: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onNext }) => {
  return (
    <button type="button" onClick={onNext} css={buttonClass}>次へ</button>
  );
};

export default NextButton;