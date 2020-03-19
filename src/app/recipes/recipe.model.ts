import{Ingredient} from '../shared/ingredient.model'

export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:Ingredient[]
    public optional:string
    constructor(name:string,description:string,imagePath:string,ingredients:Ingredient[],optional:string){
        this.name=name;
        this.description=description;
        this.imagePath=imagePath;
        this.ingredients=ingredients;
        this.optional=optional
    }
}