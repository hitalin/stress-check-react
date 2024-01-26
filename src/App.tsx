// App.tsx
import React, { useState } from 'react';
import StartSection from './StartSection';
import ShowQuestion from './ShowQuestion';
import ShowTitle from './ShowTitle';
import { Employee } from './AppTypes';
import './App.css';

const App: React.FC = () => {
  const [employee, setEmployee] = useState<Employee>({ gender: '', stressLevel: '' });
  const [step, setStep] = useState(0);

  const handleChoiceSelection = (choice: string) => {
    if (step === 1) {
      setEmployee({ ...employee, gender: choice });
    } else if (step === 2) {
      setEmployee({ ...employee, stressLevel: choice });
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ShowTitle />
        {step === 0 ? (
          <StartSection onNext={handleNext} />
        ) : (
          <ShowQuestion onChoiceSelect={handleChoiceSelection} />
        )}
      </header>
    </div>
  );
}

export default App;