import {QuizQuestion} from './quiz-question';

export interface QuizQuestionsResponse {
  success: boolean;
  quizQuestion: QuizQuestion[];
}
