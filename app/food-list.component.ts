import { Component } from 'angular2/core';
import {Food} from './food.model';
import {FoodComponent} from './food.component';
import {NewFoodComponent} from './new-food.component';
import {CaloriesPipe} from './calories.pipe';

@Component({
  selector: 'food-list',
  directives: [FoodComponent, NewFoodComponent],
  pipes: [CaloriesPipe],
  inputs: ['foodList'],
  template: `
    <new-food (onSubmitNewFood)="createFood($event)"></new-food>
    <select (change)="onChange($event.target.value)" class="form-control" id="dropdown">
      <option value="All Foods" selected="selected">All Foods</option>
      <option value="Healthy Foods">Healthy Foods</option>
      <option value="Unhealthy Foods">Unhealthy Foods</option>
    </select>
    <hr>
    <div *ngFor="#currentFood of foodList | calories: filterCalories">
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
  public filterCalories: string = "All Foods"
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
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
}
