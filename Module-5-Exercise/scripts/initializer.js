var request = new XMLHttpRequest();
var recipes;
function recipeTypeLoader() {
    var recipeGetter;
    recipes = JSON.parse(request.responseText);
    var rType = document.getElementById('RecipeType');
    recipeGetter = new RecipeType(rType);
    recipeGetter.LoadRecipeTypes(recipes);
}
window.onload = function () {
    request.onload = recipeTypeLoader;
    request.open("get", "/JSON/recipeTypes.json", true);
    request.send();
};
var RecipeType = (function () {
    function RecipeType(recipeType) {
        this._recipeType = recipeType;
    }
    RecipeType.prototype.LoadRecipeTypes = function (types) {
        for (var i = 0; i < types.recipeType.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = types.recipeType[i].recipeItemName;
            this._recipeType.appendChild(opt);
        }
    };
    return RecipeType;
})();
