import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorylistComponent } from './features/category/categorylist/categorylist.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';

const routes: Routes = [
  {
    //dmin/categories route u categorylistcomponente gitsin
    path:'admin/categories',
    component:CategorylistComponent
  },
  {
    path:'admin/categories/add',
    component:AddCategoryComponent
  },
  {
    path:'admin/categories/:id',
    component:EditCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
