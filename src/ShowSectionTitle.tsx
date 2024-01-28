// ShowSectionTitle.tsx
import React from 'react';

interface ShowSectionTitleProps {
  sectionStep: number;
  sectionName: string;
}

const ShowSectionTitle: React.FC<ShowSectionTitleProps> = ({ sectionStep, sectionName }) => {
  return (
    <div>
      <p>STEP{sectionStep} {sectionName}</p>
    </div>
  );
};

export default ShowSectionTitle;