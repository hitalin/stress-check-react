// App.tsx
import React, { useState } from 'react';
import ShowTitle from './ShowTitle';
import ShowSectionTitle from './ShowSectionTitle';
import StartSection from './StartSection';
import ShowQuestion from './ShowQuestion';
import BackButtons from './BackButtons';
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
    setShowStartSection(false);
  };

  const handleBack = () => {
    if (!showStartSection && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (!showStartSection && currentQuestion === 0) {
      setShowStartSection(true);
    } else if (showStartSection && currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentQuestion(sections[currentSection - 1].questions.length - 1);
      setShowStartSection(false);
    }
  };

  const handleBackToTitle = () => {
    setCurrentSection(0);
    setCurrentQuestion(0);
    setShowStartSection(true);
  };


  return (
    <div className="App">
      <header className="App-header">
        <ShowTitle />
        {currentSection !== 0 && <ShowSectionTitle sectionStep={sections[currentSection].step} sectionName={sections[currentSection].name} />}
        {showStartSection ? (
          <>
            <StartSection description={sections[currentSection].description} onNext={handleStartSection} />
            {currentSection !== 0 && <BackButtons  onBackToTitle={handleBackToTitle} onBack={handleBack}/>}
          </>
          ) : (
          <>
            <ShowQuestion section={sections[currentSection]} questionIndex={currentQuestion} onChoiceSelect={handleNextQuestion} />
            <BackButtons  onBackToTitle={handleBackToTitle} onBack={handleBack}/>
          </>
        )}
      </header>
    </div>
  );
}

export default App;