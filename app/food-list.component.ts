import { Component } from 'angular2/core';
import {Food} from './food.model';
import {FoodComponent} from './food.component';
import {NewFoodComponent} from './new-food.component';
import {CaloriesPipe} from './calories.pipe';
import {EditFoodComponent} from './edit-food.component';

@Component({
  selector: 'food-list',
  directives: [FoodComponent, NewFoodComponent, EditFoodComponent],
  pipes: [CaloriesPipe],
  inputs: ['foodList'],
  template: `
    <h4 >Calorie Count: {{calorieCount}} | Average Calorie Count: {{averageCalories}}</h4>
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
      <edit-food *ngIf="currentFood === selectedFood" [food] = "currentFood" (onUpdateCalories)="updateCalCount($event)"></edit-food>
    </div>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public selectedFood: Food;
  public calorieCount: number = 0;
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
    this.calorieCount += parseInt(foodArray[2]);
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
  updateCalCount(newCal: number): void {
    this.calorieCount = 0;
    for(var i = 0; i < this.foodList.length; i++) {
      if(this.foodList[i].name === "selectedFood"){
        this.foodList[i].calories = newCal;
      }
      this.calorieCount += (this.foodList[i].calories);
      console.log(this.foodList[i].calories);
      console.log(this.calorieCount);
    }
  }
}
