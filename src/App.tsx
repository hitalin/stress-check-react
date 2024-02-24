// App.tsx
import React, { useState } from 'react';
import AppTitle from './AppTitle';
import SectionStep from './SectionStep';
import SectionDescription from './SectionDescription';
import NextButton from './NextButton';
import ProgressDots from './ProgressDots';
import QuestionText from './QuestionText';
import ChoiceButtons from './ChoiceButtons';
import BackButtons from './BackButtons';
import AggregateResults from './AggregateResults';
import { Employee } from './types';
import { sections } from './loadSections';
import { calculateScore } from './calculateScore';
import {
  appStyle,
  appHeaderStyle,
  appTitleStyle,
  sectionTitleStyle,
  titleAndProgressStyle,
  progressDotsStyle,
  nextButtonStyle,
  choiceButtonsStyle,
  questionTextStyle,
  backButtonsStyle,
  sectionDescriptionStyle,
  nextSlideOutTextStyle,
  prevSlideOutTextStyle,
  nextSlideInTextStyle,
  prevSlideInTextStyle
} from './styles';

const App: React.FC = () => {
  const [employee, setEmployee] = useState<Employee>({ gender: '', level: '' });
  const [currentSection, setCurrentSection] = useState<number>(0); // Initialize currentSection with 0
  const [currentQuestion, setCurrentQuestion] = useState<number>(0); // Initialize currentQuestion with 0
  const [startSection, setStartSection] = useState<boolean>(true);
  const [aggregated, setAggregated] = useState<boolean>(false);
  const [scores, setScores] = useState<number[]>(new Array(sections.length).fill(0)); // Initialize scores with 0
  const [isAnimating, setIsAnimating] = useState(false);
  const [isGoingNext, setIsGoingNext] = useState(false);
  const [isGoingPrev, setIsGoingPrev] = useState(false);

  const getAnimationStyle = () => {
    if (isAnimating) {
      if (isGoingNext) {
        return nextSlideOutTextStyle;
      }
      if (isGoingPrev) {
        return prevSlideOutTextStyle;
      }
    } else {
      if (isGoingNext) {
        return nextSlideInTextStyle;
      }
      if (isGoingPrev) {
        return prevSlideInTextStyle;
      }
    }
    return {};
  };

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
    setIsAnimating(true);
    setIsGoingNext(true);
    setIsGoingPrev(false);

    setTimeout(() => {
      if (currentSection === (sections?.length ?? 0) - 1 && currentQuestion === (sections[currentSection]?.questions?.length ?? 0) - 1) {
        // If we're at the last question of the last section, show the results
        setAggregated(true);
      } else if (currentQuestion < ((sections[currentSection]?.questions?.length ?? 0) - 1)) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setCurrentSection(currentSection + 1);
        setCurrentQuestion(0);
        setStartSection(true);
      }
      setIsAnimating(false);
      setIsGoingNext(true);
      setIsGoingPrev(false);
    }, 200);
  };

  const handleNextButton = () => {
    setIsAnimating(true);
    setIsGoingNext(true);
    setIsGoingPrev(false);

    setTimeout(() => {
      if (currentSection === sections.length - 1) {
        setAggregated(true);
      } else {
        setStartSection(false);
      }
      setIsAnimating(false);
      setIsGoingNext(true);
      setIsGoingPrev(false);
    }, 200);
  };

  const handleBack = () => {
    setIsAnimating(true);
    setIsGoingNext(false);
    setIsGoingPrev(true);

    setTimeout(() => { // Wait for the slideOut animation to finish
      if (!startSection && currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
      } else if (!startSection && currentQuestion === 0) {
        setStartSection(true);
      } else if (startSection && currentSection > 0) {
        const newSection = currentSection - 1;
        setCurrentSection(newSection);
        setCurrentQuestion((sections[newSection]?.questions?.length ?? 0) - 1);
        setStartSection(false);
      }
      setIsAnimating(false);
      setIsGoingNext(false);
      setIsGoingPrev(true);
    }, 200);
  };

  const handleBackToTitle = () => {
    setIsAnimating(true);
    setIsGoingNext(false);
    setIsGoingPrev(true);

    setTimeout(() => {
      setCurrentSection(0);
      setCurrentQuestion(0);
      setStartSection(true);
      setAggregated(false);

      setIsAnimating(false);
      setIsGoingNext(false);
      setIsGoingPrev(true);
    }, 200);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div css={appStyle}>
      <header css={appHeaderStyle}>
        <div css={titleAndProgressStyle}>
          <div css={appTitleStyle}>
            <AppTitle />
            {currentSection !== 0 && !aggregated && currentSection !== sections.length - 1 && (
              <div css={sectionTitleStyle}>
                <SectionStep sectionStep={sections[currentSection].step} sectionName={sections[currentSection].name} />
              </div>
            )}
          </div>
          {currentSection !== 0 && !aggregated && !startSection && (
            <div css={progressDotsStyle}>
              <ProgressDots questionIndex={currentQuestion} totalQuestions={sections[currentSection]?.questions?.length ?? 0} />
            </div>
          )}
        </div>
        {aggregated && currentSection === sections.length - 1 ? (
          <>
            <AggregateResults employee={employee} setEmployee={setEmployee} sections={sections} scores={scores} />
            <div css={backButtonsStyle}>
              <BackButtons onBackToTitle={handleBackToTitle} onBack={handleBack} showOnlyTitleButton={aggregated} />
            </div>
          </>
        ) : (
          <>
            {startSection ? (
              <>
                <div
                  css={[
                    sectionDescriptionStyle,
                    getAnimationStyle()
                  ]}
                >
                  <SectionDescription description={sections[currentSection].description} />
                </div>
                <div
                  css={[
                    nextButtonStyle,
                    getAnimationStyle()
                  ]}
                >
                  <NextButton onNext={handleNextButton} nextText={sections[currentSection].next} />
                </div>
                {currentSection !== 0 && (
                  <div
                    css={backButtonsStyle}
                  >
                    <BackButtons onBackToTitle={handleBackToTitle} onBack={handleBack} />
                  </div>
                )}
              </>
            ) : (
              <>
                <div
                  css={[
                    questionTextStyle,
                    getAnimationStyle()
                  ]}
                  key={currentQuestion}
                  onAnimationEnd={handleAnimationEnd}
                >
                  <QuestionText section={sections[currentSection]} questionIndex={currentQuestion} />
                </div>
                <div
                  css={[
                    choiceButtonsStyle,
                    getAnimationStyle()
                  ]}
                >
                  <ChoiceButtons
                    section={sections[currentSection]}
                    questionIndex={currentQuestion}
                    onChoiceSelect={(choice) => handleChoiceSelect(choice, currentQuestion)}
                  />
                </div>
                <div
                  css={backButtonsStyle}
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
