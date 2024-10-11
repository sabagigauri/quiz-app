"use client";
import React, { useState } from 'react';
import Header from './Header';
import Choices from './Choices';
import QuizLayout from '@/app/Quizzes/QuizLayout';
import QuizHeader from '@/app/Quizzes/QuizHeader';
import { Quiz } from '../types';

export default function Mobile() {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);


  const handleSelectQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0); 
  };

  const handleNextQuestion = () => {
    if (selectedQuiz && currentQuestionIndex < selectedQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <main className="bg-[#F4F6FA] min-h-screen h-full md:h-screen lg:h-screen flex flex-col md:px-8 lg:px-16">
      <div className="flex-grow container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 lg:pt-12">
        {!selectedQuiz ? (
          <Header />
        ) : (
          <QuizHeader title={selectedQuiz.title} icon={selectedQuiz.icon} />
        )}

        {!selectedQuiz ? (
          <Choices onSelectQuiz={handleSelectQuiz} />
        ) : (
          <QuizLayout
            selectedQuiz={selectedQuiz}
            currentQuestionIndex={currentQuestionIndex}
            handleNextQuestion={handleNextQuestion}
            handlePreviousQuestion={handlePreviousQuestion}
          />
        )}
      </div>
    </main>
  );
}

