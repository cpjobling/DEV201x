﻿var recipeCategories: RecipeCategories;
var renderer = null;

window.onload = () => {
    var categoriesSelect = (<HTMLSelectElement> document.getElementById('RecipeCategory'));

    categoriesSelect.onchange = () => {
      loadRecipes();
    }

    var loader: RecipeLoader = new RecipeLoader('/JSON/recipeTypes.json');
    loader.load();

    renderer = new Renderer();
};

function loadRecipes() {
    var el = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
    try {
        var category = recipeCategories.items
            //Find selected item by name
            .filter(item => item.name === el.value)
            //return the item
            .reduce(item => new RecipeCategory(
              el.value,
              item.foodGroups,
              item.description,
              item.examples
            ));
        renderer.renderCategory(category);
    }
    catch (ex) { alert(ex.message) }
}
