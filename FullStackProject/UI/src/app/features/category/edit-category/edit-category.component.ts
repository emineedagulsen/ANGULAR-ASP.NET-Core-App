import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/Category';
import { UpdateCategoryRequest } from '../models/update-category-request.model';
import { Router } from '@angular/router'; // Router'ı ekleyin

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']  // styleUrl değil, styleUrls
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramsSubscription?: Subscription;
  category?: Category;
  model? :UpdateCategoryRequest;
  private UpdateCategorySubscribtion?:Subscription;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService
    ,private router:Router) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if (this.id) {
          // Servisten bu kategori ID'sine ait veriyi al
          this.categoryService.getCategoryById(this.id)
            .subscribe({
              next: (response) => {
                this.category = response;
              }
            });
        }
      }
    });
  }

  onFormSubmit():void{
   const UpdateCategoryRequest:UpdateCategoryRequest={
    name:this.category?.name ?? '' ,
    urlHandle:this.category?.urlHandle ?? '' ,
   }
    if(this.id){
      this.UpdateCategorySubscribtion=this.categoryService.updateCategory(this.id,UpdateCategoryRequest)
      .subscribe({
        next:(response)=>{
            this.router.navigateByUrl('/admin/categories');
        }
      })
    }
  }
  onDelete():void{
    if(this.id){
      this.categoryService.deleteCategoryById(this.id)
      .subscribe({
        next:(response) =>{
          this.router.navigateByUrl('/admin/categories');
        }
      })

    }

  }
  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.UpdateCategorySubscribtion?.unsubscribe();
  }

}
