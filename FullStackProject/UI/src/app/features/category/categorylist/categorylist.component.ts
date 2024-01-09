import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/Category';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.css'
})
export class CategorylistComponent implements OnInit{

  categories?:Category[];



  constructor(private categoryService:CategoryService){
   
  }



  ngOnInit(): void {
    this.categoryService.getAllCategory()
    .subscribe({
      next:(response) => {
        this.categories=response;
      }
    });
  }
}
