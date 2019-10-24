import { Injectable } from '@angular/core';
import { QuizQuestion } from '../model/QuizQuestion';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questionID = 1;
  allQuestions: QuizQuestion[] = [
    {
      questionId: 1,
      question: 'Which of the following is correct about TypeScript?',
      options: [
        { optionValue: '1', optionText: 'Angular is based on TypeScript.' },
        { optionValue: '2', optionText: 'This is a superset of JavaScript.' },
        { optionValue: '3', optionText: 'TypeScript is maintained by Microsoft.' },
        { optionValue: '4', optionText: 'All of the above.' }],
      answer: '4',
      explanation: 'all of these are true statements about TypeScript',
      selectedOption: ''
    },
    {
      questionId: 2,
      question: 'What is the decorator used for configuring your module class?',
      options: [
        { optionValue: '1', optionText: '@NgModule' },
        { optionValue: '2', optionText: '@NgApp' },
        { optionValue: '3', optionText: 'Both' },
        { optionValue: '4', optionText: 'None of the above.' }],
      answer: '1',
      explanation: '@NgModule decorator is used for configuring your module class',
      selectedOption: ''
    },
    {
      questionId: 3,
      question: 'Which of the following is not a hook application life cycle?',
      options: [
        { optionValue: '1', optionText: 'ngOnChanges' },
        { optionValue: '2', optionText: 'ngViewStart' },
        { optionValue: '3', optionText: 'ngOnInit' },
        { optionValue: '4', optionText: 'None of the above.' }],
      answer: '2',
      explanation: 'ngViewStart is not a hook application life cycle',
      selectedOption: ''
    },
    {
      questionId: 4,
      question: 'What does AOT stand for?',
      options: [
        { optionValue: '1', optionText: 'Angular Object Templates' },
        { optionValue: '2', optionText: 'ahead-of-time compilation' },
        { optionValue: '3', optionText: 'Angular Open Terminal' }],
      answer: '2',
      explanation: 'AOT stands for ahead-of-time compilation',
      selectedOption: ''
    },
    {
      questionId: 5,
      question: 'Which of the following is the correct way to apply a filter?',
      options: [
        { optionValue: '1', optionText: 'Property-value || filter' },
        { optionValue: '2', optionText: 'Property-value && filter' },
        { optionValue: '3', optionText: 'Property-value | filter' }],
      answer: '3',
      explanation: 'Property-value | filter',
      selectedOption: ''
    },
    {
      questionId: 6,
      question: 'Interpolation in Angular 2 is done using...',
      options: [
        { optionValue: '1', optionText: '{{}}' },
        { optionValue: '2', optionText: '{{|var}}' },
        { optionValue: '3', optionText: '{{{}}}' },
        { optionValue: '4', optionText: '!!!!' },
      ],
      answer: '1',
      explanation: 'interpolation in Angular 2 is done using {{}}',
      selectedOption: ''
    },
    {  
      questionId: 7,
      question: 'Which character is used for chaining multiple pipes in Angular?',
      options: [
        { optionValue: '1', optionText: ':' },
        { optionValue: '2', optionText: '-' },
        { optionValue: '3', optionText: '/' },
        { optionValue: '4', optionText: '|' },
      ],
      answer: '4',
      explanation: 'the | character is used for chaining multiple pipes in Angular',
      selectedOption: ''
    },
    {
      questionId: 8,
      question: 'Which of the following filters is used to convert input to all uppercase?',
      options: [
        { optionValue: '1', optionText: 'upper' },
        { optionValue: '2', optionText: 'uppercase' },
        { optionValue: '3', optionText: 'toUpper' },
        { optionValue: '4', optionText: 'None of the above.' },
      ],
      answer: '2',
      explanation: 'uppercase: {{ value | uppercase}}',
      selectedOption: ''
    },
    {
      questionId: 9,
      question: 'What is angular.json used for?',
      options: [
        { optionValue: '1', optionText: 'Used to configure your Angular project' },
        { optionValue: '2', optionText: 'Used to link external files.' },
        { optionValue: '3', optionText: 'Used to install required project packages.' },
        { optionValue: '4', optionText: 'None of the above.' },
      ],
      answer: '1',
      explanation: 'angular.json is used to configure your Angular project',
      selectedOption: ''
    },
    {
      questionId: 10,
      question: 'Which file is responsible for startup of an Angular 2 project?',
      options: [
        { optionValue: '1', optionText: 'main.ts' },
        { optionValue: '2', optionText: 'index.js' },
        { optionValue: '3', optionText: 'app.ts' },
        { optionValue: '4', optionText: 'angular.cli.json' },
      ],
      answer: '1',
      explanation: 'main.ts is responsible for startup of an Angular 2 application',
      selectedOption: ''
    }
  ];

  constructor() { }

  /*
  *  public API for service
  */
  getQuestionID() {
    return this.questionID;
  }

  setQuestionID(id: number) {
    return this.questionID = id;
  }

  numberOfQuestions() {
    return this.allQuestions.length;
  }

  isThereAnotherQuestion(): boolean {
    return this.questionID < this.numberOfQuestions();
  }

  get getQuestion(): QuizQuestion {
    return this.allQuestions.filter(question => (question.questionId === this.questionID))[0];
  }

  nextQuestion(): void {
    this.questionID++;
    console.log(this.questionID);
  }

  prevQuestion(): void {
    this.questionID--;
  }
}
