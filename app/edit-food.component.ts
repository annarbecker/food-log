import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component ({
  selector: 'edit-food',
  inputs: ['food'],
  outputs: ['onUpdateCalories'],
  template: `
  <div class="food-form">
    <input [(ngModel)]="food.name" class="form-control"/>
    <input [(ngModel)]="food.description" class="form-control"/>
    <input [(ngModel)]="food.calories" type="number" class="form-control" #newCalories>
    <button (click)="updateCalories(newCalories)" class="btn btn-default">Update Calorie Count</button>
  </div>
  `
})

export class EditFoodComponent {
  public food: Food;
  public onUpdateCalories: EventEmitter<number>;
  constructor() {
    this.onUpdateCalories = new EventEmitter();
  }
  updateCalories(userCalories: HTMLInputElement): void {
    var newCal: number = parseInt(userCalories.value);
    this.onUpdateCalories.emit(newCal);
  }
}
