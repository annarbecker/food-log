import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
    <p>Description: {{food.description}} </p>
    <p>Calories: {{food.calories}} </p>
  `
})

export class FoodComponent {
  public food: Food;
}
