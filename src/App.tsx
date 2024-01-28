// App.tsx
import React, { useState } from 'react';
import ShowTitle from './ShowTitle';
import StartSection from './StartSection';
import ShowQuestion from './ShowQuestion';
import { Employee } from './AppTypes';
import { sections } from './LoadSections';
import './App.css';

const App: React.FC = () => {
  const [employee, setEmployee] = useState<Employee>({ gender: '', stressLevel: '' });
  const [currentSection, setCurrentSection] = useState<number>(0); // Initialize currentSection with 0
  const [currentQuestion, setCurrentQuestion] = useState<number>(0); // Initialize currentQuestion with 0
  const [showStartSection, setShowStartSection] = useState<boolean>(true); // Initialize showStartSection with true

  const handleNextQuestion = () => {
    if (currentQuestion < sections[currentSection].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
      setShowStartSection(true);
    }
  };

  const handleStartSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <ShowTitle sectionName={sections[currentSection].name} />
        {showStartSection ? (
          <StartSection description={sections[currentSection + 1].description} onNext={() => setShowStartSection(false)} />
        ) : (
          <ShowQuestion section={sections[currentSection]} questionIndex={currentQuestion} onChoiceSelect={handleNextQuestion} />
        )}
      </header>
    </div>
  );
}

export default App;