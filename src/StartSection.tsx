// StartSection.tsx
import React from 'react';

interface StartSectionProps {
  description: string;
  onNext: () => void;
}

const StartSection: React.FC<StartSectionProps> = ({ description, onNext }) => {
  return (
    <div>
      <h2>{description}</h2>
      <button type="button" onClick={onNext}>Start</button>
    </div>
  );
};

export default StartSection;