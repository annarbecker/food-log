import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: 'calories',
  pure: true
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Food[], args){
    var desiredCalorieQuantity = args[0];
    if(desiredCalorieQuantity === "Healthy Foods") {
      return input.filter((food) => {
        return food.calories <= 300;
      });
    } else if (desiredCalorieQuantity === "Unhealthy Foods") {
      return input.filter((food) => {
        return food.calories > 300;
      });
    } else {
      return input;
    }
  }
}
