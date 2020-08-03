import { Component, OnInit, Input } from '@angular/core';

export interface Item {
  id: number, 
  name: string,
  imgURL: string,
  link: string,
  content: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  item: Item

}
