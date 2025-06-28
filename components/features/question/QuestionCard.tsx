import { Question } from '@/types/question';
import React from 'react';

type Props = {
    question: Question;
    selectedAnswer: string | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const QuestionCard = ({question, selectedAnswer, onChange} : Props) => {

    const answers = [...question.incorrect_answers, question.correct_answer].sort();
    return (
          <div className="p-4 shadow rounded-lg border border-neutral-200 max-w-xl ">
            <h3 className="font-bold text-lg" dangerouslySetInnerHTML={{ __html: question.question }} />
            <ul className="ml-4">
              {answers.map((ans, idx) => (
                <div key={idx} className='flex items-center gap-4'>
                  <input type="radio" name={question.question} value={ans} id={question.question + ans}
                    onChange={onChange} checked={selectedAnswer === ans} />
                  <label htmlFor={question.question + ans} dangerouslySetInnerHTML={{ __html: ans }} />
                </div>
              ))}
            </ul>
          </div>
    );
}

export default QuestionCard;
