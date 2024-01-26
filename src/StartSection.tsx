// StartSection.tsx
import React from 'react';
import { sections } from './LoadSections';

interface StartSectionProps {
  onNext: () => void;
}

const StartSection: React.FC<StartSectionProps> = ({ onNext }) => {
  const section = sections[0];

  return (
    <div>
      <h2>{section.name}</h2>
      <p>{section.description}</p>
      <button type="button" onClick={onNext}>次に進む</button>
    </div>
  );
};

export default StartSection;