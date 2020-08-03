import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  techInfo = [
    {
      id: 0,
      category: "Front-End",
      item:[
        {id: 0, name: "React", content: "AAAA"},
        {id: 1, name: "WeChat Mini Program", content: "AAAA"},
        {id: 2, name: "Angular", content: "AAAA"}
      ]
    },
    {
      id: 1,
      category: "Back-End",
      item:[
        {id: 0, name: "React", content: "AAAA"},
        {id: 1, name: "WeChat Mini Program", content: "AAAA"},
        {id: 2, name: "Angular", content: "AAAA"}
      ]
    },
    {
      id: 2,
      category: "Mobile",
      item:[
        {id: 0, name: "React", content: "AAAA"},
        {id: 1, name: "WeChat Mini Program", content: "AAAA"},
        {id: 2, name: "Angular", content: "AAAA"}
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
