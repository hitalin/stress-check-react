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
      <button type="button" onClick={onNext} className="px-4 py-2 bg-blue-300 text-white rounded shadow-lg hover:bg-blue-400 transition-colors duration-300">次へ</button>
    </div>
  );
};

export default StartSection;