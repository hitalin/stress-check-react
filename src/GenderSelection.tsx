// GenderSelection.tsx
import React from 'react';
import { Gender } from './AppTypes';

interface GenderSelectionProps {
  onGenderSelect: (gender: Gender) => void;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({ onGenderSelect }) => (
  <div>
    <p>４つのSTEPによる簡単な質問から、あなたの職場におけるストレスレベルを測定します。</p>
    <p>質問は全部で57問です。（所要時間約5分間）</p>
    <p>はじめに性別を選んでください</p>
    <button type="button" onClick={() => onGenderSelect(Gender.MALE)}>男性</button>
    <button type="button" onClick={() => onGenderSelect(Gender.FEMALE)}>女性</button>
  </div>
);

export default GenderSelection;