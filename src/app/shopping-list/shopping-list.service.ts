import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  // ingredientsChanged=new EventEmitter<Ingredient[]>();
  subscription=new Subject<Ingredient[]>();
  startedEditing=new Subject<number>();
 private ingredients:Ingredient[]=[
    new Ingredient("Apples",2),
    new Ingredient("Tomatoes",3)
  ];
  constructor() { }
  getIngredient(id){
    return this.ingredients[id]
  }
  getIngredients(){
    return this.ingredients.slice()
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient) //what's happening neeche?
    this.subscription.next(this.ingredients.slice());
  }
  updateIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index]=newIngredient;
    this.subscription.next(this.ingredients.slice())
  }
  deleteIngredient(index){
    this.ingredients.splice(index,1)
    this.subscription.next(this.ingredients.slice())
  }
  addIngredients(ingredients:Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.subscription.next(this.ingredients.slice())
  }
}
