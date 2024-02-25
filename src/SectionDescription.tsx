// SectionDescription.tsx
import React from 'react';
import { sectionDescriptionStyle } from './styles';

interface SectionDescriptionProps {
  description: string;
  isLastSection: boolean; // 新しい prop を追加
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({ description, isLastSection }) => {
  return (
    <div css={sectionDescriptionStyle(isLastSection)}>
      <p>{description}</p>
    </div>
  );
};

export default SectionDescription;