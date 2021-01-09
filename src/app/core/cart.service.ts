import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = 0;
  cards = [
    {
      id: 0,
      img: 'assets/images/1.jpg',
      title: 'card 1',
      text: 'Some quick example.',
      btn: 'add to cart',
    },
    {
      id: 1,
      img: 'assets/images/2.jpg',
      title: 'card 2',
      text: 'Some quick example.',
      btn: 'add to cart',
    },
    {
      id: 2,
      img: 'assets/images/3.jpg',
      title: 'card 3',
      text: 'Some quick example.',
      btn: 'add to cart',
    },
    {
      id: 3,
      img: 'assets/images/4.jpg',
      title: 'card 4',
      text: 'Some quick example.',
      btn: 'add to cart',
    },
  ];

  constructor() {
  }

  addToCart(i: number): void {
    const ele = this.cards.find(e => e.id === i);
    if (ele.btn === 'add to cart') {
      ele.btn = 'remove from cart';
      this.cart = this.cart + 1;
    } else if (ele.btn === 'remove from cart') {
      ele.btn = 'add to cart';
      this.cart = this.cart - 1;
    }
  }
}
