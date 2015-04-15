function loadRecipes() {
    var el = document.getElementById('RecipeType');
    try {
        var result = recipes.recipeItems.filter(function (i) {
            return i.recipeItemName === el.value;
        }).map(function (i) {
            return ({
                rType: i.recipeItemClasses
            });
        });
    }
    catch (ex) {
        return;
    }
    var classList = document.getElementById('RecipeClass');
    var len = result[0].rType.length;
    classList.value = "";
    for (var i = 0; i < len; i++) {
        classList.value = classList.value + result[0].rType[i].recipeType;
        classList.value = ((i + 1 == len) ? classList.value : classList.value + "\n");
    }
}
