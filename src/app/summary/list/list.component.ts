import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  date: string;
  icon: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  folders: Section[] = [
    {
      name: 'MSc in Economics, 2016',
      date: 'Tohoku University, Japan',
      icon: 'school'
    },
    {
      name: 'BSc in Economics, 2012',
      date: 'Wuhan University, China',
      icon: 'school'
    }
  ];

  notes: Section[] = [
    {
      name: 'Reading',
      date: null,
      icon: 'book'
    },
    {
      name: 'Snowboard',
      date: null,
      icon: 'ac_unit'
    },
    {
      name: 'Coding',
      date: null,
      icon: 'important_devices'
    }
  ];

}
