import React, { useState, useEffect } from "react";
import OptionButton from "../Common/Mobile/Components/OptionButton";
import { QuizLayoutProps } from "../Common/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function QuizLayout({
  selectedQuiz,
  currentQuestionIndex,
  handleNextQuestion,
  handlePreviousQuestion,
}: QuizLayoutProps) {
  const currentQuestion = selectedQuiz.questions[currentQuestionIndex];

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [isAnswerProcessed, setIsAnswerProcessed] = useState<boolean>(false);

  const optionImages = ["/A.svg", "/B.svg", "/C.svg", "/D.svg"];

  const progress = ((currentQuestionIndex + 1) / selectedQuiz.questions.length) * 100;

  useEffect(() => {
    setSelectedOption(null);
    setCorrectAnswer(null);
    setIsAnswerProcessed(false);
  }, [currentQuestionIndex]);

  const handleOptionSelect = (option: string) => {
    if (isAnswerProcessed) return; 
    setSelectedOption(option);
    setCorrectAnswer(currentQuestion.answer);

    if (option === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1); 
    }

    setIsAnswerProcessed(true); 
  };

  const handleNext = () => {
    if (currentQuestionIndex >= selectedQuiz.questions.length - 1) {
      setQuizFinished(true); 
    } else {
      handleNextQuestion();
    }
  };

  if (quizFinished) {
  const router = useRouter();

    return (
      <>
        <div className="flex flex-col py-8 px-6 gap-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col">
            <p className="text-[40px] text-[#313E51]">Quiz Completed</p>
            <p className="font-medium text-[40px] text-[#313E51]">
              You Scored...
            </p>
          </div>
          <div className="lg:flex lg:flex-col lg:gap-8 md:flex md:flex-col md:gap-8 flex flex-col gap-8">
            <div className="flex flex-col  bg-[#fff] pt-8 rounded-xl items-center justify-center lg:w-[564px]">
              <div className="flex items-center justify-center">
                <Image
                  src={selectedQuiz.icon}
                  alt={selectedQuiz.title}
                  width={40}
                  height={40}
                />
                <p className="text-xl font-medium text-[#313E51] text- ml-4">
                  {selectedQuiz.title}
                </p>
              </div>

              <div className="flex py-6 justify-center items-center flex-col">
                <p className="text-[88px] text-[#313E51] font-medium">
                  {score}
                </p>
                <p className="text-[#626C7F]">
                  out of {selectedQuiz.questions.length}
                </p>
              </div>
            </div>
            <button
              onClick={() => router.push("/")}
              className="bg-[#A729F5] rounded-xl h-[56px] text-[#fff] font-medium md:w-[594px] lg:w-[564px] sm:w-[564px]"
            >
              Play Again
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <main className="flex flex-col lg:flex-row lg:justify-between py-8 px-6 lg:gap-16">
        <div className="flex flex-col gap-3 lg:w-1/2">
          <p className="italic">
            Question {currentQuestionIndex + 1} of{" "}
            {selectedQuiz.questions.length}
          </p>
          <p className="font-medium text-[20px] lg:text-[36px]">{currentQuestion.question}</p>

          <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden my-6 lg:mt-[140px]">
            <div
              className="h-full bg-[#A729F5] rounded-full"
              style={{
                width: `${progress}%`,
                transition: "width 0.5s ease",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col lg:w-1/2 pt-10 lg:pt-0 gap-3">
          {currentQuestion.options.map((option, i) => (
            <OptionButton
              key={i}
              text={option}
              bgImg={optionImages[i]}
              onClick={() => handleOptionSelect(option)}
              selected={selectedOption === option}
              correct={correctAnswer === option}
              incorrect={selectedOption === option && correctAnswer !== option}
            />
          ))}

          <div className="flex justify-between pt-6">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="bg-gray-300 p-2 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!isAnswerProcessed}
              className="bg-[#A729F5] text-white p-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
