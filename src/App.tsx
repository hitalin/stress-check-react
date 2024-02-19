// App.tsx
import React, { useState } from 'react';
import ShowTitle from './ShowTitle';
import ShowSectionTitle from './ShowSectionTitle';
import StartSection from './StartSection';
import NextButton from './NextButton';
import ProgressDots from './ProgressDots';
import ShowQuestion from './ShowQuestion';
import ShowChoices from './ShowChoices';
import BackButtons from './BackButtons';
import ShowResult from './ShowResult';
import { Employee } from './types';
import { sections } from './loadSections';
import { calculateScore } from './calculateScore';
import {
  appStyle,
  appHeaderStyle,
  titleStyle,
  sectionTitleStyle,
  titleAndProgressStyle,
  progressStyle,
  showNextButton,
  ShowChoiceButtons,
  showQuestionText,
  showBackButtons,
  sectionDescriptionStyle,
} from './styles';

const App: React.FC = () => {
  const [employee, setEmployee] = useState<Employee>({ gender: '', level: '' });
  const [currentSection, setCurrentSection] = useState<number>(0); // Initialize currentSection with 0
  const [currentQuestion, setCurrentQuestion] = useState<number>(0); // Initialize currentQuestion with 0
  const [showStartSection, setShowStartSection] = useState<boolean>(true); // Initialize showStartSection with true
  const [showResults, setShowResults] = useState<boolean>(false);
  const [scores, setScores] = useState<number[]>(new Array(sections.length).fill(0)); // Initialize scores with 0

  const handleChoiceSelect = (choice: string, questionIndex: number) => {
    const choiceIndex = sections[currentSection]?.choices?.indexOf(choice) ?? 0;
    const choiceValue = choiceIndex >= 0 ? choiceIndex + 1 : 0; // Add 1 to the index to start the score at 1

    // Update the score of the selected question
    const currentQuestions = sections[currentSection]?.questions;
    if (currentQuestions) {
      currentQuestions[questionIndex].score = choiceValue;
    }

    // If the current section is 0 and the question ID is 1, set the selected choice as the employee's gender
    if (currentSection === 0 && currentQuestions?.[questionIndex]?.id === 1) {
      setEmployee((prev) => ({ ...prev, gender: choice }));
    }

    // Calculate the score of the current section
    const sectionScore = calculateScore(currentQuestions ?? []);

    // Update the scores state
    setScores((prevScores) => {
      const newScores = [...prevScores];
      newScores[currentSection] = sectionScore;
      return newScores;
    });

    handleNextQuestion(); // Call handleNextQuestion function to move to the next question
  };

  const handleNextQuestion = () => {
    if (currentSection === (sections?.length ?? 0) - 1 && currentQuestion === (sections[currentSection]?.questions?.length ?? 0) - 1) {
      // If we're at the last question of the last section, show the results
      setShowResults(true);
    } else if (currentQuestion < ((sections[currentSection]?.questions?.length ?? 0) - 1)) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
      setShowStartSection(true);
    }
  };

  const handleNextButton = () => {
    if (currentSection === sections.length - 1) {
      setShowResults(true);
    } else {
      setShowStartSection(false);
    }
  };

  const handleBack = () => {
    if (!showStartSection && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (!showStartSection && currentQuestion === 0) {
      setShowStartSection(true);
    } else if (showStartSection && currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentQuestion((sections[currentSection - 1]?.questions?.length ?? 0) - 1);
      setShowStartSection(false);
    }
  };



  const handleBackToTitle = () => {
    setCurrentSection(0);
    setCurrentQuestion(0);
    setShowStartSection(true);
    setShowResults(false);
  };

  return (
    <div css={appStyle}>
      <header css={appHeaderStyle}>
        <div css={titleAndProgressStyle}>
          <div css={titleStyle}>
            <ShowTitle />
            {currentSection !== 0 && !showResults && currentSection !== sections.length - 1 && (
              <div css={sectionTitleStyle}>
                <ShowSectionTitle sectionStep={sections[currentSection].step} sectionName={sections[currentSection].name} />
              </div>
            )}
          </div>
          {currentSection !== 0 && !showResults && !showStartSection && (
            <div css={progressStyle}>
              <ProgressDots questionIndex={currentQuestion} totalQuestions={sections[currentSection]?.questions?.length ?? 0} />
            </div>
          )}
        </div>
        {showResults && currentSection === sections.length - 1 ? (
          <>
            <ShowResult employee={employee} setEmployee={setEmployee} sections={sections} scores={scores} />
            <div css={showBackButtons}>
              <BackButtons onBackToTitle={handleBackToTitle} onBack={handleBack} showOnlyTitleButton={showResults} />
            </div>
          </>
        ) : (
          <>
            {showStartSection ? (
              <>
                <div
                  css={sectionDescriptionStyle}
                >
                  <StartSection description={sections[currentSection].description} />
                </div>
                <div
                  css={showNextButton}
                >
                  <NextButton onNext={handleNextButton} nextText={sections[currentSection].next} />
                </div>
                {currentSection !== 0 && (
                  <div
                    css={showBackButtons}
                  >
                    <BackButtons onBackToTitle={handleBackToTitle} onBack={handleBack} />
                  </div>
                )}
              </>
            ) : (
              <>
                <div css={showQuestionText} key={currentQuestion}>
                  <ShowQuestion section={sections[currentSection]} questionIndex={currentQuestion} />
                </div>
                <div
                  css={ShowChoiceButtons}
                >
                  <ShowChoices
                    section={sections[currentSection]}
                    questionIndex={currentQuestion}
                    onChoiceSelect={(choice) => handleChoiceSelect(choice, currentQuestion)}
                  />
                </div>
                <div
                  css={showBackButtons}
                >
                  <BackButtons onBackToTitle={handleBackToTitle} onBack={handleBack} />
                </div>
              </>
            )}
          </>
        )}
      </header>
    </div>
  );
};

export default App;
