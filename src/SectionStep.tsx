// SectionStep.tsx
import React from 'react';

interface SectionStepProps {
  sectionStep: number;
  sectionName: string;
}

const SectionStep: React.FC<SectionStepProps> = ({ sectionStep, sectionName }) => {
  return (
    <div>
      <p>STEP{sectionStep} {sectionName}</p>
    </div>
  );
};

export default SectionStep;