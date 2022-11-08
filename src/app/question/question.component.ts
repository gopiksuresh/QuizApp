import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Questions, SelectedAnswer } from '../_models/questions';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Questions | undefined;
  @Output() answerSelectedEvent = new EventEmitter<number>();

  constructor() { }  
  
  ngOnInit(): void {
  }

  onAnswerSelected(slNo:number,anserId:number):void{
    this.answerSelectedEvent.emit(anserId);
  }
}
