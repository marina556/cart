import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() items;
  @Output() newItemEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: number): void{
    this.newItemEvent.emit(value);
  }

}
