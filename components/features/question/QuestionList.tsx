'use client'

import IButton from '@/components/common/IButton';
// import TimerCircle from '@/components/common/TimerCircle';
import UseQuestion from '@/hooks/useQuestion';
import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

const duration = 3;

const QuestionList = ({ category }: { category: string }) => {


  const { questions, isLoading, error } = UseQuestion(category);
  const [currentIndex, setCurrentIndex] = useState<number>(0);


  const [answersState, setAnswersState] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);


  if (!category) return <p>Please select a category.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data.</p>;

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = answersState[currentIndex] || null;

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAnswersState((prev) => ({
      ...prev,
      [currentIndex]: value
    }))
  }

  const handlePrevoius = () => {
    setShowResult(false)
    setIsCorrect(null)
    setCurrentIndex(prev => prev - 1)
  }

  const handleNext = () => {
    if (selectedAnswer === null) {
      alert("Please select an answer first .")
      return;
    }
    const correct = selectedAnswer === currentQuestion.correct_answer;
    setIsCorrect(correct);
    setShowResult(true);

    setTimeout(() => {
      setShowResult(false)
      setIsCorrect(null)
      setCurrentIndex(prev => prev + 1)
    }, (duration * 1000));
  }

  const finalScore = (): number => {

    let score = 0;
    questions.forEach((q, index) => {
      if (q.correct_answer === answersState[index]) {
        score++;
      }
    })
    return score;
  }

  if (currentIndex >= questions.length) {
    return <>
      <p>Quiz is Finished !✅</p>
      <br />
      <b><small>Your Score is {finalScore()} / {questions.length}</small></b></>
  }

  return (
    <div className="space-y-4 ">
      <h1>َ
        Question {currentIndex + 1}
      </h1>

      <div className=' max-w-2xl'>
        {questions && questions.map((q, i) => (
          <QuestionCard key={i} onChange={handleAnswerChange} question={q} selectedAnswer={selectedAnswer} />
        )).splice(currentIndex, 1)}
      </div>

      {showResult && (
        <>
          <p className={`mt-2 font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect ? 'Correct ✅' : `Wrong ❌ - Correct Ansewr : ${currentQuestion.correct_answer}`}
          </p>
        </>
      )}

      <div className='w-full flex justify-between'>
        {currentIndex > 0 && <IButton onClick={handlePrevoius}>Prevoius</IButton>}
        <IButton onClick={handleNext} disabled={showResult}>Next</IButton>
      </div>
    </div>
  );
}

export default QuestionList;
