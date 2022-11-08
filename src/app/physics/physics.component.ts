import { Component, OnInit } from '@angular/core';
import { Questions, SelectedAnswer, SubjectData } from '../_models/questions';

@Component({
  selector: 'app-physics',
  templateUrl: './physics.component.html',
  styleUrls: ['./physics.component.css']
})
export class PhysicsComponent implements OnInit {

  quesions:Questions[];
  subData:SubjectData;

  constructor() {
    this.quesions=getQuestions();
    this.subData = {id: 1, name: 'Physics', questions: this.quesions};

  }

  ngOnInit(): void {
  }

}

function getQuestions(): Questions[] {
  let quesions:Questions[]=[];

  quesions.push({no:1, questionText:'The theory of relativity presented by whom?', correctAnswer: 1, options:[{value:1,text:' Albert Einsteen'},{value:2,text:'Stephen Hawking'}]});
  quesions.push({no:2, questionText:'What type of lens used in magnifying glass?', correctAnswer: 1, options:[{value:1,text:'Convex'},{value:2,text:'Concave'}]});
  quesions.push({no:3, questionText:'Total number of colour exist in sunlight', correctAnswer: 1, options:[{value:1,text:'Seven'},{value:2,text:'Five'}]});
  quesions.push({no:4, questionText:'Which one among the following radiations carries maximum energy?', correctAnswer: 1, options:[{value:1,text:'gamma rays'},{value:2,text:'infra red rays'}]});
  quesions.push({no:5, questionText:'Which one of the following remains constant while throwing a ball upward?', correctAnswer: 1, options:[{value:1,text:'acceleration'},{value:2,text:' displacement'}]});

  return quesions;
}

