import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnDestroy {

  model :AddCategoryRequest;
  private addCategorySubscribtion?:Subscription;

  constructor(private categoryService:CategoryService){
    this.model={
    name:'',
    urlHandle:''
    };
  }
 
  onFormSubmit(){
    this.addCategorySubscribtion=this.categoryService.addCategory(this.model)
    .subscribe({
      next:(response) => {
        console.log('This was successful!');
      }
      
    })
      
  }
  ngOnDestroy(): void {
    this.addCategorySubscribtion?.unsubscribe();
  }
}


/*AddCategoryComponent, 
kullanıcıdan alınan kategori bilgilerini kullanarak kategori eklemek için kullanılan bir Angular bileşenidir.*/


/* onFormSubmit fonksiyonu, formun gönderilmesi durumunda CategoryService kullanarak kategori eklemeyi başlatır.*/

/* ngOnDestroy lifecycle hook'u, bileşenin ömrü sona erdiğinde
,addCategorySubscribtion aboneliğini unsubscribe etmek için kullanılır. */

/*AddCategoryComponent bileşeni ise kullanıcıdan alınan bilgileri kullanarak bu servisi çağırır ve kategori eklemeyi başlatır. 
ngOnDestroy hook'u, bileşenin ömrü sona erdiğinde aboneliği temizlemek için kullanılır.*/