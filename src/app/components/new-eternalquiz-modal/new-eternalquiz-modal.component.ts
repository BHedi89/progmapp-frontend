import {Component, OnInit} from '@angular/core';
import {Eternalquiz} from '../../interfaces/eternalquiz';
import {EternalQuizService} from '../../services/eternal-quiz.service';
import {QuestionAssignToQuiz} from '../../interfaces/question-assign-to-quiz';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {FeedbackType} from '../../enum/feedback-type.enum';
import {QuizQuestionService} from '../../services/quiz-question.service';

@Component({
  selector: 'app-new-foreverquiz-modal',
  templateUrl: './new-eternalquiz-modal.component.html',
  styleUrls: ['./new-eternalquiz-modal.component.scss']
})
export class NewEternalquizModalComponent implements OnInit {

  quiz: Eternalquiz;
  textShow: boolean;
  question: QuizQuestion;
  questions: QuizQuestion[];

  public expanded = false;

  constructor(private quizService: EternalQuizService, private questionService: QuizQuestionService) {
    this.quiz = {
      id: '',
      questionIds: [],
    };

    this.question = {
      id: '',
      text: '',
      explanationAfter: '',
      feedbackType: FeedbackType.default,
      hasImage: null,
      possibleAnswers: [],
    };
  }

  ngOnInit(): void {
    this.questionService.getQuizQuestions().subscribe(resp => this.questions = resp);
  }

  saveQuiz(): void {
    this.quizService.addQuiz(this.quiz, this.question);
    this.quizService.assignQuestionToQuiz(this.quiz, this.question);
    this.textShow = true;
  }
}
