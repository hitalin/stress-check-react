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
import { css } from '@emotion/react';
import { appStyle, appHeaderStyle, titleStyle, sectionTitleStyle, marginStyle, showProgress, ShowChoiceButtons, showBackButtons} from './styles';

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
    <div css={appStyle}>
      <header css={appHeaderStyle}>
        <div css={titleStyle}>
          <ShowTitle />
        </div>
        {showResults ? (
          <ShowResult sections={sections} scores={scores} />
        ) : (
          <>
            {currentSection !== 0 && <div css={css`${sectionTitleStyle}`}><ShowSectionTitle sectionStep={sections[currentSection].step} sectionName={sections[currentSection].name} /></div>}
            {showStartSection ? (
              <>
                <div css={css`${marginStyle}`}>
                  <StartSection description={sections[currentSection].description} />
                </div>
                <div css={css`${marginStyle}`}>
                  <NextButton onNext={handleNextButton} />
                </div>
                {currentSection !== 0 && <div css={css`${showBackButtons}`}><BackButtons onBackToTitle={handleBackToTitle} onBack={handleBack}/></div>}
              </>
              ) : (
              <>
                <div css={css`${showProgress}`}>
                  {currentSection !== 0 && <ProgressDots questionIndex={currentQuestion} totalQuestions={sections[currentSection].questions.length} />}
                </div>
                <div css={css`${marginStyle}`}>
                  <ShowQuestion section={sections[currentSection]} questionIndex={currentQuestion} />
                </div>
                <div css={css`${ShowChoiceButtons}`}>
                  <ShowChoices section={sections[currentSection]} questionIndex={currentQuestion} onChoiceSelect={(choice) => handleChoiceSelect(choice, currentQuestion)} />
                </div>
                <div css={css`${showBackButtons}`}>
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