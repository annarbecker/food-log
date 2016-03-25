import { Component , EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <hr>
      <h4 class="formLabel">add a new food</h4>
      <div class="food-form">
      <input placeholder="Name" class="form-control" #newName>
      <input placeholder="Description" class="form-control" #newDescription>
      <input type="number" placeholder="Calories" class="form-control" #newCalories>
      <button (click)="addFood(newName, newDescription, newCalories)" class="btn btn-default" id="foodBtn">Add</button>
      </div>
    <br>
  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<any>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement) {
    if(parseInt(userCalories.value) >= 0) {
      var foodArray: Array<any> = [userName.value, userDescription.value, parseInt(userCalories.value)];
      this.onSubmitNewFood.emit(foodArray);
      userName.value = "";
      userDescription.value = "";
      userCalories.value = "";
    }
  }
}
