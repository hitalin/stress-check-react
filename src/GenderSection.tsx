import React from 'react';
import { Gender } from './AppTypes';
import { sections } from './LoadSections';

interface GenderSectionProps {
  onGenderSelect: (gender: Gender) => void;
}

const GenderSection: React.FC<GenderSectionProps> = ({ onGenderSelect }) => {
  const handleButtonClick = (choice: string) => {
    const gender = choice === "男性" ? Gender.MALE : Gender.FEMALE;
    onGenderSelect(gender);
  };

  return (
    <div>
      <h2>{sections[0].name}</h2>
      <p>{sections[0].description}</p>
      <p>{sections[0].questions[0].text}</p>
      <div>
        {sections[0].choices.map((choice: string) => (
          <button key={choice} type="button" onClick={() => handleButtonClick(choice)}>
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenderSection;