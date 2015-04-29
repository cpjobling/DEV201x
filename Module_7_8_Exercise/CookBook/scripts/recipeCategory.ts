
class RecipeCategory extends BaseRecipeCategory implements IRecipeCategory {
  constructor (name: string, foodGroups: FoodGroup[], public description: string, public examples: IExample[]) {
    super(name, foodGroups);
  }
}
