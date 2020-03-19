import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // recipeSelected=new EventEmitter<Recipe>();
  // recipeSelected=new Subject<Recipe>();
  recipesChanged= new Subject<Recipe[]>()
  private recipes: Recipe[] = [
    // new Recipe('Shahi Paneer', 
    // 'Shahi Paneer is an Indian Dish.',
    // 'https://media.gettyimages.com/photos/paneer-makhani-or-shahi-paneer-indian-food-picture-id670906895?s=612x612',
    //   [
    //     new Ingredient('Cheese',1),
    //     new Ingredient('Onion',2)
    //   ],
    //   ""),
    // new Recipe('Pasta', 
    // 'Pasta is an Italian Dish.',
    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbwBGmOsTRtBLjZMkKyUKnpjG5aUBIu2HLaoHITe2z8e4V5MzF',
    // [
    //   new Ingredient('Penne',1)
    // ],""),
    // new Recipe('Dosa',
    // 'It is a South Indian Dish',
    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQy5cyid61z4rykVOAr4hosa4SKoA64fjK776TSDKCk1ifyr6xH',
    // [
    //   new Ingredient('Rava',1),
    //   new Ingredient('Potato',3)
    // ],"")
  ]
  constructor(private shoppingListService:ShoppingListService) { }

  setRecipes(recipes:Recipe[]){
    this.recipes=recipes
    this.recipesChanged.next(this.recipes.slice())
  }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index:number){
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addIngredients(ingredients)
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice())
  }
  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index]=newRecipe
    this.recipesChanged.next(this.recipes.slice())
  }
  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice())
  }
}