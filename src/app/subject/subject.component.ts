import { Component, Input, OnInit } from '@angular/core';
import { QuestionAnswer, Questions, SubjectData } from '../_models/questions';
import { ReportData } from '../_models/report';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  @Input() sub:SubjectData|undefined;  
  questions:Questions[]=[];
  currentIndex:number=0;
  total :number=0;
  question:Questions|undefined;
  showReport:boolean=false;
  reportData:ReportData|undefined;
  questionAnswer:QuestionAnswer[]=[];

  constructor() { 
  }

  ngOnInit(): void {
    debugger;
    console.log(this.sub);
    this.questions= this.sub?this.sub.questions:[];
    this.total= this.questions.length;
    this.currentIndex=0;
    this.question=this.questions[this.currentIndex];
  }

  onAnswerSelected(answerId:number):void{
    debugger;
    if(this.question){
      if(this.questionAnswer.filter(x=>x.questionNo==this.question?.no)?.length>0){
        this.questionAnswer.filter(x=>x.questionNo==this.question?.no)[0].answerId = answerId;
      }
      else{
        this.questionAnswer.push({questionNo:this.question?.no, answerId: answerId});
      }      
    }
  }

  loadPreviousQuestion():void{
    debugger;
    this.currentIndex--;
    this.question=this.questions[this.currentIndex];

    if(this.questionAnswer.filter(x=>x.questionNo==this.question?.no)?.length>0){
      this.question.selectedValue = this.questionAnswer.filter(x=>x.questionNo==this.question?.no)[0].answerId;
    }
  }

  loadNextQuestion():void{
    debugger;
    this.currentIndex++;
    this.question=this.questions[this.currentIndex];

    if(this.questionAnswer.filter(x=>x.questionNo==this.question?.no)?.length>0){
      this.question.selectedValue = this.questionAnswer.filter(x=>x.questionNo==this.question?.no)[0].answerId;
    }
  }

  loadReport():void{   
    this.reportData = {
      name: this.sub?.name??'',
      questions: this.questions,
      answers : this.questionAnswer
    };
    this.showReport=true;
  }

  hideReport():void{
    this.showReport=false;    
  }
}
