// StartSection.tsx
import React from 'react';
import { buttonClass } from './styles';

interface StartSectionProps {
  description: string;
  onNext: () => void;
}

const StartSection: React.FC<StartSectionProps> = ({ description, onNext }) => {
  return (
    <div>
      <h2 className="centerText">{description}</h2>
      <button type="button" onClick={onNext} className={buttonClass}>次へ</button>
    </div>
  );
};

export default StartSection;