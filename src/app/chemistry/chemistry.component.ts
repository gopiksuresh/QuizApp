import { Component, OnInit } from '@angular/core';
import { Questions, SubjectData } from '../_models/questions';

@Component({
  selector: 'app-chemistry',
  templateUrl: './chemistry.component.html',
  styleUrls: ['./chemistry.component.css']
})
export class ChemistryComponent implements OnInit {
  quesions:Questions[];
  subData:SubjectData;

  constructor() {
    this.quesions=getQuestions();
    this.subData = {id: 1, name: 'Chemistry', questions: this.quesions};
   }

  ngOnInit(): void {
  }
}

function getQuestions(): Questions[] {
  let quesions:Questions[]=[];

  quesions.push({no:1, questionText:'Which of the following compounds is heterocyclic?', correctAnswer: 2, options:[{value:1,text:'Thiophane'},{value:2,text:'Pyridine'}]});
  quesions.push({no:2, questionText:'pH is an abbreviation for?', correctAnswer: 2, options:[{value:1,text:'Possibility of Hydrogen'},{value:2,text:'Power of Hydrogen'}]});
  quesions.push({no:3, questionText:'The official IUPAC name of Valerie acid is:', correctAnswer: 2, options:[{value:1,text:' Butanoic acid'},{value:2,text:'Pentanoic acid'}]});
  quesions.push({no:4, questionText:'The most abundant constituent in Air is', correctAnswer: 2, options:[{value:1,text:'Oxygen'},{value:2,text:'Nitrogen'}]});
  quesions.push({no:5, questionText:'Isotopes are atoms of the same element with different numbers of', correctAnswer: 2, options:[{value:1,text:'Electrons'},{value:2,text:' Neutrons'}]});

  return quesions;
}

