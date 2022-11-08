import { Component, OnInit } from '@angular/core';
import { Questions, SubjectData } from '../_models/questions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor() { }

  ngOnInit(): void {
        
  }
  
}
