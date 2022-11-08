import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionOptions, Questions } from '../_models/questions';
import { ReportData } from '../_models/report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() data: ReportData | undefined;
  @Output() hideReportEvent = new EventEmitter();
  totalCount:number=0;
  correctCount:number=0;
  skippedCount:number=0;
  wrongCount:number=0;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    
    this.totalCount = this.data?.questions?.length??0;
    this.correctCount = this.data?.answers.filter(x=> x.answerId == this.data?.questions.filter(q=>q.no==x.questionNo)[0].correctAnswer)?.length??0;
    this.skippedCount = this.data?.questions.filter(x=> (this.data?.answers.filter(a=>a.questionNo == x.no)?.length??0)==0)?.length??0;
    this.wrongCount = this.totalCount - this.correctCount - this.skippedCount;
  }

  getSelectedAnswerId(questionId:number){
    return this.data?.answers.filter(x=>x.questionNo==questionId)[0]?.answerId;    
  }

  hideReport():void{
    this.hideReportEvent.emit();
  }
}
