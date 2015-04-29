var recipeCategories;
var renderer = null;
window.onload = function () {
    var categoriesSelect = document.getElementById('RecipeCategory');
    categoriesSelect.onchange = function () {
        loadRecipes();
    };
    var loader = new RecipeLoader('/JSON/recipeTypes.json');
    loader.load();
    renderer = new Renderer();
};
function loadRecipes() {
    var el = document.getElementById('RecipeCategory');
    try {
        var category = recipeCategories.items.filter(function (item) { return item.name === el.value; }).reduce(function (item) { return new RecipeCategory(el.value, item.foodGroups, item.description, item.examples); });
        renderer.renderCategory(category);
    }
    catch (ex) {
        alert(ex.message);
    }
}

//# sourceMappingURL=initializer.js.map