var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RecipeCategory = (function (_super) {
    __extends(RecipeCategory, _super);
    function RecipeCategory(name, foodGroups, description, examples) {
        _super.call(this, name, foodGroups);
        this.description = description;
        this.examples = examples;
    }
    return RecipeCategory;
})(BaseRecipeCategory);

//# sourceMappingURL=recipeCategory.js.map