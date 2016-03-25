import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
      <h1>Food Log</h1>
  </div>
    `
})

export class AppComponent {
  public food: Food[];
  constructor() {
    this.food = [
      new Food("Pizza", "cheese with tomatoes", 400, 0),
      new Food("Salad", "spinach and strawberry", 150, 1),
      new Food("Chocolate", "dark chocolate square", 49, 2),
      new Food("Sandwich", "avocado and turkey", 300, 2),
      new Food("Eggs", "scrambled", 301, 3)
    ];
  }
}
