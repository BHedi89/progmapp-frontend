import {PossibleQuestionAnswers} from './possible-question-answers';
import {FeedbackType} from '../enum/feedback-type.enum';

export interface QuizQuestion {
  id: string;
  text: string;
  explanationAfter: string;
  feedbackType: FeedbackType;
  hasImage: string;
  possibleAnswers: PossibleQuestionAnswers[];
}
