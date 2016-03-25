import { Component } from 'angular2/core';
import {Food} from './food.model';
import {FoodComponent} from "./food.component";
import {NewFoodComponent} from "./new-food.component";

@Component({
  selector: 'food-list',
  directives: [FoodComponent, NewFoodComponent],
  inputs: ['foodList'],
  template: `
    <new-food (onSubmitNewFood)="createFood($event)"></new-food>
    <div *ngFor="#currentFood of foodList">
      <h3 class="foodListItem"
        (click)="foodClicked(currentFood)">&lowast;
        {{ currentFood.name }}
      </h3>
      <food-display *ngIf="currentFood === selectedFood" [food] = "currentFood"></food-display>
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
  createFood(foodArray: Array<any>): void {
    this.foodList.push (
      new Food(foodArray[0], foodArray[1], foodArray[2], this.foodList.length)
    );
  }
}
