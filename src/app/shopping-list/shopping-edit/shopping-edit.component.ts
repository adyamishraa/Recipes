import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f',{static:false}) shoppingListForm:NgForm
  subscription:Subscription
  editMode=false;
  editedItemIndex:number
  editedItem:Ingredient
  // @ViewChild('inputName', { static: false }) nameRef: ElementRef;
  // @ViewChild('inputAmount', { static: false }) amountRef: ElementRef;
  // @Output() ingredientAdded=new EventEmitter<Ingredient>();
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() { 
    this.subscription=this.shoppingListService.startedEditing.subscribe((id)=>{
      this.editedItemIndex=id
      this.editMode=true;
      this.editedItem=this.shoppingListService.getIngredient(id)
      this.shoppingListForm.setValue({
        name:this.editedItem.name,
        amount:this.editedItem.amount
      })
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
  onAdd() {
    // const nameIngredient = this.nameRef.nativeElement.value;
    // const amountIngredient = this.amountRef.nativeElement.value;
    // const newIngredient = new Ingredient(nameIngredient, amountIngredient);
    // this.ingredientAdded.emit(newIngredient)
    // this.shoppingListService.addIngredient(newIngredient);
  }
  onSubmit(form){
    const value=form.value;
    const newIngredient=new Ingredient(value.name,value.amount);
    if(this.editMode==true){
    this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient);
    } else{
    this.shoppingListService.addIngredient(newIngredient);
  }
  // this.shoppingListForm.setValue({
  //   name:'',
  //   amount:''
  // })
  this.editMode=false;
  this.shoppingListForm.reset()
  }
  onDelete(){
      this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  onClear(){
    this.shoppingListForm.reset();
    this.editMode=false;
  }
}
