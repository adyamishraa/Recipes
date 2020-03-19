import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe
  recipeSubscribe:Subscription
  constructor(private datatStorageService:DataStorageService) { }


  ngOnInit() {
    this.datatStorageService.fetchRecipes().subscribe();
    // this.recipeSubscribe=this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{
    //   this.selectedRecipe=recipe
  //   })
  }
  // ngOnDestroy(){
  //   this.recipeSubscribe.unsubscribe()
  // }


}
