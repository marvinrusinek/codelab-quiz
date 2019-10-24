import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuizService } from '../../services/quiz.service';
import { QuizQuestion } from '../../model/QuizQuestion';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-container',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  question: QuizQuestion;
  @Output() count: number;
  @Output() numberOfQuestions: number;
  currentIndex = 0;
  currentQuestion = this.service.getQuestion[this.currentIndex];
  
  correctAnswerCount = 0;
  numberOfQuestionsAnswered = 0;  
  questionCount = 0;
  progressValue = 0;
  progressPercentage: number = 0;
  timeLeft = 20;
  interval: any;

  userAnswers = [];

  CONGRATULATIONS = '../../../assets/img/congratulations.jpg';
  TRY_AGAIN = '../../../assets/img/try-again.png';

  constructor(private service: QuizService, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      // get the question ID and store it.
      this.service.setQuestionID(+params.get('questionId'));
      this.question = this.service.getQuestion;
      this.questionCount = this.numberOfQuestions;
      this.progressValue = (this.numberOfQuestionsAnswered / this.numberOfQuestions) * 100;
    });
  }

  ngOnInit() {
    this.question = this.service.getQuestion;
    this.numberOfQuestions = this.service.numberOfQuestions();
    this.countDown();

    if (this.timeLeft == 0) {
      this.timeLeft = 20;
    }
  }

  answer(value: string) {
    console.log(value);
    // may want to do something with the answer here
  }

  nextQuestion() {
    this.incrementQuestionsAnswered();

    if (this.question.answer === this.question.selectedOption) {
      this.incrementCorrectAnswerCount();
    }
    
    this.progressValue = (this.numberOfQuestionsAnswered / this.numberOfQuestions) * 100;
  
    if (this.service.isThereAnotherQuestion()) {
      this.router.navigate(['/question', this.service.getQuestionID() + 1 ]);
      this.timeLeft = 20;
    }

    delete this.question.selectedOption;
  }

  prevQuestion() {
     this.router.navigate(['/question', this.service.getQuestionID() - 1 ]);
  }

  showResults() {
    this.router.navigate(['/results']);
  }

  incrementCorrectAnswerCount(): number {
    // this.count.emit(this.correctAnswerCount);
    return this.correctAnswerCount++;
  }

  incrementQuestionsAnswered(): number {
    // this.numberOfQuestions.emit(this.numberOfQuestionsAnswered);
    return this.numberOfQuestionsAnswered++;
  }

  private countDown() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
    }, 1000);
  }
}
