import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  // @Output() recipeSelected=new EventEmitter<void>();
  @Input() index:number;
  constructor() { }

  ngOnInit() {
  }
  // onSelect(){
  //   // this.recipeSelected.emit()
  //   this.recipeService.recipeSelected.emit(this.recipe); 

  // }

}
