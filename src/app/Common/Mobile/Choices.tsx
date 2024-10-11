import React, { useEffect, useState } from "react";
import Button from "./Components/Button";
import { Quiz } from "../types";


export default function Choices({
  onSelectQuiz,
}: {
  onSelectQuiz: (quiz: Quiz) => void;
}) {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setQuizzes(data.quizzes);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col lg:flex-row py-8 px-6 lg:justify-between">
      <header className="flex flex-col md:w-[465px]">
        <p className="text-[40px] text-[#313E51] lg:text-[54px]">
          Welcome to the <strong>Frontend Quiz!</strong>
        </p>
        <p className="italic text-[#626C7F] lg:pt-12">Pick a subject to get started.</p>
      </header>

      <div className="flex flex-col pt-10 gap-3 lg:pt-0">
        {quizzes.map((quiz, index) => (
          <Button
            key={index}
            text={quiz.title}
            bgImg={quiz.icon}
            onClick={() => onSelectQuiz(quiz)}
          />
        ))}
      </div>
    </div>
  );
}
