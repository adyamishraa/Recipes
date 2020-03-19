import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, Form } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false; //creating new
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,private router:Router ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      // console.log(this.editMode);
      this.initForm();
    })
  }
  private initForm() {
    let recipeName = '';
    let imgPath = '';
    let description = '';
    let recipeIngredients = new FormArray([]);
    let optional='';
    if (this.editMode) {
      let recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name
      imgPath = recipe.imagePath
      description = recipe.description
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required, Validators.pattern(/[1-9]+[0-9]*$/)])
            })
          )
        }
      }
      optional=recipe.optional
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required]),
      'description': new FormControl(description, Validators.required),
      'imagePath': new FormControl(imgPath, Validators.required),
      'ingredients': recipeIngredients,
      'optional':new FormControl(optional)
    })
  }
  onCut(index:number){
    this.ingredients.removeAt(index);
    
  }
  onAddIngredients() {
    this.ingredients.push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[
          Validators.required,Validators.pattern(/[1-9]+[0-9]*$/)]),
      })
    )
  }
  onSubmit() {
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value)
    }
    else{
      this.recipeService.addRecipe(this.recipeForm.value)
    }
    this.router.navigate(['../'],{relativeTo:this.route})
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route})
  }
  get ingredients() {
    return <FormArray>this.recipeForm.get('ingredients') as FormArray;
  }
}
