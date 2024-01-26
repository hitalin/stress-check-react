import React, { useState } from 'react';
import { Employee, Gender, StressLevel } from './AppTypes';
import GenderSelection from './GenderSelection';
import ShowTitle from './ShowTitle';
import './App.css';

const App: React.FC = () => {
  const [employee, setEmployee] = useState<Employee>({ gender: Gender.UNDEFINED, stressLevel: StressLevel.UNDEFINED });

  const handleGenderSelection = (gender: Gender) => {
    setEmployee({ gender, stressLevel: StressLevel.UNDEFINED });
  };

  return (
    <div className="App">
      <header className="App-header">
        <ShowTitle />
        <GenderSelection onGenderSelect={handleGenderSelection} />
      </header>
    </div>
  );
}

export default App;