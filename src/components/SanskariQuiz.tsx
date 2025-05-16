
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { quizQuestions, getQuizResult, Question } from '@/utils/quizQuestions';
import { playSound } from '@/utils/soundEffects';
import Sparkles from '@/components/decorative/Sparkles';

const SanskariQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  
  const totalQuestions = quizQuestions.length;
  const progress = (currentQuestion / totalQuestions) * 100;
  
  const handleAnswer = (questionId: number, optionId: string, points: number) => {
    playSound('CLICK');
    
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
    
    setScore(prev => prev + points);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCompleted(true);
      playSound('SUCCESS');
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setScore(0);
    setCompleted(false);
    playSound('CLICK');
  };
  
  return (
    <Card className="border-retro mb-8 bg-white overflow-hidden">
      <CardHeader className="bg-doordarshan-secondary text-white">
        <CardTitle className="text-center text-2xl font-retro">
          Sanskaari Compatibility Quiz
        </CardTitle>
        <CardDescription className="text-white text-center">
          Test how well you fit the stereotypical "perfect match" criteria!
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        {!completed ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Question {currentQuestion + 1} of {totalQuestions}</span>
                <span>Sanskaar Score: {score}</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4">{quizQuestions[currentQuestion].text}</h3>
              
              <RadioGroup
                value={answers[quizQuestions[currentQuestion].id]}
                className="space-y-4"
              >
                {quizQuestions[currentQuestion].options.map(option => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={option.id}
                      id={option.id}
                      onClick={() => handleAnswer(
                        quizQuestions[currentQuestion].id, 
                        option.id,
                        option.points
                      )}
                    />
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Label htmlFor={option.id} className="cursor-pointer">
                            {option.text}
                          </Label>
                        </TooltipTrigger>
                        <TooltipContent>{option.tooltip || "Make your choice!"}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <Button
              onClick={handleNextQuestion}
              disabled={!answers[quizQuestions[currentQuestion].id]}
              className="w-full btn-retro"
            >
              {currentQuestion < totalQuestions - 1 ? "Next Question" : "See Results"}
            </Button>
          </>
        ) : (
          <Sparkles>
            <div className="text-center py-6 space-y-6">
              <h3 className="text-xl font-bold">Your Sanskaar Score:</h3>
              
              <div className="text-4xl font-bold font-retro text-doordarshan-secondary">
                {score} / {totalQuestions * 20} Points
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
                <h4 className="font-bold text-xl mb-4">Verdict:</h4>
                <p className="text-lg italic">{getQuizResult(score)}</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-100 p-3 text-sm border border-yellow-300 rounded">
                  <p><strong>Remember:</strong> This quiz satirizes outdated matchmaking criteria!</p>
                </div>
                
                <Button onClick={resetQuiz} className="btn-retro">
                  Take the Quiz Again
                </Button>
              </div>
            </div>
          </Sparkles>
        )}
      </CardContent>
      
      <CardFooter className="bg-gray-100 text-xs text-center">
        <p className="w-full">
          Disclaimer: This satirical quiz makes fun of outdated marriage expectations.
        </p>
      </CardFooter>
    </Card>
  );
};

export default SanskariQuiz;
