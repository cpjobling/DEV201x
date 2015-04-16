
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

    //TODO: Write the constructor logic for this class. You can replace the get/set logic you created in the Module 5 exercise with the constructor. 
    //use "recipeTypeName" for the "name" parameter, and "recipeType" for the "class" parameter of the constructor. 

  
}

//FROM MODULE 5: Create a class called "RecipeClass" that includes a single member variable named "type" which has a "string" type declaration. 

//TODO: Replace the get/set logic you created for Module 5 with constructor logic. Use "_type" as the parameter for the "type" variable in the constructor
class RecipeClass {
    //member variable goes here:
    

    //constructor logic goes here:


}

//TODO: You're going to create a create a subclass for the RecipeItem class called "RecipeItemX". You'll notice that this referenced in the Recipes class already
//1. In this class, you'll need to extend the RecipeItem class and create the correct 'super' method. HINT: the RecipeClass object needs to hold more than a single value.
//2. Then create two member variables: one called '_recipeItems' to store the RecipeClass object and another called '_description" to store the description value.
//3. Then create the constructor. HINT: you'll have to match the signature of the RecipeItem class and then extend it for the description field.
//4. Finally, create two get blocks to return the description value and RecipeClass object to any calling method. 

//extend the RecipeItems class
class RecipeItemX  {
    //member variables go here


    //create your constructor
    constructor() {
        
    }

    //create a get block for the description field
    get 

    //create a get block for the RecipeClass object 
    get 


}