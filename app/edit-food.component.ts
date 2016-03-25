import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component ({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
  <div class="food-form">
    <input [(ngModel)]="food.name" class="form-control"/>
    <input [(ngModel)]="food.description" class="form-control"/>
    <input [(ngModel)]="food.calories" type="number" class="form-control"/>
    <button class="btn btn-default">Update Calorie Count</button>
  </div>
  `
})

export class EditFoodComponent {
  public food: Food;
}
