import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  text: string = "Teki is a software engineer living in Tokyo. " + 
  "He has knowledge of Java, Swift and network programming. " +
  "In his spare time, he created a few applications and scripts. " +
  "He is also sharing videos teaching how to solve algorithm problems. " +
  "Teki also loves Apple, MUJI and Hearth Stone. " +
  "He is always keeping to learn new tech. "

  constructor() { }

  ngOnInit(): void {
  }

}
