import React from 'react';

interface ShowTitleProps {
  sectionStep: number;
  sectionName: string;
}

const ShowTitle: React.FC<ShowTitleProps> = ({ sectionName, sectionStep}) => {
  return (
    <div>
      <h1>５分でできる職場のストレスセルフチェック</h1>
      <p>STEP{sectionStep} {sectionName}</p>
    </div>
  );
};

export default ShowTitle;