import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe
  recipeSubscribe:Subscription
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    // this.recipeSubscribe=this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{
    //   this.selectedRecipe=recipe
  //   })
  }
  // ngOnDestroy(){
  //   this.recipeSubscribe.unsubscribe()
  // }


}
