import { Component, OnInit } from '@angular/core';
// ../ means move up a folder since we are in the recipe list folder to get into the recipe file. 
import { Recipe } from '../recipe.model'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //added recipes of array
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a sample recipe','https://hips.hearstapps.com/del.h-cdn.co/assets/17/37/1600x2399/gallery-1505333414-goulash-delish.jpg?resize=768:*' ),
    new Recipe('A test recipe', 'this is a test description','https://hips.hearstapps.com/del.h-cdn.co/assets/17/37/1600x2399/gallery-1505333414-goulash-delish.jpg?resize=768:*' )
  ];


  constructor() { }

  ngOnInit() {
  }

}
