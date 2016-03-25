import {Component} from 'angular2/core';
import {Food} from './food.model';
import {EditFoodComponent} from './edit-food.component';

@Component({
  selector: 'food-display',
  directives: [EditFoodComponent],
  inputs: ['food'],
  template: `
    <p>Description: {{food.description}} </p>
    <p>Calories: {{food.calories}} </p>
    <edit-food [food] = food></edit-food>
  `
})

export class FoodComponent {
  public food: Food;
}
