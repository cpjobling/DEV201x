// I made fields private so calling code has to use the properties
var Recipes = (function () {
    function Recipes() {
    }
    Object.defineProperty(Recipes.prototype, "recipeItem", {
        get: function () {
            return this.recipeType;
        },
        set: function (_recipeItem) {
            this.recipeType = _recipeItem;
        },
        enumerable: true,
        configurable: true
    });
    return Recipes;
})();
var RecipeItem = (function () {
    function RecipeItem() {
    }
    Object.defineProperty(RecipeItem.prototype, "recipeItemNames", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecipeItem.prototype, "recipeItemName", {
        set: function (recipeTypeName) {
            this.name = recipeTypeName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecipeItem.prototype, "recipeItemClass", {
        get: function () {
            return this.class;
        },
        set: function (recipeItemClass) {
            this.class = recipeItemClass;
        },
        enumerable: true,
        configurable: true
    });
    return RecipeItem;
})();
var RecipeClass = (function () {
    function RecipeClass() {
    }
    Object.defineProperty(RecipeClass.prototype, "recipeType", {
        get: function () {
            return this.type;
        },
        set: function (_type) {
            this.type = _type;
        },
        enumerable: true,
        configurable: true
    });
    return RecipeClass;
})();
