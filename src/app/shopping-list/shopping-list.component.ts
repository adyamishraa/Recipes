import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[];
  private igChanged:Subscription

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppingListService.getIngredients();
    this.igChanged=this.shoppingListService.subscription
    .subscribe((ingredients:Ingredient[])=>{
      this.ingredients=ingredients
    })
  }
  ngOnDestroy(){
    this.igChanged.unsubscribe()
  }
  onEditItem(id){
    this.shoppingListService.startedEditing.next(id)
  }
 
}
