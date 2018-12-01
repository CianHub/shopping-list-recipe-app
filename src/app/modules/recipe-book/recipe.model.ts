export class Recipe {
  // Model properties
  public name: string;
  public description: string;
  public imagePath: string;

  // Model constructor, these properties need to be set to create a recipe
  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
