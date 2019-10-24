import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { QuizQuestion } from '../../model/QuizQuestion';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnChanges, AfterViewInit {
  quizForm: Form;
  formGroup: FormGroup;

  @Input() question: QuizQuestion;
  @Input() numberOfQuestions: number;
  @Output() answer = new EventEmitter<string>();
  
  itemFrom: HTMLElement;
  itemTo: HTMLElement;
  
  option = '';
  
  constructor(private fb: FormBuilder, private service: QuizService, private route: ActivatedRoute, 
              private router: Router) {}

  ngOnInit() {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.question && changes.question.currentValue && !changes.question.firstChange) {
      this.formGroup.patchValue({answer: ''});
    }
    if (this.formGroup.invalid) {
      alert('Please select an option!');
    } else return;
  }

  ngAfterViewInit() {
    this.itemFrom = document.getElementById('explanation');
    this.itemTo = document.getElementById('question');
  }

  private buildForm() {
    this.formGroup = this.fb.group({
      answer: ['', Validators.required]
    });
  }

  radioChange(answer: string) {
    this.question.selectedOption = answer;
    this.answer.emit(answer);
    this.moveExplanation(this.itemFrom, this.itemTo);
  }

  initialState(): boolean {
    return this.question.selectedOption === '';
  }

  isCorrect(option: string): boolean {
    return option === this.question.answer && this.question.selectedOption === option;
  }

  isIncorrect(option: string): boolean {
    return option !== this.question.answer && this.question.selectedOption === option;
  }

  moveExplanation(from: HTMLElement, to: HTMLElement) {
    to.replaceWith(from);
  }

  nextQuestion() {
    if (this.service.isThereAnotherQuestion()) {
      this.router.navigate(['/question', this.service.getQuestionID() + 1 ]);
    }
  }

  onSubmit(formData) {
    // this.formGroup.reset();
    console.log(formData);
  }
}
