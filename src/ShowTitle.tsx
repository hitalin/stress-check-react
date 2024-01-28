import React from 'react';

interface ShowTitleProps {
  sectionName: string;
}

const ShowTitle: React.FC<ShowTitleProps> = ({ sectionName }) => {
  return (
    <div>
      <h1>５分でできる職場のストレスセルフチェック</h1>
      <p>{sectionName}</p>
    </div>
  );
};

export default ShowTitle;