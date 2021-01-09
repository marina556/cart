import { Component, OnInit } from '@angular/core';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {

  items;

  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
    this.items = this.cartService.cards;
  }

}
