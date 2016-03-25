import { Component } from 'angular2/core';
import { Food } from './food.model';
import {FoodListComponent} from './food-list.component';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
  <div class="container">
      <h1>Food Log</h1>
      <food-list [foodList] = "food"></food-list>
  </div>
    `
})

export class AppComponent {
  public food: Food[];
  constructor() {
    this.food = [];
  }
}
