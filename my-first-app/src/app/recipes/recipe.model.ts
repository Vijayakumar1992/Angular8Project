export class Recipe {
    //assign name and the type
    public name: string;
    public description: string;
    public imagePath: string;

    //through this contructor we can instantiate this with the new key word and pass the argument
    constructor(name: string, desc: string, imagePath: string) {

    // assign the argument received in the constructor
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    }



}
