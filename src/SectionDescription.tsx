// StartSection.tsx
import React from 'react';

interface SectionDescriptionProps {
  description: string;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({ description }) => {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};

export default SectionDescription;