export interface Quiz {
  title: string;
  icon: string;
  questions: Question[];
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface QuizHeaderProps {
    title: string;
    icon: string;
}

export interface QuizLayoutProps {
  selectedQuiz: Quiz;
  currentQuestionIndex: number;
  handleNextQuestion: () => void;
  handlePreviousQuestion: () => void;
}

export interface ButtonProps {
  text: string;
  bgImg: string;
  onClick: () => void;
  selected?: boolean; 
  correct?: boolean; 
  incorrect?: boolean; 
}