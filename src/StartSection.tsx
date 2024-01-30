// StartSection.tsx
import React from 'react';

interface StartSectionProps {
  description: string;
}

const StartSection: React.FC<StartSectionProps> = ({ description }) => {
  return (
    <div>
      <h2>{description}</h2>
    </div>
  );
};

export default StartSection;