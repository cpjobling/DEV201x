
//class logic
class Recipes {
    recipeType: RecipeItemX[];
    constructor(_recipeItems: RecipeItemX[]) {
        this.recipeType = _recipeItems;
    }

    get recipeItem() {
        return this.recipeType;
    }
}

class RecipeItem {
    name: string;
    class: RecipeClass[];

    constructor (recipeTypeName: string, recipeType: RecipeClass[]) {
      this.name = recipeTypeName;
      this.class = recipeType;
    }

}

class RecipeClass {
    type: string;

    //constructor logic goes here:
    constructor(_type: string) {
      this.type = _type;
    }
}

//extend the RecipeItems class
class RecipeItemX  extends RecipeItem{
    //member variables go here
    _recipeItems: RecipeClass[];
    _description: string;

    //create your constructor
    constructor(recipeTypeName: string, recipeType: RecipeClass[], description: string) {
      super(recipeTypeName, recipeType);
      this._recipeItems = this.class; // assigned to super's field rather than parameter 
      this._description = description;
    }

    //create a get block for the description field
    get description () : string {
      return this._description;
    }

    //create a get block for the RecipeClass object
    get recipeItems () : RecipeClass[] {
      return this._recipeItems;
    }


}
