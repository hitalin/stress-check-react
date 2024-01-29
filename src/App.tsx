// App.tsx
import React, { useState } from 'react';
import ShowTitle from './ShowTitle';
import ShowSectionTitle from './ShowSectionTitle';
import StartSection from './StartSection';
import NextButton from './NextButton';
import ProgressDots from './ProgressDots';
import ShowQuestion from './ShowQuestion';
import BackButtons from './BackButtons';
import ShowResult from './ShowResult';
import { calculateScore } from './CalculateScore';
import { Employee } from './AppTypes';
import { sections } from './LoadSections';
import './App.css';
import ShowChoices from './ShowChoices';

const App: React.FC = () => {
  const [employee, setEmployee] = useState<Employee>({ gender: '', stressLevel: '' });
  const [currentSection, setCurrentSection] = useState<number>(0); // Initialize currentSection with 0
  const [currentQuestion, setCurrentQuestion] = useState<number>(0); // Initialize currentQuestion with 0
  const [showStartSection, setShowStartSection] = useState<boolean>(true); // Initialize showStartSection with true
  const [showResults, setShowResults] = useState<boolean>(false);
  const [scores, setScores] = useState<number[]>(new Array(sections.length).fill(0)); // Initialize scores with 0

  const handleChoiceSelect = (choice: string, questionIndex: number) => {
    const choiceIndex = sections[currentSection].choices.indexOf(choice);
    const choiceValue = choiceIndex >= 0 ? choiceIndex + 1 : 0; // Add 1 to the index to start the score at 1

    // Update the score of the selected question
    sections[currentSection].questions[questionIndex].score = choiceValue;

    // Calculate the score of the current section
    const sectionScore = calculateScore(sections[currentSection].questions);

    // Update the scores state
    setScores(prevScores => {
      const newScores = [...prevScores];
      newScores[currentSection] = sectionScore;
      return newScores;
    });

    handleNextQuestion(); // Call handleNextQuestion function to move to the next question
  };

  const handleNextQuestion = () => {
    if (currentSection === sections.length - 1 && currentQuestion === sections[currentSection].questions.length - 1) {
      // If we're at the last question of the last section, show the results
      setShowResults(true);
    } else if (currentQuestion < sections[currentSection].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
      setShowStartSection(true);
    }
  };

  const handleNextButton = () => {
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
    <div className="App flex flex-col h-screen justify-between">
      <header className="App-header px-4 sm:px-6 lg:px-8">
        <div className="pt-6">
          <ShowTitle />
        </div>
        {showResults ? (
          <ShowResult sections={sections} scores={scores} />
        ) : (
          <>
            {currentSection !== 0 && <div className="mt-3"><ShowSectionTitle sectionStep={sections[currentSection].step} sectionName={sections[currentSection].name} /></div>}
            {showStartSection ? (
              <>
                <div className="mt-3 flex-grow flex items-center justify-center">
                  <StartSection description={sections[currentSection].description} />
                </div>
                <div className="flex items-center justify-center" style={{ height: 'calc(100vh - 400px)' }}>
                  <NextButton onNext={handleNextButton} />
                </div>
                {currentSection !== 0 && <div className="mb-3"><BackButtons onBackToTitle={handleBackToTitle} onBack={handleBack}/></div>}
              </>
              ) : (
              <>
                <div className="mt-3">
                  {currentSection !== 0 && <ProgressDots questionIndex={currentQuestion} totalQuestions={sections[currentSection].questions.length} />}
                </div>
                <div className="flex flex-col mt-3 flex-grow items-center justify-center">
                  <ShowQuestion section={sections[currentSection]} questionIndex={currentQuestion} />
                </div>
                <div className="mt-3">
                  <ShowChoices section={sections[currentSection]} questionIndex={currentQuestion} onChoiceSelect={(choice) => handleChoiceSelect(choice, currentQuestion)} />
                </div>
                <div className="mb-3">
                  <BackButtons onBackToTitle={handleBackToTitle} onBack={handleBack}/>
                </div>
              </>
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;