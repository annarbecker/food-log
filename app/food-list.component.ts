import { Component } from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  template: `
    <div *ngFor="#currentFood of foodList">
      <h3 class="foodListItem"
        (click)="foodClicked(currentFood)">&lowast;
        {{ currentFood.name }}
      </h3>
    </div>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public selectedFood: Food;
  constructor() {}
  foodClicked(clickedFood: Food): void {
    if(this.selectedFood === clickedFood) {
      this.selectedFood = undefined;
    } else {
      this.selectedFood = clickedFood;
    }
  }
}
