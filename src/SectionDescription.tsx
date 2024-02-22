// StartSection.tsx
import React from 'react';

interface SectionDescriptionProps {
  description: string;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({ description }) => {
  return (
    <div>
      <h2>{description}</h2>
    </div>
  );
};

export default SectionDescription;