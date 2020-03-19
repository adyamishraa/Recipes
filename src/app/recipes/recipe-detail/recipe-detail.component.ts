import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
//  @Input() recipe:Recipe
recipe:Recipe
// recipes:Observable<Recipe[]>;
// recipes:Recipe[]=[];
id:number

  constructor(private recipeService:RecipeService, 
    private route:ActivatedRoute, private router:Router,
    private dataStorageService:DataStorageService
    ) { 

  }


  async ngOnInit() {
    // this.id = +this.route.snapshot.paramMap.get('id')
    // console.log(this.id);
    let recipes=await this.dataStorageService.fetchRecipes().toPromise();
    
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.recipe=recipes[this.id];
      // this.recipe=this.recipeService.getRecipe(this.id);
    })



    // this.recipes.subscribe((recipe)=>{
    //   this.id=+this.route.params['id'];
    //   this.recipe=this.recipeService.getRecipe(this.id)
    // })
    // this.dataStorageService.fetchRecipes().subscribe(()=>{
    //   this.recipe=this.recipeService.getRecipe(this.id)
    // })

    
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['../'],{relativeTo:this.route})
  }
}
