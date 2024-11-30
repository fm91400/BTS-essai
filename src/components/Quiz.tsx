import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: () => void;
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      onComplete();
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">
            Question {currentQuestion + 1} sur {questions.length}
          </span>
          <span className="text-gray-600">Score: {score}/{questions.length}</span>
        </div>
        <h3 className="text-xl font-bold mb-4">{question.question}</h3>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showExplanation}
              className={`w-full p-4 text-left rounded-lg transition-colors ${
                showExplanation
                  ? index === question.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : selectedAnswer === index
                    ? 'bg-red-100 border-red-500'
                    : 'bg-gray-50'
                  : 'bg-gray-50 hover:bg-gray-100'
              } border-2 ${
                selectedAnswer === index ? 'border-blue-500' : 'border-transparent'
              }`}
            >
              <div className="flex items-center">
                {showExplanation && index === question.correctAnswer && (
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                )}
                {showExplanation && index === selectedAnswer && index !== question.correctAnswer && (
                  <XCircle className="h-5 w-5 text-red-500 mr-2" />
                )}
                {option}
              </div>
            </button>
          ))}
        </div>
      </div>

      {showExplanation && (
        <div className="mt-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Explication:</h4>
            <p>{question.explanation}</p>
          </div>
          <button
            onClick={nextQuestion}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Terminer'}
          </button>
        </div>
      )}
    </div>
  );
}