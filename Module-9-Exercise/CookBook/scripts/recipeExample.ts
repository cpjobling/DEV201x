﻿//FROM MODULE 7&8:
//Modify the class below so that it implements the IExample interface
//and the constructor accepts a parameter typed as IExample.

class Example {
    name: string;
    ingredients: Ingredient[] = [];
    prepTime: string; 

    constructor(example: IExample) {
        this.name = example.name;
        this.ingredients = example.ingredients;
        this.prepTime = example.prepTime;
    }             
}


